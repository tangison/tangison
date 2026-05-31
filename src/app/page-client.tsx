"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { SiteShell } from "@/components/tangison/site-shell";

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const pillars = [
  {
    num: "01",
    title: "Applied AI",
    desc: "Custom intelligent systems for organizations across Africa.",
    href: "/services/applied-ai",
  },
  {
    num: "02",
    title: "AI Infrastructure",
    desc: "Agent orchestration, automation, and deployment systems.",
    href: "/services/infrastructure",
  },
  {
    num: "03",
    title: "Research & Development",
    desc: "Internal experimentation and applied research.",
    href: "/research",
  },
  {
    num: "04",
    title: "Products",
    desc: "Built by TANGISON. Starting with SkillsCamp.",
    href: "/products",
  },
];

const differentiators = [
  {
    title: "Africa-first",
    desc: "Built in Namibia, designed for African business contexts. Not adapted from Western templates.",
  },
  {
    title: "Laboratory approach",
    desc: "We research before we build, and we build before we ship. Rigor over speed.",
  },
  {
    title: "Working AI",
    desc: "Our AI assistant is live on this site right now. We demonstrate, not just claim.",
  },
  {
    title: "Premium quality",
    desc: "No shortcuts, no templates, no compromises. Every system is engineered to last.",
  },
];

const researchCards = [
  {
    title: "Agent Architecture",
    desc: "Exploring multi-agent orchestration patterns for African enterprise.",
  },
  {
    title: "Offline-First AI",
    desc: "Building AI systems that work without reliable internet connectivity.",
  },
  {
    title: "African Language Models",
    desc: "Developing context-aware models for regional languages.",
  },
];

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.08 } },
  viewport: { once: true, margin: "-60px" as const },
};

const staggerItem = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

