import Link from "next/link";
import type { ReactNode } from "react";

/* -----------------------------------------------------------------------------
   Layout partilhado pelas 4 páginas legais (/politica-privacidade, /termos,
   /cookies, /livro-reclamacoes). Header minimal + content + footer com links
   legais e contactos. Evita re-renderizar a chrome completa do V2 nas páginas
   secundárias e mantém o branding coerente.
   ----------------------------------------------------------------------------- */

interface LegalShellProps {
  title: string;
  updatedAt: string; // ISO date, ex: "2026-05-18"
  children: ReactNode;
}

const LEGAL_LINKS: Array<{ label: string; href: string; external?: boolean }> = [
  { label: "Política de Privacidade", href: "/politica-privacidade" },
  { label: "Termos & Condições", href: "/termos" },
  { label: "Política de Cookies", href: "/cookies" },
  { label: "Livro de Reclamações", href: "/livro-reclamacoes" },
];

export default function LegalShell({ title, updatedAt, children }: LegalShellProps) {
  const formatted = new Date(updatedAt).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1A2238]">
      <header className="border-b border-[#E6EAF0] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Crono Home Service — início">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-crono.jpeg"
              alt="Crono Home Service"
              className="h-10 w-10 rounded-lg object-cover ring-1 ring-[#E6EAF0]"
            />
            <span className="text-lg font-black tracking-tight text-[#0B1E3A]">
              CRONO<span className="text-[#FF7A1A]">.</span>
            </span>
          </Link>
          <Link
            href="/"
            className="rounded-full border border-[#E6EAF0] px-4 py-2 text-sm font-semibold text-[#1A2238] transition hover:border-[#1E4FBF] hover:text-[#1E4FBF]"
          >
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="text-sm font-bold uppercase tracking-widest text-[#FF7A1A]">
            Informação Legal
          </p>
          <h1 className="mt-3 text-3xl font-black leading-tight text-[#0B1E3A] sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[#6B7587]">
            Última actualização: {formatted}
          </p>
          <div className="prose-legal mt-10 space-y-6 text-[15px] leading-relaxed text-[#1A2238]">
            {children}
          </div>
        </article>
      </main>

      <footer className="bg-[#0B1E3A] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1E4FBF] text-base font-black text-white">C</span>
                <span className="text-lg font-black">CRONO<span className="text-[#FF7A1A]">.</span></span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-white/70">
                Remodelações premium em Lisboa e arredores. 20 anos a transformar casas com rigor e compromisso.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-white/70">
                {LEGAL_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-[#FF7A1A]">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-white">Contacto</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="tel:+351931428476" className="hover:text-[#FF7A1A]">+351 931 428 476</a></li>
                <li><a href="tel:+351935602904" className="hover:text-[#FF7A1A]">+351 935 602 904</a></li>
                <li><a href="mailto:grupocronograma@hotmail.com" className="hover:text-[#FF7A1A]">grupocronograma@hotmail.com</a></li>
              </ul>
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-4 text-xs text-white/50">
            © {new Date().getFullYear()} Cronograma Home Service. Todos os direitos reservados. Desenvolvido por CMTecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
}
