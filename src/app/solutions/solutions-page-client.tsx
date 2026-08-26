"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";
import { ProcessAutomationConsole } from "@/components/process-automation-console";

const solutions = [
  {
    id: "ai-operations",
    number: "01",
    heading: "AI Operations & Automation",
    tagline: "Human-supervised, field-resilient",
    description: "Agent-based workflows that monitor, decide and act within your infrastructure. They degrade gracefully when connectivity drops and resume when conditions improve. Human approval controls stay in place for high-impact decisions. No system operates autonomously without your oversight.",
    deliverables: [
      "Workflow architecture and agent design",
      "AI agents with human approval controls",
      "Monitoring interfaces and exception handling",
      "Integration pipelines to existing systems",
      "Operating documentation and handover",
    ],
    image: "/images/services-ai-ops.webp",
    accentColor: "rust-signal",
  },
  {
    id: "data-decisions",
    number: "02",
    heading: "Data & Decision Systems",
    tagline: "Fragmented data, unified decisions",
    description: "Systems that transform scattered operational information into decisions you can act on today. Executive dashboards, data pipelines, forecasting tools and anomaly detection built for imperfect data sources. No system requires perfect data to produce useful output.",
    deliverables: [
      "Executive dashboards and reporting",
      "Data pipelines from fragmented sources",
      "Forecasting tools and anomaly detection",
      "Automated reporting and alert systems",
      "Decision-support interfaces",
    ],
    image: "/images/services-applied-ai.webp",
    accentColor: "signal-teal",
  },
  {
    id: "resilient-platforms",
    number: "03",
    heading: "Resilient Digital Platforms",
    tagline: "Offline-capable, locally maintainable",
    description: "Applications that work without constant internet, synchronise when connectivity returns, and can be operated and maintained by local teams. Cloud and self-hosted deployment options. Every platform includes technical handover documentation and administration tools so your team can run what we build.",
    deliverables: [
      "Offline-capable applications",
      "Cloud and self-hosted deployment options",
      "System integrations and data synchronisation",
      "Administration tools and user management",
      "Technical handover documentation",
    ],
    image: "/images/service-research.webp",
    accentColor: "rust-signal",
  },
  {
    id: "strategy-deployment",
    number: "04",
    heading: "Strategy & Deployment",
    tagline: "Practical adoption, measurable outcomes",
    description: "AI adoption planning tied to measurable operational needs, not theoretical capability. Readiness assessments, use-case prioritisation, technical roadmaps and prototypes. Governance frameworks for responsible deployment. Every engagement defines a specific metric to improve before any technology is selected.",
    deliverables: [
      "Organisational readiness assessment",
      "Use-case prioritisation and value mapping",
      "Technical roadmap and architecture plan",
      "Working prototype for priority use case",
      "Governance framework and deployment plan",
    ],
    image: "/images/services-hero-infrastructure.webp",
    accentColor: "signal-teal",
  },
];

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services-hero-infrastructure.webp"
            alt="Industrial infrastructure at dusk"
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
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">Solutions</span>
            </div>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
              Four service areas,
              <br />
              one philosophy
            </h1>
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
            <p className="font-satoshi text-sm sm:text-base text-white/45 leading-relaxed max-w-lg mt-5">
              Every system designed against real deployment constraints. Four service areas, four sets of
              concrete deliverables, one principle: measurable outcomes over theoretical capability.
            </p>
          </div>
        </div>
      </section>

      {/* Each solution */}
      {solutions.map((solution) => (
        <RevealSection key={solution.id} id={solution.id} className="relative z-10 overflow-hidden border-t border-white/[0.06]">
          <div className="absolute inset-0 z-0">
            <Image
              src={solution.image}
              alt=""
              fill
              className="object-cover opacity-[0.12]"
              sizes="100vw"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-[2] px-6 sm:px-8 md:px-12 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto w-full">
              <div className="flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
                {/* Left: heading + preview image */}
                <div className="md:w-[35%]">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">{solution.number}</span>
                    <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">{solution.heading}</h2>
                  </div>
                  <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-signal-teal/60">{solution.tagline}</span>
                  <div className={`w-10 h-[1px] bg-${solution.accentColor}/60 mt-4`} />
                  <div className="mt-6 relative h-[200px] sm:h-[260px] overflow-hidden">
                    <Image
                      src={solution.image}
                      alt={`${solution.heading} system interface`}
                      fill
                      className="object-cover opacity-80"
                      sizes="(max-width: 768px) 100vw, 35vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-atlantic-black to-transparent" />
                  </div>
                </div>

                {/* Right: description + deliverables */}
                <div className="md:w-[65%]">
                  <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  <h3 className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">
                    What you receive
                  </h3>
                  <ul className="space-y-3">
                    {solution.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-start gap-3">
                        <span className={`w-1.5 h-1.5 mt-[6px] bg-${solution.accentColor}/50`} />
                        <span className="font-satoshi text-[14px] text-white/45 leading-[1.5]">
                          {deliverable}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </RevealSection>
      ))}

      {/* Interactive Process Automation Engine Showcase */}
      <ProcessAutomationConsole />

      {/* CTA */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">
              Discuss a system
            </h2>
            <p className="font-satoshi text-sm text-white/40 leading-relaxed">
              Tell us about the conditions you work in. We respond to every enquiry with a proposal tied to measurable outcomes.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300 self-start md:self-center"
          >
            Discuss a system
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
              { "@type": "ListItem", position: 2, name: "Solutions", item: "https://tangison.com/solutions" },
            ],
          }),
        }}
      />
    </div>
  );
}
