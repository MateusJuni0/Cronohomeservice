"use client";

import { useState } from "react";
import { Slider as BeforeAfterSlider } from "./BeforeAfter";

/* =========================================================================
   Crono Home Service — V2
   Reconstrução inspirada na estrutura de um site de referência do sector.
   Código 100% original. Paleta clara, layout simples, tipografia grande.
   ========================================================================= */

const BRAND = {
  blue: "#1E4FBF",
  blueDark: "#173FA3",
  navy: "#0B1E3A",
  orange: "#FF7A1A",
  orangeDark: "#E56A0E",
  ink: "#1A2238",
  muted: "#4A5568",
  line: "#E6EAF0",
  bg: "#F5F7FA",
  bgSoft: "#EEF2F8",
};

const PHONES = {
  primary: "+351 931 428 476",
  secondary: "+351 935 602 904",
  waLink: "https://wa.me/351931428476",
};

/* -------------------------------------------------------------------------
   Header
   ------------------------------------------------------------------------- */
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E6EAF0] bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-crono.jpeg"
            alt="Crono Home Service"
            className="h-11 w-11 rounded-lg object-cover ring-1 ring-[#E6EAF0]"
          />
          <span className="text-xl font-black tracking-tight text-[#0B1E3A]">
            CRONO<span className="text-[#FF7A1A]">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a href="#servicos" className="text-[15px] font-semibold text-[#1A2238] hover:text-[#1E4FBF]">Serviços</a>
          <a href="#metodo" className="text-[15px] font-semibold text-[#1A2238] hover:text-[#1E4FBF]">Método</a>
          <a href="#portfolio" className="text-[15px] font-semibold text-[#1A2238] hover:text-[#1E4FBF]">Antes &amp; Depois</a>
          <a href="#avaliacoes" className="text-[15px] font-semibold text-[#1A2238] hover:text-[#1E4FBF]">Avaliações</a>
          <a href="#faq" className="text-[15px] font-semibold text-[#1A2238] hover:text-[#1E4FBF]">FAQ</a>
        </nav>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <a
            href={`tel:${PHONES.primary.replace(/\s/g, "")}`}
            className="text-sm font-bold text-[#0B1E3A]"
          >
            {PHONES.primary}
          </a>
          <a
            href="#orcamento"
            className="rounded-full bg-[#FF7A1A] px-6 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(255,122,26,0.35)] transition hover:bg-[#E56A0E]"
          >
            Pedir Orçamento
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
          aria-label="Menu"
          type="button"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0B1E3A" strokeWidth="2.2" strokeLinecap="round">
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
        <div className="border-t border-[#E6EAF0] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {[
              ["Serviços", "#servicos"],
              ["Método", "#metodo"],
              ["Antes & Depois", "#portfolio"],
              ["Avaliações", "#avaliacoes"],
              ["FAQ", "#faq"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-semibold text-[#1A2238] hover:bg-[#F5F7FA]"
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
      className="relative overflow-hidden bg-gradient-to-br from-[#1E4FBF] via-[#1E4FBF] to-[#173FA3] text-white"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-[#FF7A1A]/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-5xl font-black leading-none text-white">4,9</span>
            <span className="text-2xl font-bold text-white/80">/5</span>
            <div className="ml-2 flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#FFD36B">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="ml-1 text-sm font-semibold text-white/85">+120 clientes</span>
          </div>

          <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[68px]">
            Remodelações e obras
            <br />
            com preço fixo e
            <br />
            garantia de 5 anos
          </h1>

          <p className="mt-7 max-w-xl text-lg text-white/85 sm:text-xl">
            Chega de telefonemas infinitos, surpresas no orçamento e promessas
            por cumprir. Uma equipa, um responsável, uma entrega chave-na-mão.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#orcamento"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-5 text-base font-black text-[#1E4FBF] shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-0.5 hover:bg-[#F5F7FA]"
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
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-5 text-base font-bold text-white backdrop-blur transition hover:border-white hover:bg-white/10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.4 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" /></svg>
              WhatsApp direto
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2.8"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              +20 anos de experiência
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2.8"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Garantia 5 anos
            </span>
            <span className="inline-flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6EE7B7" strokeWidth="2.8"><path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Orçamento em 24h
            </span>
          </div>
        </div>

        {/* Illustration — círculo + SVG original (sem fotos de pessoas) */}
        <div className="relative mx-auto aspect-square w-full max-w-[480px]">
          {/* círculo exterior */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3E6FD8] to-[#173FA3] shadow-[0_40px_100px_rgba(0,0,0,0.35)] ring-8 ring-white/10" />
          {/* círculo interno com padrão */}
          <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#5785E0] to-[#1E4FBF] ring-4 ring-[#FFD36B]/60" />
          {/* Logo Crono Home Service */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative h-[72%] w-[72%] overflow-hidden rounded-full bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-4 ring-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-crono.jpeg"
                alt="Crono Home Service — logótipo"
                className="h-full w-full object-cover"
              />
            </div>
            {/* faíscas decorativas à volta */}
            <svg className="pointer-events-none absolute inset-0" viewBox="0 0 400 400" fill="none">
              <circle cx="340" cy="110" r="5" fill="#FFD36B" />
              <circle cx="60" cy="140" r="4" fill="#FFD36B" />
              <circle cx="350" cy="260" r="4" fill="#FFD36B" />
              <circle cx="50" cy="280" r="5" fill="#FFD36B" />
              <path d="M55 90 L71 90 M63 82 L63 98" stroke="#FFD36B" strokeWidth="4" strokeLinecap="round" />
              <path d="M335 310 L351 310 M343 302 L343 318" stroke="#FFD36B" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          {/* floating badge — resposta 24h */}
          <div className="absolute -bottom-4 -left-6 rounded-2xl bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF7A1A]/15">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FF7A1A" strokeWidth="2.5" strokeLinecap="round"><path d="M12 6v6l4 2" /><circle cx="12" cy="12" r="10" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#6B7587]">Resposta em</p>
                <p className="text-base font-black text-[#0B1E3A]">24 horas</p>
              </div>
            </div>
          </div>

          {/* floating badge — garantia */}
          <div className="absolute -top-3 -right-3 rounded-2xl bg-[#FF7A1A] px-4 py-3 text-white shadow-[0_20px_50px_rgba(255,122,26,0.5)]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">Garantia</p>
            <p className="text-xl font-black leading-none">5 anos</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   Press / Trust band
   ------------------------------------------------------------------------- */
function PressBand() {
  const items = ["Margres", "Roca", "CIN", "Grohe", "Pladur", "Weber"];
  return (
    <section className="border-y border-[#E6EAF0] bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-[#4A5568]">
          Trabalhamos com as melhores marcas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-60">
          {items.map((name) => (
            <span key={name} className="text-xl font-black tracking-tight text-[#0B1E3A]">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   How it works + price cards
   ------------------------------------------------------------------------- */
function HowItWorks() {
  const steps = [
    { n: 1, title: "Pede o orçamento", text: "Envia uma foto e a descrição pelo WhatsApp ou formulário." },
    { n: 2, title: "Visita técnica grátis", text: "Vamos a casa avaliar e damos-te um preço fechado em 24h." },
    { n: 3, title: "Obra com gestor único", text: "Um só interlocutor no WhatsApp do início ao fim." },
  ];

  const cards = [
    { title: "Remodelação WC", from: "€1.890", img: "from-[#1E4FBF] to-[#173FA3]" },
    { title: "Pintura Interior", from: "€6/m²", img: "from-[#FF7A1A] to-[#E56A0E]" },
    { title: "Instalação Eléctrica", from: "€95", img: "from-[#0B1E3A] to-[#1A2238]" },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Como funciona</p>
          <h2 className="text-3xl font-black leading-tight text-[#0B1E3A] sm:text-4xl lg:text-5xl">
            Do primeiro contacto
            <br />à chave na mão.
          </h2>
          <p className="mt-5 max-w-md text-lg text-[#4A5568]">
            Um processo simples, directo e sem surpresas. Sabes o preço antes de começar e tens um responsável único durante toda a obra.
          </p>

          <ol className="mt-10 space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#1E4FBF] text-lg font-black text-white">
                  {s.n}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1E3A]">{s.title}</h3>
                  <p className="mt-1 text-[#4A5568]">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#E6EAF0] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`relative aspect-[4/5] bg-gradient-to-br ${c.img}`}>
                <div className="absolute left-4 top-4 rounded-full bg-[#0B1E3A] px-3 py-1.5 text-xs font-bold text-white">
                  Desde {c.from}
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white/80">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <h3 className="text-base font-bold text-[#0B1E3A]">{c.title}</h3>
                <a href="#orcamento" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#1E4FBF]">
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
        img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80",
        from: "€1.890",
        was: "€2.400",
        off: "-20%",
      },
      {
        title: "Remodelação de cozinha",
        img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
        from: "€3.450",
        was: "€4.200",
        off: "-18%",
      },
      {
        title: "Remodelação integral",
        img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
        from: "€450/m²",
      },
      {
        title: "Substituição de pavimento",
        img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80",
        from: "€28/m²",
        was: "€35/m²",
        off: "-20%",
      },
      {
        title: "Tectos falsos em pladur",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
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
        img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80",
        from: "€6/m²",
        was: "€9/m²",
        off: "-33%",
      },
      {
        title: "Pintura de quarto",
        img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=600&q=80",
        from: "€180",
      },
      {
        title: "Pintura de fachada",
        img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80",
        from: "€12/m²",
      },
      {
        title: "Pintura de portas",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
        from: "€45",
        was: "€65",
        off: "-30%",
      },
      {
        title: "Preparação + pintura",
        img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80",
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
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80",
        from: "€95",
      },
      {
        title: "Quadro eléctrico novo",
        img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
        from: "€420",
        was: "€540",
        off: "-22%",
      },
      {
        title: "Desentupimentos urgente",
        img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80",
        from: "€65",
      },
      {
        title: "Substituição de canalização",
        img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80",
        from: "€150",
      },
      {
        title: "Instalação de esquentador",
        img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&q=80",
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
      <span className="text-xl font-black text-[#1E4FBF]">{from}</span>
      {off && (
        <span className="rounded-md bg-[#E6F0FF] px-2 py-0.5 text-xs font-bold text-[#1E4FBF]">
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
        <h3 className="text-2xl font-black text-[#0B1E3A] sm:text-3xl">{category.name}</h3>
        <a
          href="#orcamento"
          className="whitespace-nowrap text-sm font-bold text-[#1E4FBF] hover:underline"
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
              className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-[#E6EAF0] transition hover:-translate-y-1 hover:ring-[#1E4FBF] hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F5F7FA]">
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
                <h4 className="line-clamp-2 min-h-[2.75rem] text-[15px] font-bold leading-tight text-[#0B1E3A]">
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
    <section id="servicos" className="bg-[#EEF2F8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Serviços</p>
          <h2 className="text-3xl font-black leading-tight text-[#0B1E3A] sm:text-4xl lg:text-5xl">
            O que precisares, nós tratamos.
          </h2>
          <p className="mt-5 text-lg text-[#4A5568]">
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
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    label: "Casa de Banho — Lisboa, 2024",
  },
  {
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    label: "Cozinha — Cascais, 2024",
  },
  {
    before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    label: "Sala de Estar — Oeiras, 2024",
  },
];

function BeforeAfterLight() {
  return (
    <section id="portfolio" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Portfólio</p>
          <h2 className="text-3xl font-black leading-tight text-[#0B1E3A] sm:text-4xl lg:text-5xl">
            A prova: do antes ao depois.
          </h2>
          <p className="mt-5 text-lg text-[#4A5568]">
            Arrasta para veres a transformação. Obras reais, clientes reais.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BA_PROJECTS.map((p) => (
            <div key={p.label} className="rounded-2xl bg-[#F5F7FA] p-3 ring-1 ring-[#E6EAF0]">
              <BeforeAfterSlider {...p} />
            </div>
          ))}
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
    { n: "02", title: "Orçamento fechado", text: "Recebes um preço fixo em 24h — inclui tudo, sem surpresas." },
    { n: "03", title: "Obra com gestor único", text: "Um responsável contigo no WhatsApp durante toda a obra." },
    { n: "04", title: "Entrega limpa", text: "Entregamos a chave e a casa limpa, prontinha a habitar." },
  ];

  return (
    <section id="metodo" className="bg-[#0B1E3A] py-20 text-white lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">O método Crono</p>
            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              4 passos. Zero dores de cabeça.
            </h2>
          </div>
          <p className="text-lg text-white/75">
            Nós tratamos da câmara, das plantas, dos materiais e do entulho.
            O teu único trabalho é escolher os acabamentos.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative rounded-3xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur"
            >
              <span className="text-5xl font-black text-[#FF7A1A]">{s.n}</span>
              <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FF7A1A]">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" /></svg>
            </div>
            <div>
              <h3 className="text-xl font-black">Garantia Total 5 Anos</h3>
              <p className="text-sm text-white/70">Em todas as intervenções estruturais. Assistência em 48h.</p>
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
   Reviews
   ------------------------------------------------------------------------- */
function Reviews() {
  const items = [
    {
      name: "Maria Santos",
      city: "Lumiar, Lisboa",
      stars: 5,
      text: "A equipa foi incrivelmente profissional. A nossa cozinha ficou irreconhecível e entregaram no prazo prometido. Recomendo sem hesitar.",
    },
    {
      name: "João Ferreira",
      city: "Cascais",
      stars: 5,
      text: "Obra entregue dentro do prazo e do orçamento, como combinado. O gestor do projecto manteve-nos informados todos os dias.",
    },
    {
      name: "Ana Costa",
      city: "Oeiras",
      stars: 5,
      text: "Finalmente uma empresa que cumpre. A remodelação da casa de banho foi impecável e deixaram tudo limpo no final.",
    },
  ];

  return (
    <section id="avaliacoes" className="bg-[#F5F7FA] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Avaliações</p>
          <h2 className="text-3xl font-black leading-tight text-[#0B1E3A] sm:text-4xl lg:text-5xl">
            4,9/5 em +120 clientes.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {items.map((r) => (
            <div key={r.name} className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-[#E6EAF0]">
              <div className="flex">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FFB547"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                ))}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-[#1A2238]">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-6 border-t border-[#E6EAF0] pt-4">
                <p className="font-bold text-[#0B1E3A]">{r.name}</p>
                <p className="text-sm text-[#4A5568]">{r.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
   FAQ
   ------------------------------------------------------------------------- */
function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    { q: "Como garantem que o orçamento não aumenta?", a: "Fazemos um levantamento exaustivo antes de apresentar o orçamento. O preço é fixo e inclui mão-de-obra, materiais e acabamentos. Só muda se o cliente pedir alterações ao projecto original." },
    { q: "Preciso de sair de casa durante a obra?", a: "Na maioria dos casos, não. Organizamos o trabalho por fases para minimizar o impacto no dia-a-dia. Em obras maiores, avisamos os dias críticos com antecedência." },
    { q: "Quanto tempo demora uma remodelação de casa de banho?", a: "Entre 2 a 4 semanas, dependendo da complexidade. Damos-te o prazo exacto no orçamento e cumprimos rigorosamente." },
    { q: "Trabalham com materiais que eu já comprei?", a: "Sim. Se já tens materiais preferidos, nós aplicamos. Caso contrário, trabalhamos com Margres, Roca, Grohe e CIN com condições especiais." },
    { q: "E se aparecerem problemas ocultos durante a obra?", a: "Antes de iniciar fazemos uma inspecção técnica. Se surgir algo inesperado contactamos imediatamente, explicamos e apresentamos opções com custos antes de avançar. Sem surpresas." },
    { q: "Tratam da limpeza no final?", a: "Sim. Deixamos a casa pronta a habitar — sem poeiras, sem entulho e sem restos de obra." },
  ];

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">Perguntas frequentes</p>
          <h2 className="text-3xl font-black leading-tight text-[#0B1E3A] sm:text-4xl lg:text-5xl">
            Tira as dúvidas antes
            <br />de pedir orçamento.
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-[#E6EAF0]">
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 bg-white px-6 py-5 text-left hover:bg-[#F5F7FA]"
                >
                  <span className="text-base font-bold text-[#0B1E3A] sm:text-lg">{f.q}</span>
                  <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#1E4FBF] text-white transition ${open ? "rotate-45" : ""}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                  </span>
                </button>
                {open && (
                  <div className="border-t border-[#E6EAF0] bg-[#F5F7FA] px-6 py-5 text-[#4A5568]">
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
   Lead CTA
   ------------------------------------------------------------------------- */
function LeadCTA() {
  return (
    <section id="orcamento" className="relative overflow-hidden bg-[#1E4FBF] py-20 text-white lg:py-28">
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#FF7A1A]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
          Pede o teu orçamento grátis.
          <br />
          Resposta em 24 horas.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
          Envia-nos uma mensagem com o que precisas. Recebes o preço fechado no WhatsApp.
        </p>

        <form
          className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 rounded-3xl bg-white p-4 shadow-2xl sm:flex-row sm:p-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="O teu nome"
            className="flex-1 rounded-2xl bg-[#F5F7FA] px-5 py-4 text-base text-[#0B1E3A] placeholder:text-[#4A5568] focus:outline-none focus:ring-2 focus:ring-[#1E4FBF] sm:rounded-full"
          />
          <input
            type="tel"
            placeholder="WhatsApp / Telemóvel"
            className="flex-1 rounded-2xl bg-[#F5F7FA] px-5 py-4 text-base text-[#0B1E3A] placeholder:text-[#4A5568] focus:outline-none focus:ring-2 focus:ring-[#1E4FBF] sm:rounded-full"
          />
          <button
            type="submit"
            className="rounded-2xl bg-[#FF7A1A] px-8 py-4 text-base font-bold text-white transition hover:bg-[#E56A0E] sm:rounded-full"
          >
            Pedir Orçamento
          </button>
        </form>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
          <a href={PHONES.waLink} className="inline-flex items-center gap-2 font-semibold hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            {PHONES.primary}
          </a>
          <span className="hidden sm:block">·</span>
          <span>Ou liga directamente: <a href={`tel:${PHONES.secondary.replace(/\s/g, "")}`} className="font-bold">{PHONES.secondary}</a></span>
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
    <footer className="bg-[#0B1E3A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1E4FBF] text-lg font-black text-white">C</span>
              <span className="text-xl font-black">CRONO<span className="text-[#FF7A1A]">.</span></span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Remodelações premium em Lisboa e arredores. 20 anos a transformar casas com rigor e compromisso.
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

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cronograma Home Service. Todos os direitos reservados.</p>
          <p>Desenvolvido por CMTecnologia</p>
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
    <div className="relative z-10 min-h-screen bg-white text-[#1A2238]">
      <Header />
      <main>
        <Hero />
        <PressBand />
        <HowItWorks />
        <ServicesGrid />
        <BeforeAfterLight />
        <Method />
        <Reviews />
        <FAQSection />
        <LeadCTA />
      </main>
      <Footer />
    </div>
  );
}
