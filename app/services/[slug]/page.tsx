import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { services, getServiceBySlug, businessInfo, locations } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, MapPin } from "lucide-react";

const serviceSchema = (service: { name: string; slug: string; description: string }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://mabryac.com/services/${service.slug}`,
  "name": service.name,
  "serviceType": service.name,
  "description": service.description,
  "url": `https://mabryac.com/services/${service.slug}`,
  "provider": {
    "@type": "HVACBusiness",
    "name": "Mabry's Air Conditioning & Heating, Inc.",
    "url": "https://mabryac.com",
    "telephone": ["281-331-5248", "281-482-8400"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2110 S Gordon St",
      "addressLocality": "Alvin",
      "addressRegion": "TX",
      "postalCode": "77511",
      "addressCountry": "US"
    }
  },
  "areaServed": [
    { "@type": "City", "name": "Alvin", "addressRegion": "TX" },
    { "@type": "City", "name": "Friendswood", "addressRegion": "TX" },
    { "@type": "City", "name": "Pearland", "addressRegion": "TX" },
    { "@type": "City", "name": "Sugar Land", "addressRegion": "TX" },
    { "@type": "City", "name": "Bellaire", "addressRegion": "TX" },
    { "@type": "City", "name": "Clear Lake", "addressRegion": "TX" },
    { "@type": "City", "name": "League City", "addressRegion": "TX" },
    { "@type": "City", "name": "Deer Park", "addressRegion": "TX" },
    { "@type": "City", "name": "Pasadena", "addressRegion": "TX" },
    { "@type": "City", "name": "Manvel", "addressRegion": "TX" },
    { "@type": "City", "name": "Angleton", "addressRegion": "TX" },
    { "@type": "City", "name": "Rosharon", "addressRegion": "TX" },
    { "@type": "City", "name": "Sienna", "addressRegion": "TX" },
    { "@type": "City", "name": "West University Place", "addressRegion": "TX" },
    { "@type": "City", "name": "Houston", "addressRegion": "TX" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `${service.name} Services`,
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
});

const goalCompletionCopy: Record<string, string> = {
  "ac-repair": "Need AC repair in the Greater Houston area? Our licensed HVAC technicians serve Alvin, Friendswood, Pearland, Manvel, Clear Lake, League City, Deer Park, Pasadena, and surrounding communities with fast, honest-priced AC repair.",
  "ac-installation": "Need a new AC system in the Greater Houston area? We serve Alvin, Friendswood, Pearland, Manvel, Clear Lake, League City, Deer Park, Pasadena, and surrounding communities with energy-efficient installations and expert sizing.",
  "heating-repair": "Heater not working in the Greater Houston area? Our licensed technicians serve Alvin, Friendswood, Pearland, Manvel, Clear Lake, League City, Deer Park, Pasadena, and surrounding communities with fast heating repair and same-day availability.",
  "ac-maintenance": "Schedule your AC or heating tune-up anywhere in the Greater Houston area. We serve Alvin, Friendswood, Pearland, Manvel, Clear Lake, League City, Deer Park, Pasadena, and surrounding communities. Annual maintenance prevents costly breakdowns all year.",
};

const dualPhoneButtons = [
  { label: "", number: "281-331-5248", tel: "2813315248" },
  { label: "", number: "281-482-8400", tel: "2814828400" },
];

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  const metaTitle = slug === "ac-repair"
    ? `AC Repair in Alvin, Friendswood & Pearland — Done Right Since 1986 | Mabry's AC & Heating`
    : slug === "ac-maintenance"
    ? `AC & Heating Tune-Up in Alvin, Friendswood & Pearland | Greater Houston | Mabry's AC & Heating`
    : `${service.name} in Alvin, Friendswood & Pearland | Greater Houston | Mabry's AC & Heating`;

  return {
    title: metaTitle,
    description: `${service.description} Serving Alvin, Friendswood, Pearland, Manvel, Clear Lake, League City, Deer Park, Pasadena & the greater Houston area. License ${businessInfo.license}. Call ${businessInfo.phone}.`,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }}
      />
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{service.description}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={`tel:${businessInfo.phone}`}
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {businessInfo.phone}
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>License {businessInfo.license}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {goalCompletionCopy[slug] && (
                <GoalCompletionBlock
                  answerParagraph={goalCompletionCopy[slug]}
                  phoneButtons={dualPhoneButtons}
                />
              )}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
              
              {service.faqs && service.faqs.length > 0 && (
                <FAQSection faqs={service.faqs} title={`${service.name} FAQs`} schemaId={`faq-schema-${service.slug}`} />
              )}

              {slug === "ac-repair" && (
                <div className="mt-8 bg-accent/10 border border-accent/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-accent mb-1">Special Offer</p>
                    <p className="text-xl font-bold text-primary">10% Off Any AC or Heating Repair</p>
                    <p className="text-sm text-muted-foreground mt-1">Applies to repair services only · Not valid on new equipment</p>
                  </div>
                  <Link
                    href="/promotions"
                    className="shrink-0 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Check Out Our Current Repair Discount →
                  </Link>
                </div>
              )}

              {slug === "ac-installation" && (
                <div className="mt-8 bg-accent/10 border border-accent/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-accent mb-1">Financing Available</p>
                    <p className="text-xl font-bold text-primary">Finance a New System for as Low as $38/Week*</p>
                    <p className="text-sm text-muted-foreground mt-1">*With approved credit through participating lenders</p>
                  </div>
                  <Link
                    href="/financing"
                    className="shrink-0 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                  >
                    See Financing Options →
                  </Link>
                </div>
              )}

              {slug === "ac-maintenance" && (
                <div className="mt-8 bg-accent/10 border border-accent/30 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-accent mb-1">Special Offer — Through May 15, 2026</p>
                    <p className="text-xl font-bold text-primary">Pre-Season AC Tune-Up — $89</p>
                    <p className="text-sm text-muted-foreground mt-1">Standard residential systems · Call to schedule</p>
                  </div>
                  <Link
                    href="/promotions"
                    className="shrink-0 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
                  >
                    Check Out Our Current $89 Tune-Up Special →
                  </Link>
                </div>
              )}

              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">{service.name} Service Areas</h3>
                <p className="text-muted-foreground mb-6">
                  We provide {service.name.toLowerCase()} services throughout the greater Houston area:
                </p>
                <div className="flex flex-wrap gap-3">
                  {locations.map((location) => (
                    <Link 
                      key={location.slug}
                      href={`/services/${slug}/${location.slug}`}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border hover:border-accent hover:text-accent transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      {service.name} in {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm preselectedService={service.slug} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
