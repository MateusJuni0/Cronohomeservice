"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

type WorkType = "remodelacao" | "pintura" | "instalacoes" | "decoracao" | "outro";
type Urgency = "urgente" | "proximo-mes" | "3-meses" | "planear";

interface FormData {
  workType: WorkType | null;
  urgency: Urgency | null;
  address: string;
  name: string;
  whatsapp: string;
}

const WORK_TYPES: { value: WorkType; label: string; icon: ReactNode }[] = [
  {
    value: "remodelacao",
    label: "Remodelação",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" />
      </svg>
    ),
  },
  {
    value: "pintura",
    label: "Pintura",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
      </svg>
    ),
  },
  {
    value: "instalacoes",
    label: "Instalações",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    value: "decoracao",
    label: "Decoração",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
      </svg>
    ),
  },
  {
    value: "outro",
    label: "Outro",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

const URGENCIES: { value: Urgency; label: string; sub: string }[] = [
  { value: "urgente", label: "Urgente", sub: "Esta semana" },
  { value: "proximo-mes", label: "Próximo mês", sub: "Dentro de 30 dias" },
  { value: "3-meses", label: "Nos próximos 3 meses", sub: "Sem pressa" },
  { value: "planear", label: "Ainda a planear", sub: "Só quero orçamento" },
];

const STEP_VARIANTS = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
};

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    workType: null,
    urgency: null,
    address: "",
    name: "",
    whatsapp: "",
  });

  const canAdvance = (): boolean => {
    switch (step) {
      case 1: return formData.workType !== null;
      case 2: return formData.urgency !== null;
      case 3: return formData.address.trim().length > 0;
      case 4: return formData.name.trim().length > 0 && formData.whatsapp.trim().length >= 9;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (!canAdvance()) return;
    setSubmitting(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <SectionWrapper id="orcamento" className="section-glass py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="glass-panel rounded-2xl p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center bg-gold/20 text-gold rounded-full">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-white sm:text-3xl">Pedido Recebido!</h3>
            <p className="mt-4 text-muted">
              Vamos analisar o seu pedido e entrar em contacto via WhatsApp nas próximas 24 horas.
            </p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="orcamento" className="section-glass py-28">
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Orçamento Grátis"
          title="Descreva o seu projecto"
          subtitle="Responda a 4 perguntas rápidas e receba uma avaliação personalizada."
        />

        <div className="mt-12 glass-panel rounded-2xl p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted mb-2">
              <span>Passo {step} de 4</span>
              <span>{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="h-1 bg-white/15 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gold"
                animate={{ width: `${(step / 4) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-lg font-semibold text-white">Que tipo de obra pretende?</h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {WORK_TYPES.map((wt) => (
                    <button
                      key={wt.value}
                      onClick={() => setFormData({ ...formData, workType: wt.value })}
                      className={`flex flex-col items-center gap-2 border rounded-lg p-4 text-sm transition-all cursor-pointer ${
                        formData.workType === wt.value
                          ? "border-gold bg-gold/10 text-gold"
                          : "border-white/15 text-muted hover:border-gold/40"
                      }`}
                    >
                      <span className="text-gold">{wt.icon}</span>
                      {wt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="s2" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-lg font-semibold text-white">Qual a urgência?</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {URGENCIES.map((u) => (
                    <button
                      key={u.value}
                      onClick={() => setFormData({ ...formData, urgency: u.value })}
                      className={`border rounded-lg p-4 text-left transition-all cursor-pointer ${
                        formData.urgency === u.value
                          ? "border-gold bg-gold/10"
                          : "border-white/15 hover:border-gold/40"
                      }`}
                    >
                      <p className={`font-semibold ${formData.urgency === u.value ? "text-gold" : "text-white"}`}>
                        {u.label}
                      </p>
                      <p className="text-sm text-muted">{u.sub}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-lg font-semibold text-white">Onde fica o imóvel?</h3>
                <input
                  type="text"
                  placeholder="Ex: Rua das Flores, Lisboa"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
                />
                <p className="mt-3 text-sm text-muted">
                  Pode indicar apenas a zona (ex: &ldquo;Benfica, Lisboa&rdquo;).
                </p>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-lg font-semibold text-white">Como podemos contactá-lo?</h3>
                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="O seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp (ex: 912 345 678)"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/50 focus:border-gold focus:outline-none"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="text-sm font-medium text-muted transition-colors hover:text-gold cursor-pointer"
              >
                &larr; Voltar
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <motion.button
                onClick={() => canAdvance() && setStep(step + 1)}
                disabled={!canAdvance()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold-glass rounded-lg px-8 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
              >
                Continuar &rarr;
              </motion.button>
            ) : (
              <motion.button
                onClick={handleSubmit}
                disabled={!canAdvance() || submitting}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gold-glass w-full rounded-lg py-4 text-sm font-semibold tracking-[0.15em] uppercase disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-12 cursor-pointer"
              >
                {submitting ? "A enviar..." : "Receber Avaliação por WhatsApp"}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
