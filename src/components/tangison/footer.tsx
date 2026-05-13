"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Copy, Check } from "lucide-react";

const footerLinks = {
  Pages: [
    { label: "Architecture", href: "/architecture" },
    { label: "Systems", href: "/systems" },
    { label: "Intelligence", href: "/intelligence" },
    { label: "Manifesto", href: "/manifesto" },
  ],
  Resources: [
    { label: "Brand System", href: "/brand" },
    { label: "Contact", href: "/contact" },
    { label: "Security", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

function CopyDomainButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("tangison.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = "tangison.com";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex items-center gap-2 font-jetbrains text-[11px] text-white/30 tracking-[0.15em] hover:text-white/60 transition-colors duration-300"
      aria-label="Copy tangison.com to clipboard"
    >
      <span>tangison.com</span>
      {copied ? (
        <Check className="w-3 h-3 text-rust-signal" />
      ) : (
        <Copy className="w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
      )}
    </button>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#0A0B0C] pt-20 pb-8 px-6 md:px-12 lg:px-20 border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/favicon.png"
              alt=""
              className="h-7 w-auto opacity-70"
              aria-hidden="true"
            />
            <span className="font-cabinet font-bold tracking-[0.25em] uppercase text-base text-white">
              Tangison
            </span>
          </div>
          <p className="font-jetbrains text-[10px] text-white/30 max-w-xs leading-relaxed tracking-wider mb-4">
            Sovereign intelligence infrastructure.
            <br />
            Operating from the Atlantic coast.
          </p>
          <CopyDomainButton />
        </div>

        <div className="flex gap-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-jetbrains text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">
                {category}
              </h4>
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-jetbrains text-[10px] text-white/40 uppercase tracking-[0.2em] hover:text-white/80 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 font-jetbrains text-[9px] text-white/20 uppercase tracking-[0.3em]">
        <p>&copy; {new Date().getFullYear()} TANGISON SYSTEMS. ALL RIGHTS RESERVED.</p>
        <p>Windhoek, Namibia</p>
      </div>
    </footer>
  );
}
