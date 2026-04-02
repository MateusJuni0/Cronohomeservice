"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const SERVICES = [
  {
    number: "01",
    title: "Remodelação Geral",
    description: "Transformação completa de espaços — do chão ao teto, chave na mão.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Instalações",
    description: "Canalização, electricidade e gás — certificados e dentro da lei.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Pintura e Acabamentos",
    description: "Acabamento impecável com tintas premium e técnicas profissionais.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Decoração de Interiores",
    description: "Design de interiores personalizado que reflecte o seu estilo de vida.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="bg-navy py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-3 text-xs font-medium tracking-[0.3em] text-gold/60 uppercase">
            O que fazemos
          </p>
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Os Nossos <span className="text-gold">Serviços</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/40">
            Soluções completas para transformar a sua casa — do projecto à entrega.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -4, boxShadow: "0 4px 20px rgba(201, 168, 76, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative overflow-hidden rounded-lg border border-gold/20 bg-gradient-to-br from-[#0d1f3c] to-[#0B1628] p-8 transition-colors hover:border-gold/50"
            >
              {/* Watermark number */}
              <span className="pointer-events-none absolute -right-2 -top-4 select-none text-8xl font-bold leading-none text-gold/[0.04]">
                {service.number}
              </span>

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-gold/20 bg-gold/5 text-gold">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold/70 transition-colors group-hover:text-gold">
                  Saber mais
                  <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
