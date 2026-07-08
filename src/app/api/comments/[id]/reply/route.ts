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

// POST /api/comments/[id]/reply — add a reply to a comment
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { author, text } = body;

  if (!author || !text) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const raw = await redis.get<CommentData[]>(COMMENTS_KEY);
  const comments: CommentData[] = raw || [];

  const target = comments.find((c) => c.id === id);
  if (!target) {
    return NextResponse.json({ error: "Comment not found" }, { status: 404 });
  }

  const reply = {
    id: crypto.randomUUID(),
    author,
    text,
    createdAt: new Date().toISOString(),
  };

  target.replies.push(reply);
  await redis.set(COMMENTS_KEY, comments);

  return NextResponse.json(reply, { status: 201 });
}
