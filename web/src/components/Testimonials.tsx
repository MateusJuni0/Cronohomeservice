"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

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
    <SectionWrapper className="bg-navy-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
            O que dizem os nossos <span className="text-gold">clientes</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              whileHover={{ y: -4 }}
              className="rounded-lg border border-white/10 bg-navy p-8"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-white/50">{t.location}</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/70 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
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
