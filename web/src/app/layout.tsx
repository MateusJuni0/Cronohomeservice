import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import FloatingLinesBackground from "@/components/FloatingLinesBackground";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const SITE_URL = "https://cronohomeservice.pt";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cronograma Home Service — Remodelações e Obras em Lisboa",
    template: "%s | Cronograma Home Service",
  },
  description:
    "Empresa de remodelações em Lisboa com 20 anos de experiência. Remodelação de cozinhas, casas de banho, pintura, instalações eléctricas e canalização. Orçamento fixo sem surpresas, garantia de 5 anos. Orçamento grátis em 24h.",
  keywords: [
    "remodelações lisboa",
    "obras casa lisboa",
    "remodelação casa de banho lisboa",
    "remodelação cozinha lisboa",
    "pintura interior lisboa",
    "pintura de casas lisboa",
    "decoração interiores lisboa",
    "empreiteiro lisboa",
    "obras chave na mão lisboa",
    "instalações eléctricas lisboa",
    "canalização lisboa",
    "renovação apartamentos lisboa",
    "remodelação de interiores",
    "empresa de remodelações",
    "construção civil lisboa",
    "trocar tomadas lisboa",
    "reparações domésticas lisboa",
    "remodelações cascais",
    "remodelações oeiras",
    "remodelações sintra",
    "remodelações amadora",
    "remodelações almada",
    "obras em casa",
    "orçamento remodelação grátis",
    "empreiteiro de confiança lisboa",
    "remodelação total apartamento",
    "remodelação low cost lisboa",
    "manutenção de casas lisboa",
    "casa de banho moderna lisboa",
    "cozinha remodelada lisboa",
  ],
  openGraph: {
    title: "Cronograma Home Service — Remodelações Premium em Lisboa",
    description:
      "Transformamos a sua casa. No prazo. No orçamento. 20 anos de experiência em remodelações de cozinhas, casas de banho, pintura e instalações em Lisboa e arredores.",
    type: "website",
    locale: "pt_PT",
    siteName: "Cronograma Home Service",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Cronograma Home Service — Remodelações e Obras em Lisboa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cronograma Home Service — Remodelações em Lisboa",
    description:
      "Remodelações de alta qualidade em Lisboa. Cozinhas, casas de banho, pintura, instalações. Orçamento fixo, garantia 5 anos.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // google: "GOOGLE_SITE_VERIFICATION_CODE", // Adicionar quando tiver
  },
  category: "construction",
};

/* ── JSON-LD: LocalBusiness + Services + FAQ ── */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Cronograma Home Service",
  alternateName: "Grupo Cronograma",
  description:
    "Empresa de remodelações em Lisboa com 20 anos de experiência. Remodelação completa de cozinhas, casas de banho, pintura de interiores, instalações eléctricas, canalização e decoração. Orçamento fixo sem surpresas e garantia de 5 anos em todos os trabalhos.",
  url: SITE_URL,
  telephone: ["+351931428476", "+351935602904"],
  email: "grupocronograma@hotmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lisboa",
    addressRegion: "Lisboa",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.7223,
    longitude: -9.1393,
  },
  areaServed: [
    { "@type": "City", name: "Lisboa" },
    { "@type": "City", name: "Cascais" },
    { "@type": "City", name: "Oeiras" },
    { "@type": "City", name: "Sintra" },
    { "@type": "City", name: "Amadora" },
    { "@type": "City", name: "Almada" },
    { "@type": "City", name: "Loures" },
    { "@type": "City", name: "Odivelas" },
    { "@type": "City", name: "Seixal" },
    { "@type": "City", name: "Setúbal" },
  ],
  priceRange: "€€-€€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Remodelação",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Remodelação Geral",
        description: "Transformação completa de espaços — do chão ao tecto, chave na mão. Cozinhas, casas de banho, salas, apartamentos completos.",
      },
      {
        "@type": "OfferCatalog",
        name: "Instalações Eléctricas e Canalização",
        description: "Instalações eléctricas, canalização e gás — certificados e dentro da lei. Troca de tomadas, quadros eléctricos, canalizações completas.",
      },
      {
        "@type": "OfferCatalog",
        name: "Pintura de Interiores e Exteriores",
        description: "Pintura profissional com tintas premium CIN. Acabamentos impecáveis para casas, apartamentos e espaços comerciais em Lisboa.",
      },
      {
        "@type": "OfferCatalog",
        name: "Decoração de Interiores",
        description: "Design de interiores personalizado. Decoração moderna, funcional e que reflecte o seu estilo de vida.",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Maria Santos" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "A equipa foi incrivelmente profissional. A nossa cozinha ficou irreconhecível — e entregaram no prazo que prometeram. Recomendo sem hesitação.",
      datePublished: "2024-09-15",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "João Ferreira" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Obra entregue no prazo e no orçamento, como combinado. O gestor de projecto manteve-nos informados todos os dias.",
      datePublished: "2024-08-20",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Ana Costa" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Finalmente uma empresa que cumpre o que promete. A remodelação da casa de banho foi impecável e a equipa deixou tudo limpo no final.",
      datePublished: "2024-07-10",
    },
  ],
  sameAs: [],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como garantem que o orçamento não aumenta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fazemos um levantamento exaustivo antes de apresentar o orçamento. O preço que lhe damos é fixo e fechado — inclui mão-de-obra, materiais e acabamentos. Só muda se o cliente pedir alterações ao projecto original.",
      },
    },
    {
      "@type": "Question",
      name: "Precisamos de sair de casa durante a obra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Na maioria dos casos, não. Organizamos o trabalho por fases para minimizar o impacto no dia-a-dia. Em obras maiores, aconselhamos os dias mais críticos com antecedência.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo demora uma remodelação de casa de banho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uma remodelação completa de casa de banho demora entre 2 a 4 semanas, dependendo da complexidade. Damos-lhe o prazo exacto no orçamento e cumprimos rigorosamente.",
      },
    },
    {
      "@type": "Question",
      name: "Trabalham com materiais dos clientes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Se já tem materiais comprados ou preferidos, nós aplicamos. Caso contrário, temos parcerias com as melhores marcas (Margres, Roca, Grohe, CIN) com condições especiais.",
      },
    },
    {
      "@type": "Question",
      name: "O que acontece se aparecerem problemas ocultos na obra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Antes de iniciar, fazemos uma inspecção técnica completa. Se surgir algo inesperado durante a obra, contactamos imediatamente, explicamos a situação e apresentamos opções com custos antes de avançar. Sem surpresas.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: SITE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${dmSans.variable} ${cormorant.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <meta name="geo.region" content="PT-11" />
        <meta name="geo.placename" content="Lisboa" />
        <meta name="geo.position" content="38.7223;-9.1393" />
        <meta name="ICBM" content="38.7223, -9.1393" />
      </head>
      <body className="relative min-h-full flex flex-col bg-base">
        <FloatingLinesBackground />
        <div className="relative z-[1] flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
