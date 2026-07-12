import type { MetadataRoute } from "next";

// Single canonical sitemap for the whole site. Add every new page/post here so
// the sitemap always reflects the complete site (SEO). The base URL matches the
// metadataBase in app/layout.tsx.
const BASE_URL = "https://timilehin-shobande.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/writing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/writing/building-a-trustworthy-ai-tutor`,
      lastModified: new Date("2026-07-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/writing/the-website-i-rebuilt-ended-up-rebuilding-me`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies/bossfx`,
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
