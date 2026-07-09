"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Comment,
  resolveComment,
  unresolveComment,
  deleteComment,
  addReply,
} from "@/lib/comments";

interface CommentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  comments: Comment[];
  currentPage: string;
  onNavigateToComment: (comment: Comment) => void;
  onRefresh: () => void;
  activeCommentId?: string | null;
}

export function CommentSidebar({
  isOpen,
  onClose,
  comments,
  currentPage,
  onNavigateToComment,
  onRefresh,
  activeCommentId,
}: CommentSidebarProps) {
  const router = useRouter();
  const [filter, setFilter] = useState<"all" | "open" | "resolved">("all");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState("");
  const [replyAuthor, setReplyAuthor] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("nymbus-comment-author") || "";
    }
    return "";
  });

  // Auto-scroll to active comment when sidebar opens
  useEffect(() => {
    if (isOpen && activeCommentId) {
      setTimeout(() => {
        const el = document.getElementById(`sidebar-comment-${activeCommentId}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 150);
    }
  }, [isOpen, activeCommentId]);

  // Group comments by page
  const grouped = comments.reduce<Record<string, Comment[]>>((acc, c) => {
    if (!acc[c.page]) acc[c.page] = [];
    acc[c.page].push(c);
    return acc;
  }, {});

  // Apply filter
  const filteredGrouped = Object.entries(grouped).reduce<Record<string, Comment[]>>(
    (acc, [page, pageComments]) => {
      const filtered = pageComments.filter((c) => {
        if (filter === "open") return !c.resolved;
        if (filter === "resolved") return c.resolved;
        return true;
      });
      if (filtered.length > 0) acc[page] = filtered;
      return acc;
    },
    {}
  );

  function handleGoToComment(comment: Comment) {
    if (comment.page !== currentPage) {
      router.push(comment.page + `#comment-${comment.id}`);
    } else {
      onNavigateToComment(comment);
    }
  }

  async function handleReplySubmit(commentId: string) {
    if (!replyText.trim()) return;
    const author = replyAuthor.trim() || "Anonymous";
    localStorage.setItem("nymbus-comment-author", author);
    await addReply(commentId, { author, text: replyText.trim() });
    setReplyText("");
    setReplyingTo(null);
    onRefresh();
  }

  async function handleResolve(commentId: string) {
    await resolveComment(commentId);
    onRefresh();
  }

  async function handleUnresolve(commentId: string) {
    await unresolveComment(commentId);
    onRefresh();
  }

  async function handleDelete(commentId: string) {
    await deleteComment(commentId);
    onRefresh();
  }

  function formatTime(iso: string) {
    const d = new Date(iso);
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    if (diffMins < 1) return "just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  }

  const pageLabel = (path: string) => {
    if (path === "/") return "Homepage";
    return path.replace(/^\//, "").replace(/\/$/, "").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const totalOpen = comments.filter((c) => !c.resolved).length;
  const totalResolved = comments.filter((c) => c.resolved).length;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-[10000] backdrop-blur-[2px]"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[380px] max-w-[90vw] bg-white z-[10001]
          shadow-2xl border-l border-neutral-200
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          flex flex-col
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-100">
          <div>
            <h2 className="text-base font-bold text-neutral-900">Comments</h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              {totalOpen} open · {totalResolved} resolved
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors text-neutral-500"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-1 px-5 py-3 border-b border-neutral-100">
          {(["all", "open", "resolved"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`
                text-xs font-medium px-3 py-1.5 rounded-full capitalize transition-colors
                ${filter === f
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }
              `}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Comment list */}
        <div className="flex-1 overflow-y-auto">
          {Object.keys(filteredGrouped).length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center px-8">
              <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
              </div>
              <p className="text-sm font-medium text-neutral-600">No comments yet</p>
              <p className="text-xs text-neutral-400 mt-1">Click anywhere on the page to leave feedback</p>
            </div>
          )}

          {Object.entries(filteredGrouped).map(([page, pageComments]) => (
            <div key={page} className="border-b border-neutral-100 last:border-b-0">
              {/* Page group header */}
              <div className="px-5 py-2.5 bg-neutral-50 sticky top-0 z-10">
                <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                  {pageLabel(page)}
                </span>
                {page !== currentPage && (
                  <span className="ml-2 text-[10px] text-neutral-400">
                    (other page)
                  </span>
                )}
              </div>

              {/* Comments in this page */}
              {pageComments
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .map((comment) => (
                  <div
                    key={comment.id}
                    id={`sidebar-comment-${comment.id}`}
                    className={`px-5 py-3 hover:bg-blue-50/50 transition-colors cursor-pointer border-b border-neutral-50 last:border-b-0 ${
                      comment.resolved ? "opacity-60" : ""
                    } ${activeCommentId === comment.id ? "bg-blue-50 ring-1 ring-blue-200" : ""}`}
                    onClick={() => handleGoToComment(comment)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Avatar circle */}
                      <div className={`
                        w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-bold text-white
                        ${comment.resolved ? "bg-green-500" : "bg-blue-600"}
                      `}>
                        {comment.author.charAt(0).toUpperCase()}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-neutral-900 truncate">
                            {comment.author}
                          </span>
                          <span className="text-[11px] text-neutral-400 flex-shrink-0">
                            {formatTime(comment.createdAt)}
                          </span>
                          {comment.resolved && (
                            <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full font-medium">
                              Resolved
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-neutral-700 mt-0.5 leading-relaxed">
                          {comment.text}
                        </p>

                        {/* Replies */}
                        {comment.replies.length > 0 && (
                          <div className="mt-2 pl-3 border-l-2 border-neutral-200 space-y-2">
                            {comment.replies.map((reply) => (
                              <div key={reply.id}>
                                <div className="flex items-center gap-1.5">
                                  <span className="text-xs font-semibold text-neutral-700">{reply.author}</span>
                                  <span className="text-[10px] text-neutral-400">{formatTime(reply.createdAt)}</span>
                                </div>
                                <p className="text-xs text-neutral-600 mt-0.5">{reply.text}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Action buttons */}
                        <div className="flex items-center gap-3 mt-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                            className="text-[11px] text-neutral-500 hover:text-blue-600 font-medium transition-colors"
                          >
                            Reply
                          </button>
                          {!comment.resolved ? (
                            <button
                              onClick={() => handleResolve(comment.id)}
                              className="text-[11px] text-neutral-500 hover:text-green-600 font-medium transition-colors"
                            >
                              Resolve
                            </button>
                          ) : (
                            <button
                              onClick={() => handleUnresolve(comment.id)}
                              className="text-[11px] text-neutral-500 hover:text-orange-600 font-medium transition-colors"
                            >
                              Unresolve
                            </button>
                          )}
                          <button
                            onClick={() => handleDelete(comment.id)}
                            className="text-[11px] text-neutral-500 hover:text-red-600 font-medium transition-colors"
                          >
                            Delete
                          </button>
                        </div>

                        {/* Reply form */}
                        {replyingTo === comment.id && (
                          <div className="mt-2 space-y-2" onClick={(e) => e.stopPropagation()}>
                            <input
                              type="text"
                              placeholder="Your name"
                              value={replyAuthor}
                              onChange={(e) => setReplyAuthor(e.target.value)}
                              className="w-full text-xs px-2.5 py-1.5 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                            />
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Write a reply…"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") handleReplySubmit(comment.id);
                                  if (e.key === "Escape") setReplyingTo(null);
                                }}
                                className="flex-1 text-xs px-2.5 py-1.5 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                                autoFocus
                              />
                              <button
                                onClick={() => handleReplySubmit(comment.id)}
                                className="text-xs font-medium bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
                              >
                                Reply
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
