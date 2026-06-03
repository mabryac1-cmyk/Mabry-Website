import { MetadataRoute } from "next";

const BASE_URL = "https://mabryac.com";

// All service slugs
const services = ["ac-repair", "heating-repair", "ac-installation", "ac-maintenance"];

// All location slugs (must match lib/data.ts)
const locations = [
  "alvin",
  "friendswood",
  "pearland",
  "clear-lake",
  "deer-park",
  "league-city",
  "pasadena",
  "sienna",
  "angleton",
  "manvel",
  "rosharon",
  "sugar-land",
  "bellaire",
  "west-university",
  "rice-village",
  "houston",
];

// Core 3 cities get higher priority (GBP-linked, dedicated pages)
const coreCities = ["alvin", "friendswood", "pearland"];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: today, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/reviews`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/promotions`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/financing`, lastModified: today, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pricing`, lastModified: today, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/privacy`, lastModified: today, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Service pages (/services/ac-repair, etc.)
  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Area pages (/areas/alvin, etc.)
  const areaPages: MetadataRoute.Sitemap = locations.map((slug) => ({
    url: `${BASE_URL}/areas/${slug}`,
    lastModified: today,
    changeFrequency: "monthly" as const,
    priority: coreCities.includes(slug) ? 0.9 : 0.7,
  }));

  // Service + city combo pages (/services/ac-repair/alvin, etc.)
  const comboPages: MetadataRoute.Sitemap = services.flatMap((service) =>
    locations.map((city) => ({
      url: `${BASE_URL}/services/${service}/${city}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: coreCities.includes(city) ? 0.8 : 0.6,
    }))
  );

  return [...staticPages, ...servicePages, ...areaPages, ...comboPages];
}
