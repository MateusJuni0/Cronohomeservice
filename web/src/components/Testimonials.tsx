"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const TESTIMONIALS = [
  {
    name: "Maria Santos",
    location: "Lisboa",
    initials: "MS",
    text: "A equipa foi incrivelmente profissional. A nossa cozinha ficou irreconhecível — e entregaram no prazo que prometeram. Recomendo sem hesitação.",
  },
  {
    name: "João Ferreira",
    location: "Cascais",
    initials: "JF",
    text: "Obra entregue no prazo e no orçamento, como combinado. O gestor de projecto manteve-nos informados todos os dias. Uma experiência completamente diferente.",
  },
  {
    name: "Ana Costa",
    location: "Oeiras",
    initials: "AC",
    text: "Finalmente uma empresa que cumpre o que promete. A remodelação da casa de banho foi impecável e a equipa deixou tudo limpo no final.",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testemunhos" className="section-light py-14 sm:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testemunhos"
          title="O que dizem os nossos clientes"
          inverted
        />

        <div className="mt-8 grid gap-4 sm:mt-16 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="light-card rounded-xl p-5 sm:p-8"
            >
              {/* Decorative quote */}
              <span
                className="block font-serif text-3xl leading-none sm:text-5xl"
                style={{ color: "rgba(230,126,34,0.20)" }}
              >
                &ldquo;
              </span>

              <p
                className="mt-1.5 text-xs leading-relaxed italic sm:mt-2 sm:text-sm"
                style={{ color: "rgba(26,19,10,0.70)" }}
              >
                {t.text}
              </p>

              <div className="mt-4 flex items-center gap-3 sm:mt-6 sm:gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm"
                  style={{ background: "#E67E22" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold sm:text-base" style={{ color: "#1a130a" }}>
                    {t.name}
                  </p>
                  <p className="text-xs sm:text-sm" style={{ color: "rgba(26,19,10,0.50)" }}>
                    {t.location}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex gap-0.5 sm:mt-4 sm:gap-1" style={{ color: "#E67E22" }}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg key={idx} className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
