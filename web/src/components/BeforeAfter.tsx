"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

interface SliderProps {
  before: string;
  after: string;
  label: string;
}

function Slider({ before, after, label }: SliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      dragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className="before-after-slider relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden rounded-lg border border-white/10"
      >
        <Image src={after} alt="Depois" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={before} alt="Antes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
        <div className="absolute top-0 bottom-0 z-10 w-0.5 bg-gold" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-[#0C0A09]/80">
            <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
            </svg>
          </div>
        </div>
        <span className="absolute top-3 left-3 z-10 bg-[#0C0A09]/70 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm rounded">
          ANTES
        </span>
        <span className="absolute top-3 right-3 z-10 bg-gold/80 px-2 py-1 text-xs font-semibold text-[#0C0A09] backdrop-blur-sm rounded">
          DEPOIS
        </span>
      </div>
      <p className="text-sm text-muted">{label}</p>
    </div>
  );
}

const PROJECTS = [
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

export default function BeforeAfter() {
  return (
    <SectionWrapper id="portfolio" className="section-glass py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-12">
          <SectionHeader
            eyebrow="Portfólio"
            title="O Antes e o Depois"
            subtitle="Arraste para ver a transformação. Resultados reais de projectos concluídos."
          />

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <Slider key={project.label} {...project} />
            ))}
          </div>

          {/* Portfolio page link */}
          <div className="mt-12 text-center">
            <a
              href="/portfolio"
              className="btn-glass inline-flex items-center gap-3 rounded-lg px-8 py-4 text-sm font-semibold tracking-wide"
            >
              Ver Portfólio Completo
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export { Slider };
