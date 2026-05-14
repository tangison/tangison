"use client";

import React, { useEffect, useRef, useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { SystemsShowcase } from "@/components/tangison/systems-showcase";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    kpis: [
      { label: "Encryption", value: "AES-256" },
      { label: "Replication", value: "3-zone" },
    ],
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
    kpis: [
      { label: "Inference", value: "Edge" },
      { label: "Languages", value: "12+" },
    ],
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
    kpis: [
      { label: "Latency", value: "<50ms" },
      { label: "Redundancy", value: "Multi-path" },
    ],
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
    kpis: [
      { label: "Uptime", value: "99.999%" },
      { label: "Failover", value: "Auto" },
    ],
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
    kpis: [
      { label: "Sources", value: "Multi" },
      { label: "Classification", value: "Sovereign" },
    ],
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
    kpis: [
      { label: "Jurisdiction", value: "National" },
      { label: "Extraction", value: "Blocked" },
    ],
  },
];

export default function SystemsPage() {
  const [activeSystem, setActiveSystem] = useState<string | null>(null);

  return (
    <SiteShell>
      <PageHeader
        label="Systems"
        title="Operational capabilities for hostile environments."
        subtitle="Every system we build assumes the worst. Network failure. Power instability. Physical threat. Our infrastructure survives because it was designed to."
      />

      {/* Capabilities Grid */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="System capabilities">
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
                className={`bg-[#0A0B0C] border overflow-hidden group transition-colors duration-500 cursor-pointer ${
                  activeSystem === cap.id
                    ? "border-rust-signal/20"
                    : "border-white/[0.06] hover:border-white/[0.1]"
                }`}
                onClick={() => setActiveSystem(activeSystem === cap.id ? null : cap.id)}
                role="button"
                tabIndex={0}
                aria-expanded={activeSystem === cap.id}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveSystem(activeSystem === cap.id ? null : cap.id); }}}
              >
                <div className="p-6 md:p-10">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    {/* Left: Category & Title */}
                    <div className="md:w-1/3">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-2 h-2 transition-colors ${
                          activeSystem === cap.id ? "bg-rust-signal" : "bg-green-500/40"
                        }`} />
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

                      {/* KPIs */}
                      <div className="flex gap-6 mt-6">
                        {cap.kpis.map((kpi) => (
                          <div key={kpi.label}>
                            <div className="font-cabinet text-base text-skeleton-bone tracking-tight">{kpi.value}</div>
                            <div className="font-jetbrains text-[8px] text-fog-gray/30 uppercase tracking-wider">{kpi.label}</div>
                          </div>
                        ))}
                      </div>
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

                {/* Expandable detail panel */}
                <div className={`overflow-hidden transition-all duration-500 ${
                  activeSystem === cap.id ? "max-h-48" : "max-h-0"
                }`}>
                  <div className="px-6 md:px-10 pb-6 md:pb-10 border-t border-white/[0.04]">
                    <div className="pt-6 bg-terminal-black/50 -mx-6 md:-mx-10 px-6 md:px-10 py-6">
                      <div className="font-jetbrains text-[10px] text-rust-signal/60 uppercase tracking-widest mb-3">
                        Deployment Status
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                        <div>
                          <span className="font-jetbrains text-[10px] text-fog-gray/30 uppercase tracking-wider">Region</span>
                          <p className="font-satoshi text-fog-gray/60 text-sm mt-1">SADC operational zone</p>
                        </div>
                        <div>
                          <span className="font-jetbrains text-[10px] text-fog-gray/30 uppercase tracking-wider">Compliance</span>
                          <p className="font-satoshi text-fog-gray/60 text-sm mt-1">National data residency</p>
                        </div>
                        <div>
                          <span className="font-jetbrains text-[10px] text-fog-gray/30 uppercase tracking-wider">Integration</span>
                          <p className="font-satoshi text-fog-gray/60 text-sm mt-1">Full-stack compatible</p>
                        </div>
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

      {/* System Comparison */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]" aria-label="System comparison">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Infrastructure vs. Conventional
            </span>
            <h2 className="font-cabinet text-4xl md:text-5xl tracking-tight">
              Built differently.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                conventional: "Cloud-dependent architecture",
                tangison: "Sovereign on-premise infrastructure",
              },
              {
                conventional: "Offshore data processing",
                tangison: "In-jurisdiction compute and storage",
              },
              {
                conventional: "99.9% uptime SLA",
                tangison: "99.999% uptime in hostile environments",
              },
              {
                conventional: "Centralized single points",
                tangison: "Distributed mesh redundancy",
              },
              {
                conventional: "Generic AI models",
                tangison: "Regional context-aware models",
              },
              {
                conventional: "Reactive security layers",
                tangison: "Hostile-environment baseline security",
              },
            ].map((row, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-atlantic-black border border-white/[0.04] p-5 opacity-40">
                  <div className="font-jetbrains text-[8px] text-fog-gray/30 uppercase tracking-wider mb-2">Conventional</div>
                  <p className="font-satoshi text-fog-gray/40 text-sm">{row.conventional}</p>
                </div>
                <div className="bg-atlantic-black border border-rust-signal/10 p-5">
                  <div className="font-jetbrains text-[8px] text-rust-signal/40 uppercase tracking-wider mb-2">Tangison</div>
                  <p className="font-satoshi text-skeleton-bone text-sm">{row.tangison}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
