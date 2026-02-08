import { MetadataRoute } from "next";
import { services, locations } from "@/lib/data";

const BASE_URL = "https://www.mabryac.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/reviews`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const areaPages: MetadataRoute.Sitemap = locations.map((location) => ({
    url: `${BASE_URL}/areas/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const serviceCityPages: MetadataRoute.Sitemap = services.flatMap((service) =>
    locations.map((location) => ({
      url: `${BASE_URL}/services/${service.slug}/${location.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...servicePages, ...areaPages, ...serviceCityPages];
}
