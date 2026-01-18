import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mabryac.com"),
  title: "Mabry's Air Conditioning & Heating, Inc. | Alvin TX HVAC",
  description: "Residential AC & Heating Experts Since 1986. Located in Alvin, TX serving Friendswood, Pearland & Clear Lake. License TACLB12058E. BBB A+ Rating. Honest, flat-rate pricing.",
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
    "streetAddress": "2110 S Gordon",
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