/* ──────────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────────── */

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1200], [0, 250]);
  const scale = useTransform(scrollY, [0, 1200], [1, 1.1]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    if (!headingRef.current) return;

    const words = headingRef.current.querySelectorAll(".hero-word");
    if (words.length === 0) return;

    const tl = gsap.timeline({ delay: 0.6 });

    tl.fromTo(
      words,
      { y: 60, opacity: 0, rotateX: -15 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const headline = "Applied AI. Built in Africa.";

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-end pb-20 md:pb-32 px-6 md:px-12 lg:px-20 overflow-hidden bg-atlantic-black"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 w-full h-[130%] -top-[15%] will-change-transform"
      >
        <Image
          src="/images/hero-shipwreck.png"
          alt=""
          role="presentation"
          className="object-cover cinematic-image opacity-30"
          fill
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-atlantic-black via-atlantic-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-atlantic-black via-atlantic-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-atlantic-black/50 via-transparent to-transparent" />
        <div
          className="absolute inset-0"
          style={{ boxShadow: "inset 0 0 150px 60px rgba(10,11,12,0.6)" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-10 max-w-6xl"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-2 h-2 bg-rust-signal" aria-hidden="true" />
          <span className="font-jetbrains text-[11px] text-skeleton-bone/60 uppercase tracking-[0.25em]">
            Applied AI Laboratory
          </span>
        </motion.div>

        <h1
          ref={headingRef}
          className="font-cabinet text-[clamp(2.8rem,7vw,7rem)] font-black tracking-[-0.04em] leading-[0.9] text-skeleton-bone mb-8"
          style={{ perspective: "800px" }}
        >
          {headline.split(" ").map((word, i) => (
            <span
              key={i}
              className="hero-word inline-block mr-[0.25em]"
              style={{ opacity: 0 }}
            >
              {word}
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mb-10"
        >
          <p className="text-skeleton-bone/70 font-satoshi text-lg md:text-xl leading-relaxed font-light">
            TANGISON is a Namibian applied AI laboratory that researches,
            builds, and deploys intelligent systems, products, and
            infrastructure across Africa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/services"
            className="bg-rust-signal text-warm-white px-8 py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-rust-light transition-colors flex items-center gap-3 group"
          >
            Explore Services
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/contact"
            className="border border-skeleton-bone/20 text-skeleton-bone px-8 py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-white/5 transition-colors focus-visible:outline-2 focus-visible:outline-rust-signal focus-visible:outline-offset-2"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="absolute bottom-10 right-8 md:right-12 flex flex-col items-center gap-4 opacity-30 md:opacity-100"
        aria-hidden="true"
      >
        <span
          className="font-jetbrains text-[9px] text-white/40 tracking-[0.3em]"
          style={{ writingMode: "vertical-rl" }}
        >
          SCROLL
        </span>
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <div
            className="w-full h-6 absolute top-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(197,106,74,0.4), transparent)",
              animation:
                "scroll-pulse 2.8s cubic-bezier(0.16, 1, 0.3, 1) infinite",
            }}
          />
        </div>
      </motion.div>

      {/* Bottom edge line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5"
        aria-hidden="true"
      />
    </section>
  );
}

/* ──────────────────────────────────────────────
   PILLARS SECTION
   ────────────────────────────────────────────── */

function PillarsSection() {
  return (
    <section
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white"
      aria-label="What we do"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Section header with editorial divider */}
        <motion.div
          {...fadeUp}
          className="flex items-center gap-4 mb-4"
        >
          <div className="editorial-divider" aria-hidden="true" />
        </motion.div>
        <motion.h2
          {...fadeUp}
          className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-16 md:mb-20"
        >
          What We Do
        </motion.h2>

        {/* Pillar cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={pillar.href}
                className="pillar-card group block border border-black/[0.06] bg-warm-white p-6 md:p-8 h-full"
              >
                <div className="flex items-center gap-2 mb-5">
                  <div
                    className="w-1.5 h-1.5 bg-rust-signal"
                    aria-hidden="true"
                  />
                  <span className="font-jetbrains text-[10px] text-ink-muted uppercase tracking-[0.2em]">
                    {pillar.num}
                  </span>
                </div>
                <h3 className="font-cabinet text-xl font-bold tracking-tight text-ink mb-3 group-hover:text-rust-signal transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="font-satoshi text-ink-muted text-sm leading-relaxed mb-6">
                  {pillar.desc}
                </p>
                <div className="flex items-center gap-2 text-ink-muted group-hover:text-rust-signal transition-colors duration-300">
                  <span className="font-jetbrains text-[10px] uppercase tracking-[0.15em]">
                    Explore
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   FEATURED PRODUCT SECTION
   ────────────────────────────────────────────── */

function FeaturedProductSection() {
  return (
    <section
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-gray"
      aria-label="Featured product"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="flex items-center gap-4 mb-4">
          <div className="editorial-divider" aria-hidden="true" />
        </motion.div>
        <motion.h2
          {...fadeUp}
          className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-16 md:mb-20"
        >
          Featured Product
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden border border-black/[0.06] bg-warm-white"
        >
          {/* Decorative background image */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/bento-desert-geometry.png"
              alt=""
              role="presentation"
              className="object-cover opacity-20"
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
            />
          </div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <span className="font-jetbrains text-[10px] text-rust-signal uppercase tracking-[0.25em] mb-4 block">
              PRODUCT
            </span>
            <h3 className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-4">
              SkillsCamp
            </h3>
            <p className="font-satoshi text-ink-muted text-base md:text-lg leading-relaxed max-w-2xl mb-4">
              531+ modular AI agent skills. Zero cloud dependency. Built for
              African contexts.
            </p>
            <a
              href="https://skillscamp.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-jetbrains text-xs text-rust-signal hover:text-rust-light transition-colors mb-8 uppercase tracking-[0.1em]"
            >
              skillscamp.tangison.com
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <div>
              <Link
                href="/products/skillscamp"
                className="inline-flex items-center gap-3 bg-rust-signal text-warm-white px-8 py-4 font-jetbrains text-xs uppercase tracking-widest hover:bg-rust-light transition-colors group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   WHY TANGISON SECTION
   ────────────────────────────────────────────── */

function WhyTangisonSection() {
  return (
    <section
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-warm-white"
      aria-label="Why TANGISON"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="flex items-center gap-4 mb-4">
          <div className="editorial-divider" aria-hidden="true" />
        </motion.div>
        <motion.h2
          {...fadeUp}
          className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink mb-16 md:mb-20"
        >
          Why TANGISON
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="border border-black/[0.06] p-6 md:p-8"
            >
              <h3 className="font-cabinet text-lg md:text-xl font-bold tracking-tight text-ink mb-3">
                {item.title}
              </h3>
              <p className="font-satoshi text-ink-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   RESEARCH PREVIEW SECTION
   ────────────────────────────────────────────── */

function ResearchPreviewSection() {
  return (
    <section
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20 bg-atlantic-black"
      aria-label="From the lab — research preview"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div {...fadeUp} className="flex items-center gap-4 mb-4">
          <div
            className="w-10 h-[1px] bg-rust-signal/50"
            aria-hidden="true"
          />
        </motion.div>
        <motion.h2
          {...fadeUp}
          className="font-cabinet text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-skeleton-bone mb-16 md:mb-20"
        >
          From the Lab
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {researchCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href="/research"
                className="group block border border-white/[0.06] p-6 md:p-8 hover:border-white/[0.12] transition-all duration-500 h-full"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1.5 h-1.5 bg-rust-signal"
                    aria-hidden="true"
                  />
                  <span className="font-jetbrains text-[10px] text-skeleton-bone/40 uppercase tracking-[0.2em]">
                    RESEARCH
                  </span>
                </div>
                <h3 className="font-cabinet text-lg md:text-xl font-bold tracking-tight text-skeleton-bone mb-3 group-hover:text-rust-signal transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="font-satoshi text-skeleton-bone/60 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="flex items-center"
        >
          <Link
            href="/research"
            className="group inline-flex items-center gap-3 font-jetbrains text-xs uppercase tracking-[0.2em] text-skeleton-bone/60 hover:text-rust-signal transition-colors duration-300"
          >
            View All Research
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   CTA SECTION
   ────────────────────────────────────────────── */

function CTASection() {
  return (
    <section
      className="relative py-32 md:py-48 px-6 md:px-12 lg:px-20 overflow-hidden bg-atlantic-black"
      aria-label="Call to action"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-atlantic-black via-atlantic-black/95 to-atlantic-black" />

      {/* Ocean fog background image */}
      <div className="absolute inset-0 opacity-15">
        <Image
          src="/images/cta-ocean-fog.png"
          alt=""
          role="presentation"
          className="object-cover cinematic-image"
          fill
          sizes="100vw"
        />
      </div>

      {/* Decorative geometric elements */}
      <div
        className="absolute -right-32 -top-32 w-[500px] h-[500px] border-[1px] border-white/[0.03] pointer-events-none rotate-45"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 -bottom-24 w-[350px] h-[350px] border-[1px] border-white/[0.02] pointer-events-none rotate-12"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-cabinet text-[clamp(2.5rem,6vw,6rem)] font-black tracking-[-0.04em] text-skeleton-bone mb-6 leading-[0.9]"
        >
          Ready to put AI to work?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cabinet text-2xl md:text-3xl font-bold text-skeleton-bone/60 mb-14"
        >
          Let&apos;s build something.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-rust-signal text-warm-white px-10 py-5 font-jetbrains text-xs uppercase tracking-[0.2em] hover:bg-rust-light transition-colors duration-300 group"
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="border border-skeleton-bone/20 text-skeleton-bone px-8 py-5 font-jetbrains text-xs uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            Try our AI assistant
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-3 font-jetbrains text-[10px] text-skeleton-bone/30 uppercase tracking-[0.3em]"
        >
          <div
            className="w-1.5 h-1.5 bg-rust-signal/50"
            aria-hidden="true"
          />
          <span>Windhoek, Namibia</span>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   HOME PAGE (CLIENT COMPONENT)
   ────────────────────────────────────────────── */

export function HomePage() {
  return (
    <SiteShell>
      <HeroSection />
      <PillarsSection />
      <FeaturedProductSection />
      <WhyTangisonSection />
      <ResearchPreviewSection />
      <CTASection />
    </SiteShell>
  );
}
