"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Copy, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";

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
  const footerRef = React.useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer ref={footerRef} className="bg-terminal-black pt-20 pb-8 px-6 md:px-12 lg:px-20 border-t border-white/[0.04]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
      >
        <div>
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/logo-mark.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-auto opacity-80 mix-blend-screen"
              aria-hidden="true"
            />
            <span className="font-cabinet font-bold tracking-[0.3em] uppercase text-skeleton-bone text-lg">
              TANGISON
            </span>
          </div>
          <p className="font-jetbrains text-[10px] text-white/30 max-w-xs leading-relaxed tracking-wider mb-4">
            Sovereign intelligence infrastructure.
            <br />
            Operating from the Atlantic coast.
          </p>
          <CopyDomainButton />
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
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
                    className="font-jetbrains text-[10px] text-white/40 uppercase tracking-[0.2em] hover:text-white/80 transition-colors duration-300 relative group/link"
                  >
                    {link.label}
                    <span className="absolute -top-0.5 left-0 w-0 h-[1px] bg-rust-signal/50 group-hover/link:w-full transition-all duration-500" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1400px] mx-auto mt-20 pt-6 border-t border-white/[0.04] flex flex-col md:flex-row justify-between items-center gap-4 font-jetbrains text-[9px] text-white/20 uppercase tracking-[0.3em]"
      >
        <p>&copy; {new Date().getFullYear()} TANGISON SYSTEMS. ALL RIGHTS RESERVED.</p>
        <p>Windhoek, Namibia</p>
      </motion.div>
    </footer>
  );
}
