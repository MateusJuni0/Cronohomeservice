"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  {
    title: "20 Anos",
    subtitle: "Experiência comprovada",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "24 Horas",
    subtitle: "Orçamento gratuito",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "5 Anos",
    subtitle: "Garantia total",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Obra Limpa",
    subtitle: "Limpeza final incluída",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
        alt="Cozinha premium remodelada"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080E1A]/90 via-[#080E1A]/70 to-[#080E1A]/40" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#080E1A] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 text-xs font-medium tracking-[0.3em] text-gold/80 uppercase"
        >
          Remodelações Premium em Lisboa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-4xl font-light leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transformamos a sua casa.
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-2 font-serif text-4xl font-light leading-[1.1] text-gold sm:text-5xl md:text-6xl lg:text-7xl"
        >
          No prazo. No orçamento.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-8 max-w-2xl text-lg font-light text-muted sm:text-xl"
        >
          20 anos de experiência em remodelações em Lisboa e arredores.
          Orçamento gratuito em 24h.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.a
            href="#orcamento"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="gold-glow w-full bg-gold px-10 py-4 text-lg font-semibold text-[#080E1A] sm:w-auto"
          >
            Pedir Orçamento Grátis
          </motion.a>
          <motion.a
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full border border-white/30 px-10 py-4 text-lg font-medium text-white transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            Ver Portfólio
          </motion.a>
        </motion.div>

        {/* Trust Bar */}
        <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              className="group flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-5 backdrop-blur-sm transition-all duration-300 hover:border-gold/30 hover:bg-white/[0.08]"
            >
              <span className="text-gold">{item.icon}</span>
              <span className="text-sm font-semibold text-white">{item.title}</span>
              <span className="text-[11px] text-muted">{item.subtitle}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">Scroll</span>
          <svg className="h-5 w-5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
