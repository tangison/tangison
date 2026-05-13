"use client";

import React from "react";
import { Navigation } from "@/components/tangison/navigation";
import { Hero } from "@/components/tangison/hero";
import { BentoGrid } from "@/components/tangison/bento-grid";
import { NarrativeSection } from "@/components/tangison/narrative";
import { SystemsShowcase } from "@/components/tangison/systems-showcase";
import { PhilosophySection } from "@/components/tangison/philosophy";
import { CTASection } from "@/components/tangison/cta";
import { Footer } from "@/components/tangison/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-atlantic-black">
      {/* Film grain noise overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      <Navigation />

      <main className="flex-1">
        <Hero />
        <BentoGrid />
        <NarrativeSection />
        <SystemsShowcase />
        <PhilosophySection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
