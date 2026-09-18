import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { PricingBand } from "@/components/PricingBand";
import { locations, getLocationBySlug, businessInfo, services } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Clock, Shield, Award } from "lucide-react";

const areaGoalCompletion: Record<string, {
  paragraph: string;
  phoneButtons: { label: string; number: string; tel: string }[];
  servingText?: string;
  servingNote?: string;
}> = {
  alvin: {
    paragraph: "Need AC repair or heating service in Alvin? Call 281-331-5248 for fast service. We serve Alvin and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Alvin", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Alvin, Manvel, Rosharon, Sienna, Angleton",
  },
  friendswood: {
    paragraph: "Need AC repair or heating service in Friendswood? Call 281-482-8400 for fast service. We serve Friendswood and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Friendswood", number: "281-482-8400", tel: "2814828400" }],
    servingText: "Serving: Friendswood, League City, Clear Lake, Deer Park, Pasadena, Pearland",
  },
  pearland: {
    paragraph: "Need AC repair or heating service in Pearland? Call 281-331-5248 for fast service. We serve Pearland and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Pearland", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Pearland, Alvin, Manvel, Sugar Land, Sienna, Missouri City",
  },
  "clear-lake": {
    paragraph: "Need AC repair or heating service in Clear Lake? Call 281-482-8400 for fast service. We serve Clear Lake and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Clear Lake", number: "281-482-8400", tel: "2814828400" }],
    servingText: "Serving: Friendswood, League City, Clear Lake, Deer Park, Pasadena, Pearland",
  },
  "deer-park": {
    paragraph: "Need AC repair or heating service in Deer Park? Call 281-482-8400 for fast service. We serve Deer Park and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Deer Park", number: "281-482-8400", tel: "2814828400" }],
    servingText: "Serving: Friendswood, League City, Clear Lake, Deer Park, Pasadena, Pearland",
  },
  "league-city": {
    paragraph: "Need AC repair or heating service in League City? Call 281-482-8400 for fast service. We serve League City and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call League City", number: "281-482-8400", tel: "2814828400" }],
    servingText: "Serving: Friendswood, League City, Clear Lake, Deer Park, Pasadena, Pearland",
  },
  pasadena: {
    paragraph: "Need AC repair or heating service in Pasadena? Call 281-482-8400 for fast service. We serve Pasadena and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Pasadena", number: "281-482-8400", tel: "2814828400" }],
    servingText: "Serving: Friendswood, League City, Clear Lake, Deer Park, Pasadena, Pearland",
  },
  sienna: {
    paragraph: "Need AC repair or heating service in Sienna? Call 281-331-5248 for fast service. We serve Sienna and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Sienna", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Alvin, Manvel, Rosharon, Sienna, Angleton",
  },
  angleton: {
    paragraph: "Need AC repair or heating service in Angleton? Call 281-331-5248 for fast service. We serve Angleton and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Angleton", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Alvin, Manvel, Rosharon, Sienna, Angleton",
  },
  manvel: {
    paragraph: "Need AC repair or heating service in Manvel? Call 281-331-5248 for fast service. We serve Manvel and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Manvel", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Alvin, Manvel, Rosharon, Sienna, Angleton",
  },
  rosharon: {
    paragraph: "Need AC repair or heating service in Rosharon? Call 281-331-5248 for fast service. We serve Rosharon and nearby areas with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Rosharon", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Alvin, Manvel, Rosharon, Sienna, Angleton",
  },
  "sugar-land": {
    paragraph: "Need AC repair or heating service in Sugar Land? Call 281-331-5248 for fast service. We serve Sugar Land and Fort Bend County with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Sugar Land", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Sugar Land, Missouri City, Sienna, Pearland & surrounding Fort Bend County",
  },
  houston: {
    paragraph: "Need AC repair or heating service in the Clear Lake area of Houston? Call 281-331-5248 for fast service. We serve Clear Lake City, the NASA area, and Southeast Houston's 77058, 77059 & 77062 neighborhoods with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Clear Lake Area Houston", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Clear Lake City, Space Center, NASA area & Southeast Houston (77058, 77059, 77062)",
  },
};

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  
  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `AC Repair ${location.name} TX | Mabry's AC & Heating`,
    description: `${location.description} Serving ${location.zipCodes.join(" & ")} with flat-rate pricing. License ${businessInfo.license}. BBB A+ Rated. Call ${location.phone}.`,
    alternates: {
      canonical: `/areas/${slug}`,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Reviews widget by GBP zone: Bay Area (Friendswood) cities vs Alvin-zone cities
  const friendswoodZoneSlugs = new Set(["deer-park", "pasadena"]);
  const reviewsWidgetId = friendswoodZoneSlugs.has(slug)
    ? "b3584e39-3dd0-448f-a2f3-f6bcd278e919"
    : "35a13954-516a-4f3e-aead-43fd4158b663";
  const bbbSealHref = friendswoodZoneSlugs.has(slug)
    ? "https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805/addressId/92394#sealclick"
    : "https://www.bbb.org/us/tx/alvin/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805#sealclick";

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `HVAC Services in ${location.name}, ${location.state}`,
    "description": `Residential AC repair, heating service, and installation for ${location.name}, ${location.state} homeowners. Flat-rate pricing, BBB A+ rated. Call ${location.phone}.`,
    "url": `https://mabryac.com/areas/${slug}`,
    "about": {
      "@type": "HVACBusiness",
      "@id": "https://mabryac.com/#business"
    },
    "mainEntity": {
      "@type": "Service",
      "name": `HVAC Services in ${location.name}, ${location.state}`,
      "provider": {
        "@type": "HVACBusiness",
        "@id": "https://mabryac.com/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": location.name,
        "addressRegion": location.state
      },
      "telephone": `+1-${location.phone}`
    }
  };

  return (
    <>
      <Script
        id={`area-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{location.headline}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{location.description}</p>
          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <a
              href={`tel:${location.phone}`}
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {location.phone}
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Serving {location.zipCodes.join(", ")}</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={bbbSealHref}
              target="_blank"
              rel="nofollow"
              aria-label="Mabry's Air Conditioning & Heating BBB Business Review"
            >
              <img
                src="https://seal-houston.bbb.org/seals/blue-seal-200-42-bbb-50000805.png"
                alt="BBB Accredited Business — A+ Rated"
                width={200}
                height={42}
                style={{ border: 0 }}
                className="rounded"
              />
            </a>
            <span className="inline-flex items-center gap-1.5 bg-accent/25 border border-accent/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5 shrink-0" /> Voted Favorite AC Company
            </span>
          </div>
        </div>
      </section>

      {/* Visible pricing band — transparent pricing up top */}
      <PricingBand className="bg-white pt-10 pb-2" />

      {/* Trust Bar */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Same-Day Service", desc: "Fast response when you need it most" },
              { icon: Shield, title: "Licensed & Insured", desc: `License ${businessInfo.license}` },
              { icon: Award, title: "Flat-Rate Pricing", desc: "No hidden charges, ever" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-primary">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className={`elfsight-app-${reviewsWidgetId}`} data-elfsight-app-lazy></div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {areaGoalCompletion[slug] && (
                <GoalCompletionBlock
                  answerParagraph={areaGoalCompletion[slug].paragraph}
                  phoneButtons={areaGoalCompletion[slug].phoneButtons}
                  servingText={areaGoalCompletion[slug].servingText}
                  servingNote={areaGoalCompletion[slug].servingNote}
                />
              )}
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: location.content }}
              />
              
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Services in {location.name}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Link 
                      key={service.slug}
                      href={`/services/${service.slug}/${slug}`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {service.name} in {location.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Ready to Schedule Service in {location.name}?</h4>
                <p className="text-muted-foreground mb-4">
                  Call us now or fill out the form to request service. We offer flat-rate pricing with no hidden charges.
                </p>
                <a 
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {location.phone}
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm preselectedCity={location.name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
