"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

const footerLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/sitemap", label: "Sitemap" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] no-print">
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: Navigation links */}
          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-jetbrains text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-white/15 hover:text-white/30 transition-colors duration-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Contact + Credit */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            {/* Email */}
            <a
              href="mailto:contact@tangison.com"
              className="flex items-center gap-2 font-jetbrains text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-white/15 hover:text-white/30 transition-colors duration-500"
            >
              <Mail className="w-3 h-3" />
              contact@tangison.com
            </a>

            {/* Studio link */}
            <a
              href="https://studio.tangison.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-jetbrains text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-white/15 hover:text-white/30 transition-colors duration-500"
            >
              Made by Tangison Studio
              <ArrowUpRight className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-4 border-t border-white/[0.04]">
          <p className="font-jetbrains text-[7px] uppercase tracking-[0.3em] text-white/8">
            Tangison Technologies. Applied AI. Built in Africa.
          </p>
        </div>
      </div>
    </footer>
  );
}
