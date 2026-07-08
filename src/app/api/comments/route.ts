import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const COMMENTS_KEY = "nymbus:comments";

export interface CommentData {
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

// GET /api/comments — returns all comments (optionally filtered by ?page=)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  const raw = await redis.get<CommentData[]>(COMMENTS_KEY);
  const comments: CommentData[] = raw || [];

  if (page) {
    return NextResponse.json(comments.filter((c) => c.page === page));
  }
  return NextResponse.json(comments);
}

// POST /api/comments — add a new comment
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { page, x, y, author, text } = body;

  if (!page || x == null || y == null || !author || !text) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const raw = await redis.get<CommentData[]>(COMMENTS_KEY);
  const comments: CommentData[] = raw || [];

  const newComment: CommentData = {
    id: crypto.randomUUID(),
    page,
    x,
    y,
    author,
    text,
    createdAt: new Date().toISOString(),
    resolved: false,
    replies: [],
  };

  comments.push(newComment);
  await redis.set(COMMENTS_KEY, comments);

  return NextResponse.json(newComment, { status: 201 });
}
