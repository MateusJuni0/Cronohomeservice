import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const SUPPLIERS = ["Margres", "Roca", "CIN", "Grohe", "Pladur"];

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "O Método", href: "#metodo" },
  { label: "Orçamento", href: "#orcamento" },
];

export default function Footer() {
  return (
    <SectionWrapper className="border-t border-white/5 bg-navy-900 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Suppliers */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-white/30 uppercase">
            Trabalhamos com
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {SUPPLIERS.map((s) => (
              <span key={s} className="text-lg font-semibold text-white/15 transition-colors hover:text-white/30">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                width={36}
                height={36}
                alt="Cronograma Home Service"
                className="object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold tracking-wide text-white">CRONOGRAMA</span>
                <span className="text-[9px] font-light tracking-[0.2em] text-gold/40">Home Service</span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/35">
              Remodelações de alta qualidade em Lisboa e arredores. Transformamos a sua casa — no prazo e no orçamento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/35 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Contactos
            </h4>
            <ul className="space-y-2.5 text-sm text-white/35">
              <li>+351 912 345 678</li>
              <li>info@cronohomeservice.pt</li>
              <li>Lisboa, Portugal</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-white/40 uppercase">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm text-white/35">
              <li>NIF: XXXXXXXXX</li>
              <li>Alvará: XXXXXX</li>
              <li>Política de Privacidade</li>
              <li>RGPD</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-white/20">
          &copy; {new Date().getFullYear()} Cronograma Home Service. Todos os direitos reservados.
        </div>
      </div>
    </SectionWrapper>
  );
}
