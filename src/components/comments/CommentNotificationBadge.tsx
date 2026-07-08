"use client";

import { useState, useEffect, useCallback } from "react";
import { getUnseenCount, markAllSeen, getAllComments } from "@/lib/comments";

interface CommentNotificationBadgeProps {
  onClick: () => void;
}

export function CommentNotificationBadge({ onClick }: CommentNotificationBadgeProps) {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const refresh = useCallback(() => {
    setCount(getUnseenCount());
    setTotal(getAllComments().filter((c) => !c.resolved).length);
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener("comments-updated", refresh);
    return () => window.removeEventListener("comments-updated", refresh);
  }, [refresh]);

  return (
    <button
      onClick={onClick}
      className="relative flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors px-2 py-1 rounded-lg hover:bg-neutral-100"
      title={`${total} open comment${total !== 1 ? "s" : ""}`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
      {total > 0 && <span className="text-xs">{total}</span>}
      {count > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center animate-pulse">
          {count > 9 ? "!" : count}
        </span>
      )}
    </button>
  );
}
