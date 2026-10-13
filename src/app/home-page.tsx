"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { animate, stagger } from "animejs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { ProcessAutomationConsole } from "@/components/process-automation-console";
import { RevealSection } from "@/components/reveal-section";
import { ParallaxLayer } from "@/components/scroll-parallax";
import { FortinetLogo } from "@/components/fortinet-logo";
import { MissionTrace } from "@/components/mission-trace";

gsap.registerPlugin(ScrollTrigger);

const partnerCapabilities = [
  {
    title: "Firewalls",
    description: "FortiGate supply, deployment and configuration, sized to your traffic.",
  },
  {
    title: "Administration",
    description: "Policy management, monitoring and reporting handled by our team.",
  },
  {
    title: "Connectivity",
    description: "Secure remote access and site-to-site links between offices and field sites.",
  },
  {
    title: "Tender bids",
    description: "Partner authorisation and documentation for procurement processes that require it.",
  },
];

const problems = [
  {
    title: "Fragmented operational data",
    description: "Reports arrive in spreadsheets, emails, PDFs and handwritten logs. No single source of truth exists for the decisions that matter.",
  },
  {
    title: "Unreliable connectivity",
    description: "Network drops for hours, not minutes. Cloud-only systems stop working when the connection stops. Field teams cannot wait for the network to recover.",
  },
  {
    title: "Manual reporting cycles",
    description: "Monthly reports compiled by hand from disconnected sources. Errors propagate. Decisions lag weeks behind reality.",
  },
  {
    title: "Disconnected systems",
    description: "Three different platforms for inventory, finance and operations. None share data. Teams reconcile manually, slowly, and often incorrectly.",
  },
];

const solutions = [
  {
    heading: "AI Operations & Automation",
    tagline: "Human-supervised, field-resilient",
    description: "Agent-based workflows that monitor, decide and act within your infrastructure. They degrade gracefully when connectivity drops and resume when conditions improve. Human approval controls stay in place for high-impact decisions.",
    href: "/solutions#ai-operations",
    image: "/images/service-ai-operations.webp",
  },
  {
    heading: "Data & Decision Systems",
    tagline: "Fragmented data, unified decisions",
    description: "Executive dashboards, data pipelines, forecasting tools and anomaly detection built for imperfect data sources. Transform scattered operational information into decisions you can act on today.",
    href: "/solutions#data-decisions",
    image: "/images/service-applied-ai.webp",
  },
  {
    heading: "Resilient Digital Platforms",
    tagline: "Offline-capable, locally maintainable",
    description: "Applications that work without constant internet, synchronise when connectivity returns, and can be operated and maintained by local teams. Cloud and self-hosted deployment options. Technical handover included.",
    href: "/solutions#resilient-platforms",
    image: "/images/service-research.webp",
  },
  {
    heading: "Strategy & Deployment",
    tagline: "Practical adoption, measurable outcomes",
    description: "Readiness assessment, use-case prioritisation, technical roadmaps and prototypes tied to measurable operational needs. Governance frameworks for responsible AI deployment. No theoretical capability claims.",
    href: "/solutions#strategy-deployment",
    image: "/images/services-hero-infrastructure.webp",
  },
];

