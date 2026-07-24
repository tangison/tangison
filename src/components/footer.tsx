"use client";

import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";

const solutionLinks = [
  { href: "/solutions#ai-operations", label: "AI Operations & Automation" },
  { href: "/solutions#data-decisions", label: "Data & Decision Systems" },
  { href: "/solutions#resilient-platforms", label: "Resilient Digital Platforms" },
  { href: "/solutions#strategy-deployment", label: "Strategy & Deployment" },
];

const companyLinks = [
  { href: "/company", label: "Our Story" },
  { href: "/company#principles", label: "Principles" },
  { href: "/company#ecosystem", label: "Ecosystem" },
  { href: "/brand", label: "Brand & Design" },
];

const ecosystemLinks = [
  { href: "https://studio.tangison.com", label: "Studio", external: true },
  { href: "https://labs.tangison.com", label: "Labs", external: true },
  { href: "https://agent.tangison.com", label: "Agent", external: true },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.08] no-print bg-terminal-black">
      {/* Large closing statement */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="mb-12 sm:mb-16">
          <h2 className="font-cabinet text-2xl sm:text-3xl md:text-4xl tracking-[-0.02em] uppercase text-skeleton-bone mb-4">
            AI systems built to keep
            <br />
            African operations moving.
          </h2>
          <p className="font-satoshi text-sm sm:text-base text-white/40 leading-[1.6] max-w-lg">
            Tangison Technologies designs resilient automation, analytics and digital
            platforms for organisations working with fragmented data, unreliable
            connectivity and complex field operations.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Solutions */}
          <div>
            <h3 className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">
              Solutions
            </h3>
            <ul className="flex flex-col gap-2">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-satoshi text-[13px] text-white/40 hover:text-skeleton-bone transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-satoshi text-[13px] text-white/40 hover:text-skeleton-bone transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">
              Ecosystem
            </h3>
            <ul className="flex flex-col gap-2">
              {ecosystemLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-satoshi text-[13px] text-white/40 hover:text-skeleton-bone transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">
              Contact
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:contact@tangison.com"
                  className="font-satoshi text-[13px] text-white/40 hover:text-skeleton-bone transition-colors duration-300 inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3" />
                  contact@tangison.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-satoshi text-[13px] text-white/40 hover:text-skeleton-bone transition-colors duration-300"
                >
                  Start a conversation
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-jetbrains text-[10px] uppercase tracking-[0.25em] text-white/25 mb-4">
              Legal
            </h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/privacy"
                  className="font-satoshi text-[13px] text-white/40 hover:text-skeleton-bone transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-satoshi text-[13px] text-white/40 hover:text-skeleton-bone transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="font-satoshi text-[13px] text-white/40 hover:text-skeleton-bone transition-colors duration-300"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <p className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/25">
              Windhoek, Namibia
            </p>
            <span className="font-jetbrains text-[9px] uppercase tracking-[0.25em] text-white/15">
              &copy; {new Date().getFullYear()} Tangison Technologies
            </span>
          </div>
          <a
            href="https://studio.tangison.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-jetbrains text-[9px] uppercase tracking-[0.2em] text-white/25 hover:text-white/50 transition-colors duration-500 inline-flex items-center gap-1.5"
          >
            Made by Tangison Studio
            <ArrowUpRight className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
