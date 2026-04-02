import Image from "next/image";
import SectionWrapper from "./SectionWrapper";

const SUPPLIERS = ["Margres", "Roca", "CIN", "Grohe", "Pladur"];

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "O Método", href: "#metodo" },
  { label: "Testemunhos", href: "#testemunhos" },
  { label: "Orçamento", href: "#orcamento" },
];

export default function Footer() {
  return (
    <SectionWrapper className="section-glass border-t border-gold/10 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-5 sm:p-8 md:p-12">
          {/* Suppliers */}
          <div className="mb-8 text-center sm:mb-12">
            <p className="mb-3 text-[10px] font-medium tracking-[0.3em] uppercase sm:mb-4 sm:text-xs" style={{ color: "#D6D3D1" }}>
              Trabalhamos com
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
              {SUPPLIERS.map((s) => (
                <span key={s} className="text-sm font-semibold transition-colors hover:text-gold sm:text-lg" style={{ color: "#D6D3D1" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <a href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  width={36}
                  height={36}
                  alt="Cronograma Home Service"
                  className="object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold tracking-wide" style={{ color: "#FFFFFF" }}>CRONOGRAMA</span>
                  <span className="text-[9px] font-light tracking-[0.2em] text-gold-dark">Home Service</span>
                </div>
              </a>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "#D6D3D1" }}>
                Remodelações de alta qualidade em Lisboa e arredores. Transformamos a sua casa — no prazo e no orçamento.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#D6D3D1" }}>
                Navegação
              </h4>
              <ul className="space-y-2.5">
                {LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm transition-colors hover:text-gold" style={{ color: "#D6D3D1" }}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#D6D3D1" }}>
                Contactos
              </h4>
              <ul className="space-y-2.5 text-sm" style={{ color: "#D6D3D1" }}>
                <li>
                  <a href="tel:+351931428476" className="transition-colors hover:text-gold">+351 931 428 476</a>
                </li>
                <li>
                  <a href="tel:+351935602904" className="transition-colors hover:text-gold">+351 935 602 904</a>
                </li>
                <li>
                  <a href="mailto:grupocronograma@hotmail.com" className="transition-colors hover:text-gold">grupocronograma@hotmail.com</a>
                </li>
                <li>Lisboa, Portugal</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "#D6D3D1" }}>
                Legal
              </h4>
              <ul className="space-y-2.5 text-sm" style={{ color: "#D6D3D1" }}>
                <li>NIF: XXXXXXXXX</li>
                <li>Alvará: XXXXXX</li>
                <li>Política de Privacidade</li>
                <li>RGPD</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-gold/10 pt-8 text-center text-xs" style={{ color: "#D6D3D1" }}>
            &copy; {new Date().getFullYear()} Cronograma Home Service. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
