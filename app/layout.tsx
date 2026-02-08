import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mabryac.com"),
  title: "Mabry's Air Conditioning & Heating | Alvin & Friendswood TX | HVAC Since 1986",
  description: "Residential AC repair, heating service & installation serving Alvin, Friendswood, Pearland & Clear Lake TX since 1986. BBB A+ rated. Flat-rate pricing. Alvin: 281-331-5248 | Friendswood: 281-482-8400",
  alternates: {
    canonical: "/",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["HVACBusiness", "LocalBusiness"],
  "@id": "https://www.mabryac.com/#business",
  "name": "Mabry's Air Conditioning & Heating, Inc.",
  "url": "https://www.mabryac.com/",
  "telephone": "+1-281-331-5248",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2110 S Gordon St",
    "addressLocality": "Alvin",
    "addressRegion": "TX",
    "postalCode": "77511",
    "addressCountry": "US"
  },
  "foundingDate": "1986",
  "description": "Residential AC & heating services since 1986. Honest flat-rate pricing with no hidden charges.",
  "priceRange": "$$",
  "serviceType": [
    "Air conditioning repair",
    "Heating repair and maintenance",
    "Air conditioning installation"
  ],
  "areaServed": [
    {
      "@type": "City",
      "name": "Alvin",
      "address": { "@type": "PostalAddress", "addressRegion": "TX", "addressCountry": "US" }
    },
    {
      "@type": "City",
      "name": "Friendswood",
      "address": { "@type": "PostalAddress", "addressRegion": "TX", "addressCountry": "US" }
    },
    {
      "@type": "City",
      "name": "Pearland",
      "address": { "@type": "PostalAddress", "addressRegion": "TX", "addressCountry": "US" }
    },
    {
      "@type": "Place",
      "name": "Clear Lake (Houston)",
      "address": { "@type": "PostalAddress", "addressRegion": "TX", "addressCountry": "US" }
    }
  ],
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Texas HVAC License", "value": "TACLB12058E" },
    { "@type": "PropertyValue", "name": "BBB Rating", "value": "A+" }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
