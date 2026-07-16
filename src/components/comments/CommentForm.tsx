"use client";

import { useState, useRef, useEffect } from "react";

interface CommentFormProps {
  /** Position in viewport-relative px for the popover */
  position: { x: number; y: number };
  onSubmit: (author: string, text: string) => void;
  onCancel: () => void;
}

export function CommentForm({ position, onSubmit, onCancel }: CommentFormProps) {
  const [author, setAuthor] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("nymbus-comment-author") || "";
    }
    return "";
  });
  const [text, setText] = useState("");
  const formRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus the textarea on mount
    textRef.current?.focus();
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        onCancel();
      }
    }
    // Delay listener so the opening click doesn't immediately close it
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handleClick);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClick);
    };
  }, [onCancel]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!text.trim()) return;
    const finalAuthor = author.trim() || "Anonymous";
    localStorage.setItem("nymbus-comment-author", finalAuthor);
    onSubmit(finalAuthor, text.trim());
  }

  return (
    <div
      ref={formRef}
      className="fixed z-[10001] bg-white rounded-xl shadow-2xl border border-neutral-200 w-[280px] p-4"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {/* Pointer arrow */}
      <div className="absolute -top-2 left-4 w-4 h-4 bg-white border-l border-t border-neutral-200 rotate-45" />

      <form onSubmit={handleSubmit} className="relative space-y-3">
        <input
          type="text"
          placeholder="Your name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full text-sm px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50 text-[#171216] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        />
        <textarea
          ref={textRef}
          placeholder="Leave a comment…"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          className="w-full text-sm px-3 py-2 rounded-lg border border-neutral-200 bg-neutral-50 text-[#171216] placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
              handleSubmit(e);
            }
            if (e.key === "Escape") {
              onCancel();
            }
          }}
        />
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="text-xs text-neutral-500 hover:text-neutral-700 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!text.trim()}
            className="text-xs font-semibold bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            Comment ⌘↵
          </button>
        </div>
      </form>
    </div>
  );
}
