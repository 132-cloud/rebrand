// ─── Comment System: Types & localStorage Persistence ───────────────────────

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

const STORAGE_KEY = "nymbus-comments";
const SEEN_KEY = "nymbus-comments-seen";

// ─── CRUD helpers ───────────────────────────────────────────────────────────

export function getAllComments(): Comment[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function getCommentsForPage(page: string): Comment[] {
  return getAllComments().filter((c) => c.page === page);
}

export function addComment(comment: Omit<Comment, "id" | "createdAt" | "resolved" | "replies">): Comment {
  const comments = getAllComments();
  const newComment: Comment = {
    ...comment,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    resolved: false,
    replies: [],
  };
  comments.push(newComment);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  window.dispatchEvent(new Event("comments-updated"));
  return newComment;
}

export function addReply(commentId: string, reply: Omit<Reply, "id" | "createdAt">): void {
  const comments = getAllComments();
  const target = comments.find((c) => c.id === commentId);
  if (!target) return;
  target.replies.push({
    ...reply,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  window.dispatchEvent(new Event("comments-updated"));
}

export function resolveComment(commentId: string): void {
  const comments = getAllComments();
  const target = comments.find((c) => c.id === commentId);
  if (!target) return;
  target.resolved = true;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  window.dispatchEvent(new Event("comments-updated"));
}

export function deleteComment(commentId: string): void {
  const comments = getAllComments().filter((c) => c.id !== commentId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
  window.dispatchEvent(new Event("comments-updated"));
}

// ─── Notification / "seen" tracking ─────────────────────────────────────────

export function getSeenCount(): number {
  if (typeof window === "undefined") return 0;
  try {
    return Number(localStorage.getItem(SEEN_KEY)) || 0;
  } catch {
    return 0;
  }
}

export function markAllSeen(): void {
  const total = getAllComments().filter((c) => !c.resolved).length;
  localStorage.setItem(SEEN_KEY, String(total));
  window.dispatchEvent(new Event("comments-updated"));
}

export function getUnseenCount(): number {
  const total = getAllComments().filter((c) => !c.resolved).length;
  const seen = getSeenCount();
  return Math.max(0, total - seen);
}
