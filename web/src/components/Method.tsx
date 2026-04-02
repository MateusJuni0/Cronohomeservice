"use client";

import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const STEPS = [
  {
    number: "01",
    title: "Visita e Diagnóstico",
    description: "Avaliámos o espaço gratuitamente e ouvimos as suas necessidades.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Orçamento Fixo",
    description: "Preço fechado, sem surpresas. Sabe exactamente quanto vai investir.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Obra com Gestão Dedicada",
    description: "Um gestor único, actualizações diárias por WhatsApp. Zero stress.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Entrega e Garantia",
    description: "Limpeza final incluída, garantia de 5 anos em todas as intervenções.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];

export default function Method() {
  return (
    <SectionWrapper id="metodo" className="section-glass py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-8 sm:p-12">
          <SectionHeader
            eyebrow="O Método"
            title="Do contacto à entrega da chave"
            subtitle="Sem surpresas, sem caos. 4 passos para a sua casa nova."
          />

          {/* Timeline vertical */}
          <div className="relative mt-16">
            {/* Connector line */}
            <div className="absolute left-[27px] top-12 bottom-12 w-[1px] bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />

            {STEPS.map((step, i) => (
              <div key={step.number} className={`relative flex gap-6 ${i < STEPS.length - 1 ? "mb-10" : ""}`}>
                {/* Number box */}
                <div className="z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center border border-gold/30 bg-[rgba(255,255,255,0.08)] backdrop-blur-md rounded-lg">
                  <span className="font-serif text-lg text-gold">{step.number}</span>
                </div>

                {/* Content */}
                <div className={`flex-1 pt-2 ${i < STEPS.length - 1 ? "border-b border-white/10 pb-8" : ""}`}>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-gold">{step.icon}</span>
                    <h3 className="font-serif text-xl" style={{ color: "#FFFFFF" }}>{step.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center">
            <a
              href="#orcamento"
              className="btn-glass inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium"
            >
              Pronto para começar? <span>&rarr;</span> Pedir orçamento
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
