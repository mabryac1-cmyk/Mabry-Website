import { Helmet } from 'react-helmet-async';
import type { BusinessInfo, Service, Location } from '@shared/schema';

interface SchemaOrgProps {
  businessInfo?: BusinessInfo;
  service?: Service;
  location?: Location;
  locations?: Location[]; // For areaServed array
}

export function SchemaOrg({ businessInfo, service, location, locations }: SchemaOrgProps) {
  if (!businessInfo) return null;

  const areaServed = location 
    ? [{ "@type": "City", "name": location.name, "address": { "@type": "PostalAddress", "addressRegion": location.state } }]
    : locations?.map(loc => ({
        "@type": "City", 
        "name": loc.name,
        "address": { "@type": "PostalAddress", "addressRegion": loc.state }
      }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": businessInfo.name,
    "image": "https://images.unsplash.com/photo-1581094794329-cd1096d7a43f?auto=format&fit=crop&q=80",
    "@id": "",
    "url": window.location.origin,
    "telephone": businessInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessInfo.street,
      "addressLocality": businessInfo.city,
      "postalCode": businessInfo.zip,
      "addressCountry": "US",
      "addressRegion": businessInfo.state
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": businessInfo.geoLat || "29.7604",
      "longitude": businessInfo.geoLng || "-95.3698"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": areaServed,
    ...(service && {
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "HVAC Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": service.name,
              "description": service.description
            }
          }
        ]
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
