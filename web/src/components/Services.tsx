"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

/* ── 3D-style service icons (Oscar-inspired circular grid) ── */

interface ServiceIcon {
  label: string;
  icon: React.ReactNode;
}

const SERVICE_ICONS: ServiceIcon[] = [
  {
    label: "Remodelação",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <path d="M8 40V20l16-12 16 12v20H28v-12h-8v12H8z" fill="url(#home)" stroke="#E67E22" strokeWidth="1.5"/>
        <defs><linearGradient id="home" x1="8" y1="8" x2="40" y2="40"><stop stopColor="#E67E22" stopOpacity="0.4"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Pintura",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <rect x="14" y="8" width="20" height="14" rx="3" fill="url(#paint)" stroke="#E67E22" strokeWidth="1.5"/>
        <rect x="22" y="22" width="4" height="18" rx="2" fill="#E67E22" fillOpacity="0.3" stroke="#E67E22" strokeWidth="1.5"/>
        <defs><linearGradient id="paint" x1="14" y1="8" x2="34" y2="22"><stop stopColor="#E67E22" stopOpacity="0.5"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.15"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Eletricidade",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <path d="M28 6L16 26h8l-4 16 12-20h-8l4-16z" fill="url(#bolt)" stroke="#E67E22" strokeWidth="1.5" strokeLinejoin="round"/>
        <defs><linearGradient id="bolt" x1="16" y1="6" x2="32" y2="42"><stop stopColor="#E67E22" stopOpacity="0.5"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Canalização",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <path d="M12 16h8v4h8v-4h8v8c0 6-4 10-12 14-8-4-12-8-12-14v-8z" fill="url(#pipe)" stroke="#E67E22" strokeWidth="1.5"/>
        <circle cx="24" cy="26" r="3" fill="#E67E22" fillOpacity="0.5"/>
        <defs><linearGradient id="pipe" x1="12" y1="16" x2="36" y2="38"><stop stopColor="#E67E22" stopOpacity="0.4"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Pladur",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <rect x="8" y="10" width="32" height="28" rx="3" fill="url(#wall)" stroke="#E67E22" strokeWidth="1.5"/>
        <line x1="8" y1="24" x2="40" y2="24" stroke="#E67E22" strokeWidth="1" strokeOpacity="0.4"/>
        <line x1="24" y1="10" x2="24" y2="38" stroke="#E67E22" strokeWidth="1" strokeOpacity="0.4"/>
        <defs><linearGradient id="wall" x1="8" y1="10" x2="40" y2="38"><stop stopColor="#E67E22" stopOpacity="0.35"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.08"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Cozinhas",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <rect x="10" y="20" width="28" height="20" rx="3" fill="url(#kitchen)" stroke="#E67E22" strokeWidth="1.5"/>
        <path d="M16 14c0-2 1.5-4 4-4s4 2 4 4M24 14c0-2 1.5-4 4-4s4 2 4 4" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <line x1="10" y1="30" x2="38" y2="30" stroke="#E67E22" strokeWidth="1" strokeOpacity="0.4"/>
        <defs><linearGradient id="kitchen" x1="10" y1="20" x2="38" y2="40"><stop stopColor="#E67E22" stopOpacity="0.4"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Casas de Banho",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <path d="M10 24h28v4c0 6-6 10-14 10S10 34 10 28v-4z" fill="url(#bath)" stroke="#E67E22" strokeWidth="1.5"/>
        <path d="M14 24V14a4 4 0 018 0v2" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <circle cx="22" cy="14" r="1.5" fill="#E67E22" fillOpacity="0.5"/>
        <defs><linearGradient id="bath" x1="10" y1="24" x2="38" y2="38"><stop stopColor="#E67E22" stopOpacity="0.45"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Pavimentos",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <path d="M6 32l18-8 18 8v6l-18 8-18-8v-6z" fill="url(#floor)" stroke="#E67E22" strokeWidth="1.5"/>
        <path d="M6 26l18-8 18 8" stroke="#E67E22" strokeWidth="1" strokeOpacity="0.3" fill="none"/>
        <path d="M6 20l18-8 18 8" stroke="#E67E22" strokeWidth="1" strokeOpacity="0.2" fill="none"/>
        <defs><linearGradient id="floor" x1="6" y1="24" x2="42" y2="46"><stop stopColor="#E67E22" stopOpacity="0.4"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Telhados",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <path d="M4 24L24 8l20 16H4z" fill="url(#roof)" stroke="#E67E22" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="14" y="24" width="20" height="16" fill="#E67E22" fillOpacity="0.08" stroke="#E67E22" strokeWidth="1"/>
        <defs><linearGradient id="roof" x1="4" y1="8" x2="44" y2="24"><stop stopColor="#E67E22" stopOpacity="0.5"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.15"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Carpintaria",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <rect x="6" y="20" width="36" height="8" rx="2" fill="url(#wood)" stroke="#E67E22" strokeWidth="1.5"/>
        <rect x="6" y="32" width="36" height="8" rx="2" fill="url(#wood2)" stroke="#E67E22" strokeWidth="1.5"/>
        <line x1="18" y1="20" x2="18" y2="28" stroke="#E67E22" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="30" y1="20" x2="30" y2="28" stroke="#E67E22" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="12" y1="32" x2="12" y2="40" stroke="#E67E22" strokeWidth="0.8" strokeOpacity="0.3"/>
        <line x1="24" y1="32" x2="24" y2="40" stroke="#E67E22" strokeWidth="0.8" strokeOpacity="0.3"/>
        <defs>
          <linearGradient id="wood" x1="6" y1="20" x2="42" y2="28"><stop stopColor="#E67E22" stopOpacity="0.35"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient>
          <linearGradient id="wood2" x1="6" y1="32" x2="42" y2="40"><stop stopColor="#E67E22" stopOpacity="0.25"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.08"/></linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: "Isolamento",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <rect x="10" y="10" width="28" height="28" rx="4" fill="url(#insul)" stroke="#E67E22" strokeWidth="1.5"/>
        <path d="M16 18h16M16 24h16M16 30h16" stroke="#E67E22" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
        <defs><linearGradient id="insul" x1="10" y1="10" x2="38" y2="38"><stop stopColor="#E67E22" stopOpacity="0.35"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.08"/></linearGradient></defs>
      </svg>
    ),
  },
  {
    label: "Serralharia",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8 sm:h-10 sm:w-10">
        <circle cx="18" cy="18" r="8" fill="url(#gear)" stroke="#E67E22" strokeWidth="1.5"/>
        <circle cx="18" cy="18" r="3" fill="#E67E22" fillOpacity="0.3"/>
        <circle cx="32" cy="32" r="6" fill="url(#gear2)" stroke="#E67E22" strokeWidth="1.5"/>
        <circle cx="32" cy="32" r="2" fill="#E67E22" fillOpacity="0.3"/>
        <defs>
          <linearGradient id="gear" x1="10" y1="10" x2="26" y2="26"><stop stopColor="#E67E22" stopOpacity="0.45"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient>
          <linearGradient id="gear2" x1="26" y1="26" x2="38" y2="38"><stop stopColor="#E67E22" stopOpacity="0.35"/><stop offset="1" stopColor="#E67E22" stopOpacity="0.1"/></linearGradient>
        </defs>
      </svg>
    ),
  },
];

/* ── Work photo categories (only 3) ── */

interface WorkItem {
  title: string;
  photo: string;
}

interface ServiceCategory {
  name: string;
  items: WorkItem[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Remodelação Geral",
    items: [
      { title: "Apartamento T2 completo", photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
      { title: "Remodelação chave na mão", photo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" },
      { title: "Renovação de moradia", photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" },
      { title: "Reabilitação de espaço", photo: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80" },
      { title: "Ampliação de divisão", photo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80" },
    ],
  },
  {
    name: "Cozinhas",
    items: [
      { title: "Cozinha moderna", photo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
      { title: "Cozinha open space", photo: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80" },
      { title: "Cozinha por medida", photo: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80" },
      { title: "Bancada e armários", photo: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80" },
      { title: "Ilha central", photo: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&q=80" },
    ],
  },
  {
    name: "Casas de Banho",
    items: [
      { title: "Casa de banho completa", photo: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&q=80" },
      { title: "Base de duche", photo: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80" },
      { title: "Sanita e lavatório", photo: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80" },
      { title: "Revestimento cerâmico", photo: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&q=80" },
      { title: "Iluminação e espelhos", photo: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&q=80" },
    ],
  },
];

/* ── Icon component with 3D circle + micro-animation ── */

function ServiceIconItem({ item, index }: { item: ServiceIcon; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
      className="flex flex-col items-center gap-2 sm:gap-3"
    >
      <motion.div
        whileHover={{ scale: 1.12, y: -4 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="relative flex h-16 w-16 items-center justify-center rounded-full sm:h-20 sm:w-20"
        style={{
          background: "linear-gradient(145deg, rgba(230,126,34,0.25), rgba(230,126,34,0.08))",
          border: "1.5px solid rgba(230,126,34,0.35)",
          boxShadow: "0 4px 20px rgba(230,126,34,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
      >
        {/* Glow ring on hover */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(230,126,34,0.15) 0%, transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10">{item.icon}</span>
      </motion.div>
      <span className="text-center text-[10px] font-medium leading-tight text-white/80 sm:text-xs">
        {item.label}
      </span>
    </motion.div>
  );
}

/* ── Scroll row for work photos ── */

function ScrollRow({ category, catIndex }: { category: ServiceCategory; catIndex: number }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: catIndex * 0.1 }}
      className="mt-10 first:mt-8 sm:mt-14 sm:first:mt-12"
    >
      {/* Category header */}
      <div className="mb-4 flex items-center justify-between sm:mb-5">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base font-bold sm:text-lg"
          style={{ color: "#E67E22" }}
        >
          {category.name}
        </motion.h3>
        <motion.a
          href="#orcamento"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-xs font-medium text-white/50 transition-colors hover:text-[#E67E22] sm:text-sm"
        >
          Ver tudo &rarr;
        </motion.a>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {category.items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            whileHover={{ y: -4 }}
            className="group w-[160px] flex-shrink-0 snap-start sm:w-[220px]"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 transition-all group-hover:border-[rgba(230,126,34,0.3)]"
            >
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              {/* Title overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-2.5 sm:p-3">
                <p className="text-[11px] font-medium leading-tight text-white sm:text-xs">
                  {item.title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ── Main Services Section ── */

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="section-light py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossos Serviços"
          title="O que precisar, nós resolvemos."
          subtitle="Toque para o lado e veja os nossos trabalhos por categoria."
        />

        {/* ── Oscar-style 3D icon grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12"
        >
          <div
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-6 sm:gap-6 sm:overflow-visible lg:grid-cols-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SERVICE_ICONS.map((item, i) => (
              <div key={item.label} className="flex-shrink-0 snap-start">
                <ServiceIconItem item={item} index={i} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Category scroll rows (only 3) ── */}
        {SERVICE_CATEGORIES.map((cat, i) => (
          <ScrollRow key={cat.name} category={cat} catIndex={i} />
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 text-center sm:mt-16"
        >
          <motion.a
            href="#orcamento"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn-orange inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold sm:text-base"
          >
            Pedir orçamento para o seu projecto <span>&rarr;</span>
          </motion.a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
