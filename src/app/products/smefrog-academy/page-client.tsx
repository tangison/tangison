"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Check, BookOpen, GraduationCap, Users } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const features = [
  "Free access — no paywalls, no subscriptions",
  "Built for Namibian entrepreneurs and small business owners",
  "Practical curriculum — real business skills, not theory",
  "Mobile-first design for low-bandwidth access",
  "Structured learning paths from startup to scale",
  "Community-driven — peer support and mentorship",
  "Available in multiple Namibian languages",
  "Offline-capable — download and learn anywhere",
];

const pillars = [
  {
    name: "Business Foundations",
    description: "From idea to registration. Learn the legal, financial, and operational basics of starting a business in Namibia.",
    icon: BookOpen,
  },
  {
    name: "Growth Skills",
    description: "Marketing, sales, financial management, and customer acquisition strategies tailored to the Namibian market.",
    icon: GraduationCap,
  },
  {
    name: "Community",
    description: "Connect with fellow entrepreneurs, mentors, and advisors. Business doesn't happen in isolation — neither should learning.",
    icon: Users,
  },
];

export function SMEFrogAcademyPage() {
  return (
    <SiteShell>
      {/* Page Header */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-jetbrains text-[10px] text-ink-muted/60 uppercase tracking-[0.25em] hover:text-ink-muted transition-colors duration-300 group"
            >
              <ArrowLeft className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-1" />
              Products
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-rust-signal" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.3em]">
              PRODUCT
            </span>
            <span className="font-jetbrains text-[9px] bg-rust-signal/10 text-rust-signal px-2 py-1 uppercase tracking-[0.2em]">
              LIVE
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-cabinet text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-[-0.03em] leading-[0.95] text-ink max-w-5xl"
          >
            SMEFrog Academy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-ink-muted font-satoshi text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Free learning platform for Namibian entrepreneurs. Practical business education, accessible anywhere.
          </motion.p>
        </div>
      </section>

      {/* Decorative Image */}
      <section className="px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-64 md:h-96 overflow-hidden border border-black/[0.06]"
          >
            <Image
              src="/images/gallery/business-registration-compliance.png"
              alt="SMEFrog Academy — business education materials"
              className="object-cover cinematic-image"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-white/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <div className="font-jetbrains text-[9px] text-ink-muted/50 uppercase tracking-widest mb-1">
                  SMEFrog Academy
                </div>
                <div className="font-jetbrains text-xs text-ink-muted/70 tracking-wider">
                  Free · Mobile-First · Practical
                </div>
              </div>
              <div className="font-jetbrains text-[9px] text-rust-signal/50 uppercase tracking-widest">
                For Entrepreneurs
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white" aria-label="About SMEFrog Academy">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
                  <span className="font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.3em]">
                    Overview
                  </span>
                </div>

                <div className="space-y-6">
                  <p className="font-satoshi text-ink/80 text-base md:text-lg leading-relaxed">
                    SMEFrog Academy is a free learning platform designed specifically for Namibian entrepreneurs. It removes the biggest barrier to business education — cost — and replaces it with practical, accessible, mobile-first curriculum that meets entrepreneurs where they are.
                  </p>
                  <p className="font-satoshi text-ink/80 text-base md:text-lg leading-relaxed">
                    The platform covers everything from business registration and legal compliance to marketing strategy and financial management. Every course is built for the Namibian context — local regulations, local market dynamics, local languages. This isn&apos;t a generic business course translated for Africa. It&apos;s built from the ground up for Namibian entrepreneurs.
                  </p>
                  <p className="font-satoshi text-ink/80 text-base md:text-lg leading-relaxed">
                    Mobile-first and offline-capable, SMEFrog Academy works on the devices and connections that Namibians actually have. Download a module, learn on the bus, apply it the same day. No laptop required. No broadband needed.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border border-black/[0.06] bg-warm-gray/50 p-6 md:p-8"
              >
                <h3 className="font-cabinet text-lg tracking-tight text-ink mb-6">
                  Key Capabilities
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-3"
                    >
                      <Check className="w-4 h-4 text-rust-signal mt-0.5 shrink-0" />
                      <span className="font-satoshi text-ink-muted text-sm leading-relaxed">
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Pillars */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Learning pillars">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
              <span className="font-jetbrains text-[10px] text-ink-muted/50 uppercase tracking-[0.3em]">
                Learning Pillars
              </span>
            </div>
            <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight text-ink">
              Three paths. One goal.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border border-black/[0.06] p-6 md:p-8 bg-warm-white hover:bg-warm-gray transition-all duration-500 group"
              >
                <div className="w-10 h-10 bg-rust-signal/10 flex items-center justify-center mb-6">
                  <pillar.icon className="w-5 h-5 text-rust-signal" />
                </div>
                <h3 className="font-cabinet text-xl tracking-tight text-ink mb-3 group-hover:text-ink-light transition-colors">
                  {pillar.name}
                </h3>
                <p className="font-satoshi text-ink-muted text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Links">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://document-library-one.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-ink text-skeleton-bone px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-ink-light transition-all duration-300 group"
            >
              Visit SMEFrog Academy
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com/tangison/smefrog-academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black/[0.12] bg-warm-white text-ink px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-warm-gray transition-all duration-300 group"
            >
              View on GitHub
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="Next step">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Education Matters
            </span>
            <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight text-skeleton-bone mb-6">
              Building for entrepreneurs?
            </h2>
            <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light">
              We build educational platforms for any audience, any context.
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
