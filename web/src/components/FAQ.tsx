"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

const FAQS = [
  {
    question: "Como garantem que o orçamento não aumenta?",
    answer: "Fazemos um levantamento exaustivo antes de apresentar o orçamento. O preço que lhe damos é fixo e fechado — inclui mão-de-obra, materiais e acabamentos. Só muda se o cliente pedir alterações ao projecto original.",
  },
  {
    question: "Precisamos de sair de casa durante a obra?",
    answer: "Na maioria dos casos, não. Organizamos o trabalho por fases para minimizar o impacto no dia-a-dia. Em obras maiores, aconselhamos os dias mais críticos com antecedência.",
  },
  {
    question: "Quanto tempo demora uma remodelação de casa de banho?",
    answer: "Uma remodelação completa de casa de banho demora entre 2 a 4 semanas, dependendo da complexidade. Damos-lhe o prazo exato no orçamento e cumprimos rigorosamente.",
  },
  {
    question: "Trabalham com materiais dos clientes?",
    answer: "Sim. Se já tem materiais comprados ou preferidos, nós aplicamos. Caso contrário, temos parcerias com as melhores marcas (Margres, Roca, Grohe, CIN) com condições especiais.",
  },
  {
    question: "O que acontece se aparecerem problemas ocultos na obra?",
    answer: "Antes de iniciar, fazemos uma inspeção técnica completa. Se surgir algo inesperado durante a obra, contactamos imediatamente, explicamos a situação e apresentamos opções com custos antes de avançar. Sem surpresas.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="glass-card rounded-xl mb-3 sm:mb-4">
      <button onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left cursor-pointer sm:p-5">
        <span className="pr-4 text-sm font-semibold sm:text-base md:text-lg" style={{ color: "#E67E22" }}>
          {question}
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.2 }}
          className="shrink-0 flex h-8 w-8 items-center justify-center rounded-full text-lg font-bold"
          style={{ background: "rgba(230,126,34,0.15)", color: "#E67E22" }}>
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <p className="px-4 pb-5 text-sm leading-relaxed text-white/70 sm:px-5 sm:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper id="duvidas" className="section-dark py-14 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Dúvidas"
          title="Perguntas Frequentes"
          subtitle="Esclarecemos as dúvidas mais comuns antes de começar."
        />

        <div className="mt-8 sm:mt-12">
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
