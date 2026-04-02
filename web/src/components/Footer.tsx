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
    <SectionWrapper className="border-t border-white/5 bg-navy py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Suppliers */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-sm font-medium tracking-wider text-white/40 uppercase">
            Trabalhamos com
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {SUPPLIERS.map((s) => (
              <span key={s} className="text-lg font-semibold text-white/20 transition-colors hover:text-white/40">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-bold tracking-wide text-gold">CRONOGRAMA</span>
              <span className="text-sm font-light tracking-widest text-white/60">Home Service</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/50">
              Remodelações de alta qualidade em Lisboa e arredores. Transformamos a sua casa — no prazo e no orçamento.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/60 uppercase">
              Navegação
            </h4>
            <ul className="space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/40 transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/60 uppercase">
              Contactos
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>+351 912 345 678</li>
              <li>info@cronohomeservice.pt</li>
              <li>Lisboa, Portugal</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/60 uppercase">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-white/40">
              <li>NIF: XXXXXXXXX</li>
              <li>Alvará: XXXXXX</li>
              <li>Política de Privacidade</li>
              <li>RGPD</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-white/30">
          &copy; {new Date().getFullYear()} Cronograma Home Service. Todos os direitos reservados.
        </div>
      </div>
    </SectionWrapper>
  );
}
