import { businessInfo, services, locations } from "@/lib/data";

interface SchemaOrgProps {
  page?: "home" | "service" | "area" | "about" | "contact" | "reviews";
  serviceName?: string;
  locationName?: string;
}

export function SchemaOrg({ page = "home", serviceName, locationName }: SchemaOrgProps) {
  const areaServed = locations.map((loc) => ({
    "@type": "City",
    "name": `${loc.name}, ${loc.state}`,
    "postalCode": loc.zipCodes,
  }));

  const hasOfferCatalog = {
    "@type": "OfferCatalog",
    "name": "HVAC Services",
    "itemListElement": services.map((service) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": service.name,
        "description": service.description,
      },
    })),
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": businessInfo.name,
    "image": "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.address.street,
      "addressLocality": businessInfo.address.city,
      "addressRegion": businessInfo.address.state,
      "postalCode": businessInfo.address.zip,
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.address.lat,
      "longitude": businessInfo.address.lng,
    },
    "url": "https://mabrysac.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00",
      },
    ],
    "areaServed": areaServed,
    "hasOfferCatalog": hasOfferCatalog,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
    },
    "sameAs": [],
    "description": `${businessInfo.name} has been providing residential HVAC services since ${businessInfo.established}. License ${businessInfo.license}. BBB ${businessInfo.bbbRating} Rating.`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
