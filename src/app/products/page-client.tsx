"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const products = [
  {
    name: "SkillsCamp",
    status: "LIVE" as const,
    description:
      "531+ modular AI agent skills. Zero cloud dependency. Built for African contexts. The sovereign intelligence infrastructure directory.",
    url: "skillscamp.tangison.com",
    href: "/products/skillscamp",
    externalUrl: "https://skillscamp.tangison.com",
  },
  {
    name: "Tangison Agent",
    status: "LIVE" as const,
    description:
      "Sovereign AI Agent Platform. OpenClaw-powered + Graphify + PAUL + BaseAI + 59 Skills. Powered by the Hermes Agent.",
    url: "tangison-agent.vercel.app",
    href: "/products/tangison-agent",
    externalUrl: "https://tangison-agent.vercel.app",
  },
  {
    name: "SMEFrog Academy",
    status: "LIVE" as const,
    description:
      "Free learning platform for Namibian entrepreneurs. Practical business education, accessible anywhere.",
    url: "smefrog-academy.vercel.app",
    href: "/products/smefrog-academy",
    externalUrl: "https://document-library-one.vercel.app",
  },
  {
    name: "SMEFrog",
    status: "LIVE" as const,
    description:
      "Jump Into Business. Namibia remote startup support for entrepreneurs ready to launch and scale.",
    url: "smefrog.vercel.app",
    href: "https://smefrog.vercel.app",
    externalUrl: "https://smefrog.vercel.app",
  },
  {
    name: "Feorm",
    status: "IN DEVELOPMENT" as const,
    description:
      "Namibian agrotourism and equipment rental marketplace. In collaboration with Tuppaman Investment.",
    url: null,
    href: "/products/feorm",
    externalUrl: null,
  },
];

export function ProductsPage() {
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
              PRODUCTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-cabinet text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-[-0.03em] leading-[0.95] text-ink max-w-5xl"
          >
            Built by TANGISON
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-ink-muted font-satoshi text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            We don&apos;t only consult. We build.
          </motion.p>
        </div>
      </section>

      {/* Section 2: Product Grid */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white" aria-label="Product directory">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={product.href}
                  className="group block border border-black/[0.06] p-6 md:p-8 bg-warm-white hover:bg-warm-gray transition-all duration-500 h-full"
                >
                  {/* Status Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-jetbrains text-[9px] uppercase tracking-[0.2em] px-2 py-1 ${
                        product.status === "LIVE"
                          ? "bg-rust-signal/10 text-rust-signal"
                          : "bg-warm-gray text-ink-muted"
                      }`}
                    >
                      {product.status}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-ink-muted/30 group-hover:text-rust-signal transition-colors duration-300" />
                  </div>

                  {/* Product Name */}
                  <h3 className="font-cabinet text-2xl tracking-tight text-ink mb-3 group-hover:text-ink-light transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="font-satoshi text-ink-muted text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  {/* URL */}
                  {product.url && (
                    <div className="font-jetbrains text-[10px] text-rust-signal mb-4">
                      {product.url}
                    </div>
                  )}

                  {/* View Product Button */}
                  <div className="inline-flex items-center gap-2 font-jetbrains text-[10px] uppercase tracking-[0.15em] text-ink-muted group-hover:text-ink transition-colors duration-300">
                    View Product
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: More Products Statement */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]">
        <div className="max-w-[1400px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-satoshi text-ink-muted text-base text-center"
          >
            More products in development.
          </motion.p>
        </div>
      </section>

      {/* Section 4: CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="Get in touch">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Build With Us
            </span>
            <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight text-skeleton-bone mb-6">
              Have a product idea?
            </h2>
            <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light">
              We build those too.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
