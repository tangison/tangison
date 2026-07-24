"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero with background image */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero-infrastructure.webp"
            alt="Industrial power grid infrastructure at night"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-atlantic-black/[0.92] z-[1]" />

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">Services</span>
            </div>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
              Production-grade AI
              <br />
              for constraint-aware
              <br />
              deployment
            </h1>
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
            <p className="font-satoshi text-sm sm:text-base text-white/30 leading-relaxed max-w-lg mt-5">
              Three service areas, one operational philosophy. Every Tangison
              system is designed against the real constraints of its deployment
              environment, not against assumptions imported from ideal conditions.
            </p>
          </div>
        </div>
      </section>

      {/* AI Operations with image */}
      <RevealSection className="relative z-10 overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-ai-ops.webp"
            alt="Network node dashboard wireframe"
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">01</span>
                <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">AI Operations</h2>
              </div>
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-signal-teal/40">Continuous, autonomous, resilient</span>
              <div className="w-10 h-[1px] bg-rust-signal/60 mt-4" />
              {/* AI Ops preview image */}
              <div className="mt-6 relative h-[200px] sm:h-[260px] overflow-hidden">
                <Image
                  src="/images/services-ai-ops.webp"
                  alt="Autonomous network node operations dashboard"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
                Tangison&apos;s AI Operations platform deploys agent-based systems
                that run continuously within local infrastructure constraints.
                These systems monitor, decide, and act without requiring constant
                human intervention. They degrade gracefully when connectivity
                drops, resume autonomously when conditions improve, and produce
                measurable operational output at every stage.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
                Designed for environments where uptime is not guaranteed and manual
                oversight is expensive. AI Operations systems are not passive
                monitors. They are active participants in operational workflows,
                making decisions within defined boundaries and escalating only when
                their operational scope is exceeded.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed">
                The result is continuous operational output without continuous human
                input. Systems that work in the background, adapt to local
                conditions, and deliver measurable results even when infrastructure
                conditions are far from ideal.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Applied AI with image */}
      <RevealSection className="relative z-10 overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-applied-ai.webp"
            alt="Data pipeline visualization"
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">02</span>
                <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Applied AI</h2>
              </div>
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-signal-teal/40">Production-grade, constraint-aware</span>
              <div className="w-10 h-[1px] bg-signal-teal/60 mt-4" />
              {/* Applied AI preview image */}
              <div className="mt-6 relative h-[200px] sm:h-[260px] overflow-hidden">
                <Image
                  src="/images/services-applied-ai.webp"
                  alt="Constraint-aware data processing pipeline"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
                Applied AI at Tangison means systems that work in production, not in
                demonstrations. Every system is designed against the specific
                constraints of its deployment environment: intermittent
                connectivity, sparse or noisy data, limited compute budgets, and
                operational timelines that cannot accommodate long iteration
                cycles.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
                Tangison applied AI systems ship with graceful degradation, local
                processing fallbacks, and clear operational boundaries. They do not
                require perfect conditions to deliver value. They are designed to
                deliver the best available result under the conditions they
                actually encounter, and to improve when conditions improve.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed">
                Not demos. Not prototypes. Working systems that produce measurable
                operational output under real-world constraints. The distinction
                matters because the environments where Tangison systems are
                deployed do not have the luxury of waiting for ideal conditions.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Research & Consulting with image */}
      <RevealSection className="relative z-10 overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-research.webp"
            alt="Strategic diagram on concrete wall"
            fill
            className="object-cover opacity-[0.06]"
            sizes="100vw"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">03</span>
                <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Research &amp; Consulting</h2>
              </div>
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-signal-teal/40">Strategic, grounded, actionable</span>
              <div className="w-10 h-[1px] bg-rust-signal/60 mt-4" />
              {/* Research preview image */}
              <div className="mt-6 relative h-[200px] sm:h-[260px] overflow-hidden">
                <Image
                  src="/images/services-research.webp"
                  alt="Strategic consulting diagram"
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
                Tangison&apos;s research and consulting practice helps organisations
                navigate AI adoption in complex operational environments. Our
                consulting is grounded in production experience, not theoretical
                capability. We assess infrastructure realities, identify where AI
                can deliver measurable value, and design adoption roadmaps that
                account for constraints rather than assuming ideal conditions.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
                Our research division at labs.tangison.com produces technical
                insights that inform both our own products and client strategy.
                Research output feeds production systems, and production experience
                feeds research priorities. The cycle ensures that consulting
                recommendations are grounded in operational reality, not in
                academic abstraction.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed">
                Strategic consulting that is grounded in production experience,
                actionable within real constraints, and designed to produce
                measurable outcomes, not theoretical frameworks.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Contact CTA */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">
              Start a conversation
            </h2>
            <p className="font-satoshi text-sm text-white/25 leading-relaxed">
              We want to understand your operational challenge before proposing a
              solution. Tell us about the conditions you work in.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300 self-start md:self-center"
          >
            Contact us
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
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://tangison.com" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://tangison.com/services" },
            ],
          }),
        }}
      />
    </div>
  );
}