const processSteps = [
  { number: "01", title: "Understand your conditions", description: "We learn your operational constraints first: connectivity patterns, data sources, team capacity and regulatory requirements." },
  { number: "02", title: "Define measurable outcomes", description: "Every engagement starts with a specific operational metric to improve. No open-ended capability promises." },
  { number: "03", title: "Build against constraints", description: "Systems are designed for your actual infrastructure, not ideal conditions. Offline capability, graceful degradation and local operation are built in from the start." },
  { number: "04", title: "Deploy and hand over", description: "Working systems delivered to your team with operating documentation, administration tools and technical handover. You can run and maintain what we build." },
];

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroWordsRef = useRef<HTMLDivElement>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const processRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const accentLineRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);

  const prefersReducedMotion = useCallback(() => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Hero entrance animation
  useEffect(() => {
    if (prefersReducedMotion() || !heroRef.current) return;

    const hero = heroRef.current;
    const statusEl = hero.querySelector(".hero-status");
    const descEl = hero.querySelector(".hero-desc");
    const ctaEls = hero.querySelectorAll(".hero-cta");

    if (heroImgRef.current) {
      animate(heroImgRef.current, {
        opacity: [0, 1],
        scale: [1.05, 1],
        duration: 1200,
        ease: "outQuart",
      });
    }

    if (statusEl) {
      animate(statusEl, {
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 600,
        ease: "outExpo",
      });
    }

    if (heroWordsRef.current) {
      const words = heroWordsRef.current.querySelectorAll(".hero-word");
      animate(words, {
        opacity: [0, 1],
        translateY: [24, 0],
        delay: stagger(80, { start: 200 }),
        duration: 700,
        ease: "outExpo",
      });
    }

    if (accentLineRef.current) {
      animate(accentLineRef.current, {
        scaleX: [0, 1],
        duration: 600,
        delay: 400,
        ease: "outQuart",
      });
    }

    if (descEl) {
      animate(descEl, {
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 500,
        delay: 600,
        ease: "outExpo",
      });
    }

    if (ctaEls.length > 0) {
      animate(ctaEls, {
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: stagger(100, { start: 700 }),
        duration: 500,
        ease: "outExpo",
      });
    }
  }, [prefersReducedMotion]);

  // Solutions cards scroll reveal: GSAP ScrollTrigger.batch coordinates one
  // staggered entrance for every card entering the viewport together.
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const cards = serviceCardsRef.current.filter(
      (c): c is HTMLDivElement => Boolean(c)
    );
    if (cards.length === 0) return;

    const triggers = ScrollTrigger.batch(cards, {
      start: "top 85%",
      once: true,
      onEnter: (batch) => {
        const imgs = batch.flatMap((card) =>
          Array.from((card as HTMLElement).querySelectorAll(".svc-img"))
        );
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          overwrite: true,
        });
        gsap.to(imgs, {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          overwrite: true,
        });
      },
    });

    return () => triggers.forEach((t) => t.kill());
  }, [prefersReducedMotion]);

  // Process section reveal
  useEffect(() => {
    if (prefersReducedMotion() || !processRef.current) return;
    const el = processRef.current;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(el, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }),
    });
    return () => st.kill();
  }, [prefersReducedMotion]);

  // CTA section reveal
  useEffect(() => {
    if (prefersReducedMotion() || !ctaRef.current) return;
    const el = ctaRef.current;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () =>
        gsap.to(el, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }),
    });
    return () => st.kill();
  }, [prefersReducedMotion]);

  // Initialize cards as invisible (GSAP batch reveals them on scroll)
  useEffect(() => {
    if (prefersReducedMotion()) return;
    serviceCardsRef.current.filter(Boolean).forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
      }
    });
  }, [prefersReducedMotion]);

  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col">
      {/* ═══ HERO ═══ */}
      <section ref={heroRef} id="signal" data-trace="Signal" className="relative z-10 overflow-hidden">
        <div ref={heroImgRef} className="absolute inset-0 z-0" style={{ opacity: 0 }}>
          <Image
            src="/images/hero-namibia-dawn.webp"
            alt="Namibian desert landscape at dawn"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-atlantic-black/[0.65] z-[1]" />

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 lg:px-16 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="hero-status flex items-center gap-3 mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-signal-teal opacity-40" />
                <span className="relative inline-flex h-2 w-2 bg-signal-teal" />
              </span>
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/55">
                Operating in Africa
              </span>
            </div>

            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] tracking-[-0.02em] text-skeleton-bone leading-[1.08] mb-5 sm:mb-6">
              <div ref={heroWordsRef} className="inline">
                <span className="hero-word inline-block">AI systems</span>{" "}
                <span className="hero-word inline-block">built</span>{" "}
                <span className="hero-word inline-block">to</span>{" "}
                <span className="hero-word inline-block">keep</span>
                <br className="hidden sm:block" />
                {" "}
                <span className="hero-word inline-block">African</span>{" "}
                <span className="hero-word inline-block">operations</span>
                <br className="hidden md:block" />
                {" "}
                <span className="hero-word inline-block">moving.</span>
              </div>
            </h1>

            <div ref={accentLineRef} className="w-10 h-[1px] bg-rust-signal/60 origin-left" style={{ transform: "scaleX(0)" }} />

            <p className="hero-desc font-satoshi text-sm sm:text-[15px] text-white/55 leading-[1.6] max-w-[540px] mt-5 sm:mt-6">
              Tangison designs resilient automation, analytics and digital platforms for
              organisations working with fragmented data, unreliable connectivity and
              complex field operations. Based in Windhoek, Namibia.
            </p>

            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <Link
                href="/contact"
                className="hero-cta inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300"
              >
                Discuss a system
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/solutions"
                className="hero-cta font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-rust-signal transition-colors duration-300 inline-flex items-center gap-1.5"
              >
                See what we build
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS AUTOMATION BASELINE ENGINE ═══ */}
      <div id="engine" data-trace="Engine">
        <ProcessAutomationConsole />
      </div>

      {/* ═══ PROBLEMS ═══ */}
      <section id="problems" data-trace="Problems" className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8 sm:mb-12">
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-rust-signal/[0.85] mb-3 block">
              Operational problems
            </span>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone">
              Conditions we build for
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="group bg-white/[0.04] border border-white/[0.06] hover:border-rust-signal/20 hover:bg-white/[0.06] transition-colors duration-500 p-6 sm:p-8"
              >
                <h3 className="font-cabinet text-lg sm:text-xl tracking-[0.04em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-3">
                  {problem.title}
                </h3>
                <p className="font-satoshi text-[14px] text-white/55 leading-[1.55]">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTIONS ═══ */}
      <section ref={solutionsRef} id="solutions" data-trace="Solutions" className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8 sm:mb-12">
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-rust-signal/[0.85] mb-3 block">
              Solutions
            </span>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone">
              What we build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {solutions.map((service, i) => (
              <div
                key={service.heading}
                ref={(el) => { serviceCardsRef.current[i] = el; }}
                className="group relative bg-white/[0.04] border border-white/[0.06] hover:border-rust-signal/20 hover:bg-white/[0.06] transition-colors duration-500 overflow-hidden"
              >
                <div className="svc-img relative h-[140px] sm:h-[160px] overflow-hidden" style={{ opacity: 0 }}>
                  <Image
                    src={service.image}
                    alt={`${service.heading}: ${service.tagline}`}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-atlantic-black to-transparent" />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-[background] duration-700" />

                  <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-signal-teal/[0.85] mb-3 block">
                    {service.tagline}
                  </span>

                  <h3 className="font-cabinet text-xl sm:text-2xl tracking-[-0.01em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-4">
                    {service.heading}
                  </h3>

                  <p className="font-satoshi text-[14px] text-white/55 leading-[1.55] mb-6">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 text-white/50 group-hover:text-rust-signal/80 transition-colors duration-500"
                  >
                    <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em]">
                      Learn more
                    </span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS: FORTINET — the page's one wipe: partner authorisation
          is a change of state, and a wipe reads as exactly that ═══ */}
      <RevealSection id="partners" data-trace="Partners" variant="wipe" className="relative z-10 overflow-hidden border-t border-white/[0.06]">
        {/* deep-ocean surface tint: the palette's ocean tone carries the
            partner layer and separates it from the neutral dark sections */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-deep-ocean/[0.55] via-atlantic-black/50 to-atlantic-black"
        />

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">
            <div className="lg:w-[42%]">
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-rust-signal/[0.85] mb-3 block">
                Partners
              </span>
              <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone mb-5">
                A Fortinet partner
                <br />
                in Namibia
              </h2>
              <p className="font-satoshi text-[14px] text-white/55 leading-[1.6] mb-8">
                We supply, deploy and administer Fortinet network security:
                FortiGate next-generation firewalls, secure connectivity and
                centralised management. Equipment arrives with vendor
                authorisation. Installation, policy and ongoing administration
                come from our team in Windhoek.
              </p>
              <div className="flex items-center gap-5 mb-8">
                <FortinetLogo variant="onDark" height={24} />
                <span
                  aria-hidden="true"
                  className="w-[1px] h-6 bg-white/[0.12]"
                />
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/55">
                  Authorised partner
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <Link
                  href="/insights/tangison-is-now-a-fortinet-partner"
                  className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal hover:text-rust-light transition-colors duration-300 inline-flex items-center gap-1.5"
                >
                  Read the announcement
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
                <Link
                  href="/solutions#network-security"
                  className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/55 hover:text-rust-signal transition-colors duration-300 inline-flex items-center gap-1.5"
                >
                  Network security services
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="lg:w-[58%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {partnerCapabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="group bg-white/[0.04] border border-white/[0.06] hover:border-rust-signal/25 transition-colors duration-500 p-6 sm:p-7"
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <span
                      aria-hidden="true"
                      className="flex h-[10px] items-center gap-[2px]"
                    >
                      {/* small checker marker: a nod to the Fortinet mark */}
                      <span className="w-[5px] h-[5px] bg-[#EE2E24]" />
                      <span className="w-[5px] h-[5px] bg-skeleton-bone/50" />
                    </span>
                    <h3 className="font-cabinet text-base sm:text-lg tracking-[0.04em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300">
                      {capability.title}
                    </h3>
                  </div>
                  <p className="font-satoshi text-[13px] sm:text-[14px] text-white/55 leading-[1.55]">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* ═══ ENGAGEMENT PROCESS ═══ */}
      <section ref={processRef} id="process" data-trace="Process" className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8 sm:mb-12">
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-rust-signal/[0.85] mb-3 block">
              Process
            </span>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone">
              How we work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {processSteps.map((step) => (
              <div key={step.number} className="bg-white/[0.04] border border-white/[0.06] p-6 sm:p-8">
                <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">
                  {step.number}
                </span>
                <h3 className="font-cabinet text-lg sm:text-xl tracking-[0.04em] uppercase text-skeleton-bone mb-3">
                  {step.title}
                </h3>
                <p className="font-satoshi text-[14px] text-white/55 leading-[1.55]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ECOSYSTEM ═══ */}
      <section id="ecosystem" data-trace="Ecosystem" className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8 sm:mb-12">
            <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-rust-signal/[0.85] mb-3 block">
              Ecosystem
            </span>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone">
              Our ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {[
              { name: "Studio", url: "https://studio.tangison.com", description: "Creative & Design Division", status: "Active", image: "/images/eco-studio.webp" },
              { name: "Agent", url: "https://agent.tangison.com", description: "AI Operations Platform", status: "In Development", image: "/images/eco-agent.webp" },
              { name: "Labs", url: "https://labs.tangison.com", description: "Research & Development", status: "In Development", image: "/images/eco-labs.webp" },
            ].map((subdomain) => {
              const isLive = subdomain.status === "Active";
              return (
                <a
                  key={subdomain.name}
                  href={subdomain.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/[0.04] border border-white/[0.06] hover:border-rust-signal/20 hover:bg-white/[0.06] transition-colors duration-500 block overflow-hidden"
                >
                  <div className="relative h-[100px] sm:h-[120px] overflow-hidden">
                    <Image
                      src={subdomain.image}
                      alt={`${subdomain.name}: ${subdomain.description}`}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-85 transition-opacity duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-atlantic-black to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-[background] duration-700" />

                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-1.5 h-1.5 ${isLive ? "bg-signal-teal" : "bg-white/20"}`} />
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/55">
                        {subdomain.status}
                      </span>
                    </div>

                    <h3 className="font-cabinet text-xl sm:text-2xl tracking-[0.05em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-2">
                      {subdomain.name}
                    </h3>

                    <p className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/55 group-hover:text-white/75 transition-colors duration-300">
                      {subdomain.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ NAMIBIA ADVANTAGE ═══ */}
      <section id="namibia" data-trace="Namibia" className="relative z-10 overflow-hidden border-t border-white/[0.06]">
        <ParallaxLayer
          className="absolute inset-x-0 -top-[12%] h-[124%] z-0"
          distance={8}
        >
          <Image
            src="/images/about-teaser-namibia.webp"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-atlantic-black/[0.70] z-[1]" />

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            <div className="md:w-[40%]">
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-rust-signal/[0.85] mb-3 block">
                Where we build
              </span>
              <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone mb-4">
                Built in Namibia,
                <br />
                for Africa
              </h2>
              <div className="w-10 h-[1px] bg-signal-teal/60" />
            </div>

            <div className="md:w-[60%]">
              <p className="font-satoshi text-[15px] sm:text-base text-white/55 leading-[1.6] mb-4">
                Namibia is a test case for the conditions that define AI deployment across emerging markets.
                Building here means systems are tested against unreliable connectivity, sparse data and limited
                local capacity, not assumptions from environments that do not match reality.
              </p>
              <p className="font-satoshi text-[15px] sm:text-base text-white/55 leading-[1.6] mb-8">
                These constraints are not unique to Namibia. They represent conditions across sub-Saharan Africa,
                South Asia and other regions where AI could deliver value if it could survive the environment.
                Founded by Tangi Iigonda in Windhoek.
              </p>
              <Link
                href="/company"
                className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal hover:text-rust-light transition-colors duration-300 inline-flex items-center gap-1.5"
              >
                About Tangison
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section ref={ctaRef} id="contact" data-trace="Contact" className="relative z-10 overflow-hidden border-t border-white/[0.06]">
        <ParallaxLayer
          className="absolute inset-x-0 -top-[12%] h-[124%] z-0"
          distance={8}
        >
          <Image
            src="/images/cta-texture.webp"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            sizes="100vw"
            aria-hidden="true"
          />
        </ParallaxLayer>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone mb-4">
                Discuss a system
              </h2>
              <p className="font-satoshi text-sm sm:text-[15px] text-white/55 leading-[1.6] max-w-lg">
                Tell us what you need. We listen first, then propose what fits your actual constraints.
                No capability promises without measurable outcomes.
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
        </div>
      </section>

      {/* Mission trace: the site's signature move — a telemetry rail at the
          bottom edge recording the journey and doubling as navigation */}
      <MissionTrace />

      {/* Structured data: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tangison Technologies",
            url: "https://tangison.com",
            description: "Tangison Technologies designs resilient AI, data and digital infrastructure for organisations operating in African and emerging-market conditions.",
            founder: {
              "@type": "Person",
              name: "Tangi Iigonda",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "contact@tangison.com",
              contactType: "customer service",
            },
            sameAs: [
              "https://studio.tangison.com",
              "https://agent.tangison.com",
              "https://labs.tangison.com",
            ],
          }),
        }}
      />

      {/* Structured data: WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Tangison",
            url: "https://tangison.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://tangison.com/sitemap?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Structured data: Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "AI Operations and Automation",
              provider: { "@type": "Organization", name: "Tangison Technologies" },
              description: "Agent-based workflows that monitor, decide and act within your infrastructure. They degrade gracefully when connectivity drops and resume when conditions improve.",
              url: "https://tangison.com/solutions#ai-operations",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Data and Decision Systems",
              provider: { "@type": "Organization", name: "Tangison Technologies" },
              description: "Fragmented data into unified decisions. Executive dashboards, forecasting tools, anomaly detection and data pipelines.",
              url: "https://tangison.com/solutions#data-decisions",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Resilient Digital Platforms",
              provider: { "@type": "Organization", name: "Tangison Technologies" },
              description: "Platforms designed for imperfect infrastructure. Offline-capable applications, system integrations, data synchronisation, technical handover.",
              url: "https://tangison.com/solutions#resilient-platforms",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Strategy and Deployment",
              provider: { "@type": "Organization", name: "Tangison Technologies" },
              description: "Practical AI adoption tied to measurable needs. Readiness assessment, use-case prioritisation, technical roadmap, governance framework.",
              url: "https://tangison.com/solutions#strategy-deployment",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Network Security and Infrastructure",
              provider: { "@type": "Organization", name: "Tangison Technologies" },
              description: "Fortinet network security as an authorised partner: FortiGate firewall supply, deployment and configuration, secure connectivity, centralised management and ongoing administration from Windhoek.",
              url: "https://tangison.com/solutions#network-security",
            },
          ]),
        }}
      />
    </div>
  );
}
