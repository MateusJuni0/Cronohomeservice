"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

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
        className="before-after-slider relative aspect-[4/3] w-full cursor-ew-resize overflow-hidden rounded-lg"
      >
        {/* After (full background) */}
        <Image src={after} alt="Depois" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />

        {/* Before (clipped) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={before} alt="Antes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-gold"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-navy/80">
            <svg className="h-5 w-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 z-10 rounded bg-navy/70 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          ANTES
        </span>
        <span className="absolute top-3 right-3 z-10 rounded bg-gold/80 px-2 py-1 text-xs font-semibold text-navy backdrop-blur-sm">
          DEPOIS
        </span>
      </div>
      <p className="text-sm text-white/50">{label}</p>
    </div>
  );
}

const PROJECTS = [
  {
    before: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    label: "Casa de Banho — Lisboa, 2024 • Duração: 3 semanas",
  },
  {
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    label: "Cozinha — Cascais, 2024 • Duração: 4 semanas",
  },
  {
    before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    label: "Sala de Estar — Oeiras, 2024 • Duração: 2 semanas",
  },
];

export default function BeforeAfter() {
  return (
    <SectionWrapper id="portfolio" className="bg-navy-light py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
            O Antes e o <span className="text-gold">Depois</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Arraste para ver a transformação. Resultados reais de projectos concluídos.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <Slider key={project.label} {...project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
