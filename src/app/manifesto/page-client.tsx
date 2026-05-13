"use client";

import React, { useEffect, useRef } from "react";
import { SiteShell } from "@/components/tangison/site-shell";
import { PageHeader } from "@/components/tangison/page-header";
import { motion, useInView } from "framer-motion";
import { TangisonLogo } from "@/components/tangison/logo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const manifestoPoints = [
  {
    statement: "We build for what remains.",
    elaboration:
      "The Skeleton Coast teaches a simple truth: structures that survive are built differently. Not with excess, but with intention. Every element must justify its existence under extreme conditions.",
  },
  {
    statement: "Sovereignty is not negotiable.",
    elaboration:
      "African data must reside on African infrastructure. African intelligence must operate under African authority. Dependencies on foreign systems are vulnerabilities by another name.",
  },
  {
    statement: "Signal over noise.",
    elaboration:
      "The world is drowning in information. Our role is not to add to the noise but to extract what matters. Decision-grade intelligence for decision-makers operating under real pressure.",
  },
  {
    statement: "Hostile environments are the baseline.",
    elaboration:
      "We do not design for ideal conditions. We design for network failure, power instability, physical threat, and institutional pressure. If it works here, it works anywhere.",
  },
  {
    statement: "Resilience is infrastructure.",
    elaboration:
      "Resilience is not a feature we add. It is the foundation we build on. Every system, every protocol, every architectural decision begins with the question: what happens when this fails?",
  },
  {
    statement: "Clarity builds sovereign systems.",
    elaboration:
      "Complexity is the enemy of reliability. We pursue clarity in architecture, in communication, in purpose. Clear systems survive. Confused systems collapse.",
  },
];

const closingStatement = "We are not building for the comfortable. We are building for the inevitable.";

export default function ManifestoPage() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-200px" });

  useEffect(() => {
    if (!sectionRef.current || !quoteRef.current) return;

    const ctx = gsap.context(() => {
      const words = quoteRef.current!.querySelectorAll(".manifesto-word");
      if (words.length === 0) return;

      gsap.fromTo(
        words,
        { opacity: 0.06 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "center center",
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SiteShell>
      <PageHeader
        label="Manifesto"
        title="What we believe."
        subtitle="The philosophy that underlies every system, signal, and structure we build."
      />

      {/* Opening Quote */}
      <section
        ref={sectionRef}
        className="py-32 md:py-48 px-6 md:px-12 lg:px-20 bg-atlantic-black flex items-center justify-center min-h-[60vh]"
        aria-label="Opening statement"
      >
        <div ref={quoteRef} className="max-w-4xl text-center">
          <h2 className="font-cabinet text-[clamp(1.8rem,4.5vw,4rem)] leading-[1.1] text-skeleton-bone tracking-tight">
            {closingStatement.split(" ").map((word, i) => (
              <span
                key={i}
                className="manifesto-word inline-block mr-[0.25em]"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      </section>

      {/* Manifesto Points */}
      <section className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#0A0B0C] border-t border-white/[0.04]" aria-label="Manifesto principles">
        <div className="max-w-[1000px] mx-auto">
          <div className="space-y-0">
            {manifestoPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/[0.06] py-12 md:py-16"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-jetbrains text-[10px] text-rust-signal/40 tracking-[0.25em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 h-[1px] bg-white/[0.04]" />
                </div>

                <h3 className="font-cabinet text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4 leading-[1.1]">
                  {point.statement}
                </h3>
                <p className="font-satoshi text-fog-gray/50 text-base md:text-lg leading-relaxed max-w-2xl font-light">
                  {point.elaboration}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-40 md:py-56 px-6 md:px-12 lg:px-20 bg-atlantic-black flex items-center justify-center min-h-[70vh]" aria-label="Closing statement">
        <div className="max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-satoshi italic text-fog-gray/25 text-lg md:text-2xl block mb-6">
              Clarity under pressure.
            </span>
            <h2 className="font-cabinet text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-skeleton-bone tracking-tight mb-10">
              Resilience is not a feature.
              <br />
              It is the infrastructure.
            </h2>
            <TangisonLogo className="w-10 h-10 text-rust-signal/40 mx-auto" />
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
