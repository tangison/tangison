"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TangisonLogo } from "./logo";

const navLinks = [
  { href: "#systems", label: "Systems" },
  { href: "#intelligence", label: "Intelligence" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-6 py-5 md:px-12 md:py-6 flex justify-between items-center ${
          isScrolled
            ? "bg-atlantic-black/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4"
            : "bg-transparent"
        }`}
      >
        <a
          href="#"
          className="flex items-center gap-3 group"
          aria-label="Tangison home"
        >
          <TangisonLogo className="w-6 h-6 text-skeleton-bone transition-transform duration-500 group-hover:scale-110" />
          <span className="font-cabinet font-bold tracking-[0.2em] uppercase text-sm text-skeleton-bone">
            Tangison
          </span>
        </a>

        <div className="hidden md:flex gap-10 font-jetbrains text-[11px] uppercase tracking-[0.2em] text-fog-gray/60">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`hover:text-skeleton-bone transition-colors duration-300 relative group ${
                link.href === "#contact" ? "hover:text-rust-signal text-rust-signal/60" : ""
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-skeleton-bone p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-atlantic-black/98 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setIsMobileOpen(false)}
                  className={`font-cabinet text-3xl tracking-[0.1em] uppercase transition-colors duration-300 ${
                    link.href === "#contact"
                      ? "text-rust-signal hover:text-rust-signal/80"
                      : "text-skeleton-bone hover:text-fog-gray"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex items-center gap-3"
            >
              <TangisonLogo className="w-5 h-5 text-fog-gray/40" />
              <span className="font-jetbrains text-[10px] text-fog-gray/40 uppercase tracking-[0.3em]">
                Windhoek, Namibia
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
