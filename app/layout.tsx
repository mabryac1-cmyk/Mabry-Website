import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://mabryac.com"),
  title: "Mabry's AC & Heating | Greater Houston Area HVAC Since 1986",
  description: "Residential AC repair, heating service & installation serving the Greater Houston area since 1986. Alvin, Friendswood, Pearland, Manvel, Deer Park, Pasadena & more. BBB A+ rated. Flat-rate pricing. 281-331-5248",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Mabry's AC & Heating",
    locale: "en_US",
    url: "https://mabryac.com",
    title: "Mabry's AC & Heating | Greater Houston Area HVAC Since 1986",
    description: "Family-owned HVAC company serving the Greater Houston area since 1986. AC repair, heating repair & installation. BBB A+ rated. Flat-rate pricing. Call 281-331-5248.",
    images: [
      {
        url: "https://mabryac.com/logo.png",
        width: 800,
        height: 600,
        alt: "Mabry's Air Conditioning & Heating",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mabry's AC & Heating | Greater Houston Area HVAC Since 1986",
    description: "Family-owned HVAC company serving the Greater Houston area since 1986. AC repair, heating repair & installation. BBB A+ rated. Flat-rate pricing.",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "@id": "https://mabryac.com/#business",
  "name": "Mabry's Air Conditioning & Heating, Inc.",
  "url": "https://mabryac.com",
  "logo": "https://mabryac.com/logo.png",
  "image": "https://mabryac.com/logo.png",
  "description": "Family-owned residential HVAC company serving the greater Houston area since 1986. AC repair, heating repair, and installation with flat-rate pricing and no hidden charges. BBB A+ rated. License TACLB12058E.",
  "foundingDate": "1986",
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Check",
  "telephone": "+1-281-331-5248",
  "email": "office@mabryac.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2110 S Gordon St",
    "addressLocality": "Alvin",
    "addressRegion": "TX",
    "postalCode": "77511",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.4046,
    "longitude": -95.2450
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+1-281-331-5248",
      "contactType": "customer service",
      "areaServed": [
        {"@type": "City", "name": "Alvin", "addressRegion": "TX"},
        {"@type": "City", "name": "Manvel", "addressRegion": "TX"},
        {"@type": "City", "name": "Angleton", "addressRegion": "TX"},
        {"@type": "City", "name": "Rosharon", "addressRegion": "TX"},
        {"@type": "City", "name": "Sienna", "addressRegion": "TX"},
        {"@type": "City", "name": "Sugar Land", "addressRegion": "TX"},
        {"@type": "City", "name": "Bellaire", "addressRegion": "TX"},
        {"@type": "City", "name": "West University Place", "addressRegion": "TX"},
        {"@type": "City", "name": "Rice Village", "addressRegion": "TX"},
        {"@type": "City", "name": "Houston", "addressRegion": "TX"}
      ],
      "availableLanguage": "English"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+1-281-482-8400",
      "contactType": "customer service",
      "areaServed": [
        {"@type": "City", "name": "Friendswood", "addressRegion": "TX"},
        {"@type": "City", "name": "Pearland", "addressRegion": "TX"},
        {"@type": "City", "name": "Clear Lake", "addressRegion": "TX"},
        {"@type": "City", "name": "League City", "addressRegion": "TX"},
        {"@type": "City", "name": "Deer Park", "addressRegion": "TX"},
        {"@type": "City", "name": "Pasadena", "addressRegion": "TX"}
      ],
      "availableLanguage": "English"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "07:00",
      "closes": "13:00"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Alvin", "addressRegion": "TX"},
    {"@type": "City", "name": "Friendswood", "addressRegion": "TX"},
    {"@type": "City", "name": "Pearland", "addressRegion": "TX"},
    {"@type": "City", "name": "Clear Lake", "addressRegion": "TX"},
    {"@type": "City", "name": "League City", "addressRegion": "TX"},
    {"@type": "City", "name": "Deer Park", "addressRegion": "TX"},
    {"@type": "City", "name": "Pasadena", "addressRegion": "TX"},
    {"@type": "City", "name": "Manvel", "addressRegion": "TX"},
    {"@type": "City", "name": "Angleton", "addressRegion": "TX"},
    {"@type": "City", "name": "Rosharon", "addressRegion": "TX"},
    {"@type": "City", "name": "Sienna", "addressRegion": "TX"},
    {"@type": "City", "name": "Webster", "addressRegion": "TX"},
    {"@type": "City", "name": "Seabrook", "addressRegion": "TX"},
    {"@type": "City", "name": "Kemah", "addressRegion": "TX"},
    {"@type": "City", "name": "Dickinson", "addressRegion": "TX"},
    {"@type": "City", "name": "La Marque", "addressRegion": "TX"},
    {"@type": "City", "name": "Sugar Land", "addressRegion": "TX"},
    {"@type": "City", "name": "Bellaire", "addressRegion": "TX"},
    {"@type": "City", "name": "West University Place", "addressRegion": "TX"},
    {"@type": "City", "name": "Rice Village", "addressRegion": "TX"},
    {"@type": "City", "name": "Houston", "addressRegion": "TX"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "HVAC Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AC Repair",
          "description": "Fast, reliable residential AC repair for all makes and models."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Heating Repair & Maintenance",
          "description": "Professional furnace and heating system repair and seasonal maintenance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AC Installation",
          "description": "Professional AC installation and replacement with energy-efficient systems."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AC & Heating Maintenance",
          "description": "Annual AC tune-up and heating maintenance to prevent breakdowns and extend equipment life."
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "141",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61553264866519",
    "https://www.instagram.com/mabryac/",
    "https://www.bbb.org/us/tx/alvin/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805",
    "https://www.yelp.com/biz/mabrys-air-conditioning-and-heating-friendswood-3",
    "https://www.yelp.com/biz/mabrys-air-conditioning-and-heating-alvin-2",
    "https://nextdoor.com/pages/mabrys-air-conditioning-heating-alvin-tx/"
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
