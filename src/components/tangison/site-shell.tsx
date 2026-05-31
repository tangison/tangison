"use client";

import React from "react";
import { Navigation } from "@/components/tangison/navigation";
import { Footer } from "@/components/tangison/footer";
import { TangisonAIWidget } from "@/components/tangison/ai-widget";

export function SiteShell({
  children,
  footerSlot,
}: {
  children: React.ReactNode;
  footerSlot?: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-warm-white">
      <Navigation />
      <main className="flex-1">{children}</main>
      {footerSlot}
      <Footer />
      <TangisonAIWidget />
    </div>
  );
}
