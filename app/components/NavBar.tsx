"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#kurzy", label: "Kurzy" },
  { href: "#prihlaska", label: "Přihláška" },
  { href: "#poplatky", label: "Poplatky" },
  { href: "#instruktor", label: "Instruktor" },
  { href: "#pobocky", label: "Pobočky" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0d12]/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-foreground"
        >
          Autoškola <span className="text-accent-text">Kuchta</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-light hover:text-foreground transition-colors duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="tel:+420603494096"
          className="hidden md:inline-flex h-9 items-center gap-2 border border-accent bg-accent px-5 text-xs font-bold text-white hover:bg-accent-hover transition-colors duration-150"
        >
          603 494 096
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-muted-light hover:text-foreground transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="md:hidden overflow-hidden bg-[#0a0d12] border-b border-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm font-medium text-muted-light hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="tel:+420603494096"
                  className="inline-flex h-9 items-center gap-2 bg-accent px-5 text-xs font-bold text-white"
                >
                  603 494 096
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
