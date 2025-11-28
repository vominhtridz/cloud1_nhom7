"use client";

import { ConvexReactClient } from "convex/react";

const address = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!address) {
  console.error("❌ Missing NEXT_PUBLIC_CONVEX_URL");
}

export const convex = new ConvexReactClient(address!);
