"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SiteShell } from "@/components/tangison/site-shell";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Applied AI",
    slug: "applied-ai",
    description: "Custom AI systems built for your organization's specific needs.",
    capabilities: [
      "Custom AI systems and integrations",
      "Enterprise AI deployments",
      "Intelligent business workflows",
      "AI-powered data analysis",
    ],
    image: "/images/gallery/concrete-glass-architecture-blue-sky.png",
  },
  {
    title: "AI Infrastructure",
    slug: "infrastructure",
    description: "The systems that make AI work in production.",
    capabilities: [
      "Agent orchestration and management",
      "Automation systems and workflow architecture",
      "Deployment infrastructure",
      "Operational AI systems",
    ],
    image: "/images/gallery/concrete-glass-metal-connection.png",
  },
  {
    title: "AI Consulting",
    slug: "consulting",
    description:
      "Strategic guidance for organizations starting or advancing their AI journey.",
    capabilities: [
      "AI strategy and roadmap development",
      "Technology evaluation",
      "Implementation guidance",
      "Team training",
    ],
    image: "/images/gallery/desk-succulent-sketch-pencil.png",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" } as const,
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
};

const stagger = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" } as const,
};

export function ServicesPage() {
  return (
    <SiteShell>
      {/* Section 1: Page Header */}
      <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div {...fadeInUp}>
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-rust-signal block mb-6">
              SERVICES
            </span>
            <h1 className="font-cabinet text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink mb-6">
              What We Build
            </h1>
            <p className="font-satoshi text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">
              Applied AI, infrastructure, and consulting for organizations
              across Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Service Cards */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto space-y-6 md:space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              {...stagger}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group block border border-black/[0.06] overflow-hidden hover:border-black/[0.1] transition-colors duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image side — hidden on mobile, visible on lg */}
                  <div className="relative hidden lg:block min-h-[320px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 0vw, 50vw"
                      className="object-cover cinematic-image group-hover:scale-105 transition-transform duration-700"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content side */}
                  <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-warm-gray/40">
                    <span className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal mb-4">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-cabinet text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-4">
                      {service.title}
                    </h2>
                    <p className="font-satoshi text-ink-muted text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                      {service.description}
                    </p>

                    {/* Capabilities list */}
                    <ul className="space-y-3 mb-8">
                      {service.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="flex items-start gap-3 font-satoshi text-sm text-ink-muted"
                        >
                          <span
                            className="w-1.5 h-1.5 bg-rust-signal mt-1.5 shrink-0"
                            aria-hidden="true"
                          />
                          {cap}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 font-jetbrains text-[11px] uppercase tracking-[0.15em] text-rust-signal group-hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section 3: CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="w-12 h-[2px] bg-rust-signal mx-auto mb-8" aria-hidden="true" />
            <h2 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-6">
              Not sure where to start?
            </h2>
            <p className="font-satoshi text-ink-muted text-lg mb-10 max-w-lg mx-auto">
              Let&apos;s talk about your challenges and find the right approach together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-ink text-warm-white px-8 py-4 font-jetbrains text-[11px] uppercase tracking-[0.15em] hover:bg-ink-light transition-colors duration-300 group"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
