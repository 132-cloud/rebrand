// ─── Comment System: Types & API-backed persistence (Upstash Redis) ─────────

export interface Comment {
  id: string;
  page: string; // pathname, e.g. "/" or "/platform"
  x: number; // percentage from left (0-100)
  y: number; // px from top of document
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
    await fetch(`/api/comments/${commentId}`, { method: "PATCH" });
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
