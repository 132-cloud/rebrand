"use client";

import { useEffect, useState } from "react";
import { Comment, resolveCommentY } from "@/lib/comments";

interface CommentPinProps {
  comment: Comment;
  index: number;
  isActive: boolean;
  onClick: (comment: Comment) => void;
}

export function CommentPin({ comment, index, isActive, onClick }: CommentPinProps) {
  const [topPx, setTopPx] = useState(comment.y);

  // Recompute position from anchor on mount and when layout changes
  useEffect(() => {
    function updatePosition() {
      setTopPx(resolveCommentY(comment));
    }
    updatePosition();

    // Recompute on resize (layout shifts can change anchor positions)
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [comment]);

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick(comment);
      }}
      className={`
        absolute z-[9999] group flex items-center justify-center
        w-7 h-7 rounded-full shadow-lg border-2 cursor-pointer
        transition-all duration-150 hover:scale-110
        ${isActive
          ? "bg-blue-600 border-white scale-110 ring-4 ring-blue-600/30"
          : comment.resolved
            ? "bg-green-500 border-white opacity-60 hover:opacity-100"
            : "bg-blue-600 border-white hover:ring-4 hover:ring-blue-600/20"
        }
      `}
      style={{
        left: `${comment.x}%`,
        top: `${topPx}px`,
        transform: "translate(-50%, -50%)",
      }}
      title={`${comment.author}: ${comment.text}`}
    >
      <span className="text-white text-[11px] font-bold leading-none">
        {index + 1}
      </span>

      {/* Hover tooltip */}
      <div className="
        absolute bottom-full left-1/2 -translate-x-1/2 mb-2
        bg-neutral-900 text-white text-xs rounded-lg px-3 py-2
        whitespace-nowrap opacity-0 group-hover:opacity-100
        pointer-events-none transition-opacity shadow-xl
        max-w-[200px] truncate
      ">
        <span className="font-semibold">{comment.author}:</span>{" "}
        {comment.text.slice(0, 60)}{comment.text.length > 60 ? "…" : ""}
      </div>
    </button>
  );
}
