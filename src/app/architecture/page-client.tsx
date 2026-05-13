"use client";

import React from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Minimal Force",
    description:
      "Every element serves a structural purpose. No decorative systems. No redundant complexity. The minimum force required to achieve the maximum operational outcome.",
    principle: "Efficiency through reduction.",
  },
  {
    number: "02",
    title: "Redundant Systems",
    description:
      "No single point of failure. Every critical pathway has a fallback. Every decision node has a mirror. Designed for the reality of the continent.",
    principle: "Survival through multiplication.",
  },
  {
    number: "03",
    title: "Absolute Sovereignty",
    description:
      "Data within borders. Compute within jurisdiction. Intelligence under national authority. No offshore dependencies. No foreign access points.",
    principle: "Independence through infrastructure.",
  },
  {
    number: "04",
    title: "Hostile-Environment Design",
    description:
      "Every system assumes the worst. Network failure. Power instability. Physical threat. Our infrastructure survives because it was built for conditions that break conventional systems.",
    principle: "Resilience through anticipation.",
  },
  {
    number: "05",
    title: "Signal Over Noise",
    description:
      "We prioritize clarity. Raw, actionable intelligence over decorative dashboards. Direct signal paths over complex intermediaries. Decision-grade data for decision-makers.",
    principle: "Clarity through discipline.",
  },
];

const layers = [
  {
    name: "Physical Layer",
    code: "TNG-PHY-01",
    desc: "Data centers, server infrastructure, physical security, power redundancy",
    status: "OPERATIONAL",
  },
  {
    name: "Network Layer",
    code: "TNG-NET-01",
    desc: "Signal architecture, low-bandwidth communication, mesh networking",
    status: "OPERATIONAL",
  },
  {
    name: "Compute Layer",
    code: "TNG-CMP-01",
    desc: "AI inference, model training, localized processing, edge compute",
    status: "OPERATIONAL",
  },
  {
    name: "Intelligence Layer",
    code: "TNG-INT-01",
    desc: "Data synthesis, strategic analysis, predictive modeling, signal routing",
    status: "OPERATIONAL",
  },
  {
    name: "Application Layer",
    code: "TNG-APP-01",
    desc: "Operational dashboards, institutional interfaces, sovereign platforms",
    status: "OPERATIONAL",
  },
];

export default function ArchitecturePage() {
  return (
    <SiteShell>
      <PageHeader
        label="Architecture"
        title="Built to survive what breaks others."
        subtitle="The structural philosophy behind Tangison infrastructure. Every layer designed for hostile environments, sovereign operation, and permanent resilience."
      />

      {/* Design Principles */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="Design principles">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
            <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-[0.3em]">
              Core Principles
            </span>
          </div>

          <div className="space-y-0">
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/[0.06] py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 group"
              >
                <div className="md:col-span-1">
                  <span className="font-jetbrains text-[11px] text-rust-signal/60 tracking-wider">
                    {p.number}
                  </span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="font-cabinet text-2xl md:text-3xl tracking-tight group-hover:text-skeleton-bone transition-colors">
                    {p.title}
                  </h3>
                </div>
                <div className="md:col-span-5">
                  <p className="font-satoshi text-fog-gray/60 leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="md:col-span-3 flex items-end">
                  <p className="font-cabinet text-fog-gray/25 text-sm italic">
                    {p.principle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Layers */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]" aria-label="Infrastructure layers">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 md:mb-20">
            <span className="font-jetbrains text-[10px] text-rust-signal/50 uppercase tracking-[0.3em] mb-4 block">
              Stack Architecture
            </span>
            <h2 className="font-cabinet text-4xl md:text-5xl tracking-tight">
              Five Layers of Sovereignty
            </h2>
          </div>

          <div className="space-y-2">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.code}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="bg-atlantic-black border border-white/[0.06] p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 group hover:border-white/[0.1] transition-colors duration-500"
              >
                <div className="flex items-center gap-4 md:w-[280px]">
                  <div className="w-3 h-3 bg-green-500/40 group-hover:bg-green-500/60 transition-colors" />
                  <h3 className="font-cabinet text-lg tracking-tight">
                    {layer.name}
                  </h3>
                </div>

                <div className="font-jetbrains text-[10px] text-fog-gray/30 tracking-wider md:w-[140px]">
                  {layer.code}
                </div>

                <p className="font-satoshi text-fog-gray/50 text-sm flex-1">
                  {layer.desc}
                </p>

                <div className="font-jetbrains text-[9px] text-green-500/50 tracking-[0.2em] uppercase">
                  {layer.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black border-t border-white/[0.04]" aria-label="Architecture overview">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16">
            <span className="font-jetbrains text-[10px] text-fog-gray/30 uppercase tracking-[0.3em] mb-4 block">
              System Diagram
            </span>
            <h2 className="font-cabinet text-4xl md:text-5xl tracking-tight">
              Structural Overview
            </h2>
          </div>

          <div className="bg-[#0A0B0C] border border-white/[0.06] p-6 md:p-10 overflow-hidden">
            {/* Terminal-style architecture diagram */}
            <div className="font-jetbrains text-[11px] md:text-xs leading-relaxed text-fog-gray/40 space-y-1">
              <p className="text-rust-signal/60">{"# TANGISON INFRASTRUCTURE ARCHITECTURE"}</p>
              <p className="text-rust-signal/60">{"# Classification: Strategic"}</p>
              <p>&nbsp;</p>
              <p>{"┌─────────────────────────────────────────────────┐"}</p>
              <p>{"│                 APPLICATION LAYER                │"}</p>
              <p>{"│    Operational Dashboards · Institutional UI     │"}</p>
              <p>{"├─────────────────────────────────────────────────┤"}</p>
              <p>{"│               INTELLIGENCE LAYER                 │"}</p>
              <p>{"│    Data Synthesis · Strategic Analysis · Signal  │"}</p>
              <p>{"├─────────────────────────────────────────────────┤"}</p>
              <p>{"│                 COMPUTE LAYER                    │"}</p>
              <p>{"│    AI Inference · Local Models · Edge Compute    │"}</p>
              <p>{"├─────────────────────────────────────────────────┤"}</p>
              <p>{"│                 NETWORK LAYER                    │"}</p>
              <p>{"│    Signal Architecture · Mesh · Low-Bandwidth    │"}</p>
              <p>{"├─────────────────────────────────────────────────┤"}</p>
              <p>{"│                 PHYSICAL LAYER                   │"}</p>
              <p>{"│    Data Centers · Power · Physical Security      │"}</p>
              <p>{"└─────────────────────────────────────────────────┘"}</p>
              <p>&nbsp;</p>
              <p className="text-fog-gray/20">{"// All layers operate within African jurisdiction"}</p>
              <p className="text-fog-gray/20">{"// Zero offshore dependencies in critical paths"}</p>
              <p className="text-fog-gray/20">{"// Each layer: independent failure isolation"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-deep-ocean/30" aria-label="Next step">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight mb-6">
            Study the systems.
          </h2>
          <p className="font-satoshi text-fog-gray/60 text-lg mb-10 font-light">
            Explore the operational capabilities built on this architecture.
          </p>
          <Link
            href="/systems"
            className="inline-flex items-center gap-2 bg-skeleton-bone text-atlantic-black px-8 py-4 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-fog-gray transition-all duration-300 group"
          >
            View Systems
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
