"use client";

import { useState, useRef, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

type WorkType = "remodelacao" | "pintura" | "instalacoes" | "decoracao" | "outro";
type Urgency = "urgente" | "proximo-mes" | "3-meses" | "planear";
type ContactMethod = "whatsapp" | "email";

interface FormData {
  workType: WorkType | null;
  urgency: Urgency | null;
  address: string;
  preferredDate: string;
  name: string;
  contactMethod: ContactMethod;
  whatsapp: string;
  email: string;
  photos: File[];
}

const WORK_TYPES: { value: WorkType; label: string; icon: ReactNode }[] = [
  {
    value: "remodelacao", label: "Remodelação",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" /></svg>,
  },
  {
    value: "pintura", label: "Pintura",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg>,
  },
  {
    value: "instalacoes", label: "Instalações",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>,
  },
  {
    value: "decoracao", label: "Decoração",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" /></svg>,
  },
  {
    value: "outro", label: "Outro",
    icon: <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
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

const today = new Date().toISOString().split("T")[0];

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    workType: null, urgency: null, address: "", preferredDate: "",
    name: "", contactMethod: "whatsapp", whatsapp: "", email: "", photos: [],
  });

  const canAdvance = (): boolean => {
    switch (step) {
      case 1: return formData.workType !== null;
      case 2: return formData.urgency !== null;
      case 3: return formData.address.trim().length > 0;
      case 4: {
        const hasName = formData.name.trim().length > 0;
        const hasContact = formData.contactMethod === "whatsapp"
          ? formData.whatsapp.trim().length >= 9
          : formData.email.includes("@");
        return hasName && hasContact;
      }
      default: return false;
    }
  };

  const handleSubmit = async () => {
    if (!canAdvance()) return;
    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("workType", formData.workType ?? "");
      body.append("urgency", formData.urgency ?? "");
      body.append("address", formData.address);
      body.append("preferredDate", formData.preferredDate);
      body.append("name", formData.name);
      body.append("contactMethod", formData.contactMethod);
      body.append("whatsapp", formData.whatsapp);
      body.append("email", formData.email);
      formData.photos.forEach((file) => body.append("photos", file));
      await fetch("/api/leads", { method: "POST", body });
      setSubmitted(true);
    } catch {
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <SectionWrapper id="orcamento" className="section-warm py-14 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="glass-panel rounded-2xl p-8 sm:p-12">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full sm:mb-6 sm:h-16 sm:w-16"
              style={{ background: "rgba(230,126,34,0.15)", color: "#E67E22" }}>
              <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-white sm:text-2xl md:text-3xl">Pedido Recebido!</h3>
            <p className="mt-4 text-muted">Vamos analisar o seu pedido e entrar em contacto nas próximas 24 horas.</p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="orcamento" className="section-warm py-14 sm:py-28">
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Orçamento Grátis"
          title="Descreva o seu projecto"
          subtitle="Responda a 4 perguntas rápidas e receba uma avaliação personalizada."
        />

        <div className="mt-8 glass-panel rounded-2xl p-5 sm:mt-12 sm:p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="mb-2 flex justify-between text-xs text-muted">
              <span>Passo {step} de 4</span>
              <span>{Math.round((step / 4) * 100)}%</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/15">
              <motion.div className="h-full rounded-full" style={{ background: "#E67E22" }}
                animate={{ width: `${(step / 4) * 100}%` }} transition={{ duration: 0.3 }} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="s1" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-lg font-semibold text-white">Que tipo de obra pretende?</h3>
                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                  {WORK_TYPES.map((wt) => (
                    <button key={wt.value} onClick={() => setFormData({ ...formData, workType: wt.value })}
                      className="flex flex-col items-center gap-1.5 rounded-lg border p-3 text-xs transition-all cursor-pointer sm:gap-2 sm:p-4 sm:text-sm"
                      style={formData.workType === wt.value
                        ? { borderColor: "#E67E22", background: "rgba(230,126,34,0.12)", color: "#E67E22" }
                        : { borderColor: "rgba(255,255,255,0.15)", color: "#D6D3D1" }}>
                      <span style={{ color: "#E67E22" }}>{wt.icon}</span>
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
                    <button key={u.value} onClick={() => setFormData({ ...formData, urgency: u.value })}
                      className="rounded-lg border p-4 text-left transition-all cursor-pointer"
                      style={formData.urgency === u.value
                        ? { borderColor: "#E67E22", background: "rgba(230,126,34,0.12)" }
                        : { borderColor: "rgba(255,255,255,0.15)" }}>
                      <p className="font-semibold" style={{ color: formData.urgency === u.value ? "#E67E22" : "#fff" }}>{u.label}</p>
                      <p className="text-sm text-muted">{u.sub}</p>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="s3" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-lg font-semibold text-white">Onde fica o imóvel?</h3>
                <div className="space-y-6">
                  <div>
                    <input type="text" placeholder="Ex: Rua das Flores, Lisboa" value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/40 focus:border-[#E67E22] focus:outline-none" />
                    <p className="mt-2 text-xs text-muted">Pode indicar apenas a zona (ex: &ldquo;Benfica, Lisboa&rdquo;).</p>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-muted">Data preferencial para visita (opcional)</label>
                    <input type="date" min={today} value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full rounded-lg border border-white/20 bg-white/5 px-3 py-2.5 text-sm text-white focus:border-[#E67E22] focus:outline-none" />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="s4" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                <h3 className="mb-6 text-lg font-semibold text-white">Como podemos contactá-lo?</h3>
                <div className="space-y-5">
                  <input type="text" placeholder="O seu nome" value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/40 focus:border-[#E67E22] focus:outline-none" />

                  <div>
                    <p className="mb-2 text-xs font-medium text-muted">Prefere contacto via:</p>
                    <div className="flex gap-2">
                      {(["whatsapp", "email"] as ContactMethod[]).map((method) => (
                        <button key={method} onClick={() => setFormData({ ...formData, contactMethod: method })}
                          className="flex-1 rounded-lg border py-2.5 text-xs font-semibold transition-all cursor-pointer"
                          style={formData.contactMethod === method
                            ? { background: "#E67E22", borderColor: "#E67E22", color: "#fff" }
                            : { borderColor: "rgba(255,255,255,0.15)", color: "#D6D3D1" }}>
                          {method === "whatsapp" ? "WhatsApp" : "E-mail"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {formData.contactMethod === "whatsapp" ? (
                    <input type="tel" placeholder="Nº WhatsApp (ex: 912 345 678)" value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/40 focus:border-[#E67E22] focus:outline-none" />
                  ) : (
                    <input type="email" placeholder="O seu e-mail" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-white placeholder:text-white/40 focus:border-[#E67E22] focus:outline-none" />
                  )}

                  <div>
                    <p className="mb-2 text-xs font-medium text-muted">Fotos do espaço (opcional)</p>
                    <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden"
                      onChange={(e) => setFormData({ ...formData, photos: Array.from(e.target.files ?? []) })} />
                    <button onClick={() => fileInputRef.current?.click()}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-dashed border-white/20 py-4 text-xs text-muted transition-all cursor-pointer hover:border-[#E67E22]/40">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                      </svg>
                      {formData.photos.length > 0 ? `${formData.photos.length} foto(s) selecionada(s)` : "Clique para anexar fotos"}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            {step > 1 ? (
              <button onClick={() => setStep(step - 1)} className="text-sm font-medium text-muted transition-colors cursor-pointer hover:text-white">
                &larr; Voltar
              </button>
            ) : <div />}

            {step < 4 ? (
              <motion.button onClick={() => canAdvance() && setStep(step + 1)} disabled={!canAdvance()}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-orange rounded-lg px-8 py-3 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer">
                Continuar &rarr;
              </motion.button>
            ) : (
              <motion.button onClick={handleSubmit} disabled={!canAdvance() || submitting}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="btn-orange w-full rounded-lg py-4 text-sm font-semibold tracking-[0.1em] uppercase disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-12 cursor-pointer">
                {submitting ? "A enviar..." : "Receber Avaliação Gratuita"}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
