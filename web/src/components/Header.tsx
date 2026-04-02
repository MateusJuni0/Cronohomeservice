"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "O Método", href: "#metodo" },
  { label: "Orçamento", href: "#orcamento" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0C0A09]/95 backdrop-blur-xl border-b border-gold/10 shadow-lg shadow-black/30"
          : "bg-[#0C0A09]/60 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0 sm:gap-3">
            <Image
              src="/logo.png"
              width={44}
              height={44}
              alt="Cronograma Home Service"
              className="object-contain h-9 w-9 sm:h-11 sm:w-11"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-bold tracking-wide text-white sm:text-base">
                CRONOGRAMA
              </span>
              <span className="text-[9px] font-light tracking-[0.2em] text-gold/70 sm:text-[10px]">
                Home Service
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium text-[rgba(250,250,249,0.6)] transition-colors hover:text-[rgba(250,250,249,0.9)]"
              >
                {item.label}
              </a>
            ))}
            <motion.a
              href="#orcamento"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="gold-glow bg-gold px-6 py-2.5 text-sm font-semibold text-[#0C0A09]"
            >
              Pedir Orçamento
            </motion.a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-[rgba(250,250,249,0.85)]"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-[rgba(250,250,249,0.85)]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-[rgba(250,250,249,0.85)]"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-gold/10 bg-[#0C0A09]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-base font-medium text-[rgba(250,250,249,0.7)] transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#orcamento"
                onClick={() => setMobileOpen(false)}
                className="mt-2 gold-glow bg-gold px-4 py-3 text-center text-base font-semibold text-[#0C0A09]"
              >
                Pedir Orçamento
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
