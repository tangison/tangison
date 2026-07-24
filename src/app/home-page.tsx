"use client";

import React, { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { animate, stagger } from "animejs";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    heading: "AI Operations",
    tagline: "Continuous, autonomous, resilient",
    description:
      "Agent-based systems that monitor, decide, and act within local infrastructure. Run when connectivity drops, resume when conditions improve.",
    href: "/services",
    image: "/images/service-ai-operations.webp",
  },
  {
    heading: "Applied AI",
    tagline: "Production-grade, constraint-aware",
    description:
      "Systems built for intermittent connectivity, sparse data, and limited compute. They degrade gracefully and deliver the best available result under current conditions.",
    href: "/services",
    image: "/images/service-applied-ai.webp",
  },
  {
    heading: "Research & Consulting",
    tagline: "Strategic, grounded, actionable",
    description:
      "AI adoption consulting drawn from production experience. Infrastructure assessment, value identification, and roadmaps that account for real constraints.",
    href: "/services",
    image: "/images/service-research.webp",
  },
];

const subdomains = [
  {
    name: "Studio",
    url: "https://studio.tangison.com",
    label: "Studio",
    description: "Creative & Design Division",
    status: "Active",
    image: "/images/eco-studio.webp",
  },
  {
    name: "Agent",
    url: "https://agent.tangison.com",
    label: "Agent",
    description: "AI Operations Platform",
    status: "In Development",
    image: "/images/eco-agent.webp",
  },
  {
    name: "Labs",
    url: "https://labs.tangison.com",
    label: "Labs",
    description: "Research & Development",
    status: "In Development",
    image: "/images/eco-labs.webp",
  },
];

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroWordsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const aboutRef = useRef<HTMLDivElement>(null);
  const ecosystemRef = useRef<HTMLDivElement>(null);
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

    // Background image cinematic zoom
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

  // Service cards scroll reveal
  useEffect(() => {
    if (prefersReducedMotion() || !servicesRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgs = servicesRef.current!.querySelectorAll(".svc-img");
            animate(imgs, {
              opacity: [0, 1],
              duration: 600,
              delay: stagger(80),
              ease: "outQuart",
            });
            const cards = serviceCardsRef.current.filter(Boolean);
            animate(cards, {
              opacity: [0, 1],
              translateY: [30, 0],
              delay: stagger(100),
              duration: 600,
              ease: "outQuart",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // About section reveal
  useEffect(() => {
    if (prefersReducedMotion() || !aboutRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = aboutRef.current!.querySelector(".about-img");
            if (img) {
              animate(img, {
                opacity: [0, 1],
                translateX: [-20, 0],
                duration: 600,
                ease: "outQuart",
              });
            }
            animate(aboutRef.current!, {
              opacity: [0, 1],
              translateY: [20, 0],
              duration: 600,
              ease: "outQuart",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Ecosystem section reveal
  useEffect(() => {
    if (prefersReducedMotion() || !ecosystemRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgs = ecosystemRef.current!.querySelectorAll(".eco-img");
            animate(imgs, {
              opacity: [0, 0.5],
              delay: stagger(80, { start: 0 }),
              duration: 500,
              ease: "outQuart",
            });
            animate(ecosystemRef.current!.querySelectorAll(".eco-card"), {
              opacity: [0, 1],
              translateY: [24, 0],
              delay: stagger(80),
              duration: 600,
              ease: "outQuart",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(ecosystemRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // CTA section reveal
  useEffect(() => {
    if (prefersReducedMotion() || !ctaRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(ctaRef.current!, {
              opacity: [0, 1],
              translateY: [16, 0],
              duration: 500,
              ease: "outQuart",
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  // Initialize sections as invisible
  useEffect(() => {
    if (prefersReducedMotion()) return;
    [servicesRef, aboutRef, ecosystemRef, ctaRef].forEach((ref) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(20px)";
      }
    });
    serviceCardsRef.current.filter(Boolean).forEach((card) => {
      if (card) {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
      }
    });
  }, [prefersReducedMotion]);

  return (
    <div className="min-h-screen bg-atlantic-black flex flex-col">
      {/* Hero with background image */}
      <section ref={heroRef} className="relative z-10 overflow-hidden">
        {/* Cinematic background: Namibian dawn landscape */}
        <div
          ref={heroImgRef}
          className="absolute inset-0 z-0"
          style={{ opacity: 0 }}
        >
          <Image
            src="/images/hero-namibia-dawn.webp"
            alt="Namibian desert landscape at dawn"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-atlantic-black/[0.65] z-[1]" />

        {/* Content */}
        <div className="relative z-[2] px-6 sm:px-8 md:px-12 lg:px-16 pt-20 sm:pt-28 md:pt-36 pb-16 sm:pb-20">
          <div className="max-w-[1200px] mx-auto w-full">
            <div className="hero-status flex items-center gap-3 mb-6 sm:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full bg-signal-teal opacity-40" />
                <span className="relative inline-flex h-2 w-2 bg-signal-teal" />
              </span>
              <span className="font-jetbrains text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-white/30">
                Building in Africa
              </span>
            </div>

            <h1 className="font-cabinet text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] tracking-[-0.02em] text-skeleton-bone leading-[1.08] mb-5 sm:mb-6">
              <div ref={heroWordsRef} className="inline">
                <span className="hero-word inline-block">Applied</span>{" "}
                <span className="hero-word inline-block">AI</span>
                <br className="hidden sm:block" />
                {" "}
                <span className="hero-word inline-block">that</span>{" "}
                <span className="hero-word inline-block">works</span>{" "}
                <span className="hero-word inline-block">where</span>
                <br className="hidden md:block" />
                {" "}
                <span className="hero-word inline-block">infrastructure</span>{" "}
                <span className="hero-word inline-block">breaks</span>
              </div>
            </h1>

            <div
              ref={accentLineRef}
              className="w-10 h-[1px] bg-rust-signal/60 origin-left"
              style={{ transform: "scaleX(0)" }}
            />

            <p className="hero-desc font-satoshi text-sm sm:text-[15px] text-white/40 leading-[1.6] max-w-[520px] mt-5 sm:mt-6">
              AI systems that work where infrastructure breaks. Reliable when connectivity drops. Practical when data is sparse.
            </p>

            <div className="mt-8 sm:mt-10 flex items-center gap-4">
              <Link
                href="/contact"
                className="hero-cta inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300"
              >
                Get in touch
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/services"
                className="hero-cta font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-rust-signal transition-colors duration-300 inline-flex items-center gap-1.5"
              >
                Our services
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview with card images */}
      <section
        ref={servicesRef}
        className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 border-t border-white/[0.04]"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8 sm:mb-12">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">
              Services
            </span>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone">
              What we build
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, i) => (
              <div
                key={service.heading}
                ref={(el) => { serviceCardsRef.current[i] = el; }}
                className="group relative bg-white/[0.03] border border-white/[0.06] hover:border-rust-signal/20 hover:bg-white/[0.05] transition-all duration-500 overflow-hidden"
              >
                {/* Service image at top of card */}
                <div className="svc-img relative h-[160px] sm:h-[180px] overflow-hidden" style={{ opacity: 0 }}>
                  <Image
                    src={service.image}
                    alt={`${service.heading}: ${service.tagline}`}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Bottom gradient for text readability */}
                  <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-atlantic-black to-transparent" />
                </div>

                {/* Card content */}
                <div className="p-6 sm:p-8">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />

                  <span className="font-jetbrains text-[8px] uppercase tracking-[0.25em] text-signal-teal/50 mb-3 block">
                    {service.tagline}
                  </span>

                  <h3 className="font-cabinet text-xl sm:text-2xl tracking-[-0.01em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-4">
                    {service.heading}
                  </h3>

                  <p className="font-satoshi text-[14px] text-white/30 leading-[1.55] mb-6">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="flex items-center gap-1.5 text-white/20 group-hover:text-rust-signal/70 transition-all duration-500"
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

      {/* About Teaser with background image */}
      <section
        ref={aboutRef}
        className="relative z-10 overflow-hidden border-t border-white/[0.04]"
      >
        {/* Background image: Namibian infrastructure */}
        <div className="about-img absolute inset-0 z-0" style={{ opacity: 0 }}>
          <Image
            src="/images/about-teaser-namibia.webp"
            alt="African infrastructure at dusk"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-atlantic-black/[0.65] z-[1]" />

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row md:items-start gap-8 sm:gap-12">
            <div className="md:w-[40%]">
              <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">
                About
              </span>
              <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone mb-4">
                Built in Africa,
                <br />
                for Africa
              </h2>
              <div className="w-10 h-[1px] bg-rust-signal/60" />
            </div>

            <div className="md:w-[60%]">
              <p className="font-satoshi text-[15px] sm:text-base text-white/40 leading-[1.6] mb-8">
                Founded in Namibia to solve one problem: AI infrastructure built for ideal conditions fails where it is needed most. Constraints are design parameters, not obstacles.
              </p>
              <Link
                href="/about"
                className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal hover:text-rust-light transition-colors duration-300 inline-flex items-center gap-1.5"
              >
                About Tangison
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Cards with images */}
      <section
        ref={ecosystemRef}
        className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 border-t border-white/[0.04]"
      >
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="mb-8 sm:mb-12">
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-rust-signal/40 mb-3 block">
              Ecosystem
            </span>
            <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone">
              Our ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {subdomains.map((subdomain) => {
              const isActive = subdomain.status === "Active";
              return (
                <a
                  key={subdomain.name}
                  href={subdomain.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eco-card group relative bg-white/[0.03] border border-white/[0.06] hover:border-rust-signal/20 hover:bg-white/[0.05] transition-all duration-500 block overflow-hidden"
                >
                  {/* Ecosystem image at top */}
                  <div className="eco-img relative h-[120px] sm:h-[140px] overflow-hidden" style={{ opacity: 0 }}>
                    <Image
                      src={subdomain.image}
                      alt={`${subdomain.label}: ${subdomain.description}`}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-atlantic-black to-transparent" />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rust-signal/0 to-transparent group-hover:via-rust-signal/40 transition-all duration-700" />

                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`w-1.5 h-1.5 ${
                          isActive ? "bg-signal-teal" : "bg-white/20"
                        }`}
                      />
                      <span className="font-jetbrains text-[8px] uppercase tracking-[0.3em] text-white/30">
                        {subdomain.status}
                      </span>
                    </div>

                    <h3 className="font-cabinet text-2xl sm:text-3xl tracking-[0.05em] uppercase text-skeleton-bone group-hover:text-white transition-colors duration-300 mb-2">
                      {subdomain.label}
                    </h3>

                    <p className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/30 group-hover:text-white/45 transition-colors duration-300 mb-6">
                      {subdomain.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-white/20 group-hover:text-rust-signal/70 transition-all duration-500">
                      <span className="font-jetbrains text-[9px] uppercase tracking-[0.2em]">
                        Visit
                      </span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA with texture background */}
      <section
        ref={ctaRef}
        className="relative z-10 overflow-hidden border-t border-white/[0.04]"
      >
        {/* Subtle texture background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cta-texture.webp"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-[2] px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24">
          <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone mb-4">
                Start a conversation
              </h2>
              <p className="font-satoshi text-sm sm:text-[15px] text-white/40 leading-[1.6] max-w-lg">
                Tell us what you need. We listen first, then propose what fits your actual constraints.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-rust-signal hover:bg-rust-light text-warm-white font-cabinet text-sm uppercase tracking-[0.2em] px-6 py-3.5 transition-colors duration-300 self-start md:self-center"
            >
              Get in touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tangison Technologies",
            url: "https://tangison.com",
            description:
              "Applied AI infrastructure for African and emerging-market conditions.",
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
    </div>
  );
}
