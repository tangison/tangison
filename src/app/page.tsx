"use client";

import React from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { Hero } from "@/components/tangison/hero";
import { BentoGrid } from "@/components/tangison/bento-grid";
import { PhilosophySection } from "@/components/tangison/philosophy";
import { CTASection } from "@/components/tangison/cta";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const quickLinks = [
  { href: "/architecture", label: "Architecture", desc: "How we build" },
  { href: "/systems", label: "Systems", desc: "What we operate" },
  { href: "/intelligence", label: "Intelligence", desc: "What we know" },
  { href: "/manifesto", label: "Manifesto", desc: "Why we exist" },
  { href: "/brand", label: "Brand System", desc: "How we present" },
];

export default function Home() {
  return (
    <SiteShell>
      <Hero />

      {/* Quick Navigation Section */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-terminal-black border-t border-white/[0.04]" aria-label="Quick navigation">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-[0.3em]">
              Navigate
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={link.href}
                  className="group block bg-atlantic-black border border-white/[0.06] p-6 hover:border-white/[0.12] hover:bg-white/[0.02] transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-fog-gray/20 group-hover:text-rust-signal transition-colors duration-300" />
                  </div>
                  <h3 className="font-cabinet text-lg tracking-tight mb-1 group-hover:text-skeleton-bone transition-colors">
                    {link.label}
                  </h3>
                  <p className="font-satoshi text-fog-gray/40 text-xs">{link.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BentoGrid />
      <PhilosophySection />
      <CTASection />
    </SiteShell>
  );
}
