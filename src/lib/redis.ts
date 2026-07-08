import { Redis } from "@upstash/redis";

// Vercel's Upstash integration uses KV_REST_API_URL / KV_REST_API_TOKEN
// The Upstash SDK natively looks for UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
// We support both naming conventions.

export const redis = new Redis({
  url: process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "",
  token: process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "",
});
