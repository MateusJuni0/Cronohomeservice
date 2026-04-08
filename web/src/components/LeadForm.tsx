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
  { value: "remodelacao", label: "Remodelação", icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5Z" /></svg> },
  { value: "pintura", label: "Pintura", icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" /></svg> },
  { value: "instalacoes", label: "Instalações", icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg> },
  { value: "decoracao", label: "Decoração", icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" /></svg> },
  { value: "outro", label: "Outro", icon: <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg> },
];

const URGENCIES: { value: Urgency; label: string; sub: string }[] = [
  { value: "urgente", label: "Urgente", sub: "Esta semana" },
  { value: "proximo-mes", label: "Próximo mês", sub: "Dentro de 30 dias" },
  { value: "3-meses", label: "Nos próximos 3 meses", sub: "Sem pressa" },
  { value: "planear", label: "Ainda a planear", sub: "Só quero orçamento" },
];

const STEP_VARIANTS = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
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
          ? formData.whatsapp.trim().length >= 9 : formData.email.includes("@");
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
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: "rgba(230,126,34,0.15)", color: "#E67E22" }}>
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl" style={{ color: "#E67E22" }}>Pedido Recebido!</h3>
            <p className="mt-4 text-white/60">Vamos analisar o seu pedido e entrar em contacto nas próximas 24 horas.</p>
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

        <div className="mt-8 sm:mt-12">
          {/* Step indicator */}
          <div className="mb-6 flex items-center justify-center gap-2 sm:mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all sm:h-10 sm:w-10 sm:text-sm"
                  style={
                    s === step
                      ? { background: "#E67E22", color: "#fff", boxShadow: "0 0 20px rgba(230,126,34,0.4)" }
                      : s < step
                        ? { background: "rgba(230,126,34,0.25)", color: "#E67E22" }
                        : { background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }
                  }
                >
                  {s < step ? "✓" : s}
                </div>
                {s < 4 && (
                  <div className="h-[2px] w-6 sm:w-10"
                    style={{ background: s < step ? "rgba(230,126,34,0.5)" : "rgba(255,255,255,0.1)" }} />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div className="glass-panel rounded-2xl p-5 sm:p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div key="s1" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                  <h3 className="mb-2 text-lg font-bold sm:text-xl" style={{ color: "#E67E22" }}>
                    Que tipo de obra pretende?
                  </h3>
                  <p className="mb-6 text-xs text-white/50 sm:text-sm">Selecione a categoria que melhor se aplica.</p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {WORK_TYPES.map((wt) => (
                      <button key={wt.value} onClick={() => setFormData({ ...formData, workType: wt.value })}
                        className="glass-card flex flex-col items-center gap-2 rounded-xl p-4 text-xs transition-all cursor-pointer sm:gap-3 sm:p-5 sm:text-sm"
                        style={formData.workType === wt.value
                          ? { borderColor: "#E67E22", boxShadow: "0 0 20px rgba(230,126,34,0.2)" }
                          : {}}>
                        <span style={{ color: formData.workType === wt.value ? "#E67E22" : "rgba(255,255,255,0.5)" }}>
                          {wt.icon}
                        </span>
                        <span style={{ color: formData.workType === wt.value ? "#E67E22" : "#D6D3D1" }}>
                          {wt.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                  <h3 className="mb-2 text-lg font-bold sm:text-xl" style={{ color: "#E67E22" }}>
                    Qual a urgência?
                  </h3>
                  <p className="mb-6 text-xs text-white/50 sm:text-sm">Ajuda-nos a priorizar o seu pedido.</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {URGENCIES.map((u) => (
                      <button key={u.value} onClick={() => setFormData({ ...formData, urgency: u.value })}
                        className="glass-card rounded-xl p-4 text-left transition-all cursor-pointer sm:p-5"
                        style={formData.urgency === u.value
                          ? { borderColor: "#E67E22", boxShadow: "0 0 20px rgba(230,126,34,0.2)" }
                          : {}}>
                        <p className="font-bold text-sm sm:text-base"
                          style={{ color: formData.urgency === u.value ? "#E67E22" : "#fff" }}>
                          {u.label}
                        </p>
                        <p className="mt-1 text-xs text-white/50 sm:text-sm">{u.sub}</p>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                  <h3 className="mb-2 text-lg font-bold sm:text-xl" style={{ color: "#E67E22" }}>
                    Onde fica o imóvel?
                  </h3>
                  <p className="mb-6 text-xs text-white/50 sm:text-sm">Podemos começar só com a zona.</p>
                  <div className="space-y-5">
                    <div className="glass-card rounded-xl p-4 sm:p-5">
                      <label className="mb-2 block text-xs font-semibold" style={{ color: "#E67E22" }}>Morada / Zona</label>
                      <input type="text" placeholder="Ex: Benfica, Lisboa"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full border-b border-white/15 bg-transparent py-2 text-sm text-white placeholder:text-white/30 focus:border-[#E67E22] focus:outline-none" />
                    </div>
                    <div className="glass-card rounded-xl p-4 sm:p-5">
                      <label className="mb-2 block text-xs font-semibold" style={{ color: "#E67E22" }}>
                        Data preferencial para visita
                        <span className="ml-1 font-normal text-white/40">(opcional)</span>
                      </label>
                      <input type="date" min={today} value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white focus:border-[#E67E22] focus:outline-none [color-scheme:dark]" />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div key="s4" variants={STEP_VARIANTS} initial="enter" animate="center" exit="exit" transition={{ duration: 0.3 }}>
                  <h3 className="mb-2 text-lg font-bold sm:text-xl" style={{ color: "#E67E22" }}>
                    Como podemos contactá-lo?
                  </h3>
                  <p className="mb-6 text-xs text-white/50 sm:text-sm">Último passo — receba a sua avaliação gratuita.</p>
                  <div className="space-y-4">
                    <div className="glass-card rounded-xl p-4 sm:p-5">
                      <label className="mb-2 block text-xs font-semibold" style={{ color: "#E67E22" }}>Nome</label>
                      <input type="text" placeholder="O seu nome" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border-b border-white/15 bg-transparent py-2 text-sm text-white placeholder:text-white/30 focus:border-[#E67E22] focus:outline-none" />
                    </div>

                    <div className="glass-card rounded-xl p-4 sm:p-5">
                      <label className="mb-3 block text-xs font-semibold" style={{ color: "#E67E22" }}>Contacto via</label>
                      <div className="mb-4 flex gap-2">
                        {(["whatsapp", "email"] as ContactMethod[]).map((m) => (
                          <button key={m} onClick={() => setFormData({ ...formData, contactMethod: m })}
                            className="flex-1 rounded-lg py-2.5 text-xs font-bold transition-all cursor-pointer sm:text-sm"
                            style={formData.contactMethod === m
                              ? { background: "#E67E22", color: "#fff", boxShadow: "0 4px 16px rgba(230,126,34,0.3)" }
                              : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
                            {m === "whatsapp" ? "WhatsApp" : "E-mail"}
                          </button>
                        ))}
                      </div>
                      {formData.contactMethod === "whatsapp" ? (
                        <input type="tel" placeholder="912 345 678" value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full border-b border-white/15 bg-transparent py-2 text-sm text-white placeholder:text-white/30 focus:border-[#E67E22] focus:outline-none" />
                      ) : (
                        <input type="email" placeholder="email@exemplo.com" value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border-b border-white/15 bg-transparent py-2 text-sm text-white placeholder:text-white/30 focus:border-[#E67E22] focus:outline-none" />
                      )}
                    </div>

                    <div className="glass-card rounded-xl p-4 sm:p-5">
                      <label className="mb-2 block text-xs font-semibold" style={{ color: "#E67E22" }}>
                        Fotos do espaço <span className="font-normal text-white/40">(opcional)</span>
                      </label>
                      <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden"
                        onChange={(e) => setFormData({ ...formData, photos: Array.from(e.target.files ?? []) })} />
                      <button onClick={() => fileInputRef.current?.click()}
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-white/20 py-4 text-xs text-white/50 transition-all cursor-pointer hover:border-[#E67E22]/50 hover:text-[#E67E22] sm:text-sm">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                        {formData.photos.length > 0 ? `${formData.photos.length} foto(s) selecionada(s)` : "Anexar fotos do espaço"}
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-6 flex items-center justify-between sm:mt-8">
              {step > 1 ? (
                <button onClick={() => setStep(step - 1)}
                  className="text-sm font-medium text-white/40 transition-colors cursor-pointer hover:text-[#E67E22]">
                  &larr; Voltar
                </button>
              ) : <div />}

              {step < 4 ? (
                <motion.button onClick={() => canAdvance() && setStep(step + 1)} disabled={!canAdvance()}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="btn-orange rounded-lg px-8 py-3 text-sm font-bold disabled:cursor-not-allowed disabled:opacity-30 cursor-pointer sm:px-10">
                  Continuar &rarr;
                </motion.button>
              ) : (
                <motion.button onClick={handleSubmit} disabled={!canAdvance() || submitting}
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="btn-orange w-full rounded-lg py-4 text-sm font-bold tracking-wider uppercase disabled:cursor-not-allowed disabled:opacity-30 sm:w-auto sm:px-12 cursor-pointer">
                  {submitting ? "A enviar..." : "Receber Avaliação Gratuita"}
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
