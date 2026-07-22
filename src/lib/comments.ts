// ─── Comment System: Types & API-backed persistence (Upstash Redis) ─────────

export interface Comment {
  id: string;
  page: string; // pathname, e.g. "/" or "/platform"
  x: number; // percentage from left (0-100)
  y: number; // px from top of document (legacy fallback)
  anchorId?: string; // id of nearest anchoring element (section, div, etc.)
  offsetY?: number; // px offset from anchor element's top
  author: string;
  text: string;
  createdAt: string; // ISO string
  resolved: boolean;
  replies: Reply[];
}

export interface Reply {
  id: string;
  author: string;
  text: string;
  createdAt: string;
}

const SEEN_KEY = "nymbus-comments-seen";

// ─── Anchor resolution helpers ──────────────────────────────────────────────

/**
 * Find the nearest element with an `id` attribute at or above the click point.
 * Walks up from the clicked element looking for sections/divs with IDs.
 * Returns the anchor id and the offset (click y - anchor element top).
 */
export function findAnchor(clickY: number): { anchorId: string; offsetY: number } | null {
  // Gather all elements with an id on the page, excluding comment system elements
  const candidates = Array.from(document.querySelectorAll("[id]")).filter((el) => {
    const tag = el.tagName.toLowerCase();
    // Only anchor to semantic/structural elements
    if (!["section", "div", "main", "article", "header", "footer"].includes(tag)) return false;
    // Exclude comment system elements (sidebar pins, overlays, etc.)
    const id = el.id;
    if (id.startsWith("sidebar-comment") || id.startsWith("comment-") || id.startsWith("pin-")) return false;
    // Exclude elements inside the comment overlay
    if (el.closest("[data-comment-system]")) return false;
    return true;
  });

  if (candidates.length === 0) return null;

  // Find the closest anchor element whose top is at or above the click point
  let best: { el: Element; top: number } | null = null;
  for (const el of candidates) {
    const rect = el.getBoundingClientRect();
    const elTop = rect.top + window.scrollY;
    if (elTop <= clickY) {
      if (!best || elTop > best.top) {
        best = { el, top: elTop };
      }
    }
  }

  if (!best) {
    // Fallback: use the first element with an id
    const first = candidates[0];
    const rect = first.getBoundingClientRect();
    const elTop = rect.top + window.scrollY;
    return { anchorId: first.id, offsetY: clickY - elTop };
  }

  return { anchorId: best.el.id, offsetY: clickY - best.top };
}

/**
 * Resolve the current absolute Y position of a comment.
 * Uses anchor-based positioning if available, falls back to raw `y`.
 */
export function resolveCommentY(comment: Comment): number {
  if (comment.anchorId && comment.offsetY != null) {
    const anchor = document.getElementById(comment.anchorId);
    if (anchor) {
      const rect = anchor.getBoundingClientRect();
      return rect.top + window.scrollY + comment.offsetY;
    }
  }
  // Fallback to legacy absolute position
  return comment.y;
}

// ─── API helpers ────────────────────────────────────────────────────────────

export async function getAllComments(): Promise<Comment[]> {
  try {
    const res = await fetch("/api/comments", { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function getCommentsForPage(page: string): Promise<Comment[]> {
  try {
    const res = await fetch(`/api/comments?page=${encodeURIComponent(page)}`, { cache: "no-store" });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export async function addComment(
  comment: Omit<Comment, "id" | "createdAt" | "resolved" | "replies">
): Promise<Comment | null> {
  try {
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });
    if (!res.ok) return null;
    const newComment = await res.json();
    window.dispatchEvent(new Event("comments-updated"));
    return newComment;
  } catch {
    return null;
  }
}

export async function addReply(
  commentId: string,
  reply: Omit<Reply, "id" | "createdAt">
): Promise<void> {
  try {
    await fetch(`/api/comments/${commentId}/reply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reply),
    });
    window.dispatchEvent(new Event("comments-updated"));
  } catch {
    // silent fail
  }
}

export async function resolveComment(commentId: string): Promise<void> {
  try {
    await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolved: true }),
    });
    window.dispatchEvent(new Event("comments-updated"));
  } catch {
    // silent fail
  }
}

export async function unresolveComment(commentId: string): Promise<void> {
  try {
    await fetch(`/api/comments/${commentId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resolved: false }),
    });
    window.dispatchEvent(new Event("comments-updated"));
  } catch {
    // silent fail
  }
}

export async function deleteComment(commentId: string): Promise<void> {
  try {
    await fetch(`/api/comments/${commentId}`, { method: "DELETE" });
    window.dispatchEvent(new Event("comments-updated"));
  } catch {
    // silent fail
  }
}

// ─── Notification / "seen" tracking (still localStorage, per-user) ──────────

export function getSeenCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    return Number(localStorage.getItem(SEEN_KEY)) || 0;
  } catch {
    return 0;
  }
}

export function markAllSeen(totalOpen: number): void {
  localStorage.setItem(SEEN_KEY, String(totalOpen));
  window.dispatchEvent(new Event("comments-updated"));
}

export function getUnseenCount(totalOpen: number): number {
  const seen = getSeenCount();
  return Math.max(0, totalOpen - seen);
}
