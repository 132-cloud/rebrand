"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Comment,
  getAllComments,
  getCommentsForPage,
  addComment,
  markAllSeen,
  getUnseenCount,
} from "@/lib/comments";
import { CommentPin } from "./CommentPin";
import { CommentForm } from "./CommentForm";
import { CommentSidebar } from "./CommentSidebar";

export function CommentOverlay() {
  const pathname = usePathname();
  const [commentMode, setCommentMode] = useState(false);
  const [allComments, setAllComments] = useState<Comment[]>([]);
  const [pageComments, setPageComments] = useState<Comment[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComment, setActiveComment] = useState<string | null>(null);
  const [unseenCount, setUnseenCount] = useState(0);

  // Form state
  const [formPosition, setFormPosition] = useState<{ x: number; y: number } | null>(null);
  const [pendingComment, setPendingComment] = useState<{ x: number; y: number } | null>(null);

  const overlayRef = useRef<HTMLDivElement>(null);

  // Load comments from API and compute unseen count
  const refresh = useCallback(async () => {
    const [all, page] = await Promise.all([
      getAllComments(),
      getCommentsForPage(pathname),
    ]);
    setAllComments(all);
    setPageComments(page);
    const totalOpen = all.filter((c) => !c.resolved).length;
    setUnseenCount(getUnseenCount(totalOpen));
  }, [pathname]);

  useEffect(() => {
    refresh();
    // Listen for local events (optimistic after mutations)
    window.addEventListener("comments-updated", refresh);
    return () => window.removeEventListener("comments-updated", refresh);
  }, [refresh]);

  // Poll for new comments every 10 seconds so you see others' comments
  useEffect(() => {
    const interval = setInterval(refresh, 10000);
    return () => clearInterval(interval);
  }, [refresh]);

  // Handle hash-based navigation (from sidebar clicking a comment on the same page)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith("#comment-")) {
      const id = hash.replace("#comment-", "");
      const comment = pageComments.find((c) => c.id === id);
      if (comment) {
        setTimeout(() => {
          window.scrollTo({ top: comment.y - window.innerHeight / 3, behavior: "smooth" });
          setActiveComment(id);
          window.history.replaceState(null, "", pathname);
        }, 100);
      }
    }
  }, [pathname, pageComments]);

  // Keyboard shortcuts
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.key === "c" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        setCommentMode((prev) => !prev);
      }
      if (e.key === "Escape") {
        setCommentMode(false);
        setFormPosition(null);
        setPendingComment(null);
        setActiveComment(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Handle clicking on the page to place a comment
  function handleOverlayClick(e: React.MouseEvent) {
    if (!commentMode) return;
    if (formPosition) return;

    const xPercent = ((e.clientX) / window.innerWidth) * 100;
    const yAbsolute = e.clientY + window.scrollY;

    setPendingComment({ x: xPercent, y: yAbsolute });

    setFormPosition({
      x: Math.min(e.clientX + 12, window.innerWidth - 300),
      y: Math.min(e.clientY + 12, window.innerHeight - 260),
    });
  }

  async function handleFormSubmit(author: string, text: string) {
    if (!pendingComment) return;
    await addComment({
      page: pathname,
      x: pendingComment.x,
      y: pendingComment.y,
      author,
      text,
    });
    setFormPosition(null);
    setPendingComment(null);
    setCommentMode(false);
    refresh();
  }

  function handleFormCancel() {
    setFormPosition(null);
    setPendingComment(null);
  }

  function handlePinClick(comment: Comment) {
    setActiveComment(activeComment === comment.id ? null : comment.id);
  }

  function handleNavigateToComment(comment: Comment) {
    window.scrollTo({ top: comment.y - window.innerHeight / 3, behavior: "smooth" });
    setActiveComment(comment.id);
    setSidebarOpen(false);
  }

  function handleOpenSidebar() {
    setSidebarOpen(true);
    const totalOpen = allComments.filter((c) => !c.resolved).length;
    markAllSeen(totalOpen);
    setUnseenCount(0);
  }

  return (
    <>
      {/* Comment mode toggle button - fixed bottom-right */}
      <div className="fixed bottom-6 right-6 z-[9998] flex items-center gap-3">
        {/* Sidebar toggle */}
        <button
          onClick={handleOpenSidebar}
          className="relative w-11 h-11 rounded-full bg-white shadow-lg border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-all hover:scale-105"
          title="View all comments"
        >
          <svg className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
          </svg>
          {unseenCount > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {unseenCount > 9 ? "9+" : unseenCount}
            </span>
          )}
        </button>

        {/* Comment mode toggle */}
        <button
          onClick={() => setCommentMode(!commentMode)}
          className={`
            w-11 h-11 rounded-full shadow-lg border flex items-center justify-center transition-all hover:scale-105
            ${commentMode
              ? "bg-blue-600 border-blue-700 text-white ring-4 ring-blue-600/30"
              : "bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-50"
            }
          `}
          title={commentMode ? "Exit comment mode (Esc)" : "Enter comment mode (C)"}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

      {/* Comment mode indicator */}
      {commentMode && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[9999] bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          Click anywhere to leave a comment
          <button
            onClick={() => setCommentMode(false)}
            className="ml-2 text-white/70 hover:text-white text-xs"
          >
            (Esc)
          </button>
        </div>
      )}

      {/* Click overlay when in comment mode */}
      {commentMode && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-[9990] cursor-crosshair"
          onClick={handleOverlayClick}
        />
      )}

      {/* Render pins for current page */}
      {pageComments.map((comment, idx) => (
        <CommentPin
          key={comment.id}
          comment={comment}
          index={idx}
          isActive={activeComment === comment.id}
          onClick={handlePinClick}
        />
      ))}

      {/* Comment form popover */}
      {formPosition && (
        <CommentForm
          position={formPosition}
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
        />
      )}

      {/* Sidebar */}
      <CommentSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        comments={allComments}
        currentPage={pathname}
        onNavigateToComment={handleNavigateToComment}
        onRefresh={refresh}
      />
    </>
  );
}
