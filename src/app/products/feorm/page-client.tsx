"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Check, Sprout, Tractor, MapPin } from "lucide-react";
import { SiteShell } from "@/components/tangison/site-shell";

const features = [
  "Namibian agrotourism marketplace — discover and book farm experiences",
  "Equipment rental platform — access agricultural machinery without capital investment",
  "Built in collaboration with Tuppaman Investment",
  "Marketplace for Namibian farmers and agricultural businesses",
  "Tourism integration — connect visitors with authentic farm stays",
  "Designed for the Namibian agricultural context",
  "Mobile-first for rural connectivity realities",
  "Supporting local economies through digital infrastructure",
];

const pillars = [
  {
    name: "Agrotourism",
    description: "Connect visitors with authentic Namibian farm experiences. From accommodation to guided tours, bring the land to life for travelers seeking something real.",
    icon: MapPin,
  },
  {
    name: "Equipment Rental",
    description: "Access agricultural machinery without the capital investment. Share resources across farms, reduce costs, and increase productivity for everyone.",
    icon: Tractor,
  },
  {
    name: "Marketplace",
    description: "A digital marketplace built for Namibian farmers and agricultural businesses. Buy, sell, and connect within the local agricultural ecosystem.",
    icon: Sprout,
  },
];

export function FeormPage() {
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
            <div className="w-2 h-2 bg-ink-muted/40" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.3em]">
              PRODUCT
            </span>
            <span className="font-jetbrains text-[9px] bg-warm-gray text-ink-muted px-2 py-1 uppercase tracking-[0.2em]">
              IN DEVELOPMENT
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-cabinet text-[clamp(2.2rem,5vw,4.5rem)] font-black tracking-[-0.03em] leading-[0.95] text-ink max-w-5xl"
          >
            Feorm
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-ink-muted font-satoshi text-lg md:text-xl max-w-2xl font-light leading-relaxed"
          >
            Namibian agrotourism and equipment rental marketplace. In collaboration with Tuppaman Investment.
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
              src="/images/gallery/workspace-geometric.png"
              alt="Feorm — marketplace under development"
              className="object-cover cinematic-image"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-warm-white/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <div className="font-jetbrains text-[9px] text-ink-muted/50 uppercase tracking-widest mb-1">
                  Feorm
                </div>
                <div className="font-jetbrains text-xs text-ink-muted/70 tracking-wider">
                  Agrotourism · Equipment · Marketplace
                </div>
              </div>
              <div className="font-jetbrains text-[9px] text-ink-muted/50 uppercase tracking-widest">
                In Development
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="px-6 md:px-12 lg:px-20 bg-warm-white">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="border border-black/[0.06] bg-warm-gray/50 p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          >
            <div>
              <span className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.3em] mb-2 block">
                Status
              </span>
              <h3 className="font-cabinet text-2xl tracking-tight text-ink">
                Coming Soon
              </h3>
              <p className="font-satoshi text-ink-muted text-sm mt-2">
                Feorm is currently in active development. We&apos;re building something meaningful for Namibian agriculture.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-ink text-skeleton-bone px-6 py-3 font-jetbrains text-[10px] uppercase tracking-[0.2em] hover:bg-ink-light transition-all duration-300 group"
              >
                Get Early Access
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white" aria-label="About Feorm">
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
                    Feorm is a Namibian agrotourism and equipment rental marketplace being developed in collaboration with Tuppaman Investment. It addresses two critical gaps in Namibian agriculture: the lack of accessible equipment for smallholder farmers and the untapped potential of agricultural tourism.
                  </p>
                  <p className="font-satoshi text-ink/80 text-base md:text-lg leading-relaxed">
                    For farmers, Feorm provides a marketplace to rent equipment they can&apos;t afford to buy — tractors, harvesters, processing machinery — shared across the community. For visitors, it opens the door to authentic farm experiences that generate additional income for agricultural businesses while showcasing Namibia&apos;s rich farming heritage.
                  </p>
                  <p className="font-satoshi text-ink/80 text-base md:text-lg leading-relaxed">
                    Built mobile-first for rural connectivity realities, Feorm works on the devices and networks that Namibian farmers actually use. The platform is designed to strengthen local economies through digital infrastructure — connecting supply with demand, tourists with hosts, and farmers with the equipment they need to grow.
                  </p>
                </div>

                {/* Collaboration credit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-10 border-l-2 border-rust-signal/30 pl-4"
                >
                  <p className="font-jetbrains text-[10px] text-rust-signal/70 uppercase tracking-[0.15em] mb-1">
                    In Collaboration With
                  </p>
                  <p className="font-cabinet text-lg text-ink">
                    Tuppaman Investment
                  </p>
                </motion.div>
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
                  Planned Capabilities
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

      {/* Platform Pillars */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Platform pillars">
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
                Platform Pillars
              </span>
            </div>
            <h2 className="font-cabinet text-3xl md:text-4xl tracking-tight text-ink">
              Agriculture meets technology.
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

      {/* GitHub Link */}
      <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-warm-white border-t border-black/[0.06]" aria-label="Links">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/tangison/feorm"
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
              Early Access
            </span>
            <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight text-skeleton-bone mb-6">
              Interested in Feorm?
            </h2>
            <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light">
              Get early access or explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
