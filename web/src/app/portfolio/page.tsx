"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { Slider } from "@/components/BeforeAfter";
import CursorDot from "@/components/CursorDot";

const InfiniteMenu = dynamic(() => import("@/components/InfiniteMenu"), { ssr: false });

const PORTFOLIO_PROJECTS = [
  {
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    label: "Casa de Banho — Lisboa, 2024",
    title: "Casa de Banho Lisboa",
  },
  {
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    label: "Cozinha — Cascais, 2024",
    title: "Cozinha Cascais",
  },
  {
    before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    label: "Sala de Estar — Oeiras, 2024",
    title: "Sala Oeiras",
  },
  {
    before: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    label: "Apartamento T2 — Amadora, 2024",
    title: "Apartamento Amadora",
  },
  {
    before: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    label: "Suite Master — Sintra, 2024",
    title: "Suite Sintra",
  },
  {
    before: "https://images.unsplash.com/photo-1560185008-b033106af5c8?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    label: "Varanda — Lisboa, 2023",
    title: "Varanda Lisboa",
  },
  {
    before: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    label: "Hall de Entrada — Cascais, 2023",
    title: "Hall Cascais",
  },
  {
    before: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    label: "Escritório — Lisboa, 2023",
    title: "Escritório Lisboa",
  },
  {
    before: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    label: "Cozinha Americana — Almada, 2023",
    title: "Cozinha Almada",
  },
  {
    before: "https://images.unsplash.com/photo-1560449752-3fd4bdbe94c0?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80",
    label: "Casa de Banho Suite — Oeiras, 2023",
    title: "WC Suite Oeiras",
  },
  {
    before: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
    label: "Sala Jantar — Sintra, 2023",
    title: "Sala Jantar Sintra",
  },
  {
    before: "https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
    label: "Terraço — Lisboa, 2023",
    title: "Terraço Lisboa",
  },
];

const INFINITE_MENU_ITEMS = PORTFOLIO_PROJECTS.map((p) => ({
  image: p.after,
  link: "#",
  title: p.title,
  description: p.label,
}));

export default function PortfolioPage() {
  return (
    <>
      <CursorDot />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="section-glass pt-32 pb-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Portfólio Completo"
              title="Todas as Nossas Transformações"
              subtitle="12 projectos reais com antes e depois interactivo. Arraste para comparar."
            />
          </div>
        </section>

        {/* Before/After Grid */}
        <section className="section-glass pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="glass-panel rounded-2xl p-6 sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {PORTFOLIO_PROJECTS.map((project) => (
                  <Slider key={project.label} before={project.before} after={project.after} label={project.label} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Infinite Menu Section */}
        <section className="section-glass py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Explorar"
              title="Galeria Interactiva 3D"
              subtitle="Rode a esfera para explorar todos os nossos projectos."
            />
            <div className="mt-12 glass-panel rounded-2xl overflow-hidden" style={{ height: "600px" }}>
              <InfiniteMenu items={INFINITE_MENU_ITEMS} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-glass pb-28">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <div className="glass-panel rounded-2xl p-12">
              <h3 className="font-serif text-2xl sm:text-3xl" style={{ color: "#FFFFFF" }}>
                Gostou do que viu?
              </h3>
              <p className="mt-4" style={{ color: "#D6D3D1" }}>
                Peça o seu orçamento gratuito e transforme a sua casa.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/#orcamento"
                  className="btn-gold-glass rounded-lg px-10 py-4 text-lg font-semibold"
                >
                  Pedir Orçamento Grátis
                </a>
                <a
                  href="/"
                  className="btn-glass rounded-lg px-10 py-4 text-lg font-medium"
                >
                  &larr; Voltar ao Site
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
