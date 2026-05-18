import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cronohomeservice.pt";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/politica-privacidade`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/termos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/livro-reclamacoes`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
