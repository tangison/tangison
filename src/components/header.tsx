"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/brand", label: "Brand" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-40 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0" aria-label="TANGISON home">
          <Image
            src="/images/logo-white.webp"
            alt="TANGISON"
            width={874}
            height={286}
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-jetbrains text-[10px] uppercase tracking-[0.2em] text-white/25 hover:text-rust-signal transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/40 hover:text-white/70 transition-colors p-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile navigation overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-atlantic-black/98 flex flex-col items-center justify-center gap-6"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-6 text-white/40 hover:text-white/70 transition-colors p-2"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
          <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-cabinet text-2xl tracking-[0.1em] uppercase text-skeleton-bone/60 hover:text-rust-signal transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
