"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  { icon: "🛡️", text: "20 Anos Experiência" },
  { icon: "📝", text: "Orçamento em 24h" },
  { icon: "✅", text: "Garantia 5 Anos" },
  { icon: "🧹", text: "Obra Limpa Garantida" },
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
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transformamos a sua casa.
          <br />
          <span className="text-gold">No prazo. No orçamento.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/70 sm:text-xl"
        >
          20 anos de experiência em remodelações em Lisboa e arredores.
          Orçamento gratuito em 24h.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#orcamento"
            className="w-full bg-gold px-8 py-4 text-lg font-semibold text-navy transition-colors hover:bg-gold-light sm:w-auto"
          >
            Pedir Orçamento Grátis
          </a>
          <a
            href="#portfolio"
            className="w-full border border-white/30 px-8 py-4 text-lg font-semibold text-white transition-colors hover:border-white hover:bg-white/5 sm:w-auto"
          >
            Ver Portfólio
          </a>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8"
        >
          {TRUST_ITEMS.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-sm font-medium text-white/80">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
