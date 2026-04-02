"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const SERVICES = [
  {
    title: "Remodelação Geral",
    description: "Transformação completa de espaços — do chão ao teto, chave na mão.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
      </svg>
    ),
  },
  {
    title: "Instalações",
    description: "Canalização, electricidade e gás — certificados e dentro da lei.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "Pintura e Acabamentos",
    description: "Acabamento impecável com tintas premium e técnicas profissionais.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
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
    <SectionWrapper id="servicos" className="bg-dots py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossos Serviços"
          title="Soluções completas para a sua casa"
          subtitle="Do projecto à entrega — cada detalhe importa."
        />

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              whileHover={{ backgroundColor: "rgba(17, 29, 50, 1)" }}
              transition={{ duration: 0.3 }}
              className="group relative cursor-default overflow-hidden bg-[#080E1A] p-8"
            >
              {/* Watermark number */}
              <div className="pointer-events-none absolute right-4 top-4 select-none text-[120px] font-bold leading-none text-gold/[0.04]">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Gold line animated on hover */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gold transition-all duration-500 group-hover:w-full" />

              <div className="relative">
                {/* Icon container */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center border border-gold/30 text-gold transition-all duration-300 group-hover:border-gold/80 group-hover:bg-gold/10">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mb-6 mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium text-gold">
                  <span>Saber mais</span>
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
