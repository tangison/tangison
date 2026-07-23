"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Decorative Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-[40%] -right-[20%] w-[70vw] h-[70vw] opacity-[0.03]"
          style={{ background: "radial-gradient(circle, rgba(197,106,74,1) 0%, transparent 70%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero */}
      <section className="relative z-10 px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">About</span>
          </div>
          <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
            About Tangison
          </h1>
          <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
        </div>
      </section>

      {/* Mission */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">01</span>
              <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Our mission</h2>
            </div>
            <div className="w-10 h-[1px] bg-rust-signal/60" />
          </div>

          <div className="md:w-2/3">
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
              Tangison Technologies exists to make AI infrastructure work where
              generic systems fail. The majority of AI tools are designed for
              stable connectivity, abundant data, and reliable compute. Most of
              the world does not have those conditions. We build AI that operates
              within the real constraints of African and emerging-market
              environments: intermittent connectivity, sparse or noisy data,
              limited compute budgets, and operational demands that cannot wait
              for ideal conditions.
            </p>
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed">
              Our systems are not adaptations of Silicon Valley architectures.
              They are designed from the ground up for the conditions they will
              encounter in deployment. This means resilience is a core
              requirement, not an optional feature. It means practical output
              matters more than theoretical capability. And it means every
              architecture decision is informed by operational reality, not by
              assumptions imported from environments that do not match reality.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* Why Namibia */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">02</span>
              <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Why Namibia</h2>
            </div>
            <div className="w-10 h-[1px] bg-signal-teal/60" />
          </div>

          <div className="md:w-2/3">
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed mb-4">
              Namibia is a test case for the constraints that define AI
              deployment across emerging markets. Large geographic distances,
              variable infrastructure, and operational demands that require
              resilience, not optimisation. Building here means Tangison systems
              are tested against the conditions they will face in deployment, not
              against assumptions imported from environments that do not match
              reality.
            </p>
            <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed">
              The operational challenges in Namibia are not unique. They are
              representative of conditions across sub-Saharan Africa, South and
              Southeast Asia, and other regions where AI could deliver
              transformative value if it could survive the environment. By
              building where constraints are real and present, Tangison produces
              systems that work when they are deployed, not just when they are
              demonstrated.
            </p>
          </div>
        </div>
      </RevealSection>

      {/* Values */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">03</span>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">How we work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <RevealSection as="div" delay={0} className="group bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] p-6 sm:p-8 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">01</span>
              <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">Reliability first</h3>
              <p className="font-satoshi text-sm text-white/25 leading-relaxed">
                Every system Tangison ships is designed to operate when
                infrastructure degrades. Graceful degradation, local fallbacks,
                and operational continuity are core requirements, not optional
                features. A system that only works under ideal conditions is not
                production-ready for our deployment environments.
              </p>
            </RevealSection>

            <RevealSection as="div" delay={100} className="group bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] p-6 sm:p-8 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">02</span>
              <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">Practical over impressive</h3>
              <p className="font-satoshi text-sm text-white/25 leading-relaxed">
                We choose working systems over novel architectures. If a simpler
                approach delivers the result reliably, it wins. Research informs
                production, but research output is not production output. A
                system that delivers consistent, measurable results under
                constraint is more valuable than one that demonstrates
                theoretical capability under ideal conditions.
              </p>
            </RevealSection>

            <RevealSection as="div" delay={200} className="group bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] p-6 sm:p-8 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />
              <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">03</span>
              <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">Constraints as design input</h3>
              <p className="font-satoshi text-sm text-white/25 leading-relaxed">
                African operational constraints are not problems to overcome.
                They are design parameters that shape every architecture
                decision. Systems built for these conditions are inherently more
                resilient, and resilience is a competitive advantage. We do not
                design for best-case scenarios. We design for the conditions
                our systems will actually encounter.
              </p>
            </RevealSection>
          </div>
        </div>
      </RevealSection>

      {/* Contact CTA */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">Want to know more?</h2>
            <p className="font-satoshi text-sm text-white/25 leading-relaxed">
              We are always open to conversations about applied AI, African
              infrastructure, and the challenges of building reliable systems
              under constraint.
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
              { "@type": "ListItem", position: 2, name: "About", item: "https://tangison.com/about" },
            ],
          }),
        }}
      />
    </div>
  );
}
