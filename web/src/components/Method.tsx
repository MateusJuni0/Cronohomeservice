"use client";

import SectionWrapper from "./SectionWrapper";

const STEPS = [
  {
    number: "01",
    title: "Visita e Diagnóstico",
    description: "Avaliamos o espaço gratuitamente e ouvimos as suas necessidades.",
  },
  {
    number: "02",
    title: "Orçamento Fixo",
    description: "Preço fechado, sem surpresas. Sabe exactamente quanto vai investir.",
  },
  {
    number: "03",
    title: "Obra com Gestão Dedicada",
    description: "Um gestor único, actualizações diárias por WhatsApp. Zero stress.",
  },
  {
    number: "04",
    title: "Entrega e Garantia",
    description: "Limpeza final incluída, garantia de 5 anos em todas as intervenções.",
  },
];

export default function Method() {
  return (
    <SectionWrapper id="metodo" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
            O Método <span className="text-gold">Crono</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            Do primeiro contacto à entrega da chave — sem surpresas, sem caos.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-gold/30" />

            <div className="grid grid-cols-4 gap-8">
              {STEPS.map((step) => (
                <div key={step.number} className="relative text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-navy text-xl font-bold text-gold">
                    {step.number}
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative ml-8 border-l border-gold/30 pl-8">
            {STEPS.map((step, i) => (
              <div key={step.number} className={`relative ${i > 0 ? "mt-10" : ""}`}>
                <div className="absolute -left-[calc(2rem+1.25rem+1px)] flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-navy text-sm font-bold text-gold">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
