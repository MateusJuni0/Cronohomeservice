"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const SERVICES = [
  {
    number: "01",
    title: "Remodelacao Geral",
    description: "Transformacao completa de espacos — do chao ao teto, chave na mao.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Instalacoes",
    description: "Canalizacao, electricidade e gas — certificados e dentro da lei.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Pintura e Acabamentos",
    description: "Acabamento impecavel com tintas premium e tecnicas profissionais.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Decoracao de Interiores",
    description: "Design de interiores personalizado que reflecte o seu estilo de vida.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="bg-dots py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossos Servicos"
          title="Solucoes completas para a sua casa"
          subtitle="Do projecto a entrega — cada detalhe importa."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="group relative cursor-default overflow-hidden border border-gold/10 bg-[#0D1526] p-8 transition-all duration-300 hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(201,168,76,0.08)]"
            >
              {/* Watermark number */}
              <span className="pointer-events-none absolute right-6 top-4 select-none font-serif text-[96px] leading-none text-gold/[0.07]">
                {service.number}
              </span>

              <div className="relative">
                {/* Icon container */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center border border-gold/40 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold/5">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 font-serif text-2xl text-[#F8F6F1]">{service.title}</h3>

                {/* Gold line */}
                <span className="mb-4 block h-[1px] w-10 bg-gold" />

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-white/55">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-gold transition-all duration-300 group-hover:gap-3">
                  <span>Saber mais</span>
                  <span className="inline-block">&rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
