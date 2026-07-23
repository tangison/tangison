"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";

interface Subdomain {
  name: string;
  url: string;
  label: string;
  description: string;
  status: string;
}

const subdomains: Subdomain[] = [
  {
    name: "Studio",
    url: "https://studio.tangison.com",
    label: "Studio",
    description: "Creative & Design Division",
    status: "Active",
  },
  {
    name: "Agent",
    url: "https://agent.tangison.com",
    label: "Agent",
    description: "AI Operations Platform",
    status: "In Development",
  },
  {
    name: "Labs",
    url: "https://labs.tangison.com",
    label: "Labs",
    description: "Research & Development",
    status: "In Development",
  },
];

const services = [
  {
    heading: "AI Operations",
    tagline: "Continuous, autonomous, resilient",
    description:
      "Agent-based systems that run continuously within local infrastructure constraints. They monitor, decide, and act without constant human intervention. Graceful degradation when connectivity drops. Autonomous resumption when conditions improve. Measurable output at every stage.",
    href: "/services",
  },
  {
    heading: "Applied AI",
    tagline: "Production-grade, constraint-aware",
    description:
      "Production AI systems designed for the constraints of emerging markets: intermittent connectivity, sparse data, limited compute. Not demos. Not prototypes. Working systems with graceful degradation, local processing fallbacks, and clear operational boundaries.",
    href: "/services",
  },
  {
    heading: "Research & Consulting",
    tagline: "Strategic, grounded, actionable",
    description:
      "AI adoption consulting grounded in production experience, not theoretical capability. Infrastructure assessment, value identification, and adoption roadmaps that account for real constraints. Research at labs.tangison.com informs both products and client strategy.",
    href: "/services",
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col">
      {/* Decorative Background */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-[40%] -right-[20%] w-[70vw] h-[70vw] opacity-[0.03]"
          style={{
            background:
              "radial-gradient(circle, rgba(197,106,74,1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-[30%] -left-[15%] w-[50vw] h-[50vw] opacity-[0.02]"
          style={{
            background:
              "radial-gradient(circle, rgba(44,181,180,1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto w-full">
          {/* Status indicator */}
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-signal-teal opacity-40" />
              <span className="relative inline-flex h-2 w-2 bg-signal-teal" />
            </span>
            <span className="font-jetbrains text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/25">
              Building in Africa
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5 sm:mb-6">
            Applied AI
            <br />
            that works where
            <br />
            infrastructure breaks
          </h1>

          {/* Accent line */}
          <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />

          {/* Description */}
          <p className="font-satoshi text-sm sm:text-base text-white/30 leading-relaxed max-w-lg mt-5 sm:mt-6">
            Tangison builds production-grade AI systems for African and
            emerging-market conditions. Reliable when connectivity drops.
            Practical when data is sparse. Resilient when operations need it
            most.
          </p>

          {/* Primary CTA */}
          <div className="mt-8 sm:mt-10 flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300"
            >
              Get in touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/services"
              className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/25 hover:text-rust-signal transition-colors duration-300 inline-flex items-center gap-1.5"
            >
              Our services
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">
              01
            </span>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[0.05em] uppercase text-skeleton-bone">
              What we build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <RevealSection
                key={service.heading}
                as="div"
                delay={i * 100}
                className="group relative bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] p-6 sm:p-8 transition-all duration-500 block"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />

                {/* Tagline */}
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-signal-teal/40 mb-3 block">
                  {service.tagline}
                </span>

                {/* Heading */}
                <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-4">
                  {service.heading}
                </h3>

                {/* Description */}
                <p className="font-satoshi text-sm text-white/25 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  href={service.href}
                  className="flex items-center gap-1.5 text-white/15 group-hover:text-rust-signal/70 transition-all duration-500"
                >
                  <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em]">
                    Learn more
                  </span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </RevealSection>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* About Teaser */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
          {/* Left column: heading + accent */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">
                02
              </span>
              <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[0.05em] uppercase text-skeleton-bone">
                Built in Africa,
                <br />
                for Africa
              </h2>
            </div>
            <div className="w-10 h-[1px] bg-rust-signal/60" />
          </div>

          {/* Right column: body + CTA */}
          <div className="md:w-2/3">
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
              Tangison Technologies was founded in Namibia to solve a specific
              problem: AI infrastructure built for Silicon Valley conditions fails
              where it is needed most. We design, build, and operate applied AI
              systems that work under the constraints that define African and
              emerging-market operations.
            </p>
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-8">
              Intermittent connectivity, sparse or noisy data, limited compute
              budgets, and operational timelines that cannot accommodate long
              iteration cycles. These are not problems to overcome. They are
              design parameters that shape every architecture decision.
            </p>
            <Link
              href="/about"
              className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal hover:text-rust-light transition-colors duration-300 inline-flex items-center gap-1.5"
            >
              About Tangison
              <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </RevealSection>

      {/* Subdomain Cards */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">
              03
            </span>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[0.05em] uppercase text-skeleton-bone">
              Our ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {subdomains.map((subdomain) => {
              const isActive = subdomain.status === "Active";
              return (
                <a
                  key={subdomain.name}
                  href={subdomain.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] p-6 sm:p-8 transition-all duration-500 block"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />

                  {/* Status dot */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`w-1.5 h-1.5 ${
                        isActive ? "bg-signal-teal" : "bg-white/20"
                      }`}
                    />
                    <span className="font-jetbrains text-[8px] uppercase tracking-[0.3em] text-white/25">
                      {subdomain.status}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-cabinet text-2xl sm:text-3xl tracking-[0.1em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-2">
                    {subdomain.label}
                  </h3>

                  {/* Description */}
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/45 transition-colors duration-300 mb-6">
                    {subdomain.description}
                  </p>

                  {/* Link indicator */}
                  <div className="flex items-center gap-1.5 text-white/15 group-hover:text-rust-signal/70 transition-all duration-500">
                    <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em]">
                      Visit
                    </span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* Contact CTA */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">
              Start a conversation
            </h2>
            <p className="font-satoshi text-sm sm:text-base text-white/25 leading-relaxed max-w-lg">
              Whether you need AI operations, applied AI systems, or strategic
              consulting, we want to understand your challenge before proposing a
              solution.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300 self-start md:self-center"
          >
            Get in touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </RevealSection>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tangison Technologies",
            url: "https://tangison.com",
            description:
              "Applied AI infrastructure for African and emerging-market conditions.",
            contactPoint: {
              "@type": "ContactPoint",
              email: "contact@tangison.com",
              contactType: "customer service",
            },
            sameAs: [
              "https://studio.tangison.com",
              "https://agent.tangison.com",
              "https://labs.tangison.com",
            ],
          }),
        }}
      />
    </div>
  );
}
