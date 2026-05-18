"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Slider as BeforeAfterSlider } from "@/components/BeforeAfter";

/* -----------------------------------------------------------------------------
   /portfolio — galeria completa em estilo V2 (substitui a versão Unsplash legacy).
   - 10 obras locais (6 já existentes + 4 geradas em round 2)
   - 6 pares antes/depois (3 existentes + 3 novos)
   - 5 filtros: Todas / Cozinhas / Casas de Banho / Salas / Exterior
   - Lightbox modal com tecla Esc + click fora
   - Copy formal premium ('voce')
   ----------------------------------------------------------------------------- */

type Category = "cozinhas" | "casas-de-banho" | "salas" | "exterior";

interface Work {
  slug: string;
  title: string;
  location: string;
  category: Category;
  year: string;
  description: string;
}

const WORKS: Work[] = [
  // 6 obras já existentes (round 1)
  {
    slug: "obra-cozinha-lisboa",
    title: "Cozinha em mármore e madeira",
    location: "Lisboa",
    category: "cozinhas",
    year: "2024",
    description:
      "Remodelação completa com móveis em laca branca, bancada em mármore Calacatta e ferragens em latão escovado. Iluminação LED integrada nas prateleiras flutuantes em carvalho.",
  },
  {
    slug: "obra-casa-banho-cascais",
    title: "Casa de banho com duche walk-in",
    location: "Cascais",
    category: "casas-de-banho",
    year: "2024",
    description:
      "Revestimento total em mármore Calacatta, base de duche em microcimento, vidro frameless e móvel suspenso em carvalho com lavatório integrado.",
  },
  {
    slug: "obra-sala-oeiras",
    title: "Sala de estar luminosa",
    location: "Oeiras",
    category: "salas",
    year: "2024",
    description:
      "Pavimento em carvalho de tábua larga, paredes pintadas em branco mate, mobiliário em linho e acentos em latão e terracota. Acesso integrado a varanda.",
  },
  {
    slug: "obra-quarto-sintra",
    title: "Suite principal em paleta neutra",
    location: "Sintra",
    category: "salas",
    year: "2024",
    description:
      "Suite com paleta de cremes e pedra, cama baixa em plataforma de carvalho, cortinados em linho natural e iluminação difusa. Decoração mínima e funcional.",
  },
  {
    slug: "obra-fachada-amadora",
    title: "Pintura de fachada de prédio",
    location: "Amadora",
    category: "exterior",
    year: "2023",
    description:
      "Reparação e pintura completa de fachada com tinta de exterior CIN, tratamento de fissuras e renovação de azulejos decorativos.",
  },
  {
    slug: "obra-pladur-almada",
    title: "Tectos falsos com iluminação linear",
    location: "Almada",
    category: "salas",
    year: "2023",
    description:
      "Instalação de tectos falsos em pladur com calhas de iluminação LED linear embutida. Acabamento liso, pintura branca mate.",
  },
  // 4 novas (round 2)
  {
    slug: "obra-quarto-lisboa",
    title: "Quarto principal em creme e carvalho",
    location: "Lisboa",
    category: "salas",
    year: "2024",
    description:
      "Quarto com paredes em creme suave, cama baixa em plataforma de carvalho, candeeiro pendente em latão escovado. Cortinados em linho a difundir a luz natural.",
  },
  {
    slug: "obra-wc-cascais-pretos",
    title: "Casa de banho premium em hexagonais pretos",
    location: "Cascais",
    category: "casas-de-banho",
    year: "2024",
    description:
      "Parede húmida revestida a azulejo hexagonal preto, pavimento em mármore branco contrastante, móvel suspenso em carvalho com lavatório em cerâmica branca.",
  },
  {
    slug: "obra-cozinha-sintra",
    title: "Cozinha minimalista handleless",
    location: "Sintra",
    category: "cozinhas",
    year: "2024",
    description:
      "Cozinha com móveis em laca branca sem puxadores, bancada em porcelana fina, electrodomésticos integrados e prateleira flutuante em carvalho.",
  },
  {
    slug: "obra-sala-oeiras-open",
    title: "Open space sobre o Tejo",
    location: "Oeiras",
    category: "salas",
    year: "2024",
    description:
      "Sala open space integrada com cozinha, pavimento em carvalho de tábua larga, sofá em bouclé bege e aparador em nogueira. Portas de vidro com vista sobre o Tejo.",
  },
];

