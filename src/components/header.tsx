"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { animate, stagger } from "animejs";

// Desktop-visible navigation links (audit: primary nav must be visible on desktop)
const desktopLinks = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/company", label: "Company" },
];

// Full mobile launchpad navigation
const mobileNavLinks = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/company", label: "Company" },
  { href: "/brand", label: "Brand" },
  { href: "/contact", label: "Contact" },
];

const solutionLinks = [
  { href: "/solutions#ai-operations", label: "AI Operations & Automation", desc: "Human-supervised agents, workflows, monitoring and exception handling" },
  { href: "/solutions#data-decisions", label: "Data & Decision Systems", desc: "Fragmented data turned into usable decisions and dashboards" },
  { href: "/solutions#resilient-platforms", label: "Resilient Digital Platforms", desc: "Offline-capable systems designed for imperfect infrastructure" },
  { href: "/solutions#strategy-deployment", label: "Strategy & Deployment", desc: "Practical AI adoption planning tied to measurable needs" },
];

const quickLinks = [
  { href: "/company", label: "About Tangison" },
  { href: "/brand", label: "Brand & Design" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/sitemap", label: "Sitemap" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const launchpadRef = useRef<HTMLDivElement>(null);

  // Scroll detection for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock when menu is open
  useEffect(() => {
    if (menuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [menuOpen]);

  // Focus management on menu open
  useEffect(() => {
    if (menuOpen && toggleRef.current) {
      toggleRef.current.focus();
    }
  }, [menuOpen]);

  // Escape key to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Accessibility: make closed dialog inert (audit finding: links remain focusable)
  useEffect(() => {
    if (launchpadRef.current) {
      if (menuOpen) {
        launchpadRef.current.removeAttribute("inert");
        launchpadRef.current.setAttribute("aria-hidden", "false");
      } else {
        launchpadRef.current.setAttribute("inert", "");
        launchpadRef.current.setAttribute("aria-hidden", "true");
        // Reset opacity of animated elements so they animate fresh on next open
        launchpadRef.current.querySelectorAll(".nav-link-item, .nav-block, .studio-credit").forEach((el) => {
          (el as HTMLElement).style.opacity = "0";
        });
      }
    }
  }, [menuOpen]);

  // Anime.js launchpad animation when menu opens
  useEffect(() => {
    if (!menuRef.current) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (menuOpen && !prefersReduced) {
      animate(menuRef.current.querySelectorAll(".nav-link-item"), {
        opacity: [0, 1],
        translateX: [-20, 0],
        delay: stagger(60, { start: 120 }),
        duration: 500,
        ease: "outQuart",
      });

      animate(menuRef.current.querySelectorAll(".nav-block"), {
        opacity: [0, 1],
        translateY: [30, 0],
        delay: stagger(100, { start: 200 }),
        duration: 600,
        ease: "outQuart",
      });

      animate(menuRef.current.querySelector(".studio-credit") as Element, {
        opacity: [0, 1],
        duration: 400,
        delay: 500,
        ease: "outQuart",
      });
    }
  }, [menuOpen]);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ─── Skip to content (accessibility: audit finding) ─── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-rust-signal focus:text-warm-white focus:px-4 focus:py-2 focus:font-jetbrains focus:text-[10px] focus:uppercase focus:tracking-[0.2em]"
      >
        Skip to content
      </a>

      {/* ─── Top navigation bar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-terminal-black/[0.95] backdrop-blur-md border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 h-16 sm:h-[72px] md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group" aria-label="TANGISON home">
            <Image
              src="/images/logo-white.webp"
              alt="TANGISON"
              width={874}
              height={286}
              className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
              priority
            />
          </Link>

          {/* Right side: Desktop links + CTA + Mobile toggle */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* Desktop navigation links (audit: primary nav must be visible on desktop) */}
            <nav className="hidden lg:flex items-center gap-6" aria-label="Primary navigation">
              {desktopLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-jetbrains text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive(link.href)
                      ? "text-rust-signal"
                      : "text-skeleton-bone/60 hover:text-skeleton-bone"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="font-jetbrains text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-skeleton-bone/60 hover:text-rust-signal transition-colors duration-300 hidden sm:inline-flex"
            >
              Contact
            </Link>

            {/* Mobile menu toggle */}
            <button
              ref={toggleRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-[22px] h-[10px] sm:w-[26px] sm:h-[12px] flex flex-col items-center justify-between group/toggle focus-visible:outline-2 focus-visible:outline-rust-signal focus-visible:outline-offset-4 min-w-[44px] min-h-[44px] p-[17px] sm:p-[16px] lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="launchpad-nav"
            >
              <span
                className={`block w-full h-[2px] sm:h-[2.5px] bg-skeleton-bone group-hover/toggle:bg-rust-signal transition-all duration-400 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[4px] sm:translate-y-[5px] bg-rust-signal" : ""
                }`}
              />
              <span
                className={`block w-full h-[2px] sm:h-[2.5px] bg-skeleton-bone group-hover/toggle:bg-rust-signal transition-all duration-400 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[4px] sm:-translate-y-[5px] bg-rust-signal" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rust-signal/20 to-transparent animate-line-expand" />
        )}
      </header>

      {/* ─── Launchpad overlay (MOBILE ONLY) ─── */}
      <div
        id="launchpad-nav"
        ref={launchpadRef}
        inert
        aria-hidden="true"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation launchpad"
        className={`fixed inset-0 z-50 transition-all duration-700 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-terminal-black/97"
          onClick={closeMenu}
          aria-hidden="true"
        >
          <Image
            src="/images/nav-launchpad-texture.webp"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            sizes="100vw"
            aria-hidden="true"
          />
        </div>

        {/* Content wrapper */}
        <div
          ref={menuRef}
          className={`relative h-full overflow-y-auto transition-transform duration-700 ${
            menuOpen ? "translate-y-0" : "translate-y-[40px]"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: menuOpen ? "0ms" : "200ms",
          }}
        >
          <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 pt-20 md:pt-24 pb-12 md:pb-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">

              {/* Left: Primary navigation */}
              <div className="md:col-span-4 lg:col-span-3">
                <h2 className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25 mb-6 md:mb-8">
                  Navigation
                </h2>
                <ul className="flex flex-col gap-1">
                  {mobileNavLinks.map((link) => (
                    <li key={link.href} className="nav-link-item" style={{ opacity: 0 }}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`font-cabinet text-lg sm:text-xl md:text-2xl uppercase tracking-[0.08em] transition-colors duration-300 inline-block py-1 ${
                          isActive(link.href)
                            ? "text-rust-signal"
                            : "text-skeleton-bone/50 hover:text-skeleton-bone"
                        }`}
                      >
                        {link.label}
                        {isActive(link.href) && (
                          <span className="inline-block ml-2 w-2 h-2 bg-rust-signal" aria-hidden="true" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 md:mt-10 w-full h-[1px] bg-white/[0.08]" />

                {/* Contact info */}
                <div className="mt-8 md:mt-10 nav-block" style={{ opacity: 0 }}>
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/25 mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:contact@tangison.com"
                    className="font-satoshi text-sm text-skeleton-bone/60 hover:text-rust-signal transition-colors duration-300"
                  >
                    contact@tangison.com
                  </a>
                  <p className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/25 mb-3 mt-6">
                    Location
                  </p>
                  <p className="font-satoshi text-sm text-skeleton-bone/40">
                    Windhoek, Namibia
                  </p>
                </div>
              </div>

              {/* Right: Content blocks */}
              <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                {/* Solutions block */}
                <div className="nav-block" style={{ opacity: 0 }}>
                  <div className="flex items-baseline justify-between mb-5">
                    <h2 className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Solutions
                    </h2>
                    <Link
                      href="/solutions"
                      onClick={closeMenu}
                      className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal/70 hover:text-rust-signal transition-colors duration-300"
                    >
                      View All
                    </Link>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {solutionLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="group block"
                        >
                          <span className="font-cabinet text-sm sm:text-base uppercase tracking-[0.04em] text-skeleton-bone/60 group-hover:text-skeleton-bone transition-colors duration-300 block mb-1">
                            {link.label}
                          </span>
                          <span className="font-satoshi text-[13px] text-white/35 group-hover:text-white/55 transition-colors duration-300 block">
                            {link.desc}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company block */}
                <div className="nav-block" style={{ opacity: 0 }}>
                  <div className="flex items-baseline justify-between mb-5">
                    <h2 className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Company
                    </h2>
                    <Link
                      href="/company"
                      onClick={closeMenu}
                      className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-rust-signal/70 hover:text-rust-signal transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <p className="font-satoshi text-[13px] leading-[1.6] text-white/40">
                      Tangison Technologies designs resilient AI, data, and digital
                      infrastructure for organisations operating in African and
                      emerging-market conditions. Founded in Windhoek by Tangi Iigonda.
                    </p>
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/company"
                        onClick={closeMenu}
                        className="font-cabinet text-sm uppercase tracking-[0.04em] text-skeleton-bone/50 hover:text-rust-signal transition-colors duration-300 inline-block"
                      >
                        Our Story
                      </Link>
                      <Link
                        href="/brand"
                        onClick={closeMenu}
                        className="font-cabinet text-sm uppercase tracking-[0.04em] text-skeleton-bone/50 hover:text-rust-signal transition-colors duration-300 inline-block"
                      >
                        Brand & Design
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Quick links block (no em dashes per brand rules) */}
                <div className="sm:col-span-2 lg:col-span-1 nav-block" style={{ opacity: 0 }}>
                  <h2 className="font-jetbrains text-[10px] uppercase tracking-[0.3em] text-white/25 mb-5">
                    Quick Links
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {quickLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`font-satoshi text-[13px] transition-colors duration-300 inline-block py-[3px] ${
                            isActive(link.href)
                              ? "text-rust-signal"
                              : "text-white/35 hover:text-white/60"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom: Ecosystem + Studio credit */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-white/[0.06] studio-credit" style={{ opacity: 0 }}>
              <div className="flex items-center gap-6">
                <a
                  href="https://studio.tangison.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors duration-300"
                >
                  Studio
                </a>
                <a
                  href="https://labs.tangison.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors duration-300"
                >
                  Labs
                </a>
                <span className="font-jetbrains text-[8px] uppercase tracking-[0.2em] text-white/15">
                  Made by Tangison Studio
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-[72px] md:h-20" aria-hidden="true" />
    </>
  );
}
