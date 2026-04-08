"use client";

import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    number: "01",
    title: "Visita e Diagnóstico",
    description: "Avaliamos o espaço gratuitamente e ouvimos as suas necessidades.",
  },
  {
    number: "02",
    title: "Orçamento Fixo",
    description: "Preço fechado, sem surpresas. Sabe exatamente quanto vai investir.",
  },
  {
    number: "03",
    title: "Obra com Gestão Dedicada",
    description: "Um gestor dedicado, atualizações diárias por WhatsApp. Zero stress.",
  },
  {
    number: "04",
    title: "Entrega e Garantia",
    description: "Limpeza final incluída, garantia de 5 anos em todas as intervenções.",
  },
];

export default function Method() {
  return (
    <SectionWrapper id="metodo" className="section-warm py-14 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="O Método"
          title="Do contacto à entrega da chave"
          subtitle="Sem surpresas, sem caos. 4 passos para a sua casa nova."
        />

        <div className="relative mt-8 sm:mt-16">
          {/* Connector line */}
          <div
            className="absolute left-[21px] top-10 bottom-10 w-[1px] sm:left-[27px] sm:top-12 sm:bottom-12"
            style={{ background: "linear-gradient(to bottom, rgba(230,126,34,0.5), rgba(230,126,34,0.15), transparent)" }}
          />

          {STEPS.map((step, i) => (
            <div key={step.number} className={`relative flex gap-4 sm:gap-6 ${i < STEPS.length - 1 ? "mb-6 sm:mb-10" : ""}`}>
              <div
                className="z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg backdrop-blur-md sm:h-14 sm:w-14"
                style={{ border: "1px solid rgba(230,126,34,0.30)", background: "rgba(230,126,34,0.10)" }}
              >
                <span className="font-serif text-base sm:text-lg" style={{ color: "#E67E22" }}>
                  {step.number}
                </span>
              </div>

              <div className={`flex-1 pt-1 sm:pt-2 ${i < STEPS.length - 1 ? "border-b border-white/10 pb-5 sm:pb-8" : ""}`}>
                <h3 className="mb-1.5 font-serif text-base text-white sm:mb-2 sm:text-xl">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-14">
          <a
            href="#orcamento"
            className="btn-orange inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-xs font-semibold sm:px-6 sm:py-3 sm:text-sm"
          >
            Pronto para começar? <span>&rarr;</span> Pedir orçamento
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
