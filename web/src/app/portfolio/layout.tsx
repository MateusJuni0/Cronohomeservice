import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio — 12 Projectos de Remodelação em Lisboa",
  description:
    "Veja 12 projectos reais de remodelação em Lisboa, Cascais, Oeiras e Sintra. Cozinhas, casas de banho, salas e apartamentos completos — antes e depois interactivos. Resultados comprovados.",
  keywords: [
    "portfólio remodelações lisboa",
    "antes e depois remodelação",
    "fotos remodelação cozinha",
    "fotos remodelação casa de banho",
    "projectos de remodelação lisboa",
    "exemplos obras casa",
    "remodelação apartamento antes depois",
  ],
  openGraph: {
    title: "Portfólio de Remodelações | Cronograma Home Service",
    description:
      "12 transformações reais em Lisboa: cozinhas, casas de banho, salas e apartamentos. Veja o antes e depois dos nossos projectos.",
  },
  alternates: {
    canonical: "https://cronohomeservice.pt/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
