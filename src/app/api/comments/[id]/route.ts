import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const COMMENTS_KEY = "nymbus:comments";

interface CommentData {
  id: string;
  page: string;
  x: number;
  y: number;
  author: string;
  text: string;
  createdAt: string;
  resolved: boolean;
  replies: { id: string; author: string; text: string; createdAt: string }[];
}

// PATCH /api/comments/[id] — resolve a comment
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const raw = await redis.get<CommentData[]>(COMMENTS_KEY);
  const comments: CommentData[] = raw || [];

  const target = comments.find((c) => c.id === id);
  if (!target) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  target.resolved = true;
  await redis.set(COMMENTS_KEY, comments);

  return NextResponse.json(target);
}

// DELETE /api/comments/[id] — delete a comment
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const raw = await redis.get<CommentData[]>(COMMENTS_KEY);
  const comments: CommentData[] = raw || [];

  const filtered = comments.filter((c) => c.id !== id);
  if (filtered.length === comments.length) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  await redis.set(COMMENTS_KEY, filtered);

  return NextResponse.json({ success: true });
}
