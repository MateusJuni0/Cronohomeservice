"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const LightRays = dynamic(() => import("./LightRays"), { ssr: false });

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
      {/* LightRays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysColor="#C9A84C"
          raysOrigin="top-center"
          raysSpeed={0.6}
          lightSpread={1.5}
          rayLength={2.5}
          pulsating={true}
          fadeDistance={0.8}
          saturation={0.6}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0.15}
          distortion={0.1}
        />
      </div>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0C0A09]/60 via-[#0C0A09]/40 to-[#0C0A09]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:py-32 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-[10px] font-medium tracking-[0.3em] text-gold/80 uppercase sm:mb-6 sm:text-xs"
        >
          Remodelações Premium em Lisboa
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-serif text-3xl font-light leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-[rgba(250,250,249,0.95)]">Remodelações em Lisboa.</span>
          <br />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-1 inline-block text-gold sm:mt-2"
          >
            No prazo. No orçamento.
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mx-auto mt-5 max-w-2xl text-base font-light sm:mt-8 sm:text-xl" style={{ color: "rgba(250,250,249,0.80)" }}
        >
          20 anos de experiência em remodelações em Lisboa e arredores.
          Orçamento gratuito em 24h.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4"
        >
          <motion.a
            href="#orcamento"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold-glass w-full rounded-lg px-8 py-3.5 text-base font-semibold sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
          >
            Pedir Orçamento Grátis
          </motion.a>
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-glass w-full rounded-lg px-8 py-3.5 text-base font-medium sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
          >
            Ver Portfólio
          </motion.a>
        </motion.div>

        {/* Trust Bar */}
        <div className="mt-12 grid grid-cols-2 gap-2.5 sm:mt-20 sm:grid-cols-4 sm:gap-6">
          {TRUST_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.1 }}
              className="glass-card group flex flex-col items-center gap-1.5 rounded-xl px-3 py-3.5 sm:gap-2 sm:px-4 sm:py-5"
            >
              <span className="text-gold [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6">{item.icon}</span>
              <span className="text-xs font-semibold text-[rgba(250,250,249,0.9)] sm:text-sm">{item.title}</span>
              <span className="text-[10px] sm:text-[11px]" style={{ color: "rgba(250,250,249,0.65)" }}>{item.subtitle}</span>
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
          <span className="text-[10px] font-medium tracking-[0.2em] text-[rgba(250,250,249,0.3)] uppercase">Scroll</span>
          <svg className="h-5 w-5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
