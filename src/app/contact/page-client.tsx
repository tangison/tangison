"use client";

import React, { useState } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";

const contactMethods = [
  {
    label: "Email",
    value: "contact@tangison.com",
    href: "mailto:contact@tangison.com",
    copyable: true,
  },
  {
    label: "Domain",
    value: "tangison.com",
    href: "https://tangison.com",
    copyable: true,
  },
  {
    label: "Location",
    value: "Windhoek, Namibia",
    href: null,
    copyable: false,
  },
  {
    label: "Identifier",
    value: "TNG-NAM-01",
    href: null,
    copyable: false,
  },
];

function CopyableField({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = value;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 group"
      aria-label={`Copy ${value} to clipboard`}
    >
      <span className="font-cabinet text-lg md:text-xl tracking-tight text-skeleton-bone group-hover:text-fog-gray transition-colors">
        {value}
      </span>
      {copied ? (
        <Check className="w-4 h-4 text-rust-signal" />
      ) : (
        <Copy className="w-4 h-4 text-fog-gray/20 group-hover:text-fog-gray/50 transition-colors" />
      )}
    </button>
  );
}

const engagementTypes = [
  {
    title: "Strategic Infrastructure Planning",
    description: "Sovereign system architecture for institutions and enterprise operations.",
  },
  {
    title: "Digital Sovereignty Audit",
    description: "Assessment of data residency, jurisdictional exposure, and dependency risk.",
  },
  {
    title: "Custom System Architecture",
    description: "Bespoke infrastructure design for hostile environments and critical operations.",
  },
  {
    title: "Intelligence Platform Deployment",
    description: "Signal architecture and intelligence system implementation.",
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        label="Contact"
        title="Build systems that endure."
        subtitle="Engage Tangison for strategic infrastructure planning, digital sovereignty audits, or custom system architecture."
      />

      {/* Main Contact Section */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-atlantic-black" aria-label="Contact information">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Details */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
                <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-[0.3em]">
                  Reach Us
                </span>
              </div>

              <div className="space-y-8">
                {contactMethods.map((method) => (
                  <div key={method.label}>
                    <div className="font-jetbrains text-[9px] text-fog-gray/30 uppercase tracking-[0.25em] mb-2">
                      {method.label}
                    </div>
                    {method.copyable ? (
                      <CopyableField value={method.value} />
                    ) : (
                      <span className="font-cabinet text-lg md:text-xl tracking-tight text-skeleton-bone">
                        {method.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Primary CTA */}
              <div className="mt-12">
                <a
                  href="mailto:contact@tangison.com"
                  className="inline-flex items-center gap-3 bg-skeleton-bone text-atlantic-black px-10 py-5 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-white hover:scale-[1.02] transition-all duration-300 group shadow-2xl shadow-black/20"
                >
                  Request Strategic Access
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* Right: Engagement Types */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-[1px] bg-rust-signal/50" aria-hidden="true" />
                <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-[0.3em]">
                  Engagement Types
                </span>
              </div>

              <div className="space-y-4">
                {engagementTypes.map((type, i) => (
                  <motion.div
                    key={type.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#0A0B0C] border border-white/[0.06] p-6 md:p-8 group hover:border-white/[0.1] transition-colors duration-500"
                  >
                    <h3 className="font-cabinet text-lg tracking-tight mb-2 group-hover:text-skeleton-bone transition-colors">
                      {type.title}
                    </h3>
                    <p className="font-satoshi text-fog-gray/50 text-sm leading-relaxed">
                      {type.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atmospheric Closing */}
      <section className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 overflow-hidden bg-deep-ocean/50" aria-label="Closing">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/cta-ocean-fog.png"
            alt=""
            role="presentation"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(100%) contrast(1.1) brightness(0.4)" }}
            loading="lazy"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-satoshi italic text-fog-gray/25 text-lg block mb-4">
              From the Atlantic coast.
            </span>
            <h2 className="font-cabinet text-3xl md:text-5xl tracking-tight text-skeleton-bone">
              The signal survives the storm.
            </h2>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
