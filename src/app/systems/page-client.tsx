"use client";

import React, { useEffect, useRef } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { SystemsShowcase } from "@/components/tangison/systems-showcase";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const capabilities = [
  {
    id: "sovereign-data",
    category: "Infrastructure",
    title: "Sovereign Data Facilities",
    description:
      "Physical and digital fortresses protecting institutional intelligence within African borders. No offshore dependencies. No foreign access points.",
    specifications: [
      "AES-256-GCM encryption at rest",
      "Multi-region replication within SADC",
      "Physical security: MIL-SPEC compliance",
      "Air-gapped backup infrastructure",
    ],
    status: "OPERATIONAL",
  },
  {
    id: "ai-infra",
    category: "Intelligence",
    title: "AI Infrastructure",
    description:
      "Localized models trained on regional context. Inference at the edge. No dependency on offshore compute for critical decision-making.",
    specifications: [
      "On-premise model training pipelines",
      "Edge inference for low-connectivity zones",
      "Regional language model support",
      "Context-aware institutional AI",
    ],
    status: "OPERATIONAL",
  },
  {
    id: "signal",
    category: "Communication",
    title: "Signal Architecture",
    description:
      "Low-bandwidth, high-reliability communication arrays for disparate operations. Ensuring the signal cuts through the noise, regardless of the environment.",
    specifications: [
      "Mesh networking for degraded environments",
      "Sub-50ms latency within operational zones",
      "Encrypted signal routing protocols",
      "Multi-path redundancy",
    ],
    status: "OPERATIONAL",
  },
  {
    id: "resilient",
    category: "Operations",
    title: "Resilient Platforms",
    description:
      "Systems designed to function when primary networks fail. Built for the reality of the continent — where 99.999% uptime means surviving the 0.001%.",
    specifications: [
      "Automatic failover architecture",
      "Offline-first operational capability",
      "Graceful degradation protocols",
      "99.999% uptime in hostile environments",
    ],
    status: "OPERATIONAL",
  },
  {
    id: "strategic-intel",
    category: "Intelligence",
    title: "Strategic Intelligence",
    description:
      "Raw, actionable signal synthesized from unstructured data. Not dashboards — decision-grade intelligence for decision-makers operating under pressure.",
    specifications: [
      "Multi-source data synthesis",
      "Predictive threat modeling",
      "Real-time operational briefings",
      "Classified compartment handling",
    ],
    status: "OPERATIONAL",
  },
  {
    id: "data-autonomy",
    category: "Sovereignty",
    title: "Data Autonomy",
    description:
      "African data must reside on African infrastructure. We design closed-loop systems that protect institutional memory from offshore extraction and disruption.",
    specifications: [
      "Data sovereignty compliance frameworks",
      "Jurisdictional data isolation",
      "National data residency enforcement",
      "Anti-extraction protocol layers",
    ],
    status: "OPERATIONAL",
  },
];

export default function SystemsPage() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <SiteShell>
      <PageHeader
        label="Systems"
        title="Operational capabilities for hostile environments."
        subtitle="Every system we build assumes the worst. Network failure. Power instability. Physical threat. Our infrastructure survives because it was designed to."
      />

      {/* Capabilities Grid */}
      <section ref={sectionRef} className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="System capabilities">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-[0.3em]">
              Core Capabilities
            </span>
          </div>

          <div className="space-y-4">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#0A0B0C] border border-white/[0.06] overflow-hidden group hover:border-white/[0.1] transition-colors duration-500"
              >
                <div className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Left: Category & Title */}
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-2 h-2 bg-green-500/40" />
                        <span className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-[0.25em]">
                          {cap.category}
                        </span>
                      </div>
                      <h3 className="font-cabinet text-xl md:text-2xl tracking-tight mb-3 group-hover:text-skeleton-bone transition-colors">
                        {cap.title}
                      </h3>
                      <p className="font-satoshi text-fog-gray/50 text-sm leading-relaxed">
                        {cap.description}
                      </p>
                    </div>

                    {/* Right: Specifications */}
                    <div className="md:w-1/3">
                      <div className="font-jetbrains text-[9px] text-fog-gray/25 uppercase tracking-[0.25em] mb-4">
                        Specifications
                      </div>
                      <ul className="space-y-2">
                        {cap.specifications.map((spec, j) => (
                          <li key={j} className="font-jetbrains text-[11px] text-fog-gray/50 flex items-start gap-2">
                            <span className="text-rust-signal/50 mt-0.5">—</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Status */}
                    <div className="md:w-1/3 flex md:justify-end md:items-start">
                      <div className="font-jetbrains text-[9px] text-green-500/50 tracking-[0.2em] uppercase border border-green-500/10 px-3 py-1.5">
                        {cap.status}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Systems Showcase */}
      <SystemsShowcase />

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-deep-ocean/30" aria-label="Next step">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight mb-6">
            Understand the intelligence.
          </h2>
          <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light">
            See how strategic signal flows through sovereign infrastructure.
          </p>
          <Link
            href="/intelligence"
            className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
          >
            View Intelligence
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
