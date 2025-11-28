"use client";
import "./globals.css";
import { ConvexProvider } from "convex/react";
import { convex } from "./convex-client";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConvexProvider client={convex}>{children}</ConvexProvider>
      </body>
    </html>
  );
}
