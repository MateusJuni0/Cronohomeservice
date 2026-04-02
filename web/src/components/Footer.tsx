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

          {/* Brand — logo grande + texto */}
          <div className="mb-8 flex flex-col items-center gap-4 sm:mb-12 sm:flex-row sm:gap-6">
            <a href="/">
              <Image
                src="/logo.png"
                width={200}
                height={200}
                alt="Cronograma Home Service"
                className="object-contain h-24 w-24 sm:h-28 sm:w-28"
              />
            </a>
            <div className="text-center sm:text-left">
              <p className="text-base font-bold tracking-wide sm:text-lg" style={{ color: "#FFFFFF" }}>CRONOGRAMA</p>
              <p className="text-[10px] font-light tracking-[0.25em] sm:text-xs" style={{ color: "#C9A84C" }}>Home Service</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "#D6D3D1" }}>
                Remodelações de alta qualidade em Lisboa e arredores. Transformamos a sua casa — no prazo e no orçamento.
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-12">

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

          <div className="mt-8 border-t border-gold/10 pt-6 text-center text-xs sm:mt-12 sm:pt-8" style={{ color: "#D6D3D1" }}>
            &copy; {new Date().getFullYear()} Cronograma Home Service. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
