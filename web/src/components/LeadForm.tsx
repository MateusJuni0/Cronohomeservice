"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

type WorkType = "remodelacao" | "pintura" | "instalacoes" | "decoracao" | "outro";
type Urgency = "urgente" | "proximo-mes" | "3-meses" | "planear";

interface FormData {
  workType: WorkType | null;
  urgency: Urgency | null;
  address: string;
  name: string;
  whatsapp: string;
}

const WORK_TYPES: { value: WorkType; label: string; icon: string }[] = [
  { value: "remodelacao", label: "Remodelação", icon: "🏠" },
  { value: "pintura", label: "Pintura", icon: "🎨" },
  { value: "instalacoes", label: "Instalações", icon: "⚡" },
  { value: "decoracao", label: "Decoração", icon: "🛋️" },
  { value: "outro", label: "Outro", icon: "📋" },
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
      <SectionWrapper id="orcamento" className="bg-navy py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="rounded-xl border border-gold/30 bg-navy-light p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-3xl">
              ✅
            </div>
            <h3 className="font-serif text-2xl text-white sm:text-3xl">Pedido Recebido!</h3>
            <p className="mt-4 text-white/60">
              Vamos analisar o seu pedido e entrar em contacto via WhatsApp nas próximas 24 horas.
            </p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="orcamento" className="bg-navy py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl md:text-5xl">
            Pedir <span className="text-gold">Orçamento Grátis</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Responda a 4 perguntas rápidas e receba uma avaliação personalizada.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-navy-light p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-white/40 mb-2">
              <span>Passo {step} de 4</span>
              <span>{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="h-1 rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gold"
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
                      className={`flex flex-col items-center gap-2 rounded-lg border p-4 text-sm transition-all ${
                        formData.workType === wt.value
                          ? "border-gold bg-gold/10 text-gold"
                          : "border-white/10 text-white/60 hover:border-white/30"
                      }`}
                    >
                      <span className="text-2xl">{wt.icon}</span>
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
                      className={`rounded-lg border p-4 text-left transition-all ${
                        formData.urgency === u.value
                          ? "border-gold bg-gold/10"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <p className={`font-semibold ${formData.urgency === u.value ? "text-gold" : "text-white"}`}>
                        {u.label}
                      </p>
                      <p className="text-sm text-white/50">{u.sub}</p>
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
                  className="w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                />
                <p className="mt-3 text-sm text-white/40">
                  Pode indicar apenas a zona (ex: &ldquo;Benfica, Lisboa&rdquo;).
                </p>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-lg font-semibold text-white">Como podemos contactá-lo?</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="O seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp (ex: 912 345 678)"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-navy px-4 py-3 text-white placeholder:text-white/30 focus:border-gold focus:outline-none"
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
                className="text-sm font-medium text-white/50 transition-colors hover:text-white"
              >
                ← Voltar
              </button>
            ) : (
              <div />
            )}

            {step < 4 ? (
              <button
                onClick={() => canAdvance() && setStep(step + 1)}
                disabled={!canAdvance()}
                className="bg-gold px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continuar →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canAdvance() || submitting}
                className="bg-gold px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold-light disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {submitting ? "A enviar..." : "Receber Avaliação por WhatsApp"}
              </button>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
