"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";

const principles = [
  {
    number: "01",
    title: "Reliability first",
    description: "Graceful degradation, local fallbacks and operational continuity are core requirements. Systems that only work under ideal conditions are not production-ready. Every component must survive the worst day of your infrastructure.",
  },
  {
    number: "02",
    title: "Practical over impressive",
    description: "Working systems over novel architectures. Simpler approaches that deliver reliably win. Consistent results under constraint beat theoretical capability under ideal conditions. We do not build for demonstration; we build for production.",
  },
  {
    number: "03",
    title: "Constraints as design input",
    description: "Unreliable connectivity, sparse data and limited local capacity are not problems to overcome. They are design parameters. Systems built for these conditions are inherently more resilient, and resilience is a competitive advantage.",
  },
  {
    number: "04",
    title: "Honest evidence",
    description: "No fabricated metrics, no unproven claims, no testimonials written by marketers. Every capability statement references a specific system, a real constraint and an actual result. If we cannot prove it, we do not claim it.",
  },
];

const ecosystem = [
  {
    name: "Studio",
    url: "https://studio.tangison.com",
    description: "Creative & Design Division",
    status: "Active",
    image: "/images/eco-studio.webp",
  },
  {
    name: "Agent",
    url: "https://agent.tangison.com",
    description: "AI Operations Platform",
    status: "In Development",
    image: "/images/eco-agent.webp",
  },
  {
    name: "Labs",
    url: "https://labs.tangison.com",
    description: "Research & Development",
    status: "In Development",
    image: "/images/eco-labs.webp",
  },
];

export function CompanyPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero */}
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
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">Company</span>
            </div>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
              About Tangison
            </h1>
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
          </div>
        </div>
      </section>

      {/* Story section */}
      <RevealSection className="relative z-10 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-mission-field.webp"
            alt=""
            fill
            className="object-cover opacity-[0.15]"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">01</span>
                <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Our Story</h2>
              </div>
              <div className="w-10 h-[1px] bg-rust-signal/60" />
              <div className="mt-6 relative h-[200px] sm:h-[240px] overflow-hidden">
                <Image
                  src="/images/about-mission-field.webp"
                  alt="Remote telemetry monitoring station in field deployment"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed mb-4">
                Tangison Technologies was founded by Tangi Iigonda in Windhoek, Namibia, to solve one
                problem: AI infrastructure built for ideal conditions fails where it is needed most.
                Silicon Valley architectures assume unlimited connectivity, complete data and abundant
                compute. These assumptions do not hold across most of the world.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed mb-4">
                Tangison builds systems that work in production, not in demonstration. Graceful
                degradation, local processing fallbacks and clear operational boundaries are core
                requirements, not optional features. Every system must survive the worst day of your
                infrastructure and still deliver useful output.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed">
                The company operates through three divisions: Studio handles creative and design,
                Agent provides AI operations infrastructure, and Labs drives research and development.
                Together they form a vertical stack from concept through deployment, all built against
                the same constraint-aware philosophy.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Why Namibia */}
      <RevealSection className="relative z-10 overflow-hidden border-t border-white/[0.06]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-why-namibia.webp"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            <div className="md:w-1/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">02</span>
                <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Why Namibia</h2>
              </div>
              <div className="w-10 h-[1px] bg-signal-teal/60" />
              <div className="mt-6 relative h-[200px] sm:h-[240px] overflow-hidden">
                <Image
                  src="/images/about-why-namibia.webp"
                  alt="Telecommunications tower against vast Namibian horizon"
                  fill
                  className="object-cover opacity-80"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-atlantic-black to-transparent" />
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed mb-4">
                Namibia is a test case for the constraints that define AI deployment across emerging
                markets. Intermittent connectivity, sparse operational data, limited local technical
                capacity and complex regulatory environments. Building here means systems are tested
                against the conditions they will face, not assumptions from environments that do not
                match reality.
              </p>
              <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed">
                These constraints are not unique to Namibia. They are representative of conditions
                across sub-Saharan Africa, South Asia and other regions where AI could deliver
                transformative value if it could survive the environment. Tangison builds for these
                conditions first, because systems that survive here work everywhere.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Principles */}
      <RevealSection id="principles" className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">03</span>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Principles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {principles.map((principle) => (
              <div key={principle.number} className="group bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 overflow-hidden">
                <div className="p-6 sm:p-8">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />
                  <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">{principle.number}</span>
                  <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">{principle.title}</h3>
                  <p className="font-satoshi text-sm text-white/40 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Ecosystem */}
      <RevealSection id="ecosystem" className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-3 mb-8 sm:mb-12">
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">04</span>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {ecosystem.map((item) => {
              const isLive = item.status === "Active";
              return (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/[0.04] border border-white/[0.06] hover:border-rust-signal/20 hover:bg-white/[0.06] transition-all duration-500 block overflow-hidden"
                >
                  <div className="relative h-[100px] sm:h-[120px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name}: ${item.description}`}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-atlantic-black to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-1.5 h-1.5 ${isLive ? "bg-signal-teal" : "bg-white/20"}`} />
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/35">
                        {item.status}
                      </span>
                    </div>
                    <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-2">
                      {item.name}
                    </h3>
                    <p className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/35 group-hover:text-white/50 transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </RevealSection>

      {/* CTA */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">
              Want to know more?
            </h2>
            <p className="font-satoshi text-sm text-white/40 leading-relaxed">
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
              { "@type": "ListItem", position: 2, name: "Company", item: "https://tangison.com/company" },
            ],
          }),
        }}
      />
    </div>
  );
}
