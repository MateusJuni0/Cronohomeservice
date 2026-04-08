"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

interface WorkItem {
  title: string;
  photo: string;
}

interface ServiceCategory {
  name: string;
  items: WorkItem[];
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: "Remodelação Geral",
    items: [
      { title: "Apartamento T2 completo", photo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" },
      { title: "Remodelação chave na mão", photo: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" },
      { title: "Renovação de moradia", photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" },
      { title: "Reabilitação de espaço", photo: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80" },
      { title: "Ampliação de divisão", photo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80" },
    ],
  },
  {
    name: "Cozinhas",
    items: [
      { title: "Cozinha moderna", photo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
      { title: "Cozinha open space", photo: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=80" },
      { title: "Cozinha por medida", photo: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80" },
      { title: "Bancada e armários", photo: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80" },
      { title: "Ilha central", photo: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=400&q=80" },
    ],
  },
  {
    name: "Casas de Banho",
    items: [
      { title: "Casa de banho completa", photo: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&q=80" },
      { title: "Base de duche", photo: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80" },
      { title: "Sanita e lavatório", photo: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=400&q=80" },
      { title: "Revestimento cerâmico", photo: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&q=80" },
      { title: "Iluminação e espelhos", photo: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=400&q=80" },
    ],
  },
  {
    name: "Pintura e Acabamentos",
    items: [
      { title: "Pintura de interiores", photo: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80" },
      { title: "Pintura de fachada", photo: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&q=80" },
      { title: "Estuque e gesso", photo: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=400&q=80" },
      { title: "Acabamento decorativo", photo: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=400&q=80" },
    ],
  },
  {
    name: "Electricidade e Canalização",
    items: [
      { title: "Quadro eléctrico", photo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80" },
      { title: "Instalação de tomadas", photo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
      { title: "Reparação de tubagens", photo: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80" },
      { title: "Aquecimento central", photo: "https://images.unsplash.com/photo-1558618047-3c7b36c3e6c6?w=400&q=80" },
    ],
  },
];

function ScrollRow({ category }: { category: ServiceCategory }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-10 first:mt-8 sm:mt-14 sm:first:mt-12">
      {/* Category header */}
      <div className="mb-4 flex items-center justify-between sm:mb-5">
        <h3 className="text-base font-bold sm:text-lg" style={{ color: "#E67E22" }}>
          {category.name}
        </h3>
        <a href="#orcamento" className="text-xs font-medium text-white/50 transition-colors hover:text-white/80 sm:text-sm">
          Ver tudo &rarr;
        </a>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:gap-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {category.items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="group w-[180px] flex-shrink-0 snap-start sm:w-[220px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 transition-all group-hover:border-[rgba(230,126,34,0.3)]">
              <Image
                src={item.photo}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="220px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <p className="mt-2 text-xs font-medium text-white/80 sm:text-sm">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <SectionWrapper id="servicos" className="section-light py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Nossos Serviços"
          title="O que precisar, nós resolvemos."
          subtitle="Toque para o lado e veja os nossos trabalhos por categoria."
        />

        {SERVICE_CATEGORIES.map((cat) => (
          <ScrollRow key={cat.name} category={cat} />
        ))}

        {/* CTA */}
        <div className="mt-10 text-center sm:mt-16">
          <a href="#orcamento"
            className="btn-orange inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold sm:text-base">
            Pedir orçamento para o seu projecto <span>&rarr;</span>
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
