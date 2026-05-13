"use client";

import React from "react";
import { Navigation } from "@/components/tangison/navigation";
import { Footer } from "@/components/tangison/footer";
import { PageTransitionProvider } from "@/components/tangison/page-transition";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <PageTransitionProvider>
      <div className="relative min-h-screen flex flex-col bg-atlantic-black">
        <div className="noise-overlay" aria-hidden="true" />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </PageTransitionProvider>
  );
}
