"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero with background image */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero-windhoek.webp"
            alt="Windhoek city skyline at dusk"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-atlantic-black/[0.65] z-[1]" />

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">About</span>
            </div>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
              About Tangison
            </h1>
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
          </div>
        </div>
      </section>

      {/* Mission with field deployment image */}
      <RevealSection className="relative z-10 overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-mission-field.webp"
            alt="Field deployment monitoring station"
            fill
            className="object-cover opacity-[0.20]"
            sizes="100vw"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            {/* Left column: heading + image */}
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">01</span>
                <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Our mission</h2>
              </div>
              <div className="w-10 h-[1px] bg-rust-signal/60" />
              {/* Small mission context image */}
              <div className="mt-6 relative h-[200px] sm:h-[240px] overflow-hidden">
                <Image
                  src="/images/about-mission-field.webp"
                  alt="Remote telemetry monitoring station in field deployment"
                  fill
                  className="object-cover opacity-85"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed">
                AI infrastructure designed for real conditions. Not adaptations of Silicon Valley architectures, but systems built from the ground up for intermittent connectivity, sparse data, and limited compute. Resilience is core, not optional.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Why Namibia with landscape image */}
      <RevealSection className="relative z-10 overflow-hidden border-t border-white/[0.04]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-why-namibia.webp"
            alt="Namibian desert landscape with telecommunications tower"
            fill
            className="object-cover opacity-[0.15]"
            sizes="100vw"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">02</span>
                <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Why Namibia</h2>
              </div>
              <div className="w-10 h-[1px] bg-signal-teal/60" />
              {/* Namibian landscape context image */}
              <div className="mt-6 relative h-[200px] sm:h-[240px] overflow-hidden">
                <Image
                  src="/images/about-why-namibia.webp"
                  alt="Lone telecommunications tower against vast Namibian horizon"
                  fill
                  className="object-cover opacity-85"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="font-satoshi text-base sm:text-lg text-white/30 leading-relaxed">
                Namibia is a test case for the constraints that define AI deployment across emerging markets. Building here means systems are tested against the conditions they will face, not assumptions from environments that do not match reality. These constraints are not unique to Namibia. They are representative of conditions across sub-Saharan Africa, South Asia, and other regions where AI could deliver transformative value if it could survive the environment.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Values with card images */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">03</span>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">How we work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <RevealSection as="div" delay={0} className="group bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
              {/* Value image */}
              <div className="relative h-[140px] overflow-hidden">
                <Image
                  src="/images/value-reliability.webp"
                  alt="Graceful degradation: staircase descending step"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">01</span>
                <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">Reliability first</h3>
                <p className="font-satoshi text-sm text-white/25 leading-relaxed">
                  Graceful degradation, local fallbacks, and operational continuity are core requirements. Systems that only work under ideal conditions are not production-ready.
                </p>
              </div>
            </RevealSection>

            <RevealSection as="div" delay={100} className="group bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
              <div className="relative h-[140px] overflow-hidden">
                <Image
                  src="/images/value-practical.webp"
                  alt="Practical over impressive: functional system"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">02</span>
                <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">Practical over impressive</h3>
                <p className="font-satoshi text-sm text-white/25 leading-relaxed">
                  Working systems over novel architectures. Simpler approaches that deliver reliably win. Consistent results under constraint beat theoretical capability under ideal conditions.
                </p>
              </div>
            </RevealSection>

            <RevealSection as="div" delay={200} className="group bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
              <div className="relative h-[140px] overflow-hidden">
                <Image
                  src="/images/value-constraints.webp"
                  alt="Constraints flowing into design parameters"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
              <div className="p-6 sm:p-8">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">03</span>
                <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">Constraints as design input</h3>
                <p className="font-satoshi text-sm text-white/25 leading-relaxed">
                  Constraints are design parameters, not problems to overcome. Systems built for these conditions are inherently more resilient, and resilience is a competitive advantage.
                </p>
              </div>
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
              Open to conversations about applied AI, African infrastructure, and building reliable systems under constraint.
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
