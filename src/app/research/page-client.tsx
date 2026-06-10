"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const routeCards = [
  {
    title: "Research Projects",
    description:
      "Active research initiatives and experimental AI systems.",
    status: "3 Active Projects",
    href: "/research/projects",
    image: "/images/gallery/concrete-glass-architecture.webp",
  },
  {
    title: "Open Source",
    description:
      "Open source tools and community contributions.",
    status: "5 Repositories",
    href: "/research/open-source",
    image: "/images/gallery/concrete-glass-architecture-structure.webp",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function ResearchPage() {
  return (
    <SiteShell>
      {/* Section 1: Page Header */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-rust-signal" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.3em]">
              RESEARCH
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-cabinet text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-[-0.03em] leading-[0.95] text-ink max-w-5xl"
          >
            From the Lab
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-6 text-ink-muted font-satoshi text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Research initiatives and experimental systems from the TANGISON lab.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Route Cards */}
      <section
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white"
        aria-label="Research areas"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12">
            {routeCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={card.href}
                  className="group relative block border border-black/[0.06] overflow-hidden hover:border-black/[0.12] transition-colors duration-500"
                >
                  {/* Decorative background image */}
                  <div className="absolute inset-0">
                    <Image
                      src={card.image}
                      alt="Abstract architectural background"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover cinematic-image opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-8 md:p-10 lg:p-12 min-h-[320px] md:min-h-[380px] flex flex-col justify-between">
                    <div>
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal mb-4 block">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-cabinet text-3xl md:text-4xl font-bold tracking-tight text-ink mb-4 group-hover:text-ink-light transition-colors duration-300">
                        {card.title}
                      </h2>
                      <p className="font-satoshi text-ink-muted text-base md:text-lg max-w-md leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-8">
                      <span className="font-jetbrains text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                        {card.status}
                      </span>
                      <div className="flex items-center gap-2 font-jetbrains text-[11px] uppercase tracking-[0.15em] text-rust-signal group-hover:gap-3 transition-all duration-300">
                        Explore
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick links to research sub-pages for stronger internal linking */}
          <div className="flex flex-wrap gap-6 justify-center">
            <Link
              href="/research/projects"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.15em] text-ink-muted hover:text-rust-signal transition-colors duration-300"
            >
              Research Projects
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/research/open-source"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.15em] text-ink-muted hover:text-rust-signal transition-colors duration-300"
            >
              Open Source Repos
              <ArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.15em] text-ink-muted hover:text-rust-signal transition-colors duration-300"
            >
              Products
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: CTA */}
      <section
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black"
        aria-label="Research inquiry"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Collaborate
            </span>
            <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight text-skeleton-bone mb-6">
              Want to collaborate on research?
            </h2>
            <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light leading-relaxed">
              We work with organizations and researchers building AI for
              African markets and conditions.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
