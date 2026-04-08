"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const SERVICES = [
  {
    title: "Remodelação Geral",
    subtitle: "Chave na mão",
    photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    title: "Pintura e Acabamentos",
    subtitle: "Tintas premium",
    photo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
  },
  {
    title: "Canalização",
    subtitle: "Certificada",
    photo: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },
  {
    title: "Electricidade",
    subtitle: "Normas vigentes",
    photo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80",
  },
  {
    title: "Pavimentos",
    subtitle: "Cerâmica e vinílico",
    photo: "https://images.unsplash.com/photo-1558618047-3c7b36c3e6c6?w=600&q=80",
  },
  {
    title: "Cozinhas",
    subtitle: "Projecto a projecto",
    photo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
  },
  {
    title: "Casas de Banho",
    subtitle: "Design moderno",
    photo: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
  },
  {
    title: "Decoração de Interiores",
    subtitle: "Personalizado",
    photo: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80",
  },
];

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="section-light py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossos Serviços"
          title="Soluções completas para a sua casa"
          subtitle="Do projecto à entrega — cada detalhe importa."
          inverted
        />

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-4 md:grid-cols-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative aspect-[3/4] cursor-default overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={service.photo}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <h3 className="text-sm font-semibold leading-tight text-white sm:text-base">
                  {service.title}
                </h3>
                <span
                  className="mt-1.5 block h-0.5 w-6 transition-all duration-300 group-hover:w-10"
                  style={{ background: "#E67E22" }}
                />
                <p className="mt-1 text-[10px] sm:text-xs" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {service.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-12">
          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-xs font-semibold tracking-wide transition-all hover:shadow-md sm:px-8 sm:py-4 sm:text-sm"
            style={{
              borderColor: "rgba(230,126,34,0.4)",
              color: "#E67E22",
            }}
          >
            Pedir orçamento para o seu projecto <span>&rarr;</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
