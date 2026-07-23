"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/brand", label: "Brand" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "AI Infrastructure", desc: "Production-grade systems built for real conditions" },
  { href: "/services", label: "Applied Analytics", desc: "Decision-making tools that work with imperfect data" },
  { href: "/services", label: "Platform Engineering", desc: "Reliable, maintainable, operable by local teams" },
];

const quickLinks = [
  { href: "/about", label: "About Tangison" },
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

  // Focus trap: focus toggle button on menu open
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

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ─── Top navigation bar ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-terminal-black/[0.95] backdrop-blur-md border-b border-white/[0.04]"
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

          {/* Right side: CTA + Menu toggle */}
          <div className="flex items-center gap-6 md:gap-8">
            {/* "Get in Touch" CTA — visible on all screens */}
            <Link
              href="/contact"
              className="font-jetbrains text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-skeleton-bone/50 hover:text-rust-signal transition-colors duration-300 hidden sm:inline-flex"
            >
              Get in Touch
            </Link>

            {/* ─── Two-line menu toggle (Palantir style) ─── */}
            <button
              ref={toggleRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-8 h-[20px] sm:w-10 sm:h-[24px] flex flex-col items-center justify-between group/toggle focus-visible:outline-2 focus-visible:outline-rust-signal focus-visible:outline-offset-4"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="launchpad-nav"
            >
              {/* Top line */}
              <span
                className={`block w-full h-[1.5px] sm:h-[2px] bg-skeleton-bone/60 group-hover/toggle:bg-skeleton-bone transition-all duration-500 origin-center ${
                  menuOpen
                    ? "rotate-45 translate-y-[9px] sm:translate-y-[11px] bg-rust-signal"
                    : ""
                }`}
              />
              {/* Bottom line */}
              <span
                className={`block w-full h-[1.5px] sm:h-[2px] bg-skeleton-bone/60 group-hover/toggle:bg-skeleton-bone transition-all duration-500 origin-center ${
                  menuOpen
                    ? "-rotate-45 -translate-y-[9px] sm:-translate-y-[11px] bg-rust-signal"
                    : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Scrolled accent line */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-rust-signal/20 to-transparent animate-line-expand" />
        )}
      </header>

      {/* ─── Launchpad overlay (Palantir-style categorized navigation) ─── */}
      <div
        id="launchpad-nav"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation launchpad"
        className={`fixed inset-0 z-50 transition-all duration-700 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-terminal-black/97"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Content wrapper */}
        <div
          className={`relative h-full overflow-y-auto transition-transform duration-700 ${
            menuOpen ? "translate-y-0" : "translate-y-[40px]"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transitionDelay: menuOpen ? "0ms" : "200ms",
          }}
        >
          <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 pt-20 md:pt-24 pb-12 md:pb-16">

            {/* Grid layout: Left nav links + Right categorized blocks */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16">

              {/* ─── Left: Primary navigation ─── */}
              <div className="md:col-span-4 lg:col-span-3">
                <h2 className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15 mb-6 md:mb-8">
                  Navigation
                </h2>
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <li
                      key={link.href}
                      className={`transition-all duration-500 ${
                        menuOpen
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-[20px]"
                      }`}
                      style={{
                        transitionDelay: menuOpen
                          ? `${120 + i * 60}ms`
                          : "0ms",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`font-cabinet text-lg sm:text-xl md:text-2xl uppercase tracking-[0.08em] transition-colors duration-300 inline-block py-1 ${
                          isActive(link.href)
                            ? "text-rust-signal"
                            : "text-skeleton-bone/40 hover:text-skeleton-bone"
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

                {/* Divider line */}
                <div className="mt-8 md:mt-10 w-full h-[1px] bg-white/[0.06]" />

                {/* Contact info */}
                <div
                  className={`mt-8 md:mt-10 transition-all duration-500 ${
                    menuOpen ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
                >
                  <p className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/15 mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:contact@tangison.com"
                    className="font-satoshi text-sm text-skeleton-bone/50 hover:text-rust-signal transition-colors duration-300"
                  >
                    contact@tangison.com
                  </a>
                </div>
              </div>

              {/* ─── Right: Categorized content blocks ─── */}
              <div className="md:col-span-8 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                {/* Services block */}
                <div
                  className={`transition-all duration-500 ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
                  }`}
                  style={{ transitionDelay: menuOpen ? "200ms" : "0ms" }}
                >
                  <div className="flex items-baseline justify-between mb-5">
                    <h2 className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">
                      Services
                    </h2>
                    <Link
                      href="/services"
                      onClick={closeMenu}
                      className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal/60 hover:text-rust-signal transition-colors duration-300"
                    >
                      View All
                    </Link>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {serviceLinks.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className="group block"
                        >
                          <span className="font-cabinet text-sm sm:text-base uppercase tracking-[0.04em] text-skeleton-bone/50 group-hover:text-skeleton-bone transition-colors duration-300 block mb-1">
                            {link.label}
                          </span>
                          <span className="font-satoshi text-[13px] text-white/20 group-hover:text-white/40 transition-colors duration-300 block">
                            {link.desc}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* About block */}
                <div
                  className={`transition-all duration-500 ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
                  }`}
                  style={{ transitionDelay: menuOpen ? "300ms" : "0ms" }}
                >
                  <div className="flex items-baseline justify-between mb-5">
                    <h2 className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15">
                      About
                    </h2>
                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-rust-signal/60 hover:text-rust-signal transition-colors duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <p className="font-satoshi text-[13px] leading-[1.6] text-white/30">
                      Tangison Technologies builds production-grade AI infrastructure
                      for African and emerging-market conditions. Reliable, practical,
                      resilient.
                    </p>
                    <Link
                      href="/brand"
                      onClick={closeMenu}
                      className="font-cabinet text-sm uppercase tracking-[0.04em] text-skeleton-bone/40 hover:text-rust-signal transition-colors duration-300 inline-block"
                    >
                      Brand & Design
                    </Link>
                  </div>
                </div>

                {/* Quick links block */}
                <div
                  className={`sm:col-span-2 lg:col-span-1 transition-all duration-500 ${
                    menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"
                  }`}
                  style={{ transitionDelay: menuOpen ? "400ms" : "0ms" }}
                >
                  <h2 className="font-jetbrains text-[9px] uppercase tracking-[0.3em] text-white/15 mb-5">
                    Quick Links
                  </h2>
                  <ul className="flex flex-col gap-2">
                    {quickLinks.map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`font-satoshi text-[13px] transition-colors duration-300 inline-block py-[3px] ${
                            isActive(link.href)
                              ? "text-rust-signal"
                              : "text-white/25 hover:text-white/50"
                          }`}
                        >
                          <span className="text-rust-signal/40 mr-2" aria-hidden="true">—</span>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* ─── Bottom: Studio credit ─── */}
            <div
              className={`mt-12 md:mt-16 pt-8 border-t border-white/[0.04] transition-all duration-500 ${
                menuOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}
            >
              <a
                href="https://studio.tangison.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-jetbrains text-[8px] uppercase tracking-[0.2em] text-white/10 hover:text-white/25 transition-colors duration-300"
              >
                Made by Tangison Studio
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 sm:h-[72px] md:h-20" aria-hidden="true" />
    </>
  );
}
