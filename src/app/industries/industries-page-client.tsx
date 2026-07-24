"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealSection } from "@/components/reveal-section";

const industries = [
  {
    number: "01",
    title: "Mining & Resources",
    description: "Operational data from remote sites arrives in fragments. Equipment monitoring, safety reporting and production tracking systems that work when the mine camp network drops. Dashboards that reflect reality, not the last time connectivity allowed a sync.",
    conditions: ["Remote site connectivity", "Fragmented operational data", "Safety compliance reporting", "Equipment monitoring at distance"],
  },
  {
    number: "02",
    title: "Logistics & Distribution",
    description: "Route planning, fleet management and delivery tracking systems that account for roads that wash out, checkpoints that delay, and warehouses that cannot always connect to the central system. Real-time adjustments based on local conditions, not headquarters assumptions.",
    conditions: ["Variable route conditions", "Intermittent warehouse connectivity", "Multi-node inventory tracking", "Local driver communication"],
  },
  {
    number: "03",
    title: "Agriculture & Agri-processing",
    description: "Crop monitoring, yield forecasting and supply chain coordination for operations where the nearest cell tower might be hours away. Systems that help agricultural organisations make decisions with partial data, not wait for complete information that never arrives.",
    conditions: ["Rural connectivity gaps", "Seasonal data variability", "Multi-site processing operations", "Extension service coordination"],
  },
  {
    number: "04",
    title: "Public Sector & Development",
    description: "Program monitoring, reporting and coordination systems for government and development organisations operating across regions with different infrastructure conditions. Measurable outcomes tied to programme objectives, not technology adoption metrics.",
    conditions: ["Multi-region coordination", "Reporting and accountability requirements", "Variable local infrastructure", "Governance and compliance frameworks"],
  },
  {
    number: "05",
    title: "Financial Services",
    description: "Risk assessment, compliance monitoring and reporting systems for banks and insurers operating in markets where customer data arrives from multiple informal channels. Decision systems that work with the data available, not the data assumed.",
    conditions: ["Fragmented customer data sources", "Regulatory reporting timelines", "Risk assessment under uncertainty", "Branch network connectivity variance"],
  },
];

export function IndustriesPage() {
  return (
    <div className="min-h-screen bg-atlantic-black">
      {/* Hero */}
      <section className="relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-atlantic-black/[0.85] z-[1]" />
        <div className="relative z-[2] px-6 sm:px-8 md:px-12 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">Industries</span>
            </div>
            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.05em] text-skeleton-bone leading-[1.1] mb-5">
              Where constraint-aware
              <br />
              systems matter most
            </h1>
            <div className="w-10 h-[1px] bg-rust-signal/60 animate-line-expand" />
            <p className="font-satoshi text-sm sm:text-base text-white/45 leading-relaxed max-w-lg mt-5">
              Industries where operational conditions make conventional AI systems unreliable.
              Each sector faces specific constraints that Tangison systems are built to handle.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      {industries.map((industry) => (
        <RevealSection key={industry.number} className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
              <div className="md:w-[35%]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">{industry.number}</span>
                  <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone">{industry.title}</h2>
                </div>
                <div className="w-10 h-[1px] bg-rust-signal/60" />
              </div>

              <div className="md:w-[65%]">
                <p className="font-satoshi text-base sm:text-lg text-white/45 leading-relaxed mb-6">
                  {industry.description}
                </p>
                <h3 className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">
                  Operational conditions
                </h3>
                <ul className="space-y-3">
                  {industry.conditions.map((condition) => (
                    <li key={condition} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-[6px] bg-signal-teal/50" />
                      <span className="font-satoshi text-[14px] text-white/40 leading-[1.5]">{condition}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealSection>
      ))}

      {/* CTA */}
      <RevealSection className="relative z-10 px-6 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone mb-4">
              Discuss your sector
            </h2>
            <p className="font-satoshi text-sm text-white/40 leading-relaxed">
              We learn your operational constraints before proposing a solution. Tell us about your industry conditions.
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
    </div>
  );
}