const BA_PAIRS = [
  { before: "/ba/wc-antes.jpg", after: "/gallery/obra-casa-banho-cascais.jpg", label: "Casa de Banho — Cascais" },
  { before: "/ba/cozinha-antes.jpg", after: "/gallery/obra-cozinha-lisboa.jpg", label: "Cozinha — Lisboa" },
  { before: "/ba/sala-antes.jpg", after: "/gallery/obra-sala-oeiras.jpg", label: "Sala — Oeiras" },
  { before: "/ba/quarto-antes.jpg", after: "/gallery/obra-quarto-lisboa.jpg", label: "Quarto — Lisboa" },
  { before: "/ba/wc-pretos-antes.jpg", after: "/gallery/obra-wc-cascais-pretos.jpg", label: "Casa de Banho Premium — Cascais" },
  { before: "/ba/cozinha-sintra-antes.jpg", after: "/gallery/obra-cozinha-sintra.jpg", label: "Cozinha — Sintra" },
];

const FILTERS: Array<{ id: "todas" | Category; label: string }> = [
  { id: "todas", label: "Todas" },
  { id: "cozinhas", label: "Cozinhas" },
  { id: "casas-de-banho", label: "Casas de Banho" },
  { id: "salas", label: "Salas e Quartos" },
  { id: "exterior", label: "Exterior" },
];

const LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "/politica-privacidade" },
  { label: "Termos & Condições", href: "/termos" },
  { label: "Política de Cookies", href: "/cookies" },
  { label: "Livro de Reclamações", href: "/livro-reclamacoes" },
];

function PortfolioHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#E6EAF0] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Crono Home Service — início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-crono.jpeg"
            alt="Crono Home Service"
            className="h-10 w-10 rounded-lg object-cover ring-1 ring-[#E6EAF0]"
          />
          <span className="text-lg font-black tracking-tight text-[#0B1E3A]">
            CRONO<span className="text-[#FF7A1A]">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden text-sm font-semibold text-[#1A2238] transition hover:text-[#1E4FBF] sm:inline"
          >
            ← Voltar
          </Link>
          <a
            href="/#orcamento"
            className="rounded-full bg-[#FF7A1A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(255,122,26,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E56A0E]"
          >
            Pedir Orçamento
          </a>
        </div>
      </div>
    </header>
  );
}

