"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const CATEGORIES = [
  {
    title: "Remodelação",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
      </svg>
    ),
  },
  {
    title: "Pintura",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Canalização",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Electricidade",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Pavimentos",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  },
  {
    title: "Cozinhas",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    title: "Casas de Banho",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      </svg>
    ),
  },
  {
    title: "Decoração",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
      </svg>
    ),
  },
];

const WORK_ITEMS = [
  { title: "Remodelação de Apartamento", category: "Remodelação", photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80" },
  { title: "Pintura de Interiores", category: "Pintura", photo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500&q=80" },
  { title: "Reparação de Tubagens", category: "Canalização", photo: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80" },
  { title: "Quadro Eléctrico", category: "Electricidade", photo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500&q=80" },
  { title: "Pavimento Cerâmico", category: "Pavimentos", photo: "https://images.unsplash.com/photo-1558618047-3c7b36c3e6c6?w=500&q=80" },
  { title: "Cozinha Moderna", category: "Cozinhas", photo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80" },
  { title: "Casa de Banho Completa", category: "Casas de Banho", photo: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=500&q=80" },
  { title: "Decoração de Sala", category: "Decoração", photo: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80" },
  { title: "Remodelação Chave na Mão", category: "Remodelação", photo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80" },
  { title: "Pintura de Fachada", category: "Pintura", photo: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=500&q=80" },
  { title: "Cozinha Open Space", category: "Cozinhas", photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80" },
  { title: "Pavimento Vinílico", category: "Pavimentos", photo: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=500&q=80" },
];

export default function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <SectionWrapper id="servicos" className="section-light py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossos Serviços"
          title="O que precisar, nós resolvemos."
          subtitle="Do projecto à entrega — cada detalhe importa."
        />

        {/* Category icons grid */}
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-4 gap-4 sm:mt-12 sm:gap-6 md:grid-cols-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.title} className="flex flex-col items-center gap-2">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full transition-shadow hover:shadow-md sm:h-16 sm:w-16"
                style={{ background: "rgba(230,126,34,0.15)", color: "#E67E22" }}
              >
                {cat.icon}
              </div>
              <span className="text-center text-[10px] font-medium leading-tight text-white/80 sm:text-xs">
                {cat.title}
              </span>
            </div>
          ))}
        </div>

        {/* Horizontal scroll carousel */}
        <div className="relative mt-10 sm:mt-16">
          <div className="mb-4 flex items-center justify-between sm:mb-6">
            <h3 className="text-sm font-semibold text-white sm:text-base">
              Trabalhos realizados
            </h3>
            <span className="text-xs font-medium" style={{ color: "#E67E22" }}>
              Ver tudo &rarr;
            </span>
          </div>

          {/* Scroll arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 translate-y-2 items-center justify-center rounded-full shadow-lg transition-all hover:shadow-xl md:flex cursor-pointer"
            style={{ background: "rgba(18,16,14,0.85)", color: "#E67E22", border: "1px solid rgba(230,126,34,0.25)" }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 translate-y-2 items-center justify-center rounded-full shadow-lg transition-all hover:shadow-xl md:flex cursor-pointer"
            style={{ background: "rgba(18,16,14,0.85)", color: "#E67E22", border: "1px solid rgba(230,126,34,0.25)" }}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:gap-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {WORK_ITEMS.map((item, i) => (
              <motion.div
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group w-[200px] flex-shrink-0 snap-start cursor-default sm:w-[240px]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 shadow-sm transition-shadow group-hover:shadow-md">
                  <Image
                    src={item.photo}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="240px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-xs font-semibold text-white sm:text-sm">{item.title}</p>
                  </div>
                </div>
                <p className="mt-1.5 text-[10px] font-medium sm:text-xs" style={{ color: "#E67E22" }}>
                  {item.category}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
