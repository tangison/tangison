"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowLeft, Github } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const repositories = [
  {
    name: "tangison-agent",
    description:
      "Self-hosted AI Agent Platform: OpenClaw-powered + Graphify + PAUL + BaseAI + 59 Skills",
    github: "github.com/tangison/tangison-agent",
    githubUrl: "https://github.com/tangison/tangison-agent",
  },
  {
    name: "skills",
    description:
      "SkillsCamp: 531+ modular agent skills. Zero cloud dependency.",
    github: "github.com/tangison/skills",
    githubUrl: "https://github.com/tangison/skills",
  },
  {
    name: "smefrog-academy",
    description:
      "Free learning platform for Namibian entrepreneurs",
    github: "github.com/tangison/smefrog-academy",
    githubUrl: "https://github.com/tangison/smefrog-academy",
  },
  {
    name: "smefrog",
    description:
      "Jump Into Business. Namibia remote startup support.",
    github: "github.com/tangison/smefrog",
    githubUrl: "https://github.com/tangison/smefrog",
  },
  {
    name: "feorm",
    description:
      "Namibian agrotourism and equipment rental marketplace",
    github: "github.com/tangison/feorm",
    githubUrl: "https://github.com/tangison/feorm",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

export function OpenSourcePage() {
  return (
    <SiteShell>
      {/* Section 1: Page Header */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link
              href="/research"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.25em] hover:text-ink-muted transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" />
              Research
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-rust-signal" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.3em]">
              OPEN SOURCE
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
            Open Source Repositories
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
            Open source tools and community contributions from TANGISON.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Repository Grid */}
      <section
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white"
        aria-label="Open source repositories"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {repositories.map((repo, i) => (
              <motion.div
                key={repo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="border border-black/[0.06] p-6 bg-warm-white hover:bg-warm-gray transition-all duration-500 h-full flex flex-col group">
                  {/* Repo icon + name */}
                  <div className="flex items-start gap-3 mb-4">
                    <Github className="w-5 h-5 text-ink-muted/40 shrink-0 mt-0.5" />
                    <h3 className="font-cabinet text-xl md:text-2xl tracking-tight text-ink">
                      {repo.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-satoshi text-ink-muted text-sm leading-relaxed mb-6 flex-1">
                    {repo.description}
                  </p>

                  {/* GitHub path */}
                  <div className="font-jetbrains text-[10px] text-ink-muted/60 mb-4">
                    {repo.github}
                  </div>

                  {/* View on GitHub link */}
                  <a
                    href={repo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.15em] text-rust-signal hover:gap-3 transition-all duration-300"
                  >
                    View on GitHub
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: CTA */}
      <section
        className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black"
        aria-label="Open source collaboration"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Contribute
            </span>
            <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight text-skeleton-bone mb-6">
              Build with us
            </h2>
            <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light leading-relaxed">
              Open source scales impact. Join us in building tools for
              African contexts.
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
