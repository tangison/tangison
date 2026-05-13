"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { TangisonLogo } from "./logo";

const navLinks = [
  { href: "/architecture", label: "Architecture" },
  { href: "/systems", label: "Systems" },
  { href: "/intelligence", label: "Intelligence" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/brand", label: "Brand" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

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

  // Mobile menu closes via onClick on each Link — no effect needed

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
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Tangison home"
        >
          <img
            src="/favicon.png"
            alt=""
            className="h-6 w-auto transition-transform duration-500 group-hover:scale-110"
            aria-hidden="true"
          />
          <span className="font-cabinet font-bold tracking-[0.25em] uppercase text-sm text-skeleton-bone">
            Tangison
          </span>
        </Link>

        <div className="hidden lg:flex gap-8 font-jetbrains text-[10px] uppercase tracking-[0.2em] text-fog-gray/60">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-skeleton-bone transition-colors duration-300 relative group ${
                pathname === link.href
                  ? "text-skeleton-bone"
                  : link.href === "/contact"
                  ? "hover:text-rust-signal text-rust-signal/50"
                  : ""
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-[1px] bg-current transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-skeleton-bone p-2"
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
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`font-cabinet text-2xl tracking-[0.15em] uppercase transition-colors duration-300 ${
                      pathname === link.href
                        ? "text-skeleton-bone"
                        : link.href === "/contact"
                        ? "text-rust-signal hover:text-rust-signal/80"
                        : "text-fog-gray/60 hover:text-skeleton-bone"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex items-center gap-3"
            >
              <img
                src="/favicon.png"
                alt=""
                className="h-4 w-auto opacity-40"
                aria-hidden="true"
              />
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
