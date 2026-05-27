"use client";

import { useState } from "react";
import { Slider as BeforeAfterSlider } from "./BeforeAfter";

/* =========================================================================
   Crono Home Service — V2
   Reconstrução inspirada na estrutura de um site de referência do sector.
   Código 100% original. Paleta clara, layout simples, tipografia grande.
   ========================================================================= */

const BRAND = {
  blue: "#475345",
  blueDark: "#3D4A3A",
  navy: "#1F2419",
  orange: "#FF7A1A",
  orangeDark: "#E56A0E",
  ink: "#2A2F23",
  muted: "#5C6450",
  line: "#E6E2DB",
  bg: "#F7F5EF",
  bgSoft: "#EFECE4",
};

const PHONES = {
  primary: "+351 931 428 476",
  secondary: "+351 935 602 904",
  waLink: "https://wa.me/351931428476",
};

/* -------------------------------------------------------------------------
   Header — logo centrado (padrão OSCAR), nav split 3+2, CTA à direita
   ------------------------------------------------------------------------- */
function Header() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "text-[14px] font-semibold tracking-wide text-[#2A2F23] transition hover:text-[#475345]";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E6E2DB]/50 bg-[#F7F2E7]/30 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-4 px-5 py-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        {/* LEFT — desktop nav (3 links) / mobile spacer */}
        <nav className="hidden items-center gap-7 justify-self-start lg:flex">
          <a href="#servicos" className={linkClass}>Serviços</a>
          <a href="#metodo" className={linkClass}>Método</a>
          <a href="#portfolio" className={linkClass}>Antes &amp; Depois</a>
        </nav>
        {/* CENTER — logo + nome CRONOGRAMA (pedido cliente 2026-05-27) */}
        <a
          href="#top"
          className="flex items-center gap-2.5 justify-self-center"
          aria-label="Grupo Cronograma Home Service — início"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-cronograma.png"
            alt="Grupo Cronograma Home Service"
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
          />
          <span
            className="text-lg tracking-wide text-[#3D4A3A] sm:text-xl lg:text-2xl"
            style={{ fontFamily: "var(--font-alfa-slab), 'Cooper Black', Georgia, serif" }}
          >
            CRONOGRAMA
          </span>
        </a>

        {/* RIGHT — desktop nav (2 links) + CTA / mobile hamburger */}
        <div className="hidden items-center gap-6 justify-self-end lg:flex">
          <a href="#faq" className={linkClass}>FAQ</a>
          <a href="/portfolio" className={linkClass}>Portefólio</a>
          <a
            href="#orcamento"
            className="rounded-full bg-[#FF7A1A] px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(255,122,26,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E56A0E]"
          >
            Pedir Orçamento
          </a>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="absolute right-5 top-1/2 -translate-y-1/2 lg:hidden"
          aria-label="Menu"
          aria-expanded={open}
          type="button"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1F2419" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#E6E2DB] bg-[#F7F2E7]/95 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {[
              ["Serviços", "#servicos"],
              ["Método", "#metodo"],
              ["Antes & Depois", "#portfolio"],
              ["Portefólio", "/portfolio"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-[#2A2F23] hover:bg-[#F7F5EF]"
              >
                {label}
              </a>
            ))}
            <a
              href="#orcamento"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[#FF7A1A] px-6 py-3 text-center text-base font-bold text-white"
            >
              Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

/* -------------------------------------------------------------------------
   Hero
   ------------------------------------------------------------------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-blueprint-light text-[#3D4A3A]"
    >
      {/* subtle decorative blob */}
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-[#FF7A1A]/8 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:gap-16 lg:px-8 lg:py-28">
        <div className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {/* Hero logo — dominante (pedido cliente 2026-05-27): XL size, centrado em todos os breakpoints */}
          <img
            src="/logo-cronograma.png"
            alt="Grupo Cronograma Home Service"
            className="mx-auto mb-7 block h-72 w-auto object-contain drop-shadow-2xl sm:h-96 lg:h-[28rem]"
          />

          {/* Hero ordem (pedido cliente 2026-05-27 round 6):
              H1 -> Badge -> CTAs juntos -> Subtitle deslocado para baixo */}
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[#FF7A1A] sm:text-6xl lg:text-[68px]">
            A sua casa,
            <br />
            em mãos certas
          </h1>

          <div className="mx-auto mt-7 mb-5 inline-flex items-center gap-2.5 rounded-full bg-[#FF7A1A]/10 px-4 py-2 ring-1 ring-[#FF7A1A]/40 backdrop-blur">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 2" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-bold tracking-wide text-[#FF7A1A]">
              Orçamento em 24 horas
            </span>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href="#orcamento"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7A1A] px-9 py-5 text-base font-black text-white shadow-[0_12px_40px_rgba(255,122,26,0.45)] transition hover:-translate-y-0.5 hover:bg-[#E56A0E]"
            >
              Pedir Orçamento Grátis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a
              href={PHONES.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#3D4A3A]/40 bg-[#3D4A3A]/5 px-8 py-5 text-base font-bold text-[#3D4A3A] backdrop-blur transition hover:border-[#3D4A3A] hover:bg-[#3D4A3A]/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>
              WhatsApp direto
            </a>
          </div>

          <p className="mx-auto mt-9 max-w-xl text-lg font-semibold text-[#FF7A1A] sm:text-xl">
            Remodelações, reparações e decoração. Orçamento fixo em 24 horas,
            entrega chave-na-mão. Sem surpresas.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-base font-bold text-[#3D4A3A]">
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2.8"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Equipa própria
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2.8"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Orçamento em 24 horas
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2.8"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Entrega chave-na-mão
            </span>
          </div>
        </div>

        {/* Hero photo — sala de estar remodelada, magazine cover quality */}
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-[#1F2419] shadow-[0_40px_100px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-living-room.jpg"
              alt="Sala de estar moderna remodelada pela Crono Home Service"
              className="h-full w-full object-cover"
            />
            {/* leve gradient para integrar com o azul do hero */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-tr from-[#1F2419]/30 via-transparent to-transparent"
            />
          </div>

          {/* floating badge — resposta 24h */}
          <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF7A1A]/15">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7587]">Resposta em</p>
                <p className="text-base font-black text-[#3D4A3A]">24 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Services Category Grid — 13 categorias com fotos circulares (estilo OSCAR)
   ------------------------------------------------------------------------- */
const SERVICE_CATEGORIES: Array<{ slug: string; label: string }> = [
  { slug: "remodelacoes-gerais", label: "Remodelações" },
  { slug: "pichelaria", label: "Pichelaria" },
  { slug: "eletricidade", label: "Eletricidade" },
  { slug: "pinturas", label: "Pinturas" },
  { slug: "decoracao", label: "Decoração" },
  { slug: "pladur", label: "Pladur" },
  { slug: "cozinhas", label: "Cozinhas" },
  { slug: "casas-de-banho", label: "Casas de Banho" },
  { slug: "limpeza-pos-obra", label: "Limpeza Pós-Obra" },
  { slug: "jardinagem", label: "Jardinagem" },
  { slug: "mudancas", label: "Mudanças" },
  { slug: "manutencao", label: "Manutenção" },
  { slug: "impermeabilizacao", label: "Impermeabilização" },
];

function ServicesCategoryGrid() {
  return (
    <section className="bg-blueprint-light py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">
            13 áreas, 1 equipa
          </p>
          <h2 className="text-3xl font-black leading-tight text-[#3D4A3A] sm:text-4xl lg:text-5xl">
            O que precisar, nós resolvemos.
          </h2>
          <p className="mt-5 text-base text-[#5C6450] sm:text-lg">
            Da casa de banho à fachada, da canalização ao jardim. Uma só
            empresa para tudo o que a sua casa precisa.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl grid-cols-3 gap-x-3 gap-y-8 sm:grid-cols-4 md:grid-cols-5 lg:mt-16 lg:grid-cols-7 lg:gap-x-4 lg:gap-y-10">
          {SERVICE_CATEGORIES.map((cat) => (
            <li key={cat.slug} className="flex">
              <a
                href="#servicos"
                className="group mx-auto flex flex-col items-center gap-3 text-center"
              >
                <div className="relative aspect-square w-[88px] overflow-hidden rounded-full bg-[#F7F5EF] ring-2 ring-[#E6E2DB] transition duration-300 group-hover:-translate-y-1 group-hover:ring-[#475345] group-hover:shadow-[0_12px_32px_rgba(71,83,69,0.25)] sm:w-[96px] lg:w-[112px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/services/${cat.slug}.jpg`}
                    alt={cat.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-white/40"
                  />
                </div>
                <span className="max-w-[110px] text-[12px] font-semibold leading-tight text-[#3D4A3A] sm:text-[13px] lg:text-sm">
                  {cat.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Press / Trust band
   ------------------------------------------------------------------------- */
function PressBand() {
  return null;
}

/* -------------------------------------------------------------------------
   How it works + price cards
   ------------------------------------------------------------------------- */
function HowItWorks() {
  const steps = [
    { n: 1, title: "Peça o orçamento", text: "Envie uma foto e a descrição pelo WhatsApp ou formulário." },
    { n: 2, title: "Visita técnica grátis", text: "Vamos a casa avaliar e damos-lhe um preço fechado em 24h." },
    { n: 3, title: "Obra com gestor único", text: "Um só interlocutor no WhatsApp do início ao fim." },
  ];

  const cards = [
    { title: "Remodelação WC", from: "€1.890", img: "/services/casas-de-banho.jpg" },
    { title: "Pintura Interior", from: "€6/m²", img: "/services/pinturas.jpg" },
    { title: "Instalação Eléctrica", from: "€95", img: "/services/eletricidade.jpg" },
  ];

  return (
    <section className="bg-blueprint-light py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Como funciona</p>
          <h2 className="text-3xl font-black leading-tight text-[#3D4A3A] sm:text-4xl lg:text-5xl">
            Do primeiro contacto
            <br />à chave na mão.
          </h2>
          <p className="mt-5 max-w-md text-lg text-[#5C6450]">
            Um processo simples, directo e sem surpresas. Sabe o preço antes de começar e tem um responsável único durante toda a obra.
          </p>

          <ol className="mt-10 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#475345] text-lg font-black text-white">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#3D4A3A]">{s.title}</h3>
                  <p className="mt-1 text-[#5C6450]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#E6E2DB] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1F2419]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/25"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#1F2419]/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-sm">
                  Desde {c.from}
                </div>
                <h3 className="absolute bottom-4 left-4 right-4 text-base font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] sm:text-lg">
                  {c.title}
                </h3>
              </div>
              <div className="flex flex-1 items-center justify-between gap-3 p-5">
                <span className="text-sm text-[#5C6450]">Preço fechado, com IVA</span>
                <a href="#orcamento" className="inline-flex items-center gap-1 text-sm font-bold text-[#475345] hover:underline">
                  Pedir preço <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Services catalog — categorias com cards (imagem + preço + desconto)
   ------------------------------------------------------------------------- */
type ServiceCard = {
  title: string;
  img: string;
  from: string;
  was?: string;
  off?: string;
};

type ServiceCategory = {
  id: string;
  name: string;
  items: ServiceCard[];
};

const CATEGORIES: ServiceCategory[] = [
  {
    id: "remodelacoes",
    name: "Remodelações",
    items: [
      {
        title: "Remodelação de casa de banho",
        img: "/services/casas-de-banho.jpg",
        from: "€1.890",
        was: "€2.400",
        off: "-20%",
      },
      {
        title: "Remodelação de cozinha",
        img: "/services/cozinhas.jpg",
        from: "€3.450",
        was: "€4.200",
        off: "-18%",
      },
      {
        title: "Remodelação integral",
        img: "/gallery/obra-sala-oeiras.jpg",
        from: "€450/m²",
      },
      {
        title: "Substituição de pavimento",
        img: "/gallery/obra-quarto-sintra.jpg",
        from: "€28/m²",
        was: "€35/m²",
        off: "-20%",
      },
      {
        title: "Tectos falsos em pladur",
        img: "/services/pladur.jpg",
        from: "€22/m²",
      },
    ],
  },
  {
    id: "pintura",
    name: "Pintura",
    items: [
      {
        title: "Pintura interior — sala",
        img: "/services/pinturas.jpg",
        from: "€6/m²",
        was: "€9/m²",
        off: "-33%",
      },
      {
        title: "Pintura de quarto",
        img: "/services/decoracao.jpg",
        from: "€180",
      },
      {
        title: "Pintura de fachada",
        img: "/gallery/obra-fachada-amadora.jpg",
        from: "€12/m²",
      },
      {
        title: "Pintura de portas",
        img: "/services/manutencao.jpg",
        from: "€45",
        was: "€65",
        off: "-30%",
      },
      {
        title: "Preparação + pintura",
        img: "/gallery/obra-pladur-almada.jpg",
        from: "€9/m²",
      },
    ],
  },
  {
    id: "canalizacao-eletricidade",
    name: "Canalização & Eletricidade",
    items: [
      {
        title: "Instalação eléctrica — ponto",
        img: "/services/eletricidade.jpg",
        from: "€95",
      },
      {
        title: "Quadro eléctrico novo",
        img: "/services/eletricidade.jpg",
        from: "€420",
        was: "€540",
        off: "-22%",
      },
      {
        title: "Desentupimentos urgente",
        img: "/services/pichelaria.jpg",
        from: "€65",
      },
      {
        title: "Substituição de canalização",
        img: "/services/pichelaria.jpg",
        from: "€150",
      },
      {
        title: "Instalação de esquentador",
        img: "/services/manutencao.jpg",
        from: "€120",
        was: "€160",
        off: "-25%",
      },
    ],
  },
];

function PriceTag({ from, was, off }: { from: string; was?: string; off?: string }) {
  return (
    <div className="mt-3 flex flex-wrap items-baseline gap-2">
      {was && <span className="text-sm text-[#8A94A6] line-through">{was}</span>}
      <span className="text-xl font-black text-[#475345]">{from}</span>
      {off && (
        <span className="rounded-md bg-[#E9ECE3] px-2 py-0.5 text-xs font-bold text-[#475345]">
          {off}
        </span>
      )}
    </div>
  );
}

function CategoryRow({ category }: { category: ServiceCategory }) {
  return (
    <div className="mb-14 last:mb-0">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h3 className="text-2xl font-black text-[#3D4A3A] sm:text-3xl">{category.name}</h3>
        <a
          href="#orcamento"
          className="whitespace-nowrap text-sm font-bold text-[#475345] hover:underline"
        >
          Ver tudo →
        </a>
      </div>

      <div className="-mx-5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:px-0">
        <div className="grid min-w-[880px] grid-cols-5 gap-5 lg:min-w-0">
          {category.items.map((item) => (
            <a
              key={item.title}
              href="#orcamento"
              className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-[#E6E2DB] transition hover:-translate-y-1 hover:ring-[#475345] hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F7F5EF]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {item.off && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#FF7A1A] px-3 py-1 text-xs font-black text-white shadow-md">
                    {item.off}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h4 className="line-clamp-2 min-h-[2.75rem] text-[15px] font-bold leading-tight text-[#3D4A3A]">
                  {item.title}
                </h4>
                <PriceTag from={item.from} was={item.was} off={item.off} />
                <p className="mt-1 text-xs text-[#6B7587]">desde · com IVA</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesGrid() {
  return (
    <section id="servicos" className="bg-blueprint-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Serviços</p>
          <h2 className="text-3xl font-black leading-tight text-[#3D4A3A] sm:text-4xl lg:text-5xl">
            O que precisar, nós tratamos.
          </h2>
          <p className="mt-5 text-lg text-[#5C6450]">
            Uma equipa, uma empresa, uma responsabilidade. Preços claros, com desconto para quem pede orçamento online.
          </p>
        </div>

        <div className="mt-14">
          {CATEGORIES.map((c) => (
            <CategoryRow key={c.id} category={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Before / After (reutiliza Slider existente, wrapper novo em tema claro)
   ------------------------------------------------------------------------- */
const BA_PROJECTS = [
  {
    before: "/ba/wc-antes.jpg",
    after: "/gallery/obra-casa-banho-cascais.jpg",
    label: "Casa de Banho — Cascais, 2024",
  },
  {
    before: "/ba/cozinha-antes.jpg",
    after: "/gallery/obra-cozinha-lisboa.jpg",
    label: "Cozinha — Lisboa, 2024",
  },
  {
    before: "/ba/sala-antes.jpg",
    after: "/gallery/obra-sala-oeiras.jpg",
    label: "Sala de Estar — Oeiras, 2024",
  },
  {
    before: "/ba/quarto-antes.jpg",
    after: "/gallery/obra-quarto-lisboa.jpg",
    label: "Quarto Principal — Lisboa, 2024",
  },
  {
    before: "/ba/wc-pretos-antes.jpg",
    after: "/gallery/obra-wc-cascais-pretos.jpg",
    label: "Casa de Banho Premium — Cascais, 2024",
  },
  {
    before: "/ba/cozinha-sintra-antes.jpg",
    after: "/gallery/obra-cozinha-sintra.jpg",
    label: "Cozinha Minimalista — Sintra, 2024",
  },
];

function BeforeAfterLight() {
  return (
    <section id="portfolio" className="bg-blueprint-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Portfólio</p>
          <h2 className="text-3xl font-black leading-tight text-[#3D4A3A] sm:text-4xl lg:text-5xl">
            A prova: do antes ao depois.
          </h2>
          <p className="mt-5 text-lg text-[#5C6450]">
            Arraste para ver a transformação. Obras reais, clientes reais.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BA_PROJECTS.map((p) => (
            <div key={p.label} className="rounded-2xl bg-[#F7F5EF] p-3 ring-1 ring-[#E6E2DB]">
              <BeforeAfterSlider {...p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Services Gallery — carousel mobile / grid desktop com trabalhos entregues
   ------------------------------------------------------------------------- */
const GALLERY_WORKS: Array<{ slug: string; cat: string; title: string }> = [
  { slug: "obra-cozinha-lisboa", cat: "Cozinha", title: "Remodelação completa — Lisboa" },
  { slug: "obra-casa-banho-cascais", cat: "Casa de Banho", title: "WC de luxo — Cascais" },
  { slug: "obra-sala-oeiras", cat: "Sala", title: "Renovação total — Oeiras" },
  { slug: "obra-quarto-sintra", cat: "Quarto", title: "Suite principal — Sintra" },
  { slug: "obra-fachada-amadora", cat: "Fachada", title: "Pintura exterior — Amadora" },
  { slug: "obra-pladur-almada", cat: "Pladur", title: "Tectos falsos — Almada" },
];

function ServicesGallery() {
  return (
    <section className="bg-blueprint-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">
            Galeria
          </p>
          <h2 className="text-3xl font-black leading-tight text-[#3D4A3A] sm:text-4xl lg:text-5xl">
            Trabalhos entregues nos últimos meses.
          </h2>
          <p className="mt-5 text-base text-[#5C6450] sm:text-lg">
            Cada obra é entregue com chave-na-mão e limpeza profunda.
            Apoio pós-obra incluído para tudo o que possa surgir.
          </p>
        </div>

        <div className="mt-12 -mx-5 overflow-x-auto px-5 pb-4 lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="flex w-max gap-5 lg:grid lg:w-auto lg:grid-cols-3 lg:gap-6">
            {GALLERY_WORKS.map((w) => (
              <a
                key={w.slug}
                href="#orcamento"
                className="group block w-[280px] flex-none sm:w-[320px] lg:w-auto"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white ring-1 ring-[#E6E2DB] transition group-hover:ring-[#475345] group-hover:shadow-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/gallery/${w.slug}.jpg`}
                    alt={`${w.cat} — ${w.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#475345] shadow-sm">
                    {w.cat}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-[#3D4A3A] transition group-hover:text-[#475345]">
                  {w.title}
                </h3>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#orcamento"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] px-7 py-3.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(255,122,26,0.35)] transition hover:-translate-y-0.5 hover:bg-[#E56A0E]"
          >
            Quero uma obra como esta
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Method roadmap
   ------------------------------------------------------------------------- */
function Method() {
  const steps = [
    { n: "01", title: "Visita técnica", text: "Vamos a casa avaliar o trabalho sem qualquer compromisso." },
    { n: "02", title: "Orçamento fechado", text: "Recebe um preço fixo em 24h — inclui tudo, sem surpresas." },
    { n: "03", title: "Obra com gestor único", text: "Um responsável consigo no WhatsApp durante toda a obra." },
    { n: "04", title: "Entrega limpa", text: "Entregamos a chave e a casa limpa, prontinha a habitar." },
  ];

  return (
    <section id="metodo" className="bg-[#F7F2E7] bg-blueprint-light py-20 text-[#3D4A3A] lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">O método Crono</p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              4 passos. Zero dores de cabeça.
            </h2>
          </div>
          <p className="text-lg text-[#5C6450]">
            Nós tratamos da câmara, das plantas, dos materiais e do entulho.
            O seu único trabalho é escolher os acabamentos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl bg-white p-7 ring-1 ring-[#E6E2DB] shadow-md"
            >
              <span className="text-5xl font-black text-[#FF7A1A]">{s.n}</span>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-[#5C6450]">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl bg-white p-8 ring-1 ring-[#E6E2DB] shadow-md sm:flex-row sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF7A1A]">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-black">Apoio pós-obra</h3>
              <p className="text-sm text-[#5C6450]">Em todas as intervenções estruturais. Assistência em 48h.</p>
            </div>
          </div>
          <a
            href="#orcamento"
            className="rounded-full bg-[#FF7A1A] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#E56A0E]"
          >
            Quero começar
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Reviews — secção desactivada até o cliente fornecer ≥3 testemunhos reais.
   TODO: re-enable quando CLIENTE_CHECKLIST.md (Important / Testimonials) fechar.
   Cada review precisa: nome verificável, cidade, foto opcional, autorização escrita.
   ------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------
   FAQ
   ------------------------------------------------------------------------- */
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Como garantem que o orçamento não aumenta?", a: "Fazemos um levantamento exaustivo antes de apresentar o orçamento. O preço é fixo e inclui mão-de-obra, materiais e acabamentos. Só muda se o cliente pedir alterações ao projecto original." },
    { q: "Preciso de sair de casa durante a obra?", a: "Na maioria dos casos, não. Organizamos o trabalho por fases para minimizar o impacto no dia-a-dia. Em obras maiores, avisamos os dias críticos com antecedência." },
    { q: "Quanto tempo demora uma remodelação de casa de banho?", a: "Entre 2 a 4 semanas, dependendo da complexidade. Damos-lhe o prazo exacto no orçamento e cumprimos rigorosamente." },
    { q: "Trabalham com materiais que eu já comprei?", a: "Sim. Se já tem materiais preferidos, nós aplicamos. Caso contrário, sugerimos materiais de marcas reconhecidas conforme o orçamento e estilo pretendido." },
    { q: "E se aparecerem problemas ocultos durante a obra?", a: "Antes de iniciar fazemos uma inspecção técnica. Se surgir algo inesperado contactamos imediatamente, explicamos e apresentamos opções com custos antes de avançar. Sem surpresas." },
    { q: "Tratam da limpeza no final?", a: "Sim. Deixamos a casa pronta a habitar — sem poeiras, sem entulho e sem restos de obra." },
  ];

  return (
    <section id="faq" className="bg-blueprint-light py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Perguntas frequentes</p>
          <h2 className="text-3xl font-black leading-tight text-[#3D4A3A] sm:text-4xl lg:text-5xl">
            Tire as dúvidas antes
            <br />de pedir orçamento.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-[#E6E2DB]">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 bg-white px-6 py-5 text-left hover:bg-[#F7F5EF]"
                >
                  <span className="text-base font-bold text-[#3D4A3A] sm:text-lg">{f.q}</span>
                  <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#475345] text-white transition ${open ? "rotate-45" : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                {open && (
                  <div className="border-t border-[#E6E2DB] bg-[#F7F5EF] px-6 py-5 text-[#5C6450]">
                    {f.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Lead CTA — formulário que abre o email do utilizador (mailto:)
   pré-preenchido com o pedido de orçamento. Zero infra externa.
   TODO: substituir CRONO_EMAIL pelo endereço real quando o cliente confirmar.
   ------------------------------------------------------------------------- */
type LeadStatus = "idle" | "success" | "error";

const CRONO_EMAIL = "grupocronograma@hotmail.com";

function LeadCTA() {
  const [status, setStatus] = useState<LeadStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Indique o seu nome.";
    if (phone.length < 9) nextErrors.phone = "Indique o seu contacto.";
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    const subject = `Pedido de orçamento — ${name}`;
    const bodyLines = [
      "Olá,",
      "",
      "Gostaria de pedir um orçamento.",
      "",
      `Nome: ${name}`,
      `WhatsApp: ${phone}`,
      "",
      "Pedido:",
      message || "(sem detalhes adicionais)",
      "",
      "— Enviado via cronohomeservice.pt",
    ];
    const mailto = `mailto:${CRONO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    // Open the user's mail client with the pre-filled message.
    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }

    form.reset();
    setErrors({});
    setStatus("success");
  }

  return (
    <section id="orcamento" className="relative overflow-hidden bg-[#F7F2E7] bg-blueprint-light py-20 text-[#3D4A3A] lg:py-28">
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#FF7A1A]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-96 w-96 rounded-full bg-[#475345]/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Peça o seu orçamento grátis.
          <br />
          Resposta em 24 horas.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[#5C6450]">
          Envie-nos uma mensagem com o que precisa. Recebe o preço fechado no WhatsApp.
        </p>

        {status === "success" ? (
          <div className="mx-auto mt-10 max-w-2xl rounded-3xl bg-white p-8 text-left shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#0FA968]/15">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0FA968" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L20 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-black text-[#3D4A3A]">Falta um clique no seu email.</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5C6450]">
                  Abrimos a sua aplicação de email com o pedido pronto a enviar.
                  Confirme e carregue em <strong>Enviar</strong> &mdash; respondemos em 24 horas.
                  Se preferir, fale connosco directamente pelo WhatsApp abaixo.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form
            className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-3xl bg-white p-4 text-left shadow-2xl"
            onSubmit={handleSubmit}
            noValidate
          >
            <label className="sr-only" htmlFor="lead-name">Nome</label>
            <input
              id="lead-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="O seu nome"
              className="rounded-2xl bg-[#F7F5EF] px-5 py-4 text-base text-[#3D4A3A] placeholder:text-[#5C6450] focus:outline-none focus:ring-2 focus:ring-[#475345]"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "lead-name-err" : undefined}
            />
            {errors.name && (
              <p id="lead-name-err" className="px-2 text-sm font-semibold text-[#FF5A4A]">{errors.name}</p>
            )}

            <label className="sr-only" htmlFor="lead-phone">Telemóvel / WhatsApp</label>
            <input
              id="lead-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="WhatsApp / Telemóvel (ex: 931 428 476)"
              className="rounded-2xl bg-[#F7F5EF] px-5 py-4 text-base text-[#3D4A3A] placeholder:text-[#5C6450] focus:outline-none focus:ring-2 focus:ring-[#475345]"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "lead-phone-err" : undefined}
            />
            {errors.phone && (
              <p id="lead-phone-err" className="px-2 text-sm font-semibold text-[#FF5A4A]">{errors.phone}</p>
            )}

            <label className="sr-only" htmlFor="lead-message">Mensagem</label>
            <textarea
              id="lead-message"
              name="message"
              rows={3}
              placeholder="Descreva brevemente a obra (opcional)"
              className="resize-none rounded-2xl bg-[#F7F5EF] px-5 py-4 text-base text-[#3D4A3A] placeholder:text-[#5C6450] focus:outline-none focus:ring-2 focus:ring-[#475345]"
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "lead-message-err" : undefined}
            />
            {errors.message && (
              <p id="lead-message-err" className="px-2 text-sm font-semibold text-[#FF5A4A]">{errors.message}</p>
            )}

            <button
              type="submit"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FF7A1A] px-8 py-4 text-base font-bold text-white transition hover:bg-[#E56A0E]"
            >
              Pedir Orçamento
            </button>
          </form>
        )}

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-[#5C6450]">
          <a href={PHONES.waLink} className="inline-flex items-center gap-2 font-semibold hover:text-[#3D4A3A]" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            {PHONES.primary}
          </a>
          <span className="hidden sm:block">·</span>
          <span>Ou ligue directamente: <a href={`tel:${PHONES.secondary.replace(/\s/g, "")}`} className="font-bold">{PHONES.secondary}</a></span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Footer
   ------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="bg-[#1F2419] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-cronograma.png"
                alt="Grupo Cronograma Home Service"
                className="h-16 w-auto object-contain brightness-0 invert opacity-90"
              />
            </div>
            <p className="mt-4 text-sm text-white/70">
              Remodelações em Lisboa e arredores. Transformamos casas com rigor e compromisso.
            </p>
            <p className="mt-4 text-xs text-white/50">NIF: — · Alvará: —</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Serviços</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#servicos" className="hover:text-[#FF7A1A]">Remodelação geral</a></li>
              <li><a href="#servicos" className="hover:text-[#FF7A1A]">Casas de banho</a></li>
              <li><a href="#servicos" className="hover:text-[#FF7A1A]">Cozinhas</a></li>
              <li><a href="#servicos" className="hover:text-[#FF7A1A]">Pintura</a></li>
              <li><a href="#servicos" className="hover:text-[#FF7A1A]">Canalização</a></li>
              <li><a href="#servicos" className="hover:text-[#FF7A1A]">Eletricidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Zonas</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Lisboa</li>
              <li>Cascais</li>
              <li>Oeiras</li>
              <li>Sintra</li>
              <li>Amadora</li>
              <li>Almada</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contacto</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href={`tel:${PHONES.primary.replace(/\s/g, "")}`} className="hover:text-[#FF7A1A]">
                  {PHONES.primary}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONES.secondary.replace(/\s/g, "")}`} className="hover:text-[#FF7A1A]">
                  {PHONES.secondary}
                </a>
              </li>
              <li>
                <a href="mailto:grupocronograma@hotmail.com" className="hover:text-[#FF7A1A]">
                  grupocronograma@hotmail.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#orcamento"
                  className="inline-flex items-center gap-2 rounded-full bg-[#FF7A1A] px-5 py-2.5 text-sm font-bold text-white"
                >
                  Pedir orçamento
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <nav aria-label="Links legais" className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/70">
            <a href="/politica-privacidade" className="hover:text-[#FF7A1A]">Política de Privacidade</a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="/termos" className="hover:text-[#FF7A1A]">Termos &amp; Condições</a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="/cookies" className="hover:text-[#FF7A1A]">Política de Cookies</a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a href="/livro-reclamacoes" className="hover:text-[#FF7A1A]">Livro de Reclamações</a>
            <span className="text-white/20" aria-hidden="true">·</span>
            <a
              href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#FF7A1A]"
            >
              Portal oficial
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" aria-hidden="true">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          </nav>
          <div className="flex flex-col gap-3 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Grupo Cronograma Home Service · Studio da Serra. Todos os direitos reservados.</p>
            <p>Desenvolvido por CMTecnologia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------
   Root export
   ------------------------------------------------------------------------- */
export default function V2Home() {
  return (
    <div className="relative z-0 min-h-screen text-[#2A2F23]">
      {/* Background fixo da planta — div absoluto fixed, funciona em iOS Safari */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background-blueprint-hq.jpg')" }}
      />
      <Header />
      <main>
        <Hero />
        <ServicesCategoryGrid />
        <PressBand />
        <HowItWorks />
        <ServicesGrid />
        <BeforeAfterLight />
        <ServicesGallery />
        <Method />
        {/* <Reviews /> — re-enable when client provides 3+ real testimonials */}
        <FAQSection />
        <LeadCTA />
      </main>
      <Footer />
    </div>
  );
}
