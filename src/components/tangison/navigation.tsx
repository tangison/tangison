"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Navigation Data ─────────────────────────────────────────── */

interface SubItem {
  label: string;
  href: string;
  description?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: SubItem[];
}

const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Applied AI", href: "/services/applied-ai", description: "Custom AI solutions for real-world problems" },
      { label: "AI Infrastructure", href: "/services/ai-infrastructure", description: "Scalable systems built for production" },
      { label: "AI Consulting", href: "/services/ai-consulting", description: "Strategic guidance for AI adoption" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "SkillsCamp", href: "/products/skillscamp", description: "Hands-on AI skill development" },
      { label: "Tangison Agent", href: "/products/tangison-agent", description: "Autonomous AI operations platform" },
      { label: "SMEFrog Academy", href: "/products/smefrog-academy", description: "AI education for growing businesses" },
      { label: "Feorm", href: "/products/feorm", description: "Intelligent data orchestration" },
    ],
  },
  {
    label: "Research",
    href: "/research",
    children: [
      { label: "Projects", href: "/research/projects", description: "Active research initiatives" },
      { label: "Open Source", href: "/research/open-source", description: "Tools and frameworks we share" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    children: [
      { label: "Articles", href: "/insights/articles", description: "Technical writing and analysis" },
      { label: "Case Studies", href: "/insights/case-studies", description: "Results from the field" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about/company", description: "Who we are and what drives us" },
      { label: "Brand Guidelines", href: "/about/brand-guidelines", description: "Visual and verbal identity" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* ─── Hamburger Icon (two-line → X) ───────────────────────────── */

function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-5 h-5 flex flex-col justify-center gap-[5px] relative">
      <span
        className={`block w-full h-[1.5px] bg-ink transition-all duration-300 origin-center ${
          isOpen ? "rotate-45 translate-y-[3.25px]" : ""
        }`}
      />
      <span
        className={`block w-full h-[1.5px] bg-ink transition-all duration-300 origin-center ${
          isOpen ? "-rotate-45 -translate-y-[3.25px]" : ""
        }`}
      />
    </div>
  );
}

/* ─── Desktop Dropdown ────────────────────────────────────────── */

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  }, []);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const isActive =
    pathname === item.href ||
    pathname.startsWith(item.href + "/");

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Top-level link */}
      <Link
        href={item.href}
        className={`font-jetbrains text-[10px] uppercase tracking-[0.2em] relative group inline-flex items-center transition-colors duration-300 ${
          isActive
            ? "text-ink"
            : "text-ink-muted hover:text-ink"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.label}
        {/* Underline indicator */}
        <span
          className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300 ease-out ${
            isActive
              ? "w-full bg-rust-signal"
              : "w-0 group-hover:w-full bg-rust-signal/60"
          }`}
        />
      </Link>

      {/* Dropdown panel */}
      <AnimatePresence>
        {isOpen && item.children && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
            role="menu"
            aria-label={`${item.label} submenu`}
          >
            <div className="bg-warm-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.06)] min-w-[240px] py-2">
              {item.children.map((child) => {
                const isChildActive = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block px-5 py-3 font-jetbrains text-[10px] uppercase tracking-[0.15em] transition-all duration-200 ${
                      isChildActive
                        ? "text-ink bg-warm-gray"
                        : "text-ink-muted hover:text-ink hover:bg-warm-gray"
                    }`}
                    role="menuitem"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="block">{child.label}</span>
                    {child.description && (
                      <span className="block text-[9px] tracking-[0.1em] normal-case mt-0.5 text-ink-muted/60 font-jetbrains">
                        {child.description}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Mobile Accordion Item ───────────────────────────────────── */

function MobileAccordionItem({
  item,
  pathname,
  onClose,
}: {
  item: NavItem;
  pathname: string;
  onClose: () => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <div>
      {/* Top-level item */}
      {hasChildren ? (
        <button
          className={`font-cabinet text-xl sm:text-2xl tracking-[0.15em] uppercase transition-colors duration-300 flex items-center gap-3 ${
            isActive ? "text-ink" : "text-ink-muted hover:text-ink"
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          aria-label={`${item.label} — ${isExpanded ? "collapse" : "expand"} submenu`}
        >
          {item.label}
          <motion.span
            animate={{ rotate: isExpanded ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="font-jetbrains text-[12px] text-ink-muted/50 leading-none"
          >
            +
          </motion.span>
        </button>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className={`font-cabinet text-xl sm:text-2xl tracking-[0.15em] uppercase transition-colors duration-300 block ${
            item.href === "/contact"
              ? "text-rust-signal hover:text-rust-signal/80"
              : isActive
              ? "text-ink"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          {item.label}
        </Link>
      )}

      {/* Sub-items accordion */}
      <AnimatePresence initial={false}>
        {isExpanded && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-2 pt-3 pl-4 border-l border-ink/10">
              {item.children!.map((child) => {
                const isChildActive = pathname === child.href;
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    className={`font-jetbrains text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 py-1 ${
                      isChildActive
                        ? "text-ink"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {child.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Navigation Component ───────────────────────────────── */

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Scroll-aware background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Escape key handler + body overflow lock
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileOpen(false);
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleEsc);
      };
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* ─── Desktop / Shared Nav Bar ─── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 px-5 sm:px-6 md:px-12 py-4 md:py-5 flex justify-between items-center ${
          isScrolled
            ? "bg-warm-white/90 border-b border-black/[0.06] py-3 md:py-4"
            : "bg-transparent"
        }`}
        style={{
          backdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
          WebkitBackdropFilter: isScrolled ? "blur(24px)" : "blur(0px)",
          transition:
            "backdrop-filter 0.7s cubic-bezier(0.16, 1, 0.3, 1), -webkit-backdrop-filter 0.7s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.7s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* TANGISON Wordmark */}
        <Link
          href="/"
          className="font-cabinet font-bold tracking-[0.3em] uppercase text-ink text-sm md:text-base hover:text-ink-light transition-all duration-500 hover:tracking-[0.4em]"
          aria-label="Tangison home"
        >
          TANGISON
        </Link>

        {/* Desktop navigation links */}
        <div className="hidden lg:flex items-center gap-7">
          {navItems.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} pathname={pathname} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`font-jetbrains text-[10px] uppercase tracking-[0.2em] relative group inline-flex items-center transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-ink"
                    : item.href === "/contact"
                    ? "text-rust-signal hover:text-rust-signal/80"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
                {/* Underline indicator */}
                <span
                  className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300 ease-out ${
                    pathname === item.href
                      ? "w-full bg-rust-signal"
                      : "w-0 group-hover:w-full bg-rust-signal/60"
                  }`}
                />
              </Link>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-ink p-2 -mr-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
        >
          <HamburgerIcon isOpen={isMobileOpen} />
        </button>
      </motion.nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-warm-white flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Spacer for nav bar height */}
            <div className="h-16 md:h-20 shrink-0" />

            {/* Centered nav links */}
            <div className="flex-1 flex flex-col items-center justify-center px-6">
              <nav className="flex flex-col items-center gap-5 sm:gap-6 w-full max-w-sm">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.99 }}
                    transition={{
                      delay: i * 0.06 + 0.1,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full text-center"
                  >
                    <MobileAccordionItem
                      item={item}
                      pathname={pathname}
                      onClose={() => setIsMobileOpen(false)}
                    />
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Bottom location tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="pb-8 text-center shrink-0"
            >
              <span className="font-jetbrains text-[9px] text-ink-muted/40 uppercase tracking-[0.3em]">
                Windhoek, Namibia
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
