import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Livro de Reclamações",
  description:
    "Acesso directo ao Livro de Reclamações electrónico oficial e informação sobre resolução alternativa de litígios.",
  robots: { index: true, follow: true },
};

export default function LivroReclamacoesPage() {
  return (
    <LegalShell title="Livro de Reclamações" updatedAt="2026-05-18">
      <p>
        Em conformidade com o Decreto-Lei n.º 156/2005, na sua redacção actual,
        a Cronograma Home Service disponibiliza-lhe o Livro de Reclamações em
        formato electrónico, com acesso directo através do portal oficial do
        Governo de Portugal.
      </p>

      <div className="my-8 flex flex-col items-start gap-4 rounded-2xl border border-[#E6EAF0] bg-[#F5F7FA] p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-[#FF7A1A]">Portal oficial</p>
          <p className="mt-2 text-lg font-bold text-[#0B1E3A]">livroreclamacoes.pt</p>
          <p className="mt-1 text-sm text-[#4A5568]">Gerido pelo Estado Português. Acesso gratuito.</p>
        </div>
        <a
          href="https://www.livroreclamacoes.pt/Inicio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#1E4FBF] px-6 py-3 text-sm font-bold text-white shadow-[0_6px_20px_rgba(30,79,191,0.35)] transition hover:bg-[#173FA3]"
        >
          Abrir Livro de Reclamações
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">1. Como apresentar uma reclamação</h2>
      <ol className="ml-6 list-decimal space-y-2">
        <li>Aceda a <a className="text-[#1E4FBF] underline" href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer">livroreclamacoes.pt</a>.</li>
        <li>Procure por <strong>&ldquo;Cronograma Home Service&rdquo;</strong> ou indique o nosso NIF no formulário.</li>
        <li>Preencha o formulário de reclamação electrónica.</li>
        <li>Receberá no seu email cópia da reclamação e número de registo.</li>
        <li>A entidade reguladora competente analisa a reclamação. A Crono será notificada e responderá no prazo legal.</li>
      </ol>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">2. Resolução alternativa de litígios (RAL)</h2>
      <p>
        Antes de recorrer aos tribunais, pode optar por uma das entidades de
        resolução alternativa de litígios de consumo reconhecidas pela
        Direcção-Geral do Consumidor:
      </p>
      <ul className="ml-6 list-disc space-y-1">
        <li>
          <a className="text-[#1E4FBF] underline" href="https://www.cniacc.pt/" target="_blank" rel="noopener noreferrer">
            CNIACC — Centro Nacional de Informação e Arbitragem de Conflitos de Consumo
          </a>
        </li>
        <li>
          <a className="text-[#1E4FBF] underline" href="https://www.consumidor.gov.pt/parceiros-/entidades-de-resolucao-alternativa-de-litigios-de-consumo-ral.aspx" target="_blank" rel="noopener noreferrer">
            Lista completa de entidades RAL — Portal do Consumidor
          </a>
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-black text-[#0B1E3A]">3. Contacto directo</h2>
      <p>
        Antes de formalizar a reclamação, agradecemos a oportunidade de
        tentarmos resolver a situação directamente. Contacte-nos por email
        para{" "}
        <a className="text-[#1E4FBF] underline" href="mailto:grupocronograma@hotmail.com">grupocronograma@hotmail.com</a>{" "}
        ou pelos números <a className="text-[#1E4FBF] underline" href="tel:+351931428476">+351 931 428 476</a> /{" "}
        <a className="text-[#1E4FBF] underline" href="tel:+351935602904">+351 935 602 904</a> — responderemos no prazo
        máximo de 48 horas úteis.
      </p>
    </LegalShell>
  );
}
