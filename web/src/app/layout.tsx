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

export const metadata: Metadata = {
  title: "Cronograma Home Service — Remodelações e Obras em Lisboa",
  description:
    "Remodelações de alta qualidade em Lisboa e arredores. 20 anos de experiência, orçamento fixo sem surpresas, garantia de 5 anos. Peça orçamento grátis em 24h.",
  keywords: [
    "remodelações lisboa",
    "obras casa lisboa",
    "remodelação casa de banho",
    "remodelação cozinha",
    "pintura interior",
    "decoração interiores lisboa",
    "empreiteiro lisboa",
    "obras chave na mão",
  ],
  openGraph: {
    title: "Cronograma Home Service — Remodelações e Obras em Lisboa",
    description:
      "Transformamos a sua casa. No prazo. No orçamento. 20 anos de experiência em remodelações premium.",
    type: "website",
    locale: "pt_PT",
    siteName: "Cronograma Home Service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cronograma Home Service",
  description:
    "Remodelações de alta qualidade em Lisboa e arredores. Orçamento fixo, garantia 5 anos.",
  url: "https://cronohomeservice.pt",
  telephone: "+351 912 345 678",
  email: "info@cronohomeservice.pt",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Exemplo 123",
    addressLocality: "Lisboa",
    postalCode: "1000-001",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.7223,
    longitude: -9.1393,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 38.7223, longitude: -9.1393 },
    geoRadius: "50000",
  },
  priceRange: "€€€",
  openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-13:00",
  image: "https://cronohomeservice.pt/og-image.jpg",
  sameAs: [],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full flex flex-col bg-base">
        {/* Fixed FloatingLines background behind everything */}
        <FloatingLinesBackground />
        {/* Content on top */}
        <div className="relative z-[1] flex min-h-full flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