function PortfolioFooter() {
  return (
    <footer className="bg-[#0B1E3A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E4FBF] text-base font-black text-white">C</span>
              <span className="text-lg font-black">CRONO<span className="text-[#FF7A1A]">.</span></span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Remodelações premium em Lisboa e arredores. 20 anos a transformar casas com rigor e compromisso.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[#FF7A1A]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="tel:+351931428476" className="hover:text-[#FF7A1A]">+351 931 428 476</a></li>
              <li><a href="tel:+351935602904" className="hover:text-[#FF7A1A]">+351 935 602 904</a></li>
              <li><a href="mailto:grupocronograma@hotmail.com" className="hover:text-[#FF7A1A]">grupocronograma@hotmail.com</a></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 border-t border-white/10 pt-4 text-xs text-white/50">
          © {new Date().getFullYear()} Cronograma Home Service. Todos os direitos reservados. Desenvolvido por CMTecnologia.
        </p>
      </div>
    </footer>
  );
}

interface LightboxProps {
  work: Work;
  onClose: () => void;
}

function Lightbox({ work, onClose }: LightboxProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={work.title}
      onClick={onClose}
    >
      <div
        className="relative grid max-h-[92vh] w-full max-w-5xl grid-rows-[auto_1fr] overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0B1E3A] shadow-md transition hover:bg-white"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        </button>
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1E3A]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/gallery/${work.slug}.jpg`}
            alt={`${work.title} — ${work.location}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="overflow-y-auto p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
            <span className="rounded-full bg-[#E6F0FF] px-3 py-1 text-[#1E4FBF]">
              {FILTERS.find((f) => f.id === work.category)?.label ?? work.category}
            </span>
            <span className="text-[#6B7587]">{work.location} · {work.year}</span>
          </div>
          <h3 className="mt-3 text-2xl font-black text-[#0B1E3A] sm:text-3xl">{work.title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#4A5568]">{work.description}</p>
          <a
            href="/#orcamento"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#E56A0E]"
            onClick={onClose}
          >
            Quero uma obra como esta
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"todas" | Category>("todas");
  const [selected, setSelected] = useState<Work | null>(null);

  const visible = filter === "todas" ? WORKS : WORKS.filter((w) => w.category === filter);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1A2238]">
      <PortfolioHeader />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#1E4FBF] via-[#1E4FBF] to-[#173FA3] py-16 text-white lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="text-sm font-bold uppercase tracking-widest text-[#FFD36B]">
              Portefólio Completo
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Obras entregues em Lisboa, Cascais, Sintra e arredores.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Uma selecção de remodelações que reflectem o nosso compromisso:
              preço fechado, prazo cumprido, gestor único e garantia de 5 anos
              em todas as intervenções estruturais.
            </p>
          </div>
        </section>

        <section className="border-b border-[#E6EAF0] bg-white py-8">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtros de categoria">
              {FILTERS.map((f) => {
                const active = filter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setFilter(f.id)}
                    className={
                      "rounded-full px-5 py-2.5 text-sm font-bold transition " +
                      (active
                        ? "bg-[#1E4FBF] text-white shadow-[0_6px_20px_rgba(30,79,191,0.35)]"
                        : "bg-[#F5F7FA] text-[#1A2238] hover:bg-[#E6EAF0]")
                    }
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            {visible.length === 0 ? (
              <p className="py-20 text-center text-[#6B7587]">Sem obras nesta categoria.</p>
            ) : (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((w) => (
                  <li key={w.slug}>
                    <button
                      type="button"
                      onClick={() => setSelected(w)}
                      className="group block w-full text-left"
                      aria-label={`Abrir detalhe da obra ${w.title}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#F5F7FA] ring-1 ring-[#E6EAF0] transition group-hover:ring-[#1E4FBF] group-hover:shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={`/gallery/${w.slug}.jpg`}
                          alt={`${w.title} — ${w.location}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#1E4FBF] shadow-sm">
                          {FILTERS.find((f) => f.id === w.category)?.label ?? w.category}
                        </span>
                      </div>
                      <h3 className="mt-3 text-base font-bold text-[#0B1E3A] transition group-hover:text-[#1E4FBF]">
                        {w.title}
                      </h3>
                      <p className="text-sm text-[#6B7587]">{w.location} · {w.year}</p>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section className="bg-[#F5F7FA] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Antes &amp; Depois</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#0B1E3A] sm:text-4xl">
                Arraste para ver a transformação.
              </h2>
              <p className="mt-4 text-base text-[#4A5568]">
                Seis obras com o antes e o depois lado a lado.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {BA_PAIRS.map((p) => (
                <div key={p.label} className="rounded-2xl bg-white p-3 ring-1 ring-[#E6EAF0]">
                  <BeforeAfterSlider {...p} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
            <h2 className="text-3xl font-black leading-tight text-[#0B1E3A] sm:text-4xl">
              Pronto para a sua obra?
            </h2>
            <p className="mt-4 text-base text-[#4A5568]">
              Peça orçamento sem compromisso. Visita técnica gratuita e preço
              fechado em 24 horas.
            </p>
            <a
              href="/#orcamento"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] px-8 py-4 text-base font-bold text-white shadow-[0_12px_40px_rgba(255,122,26,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E56A0E]"
            >
              Pedir Orçamento Grátis
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </section>
      </main>

      <PortfolioFooter />

      {selected && <Lightbox work={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
