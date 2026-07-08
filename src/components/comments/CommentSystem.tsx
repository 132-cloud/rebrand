"use client";

import { CommentOverlay } from "./CommentOverlay";

/**
 * Client-side wrapper to mount the comment system in the server-component layout.
 * Drop this into layout.tsx alongside other providers.
 */
export function CommentSystem() {
  return <CommentOverlay />;
}
