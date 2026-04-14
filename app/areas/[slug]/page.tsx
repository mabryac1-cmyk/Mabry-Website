import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { locations, getLocationBySlug, businessInfo, services } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench } from "lucide-react";

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
  bellaire: {
    paragraph: "Need AC repair or heating service in Bellaire? Call 281-331-5248 for fast service. We serve Bellaire and surrounding Houston communities with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Bellaire", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Bellaire, West University Place, Meyerland, Braeswood & surrounding Houston neighborhoods",
  },
  "west-university": {
    paragraph: "Need AC repair or heating service in West University Place? Call 281-331-5248 for fast service. We serve West U and surrounding Houston communities with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call West University", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: West University Place, Bellaire, Rice Village, Braeswood & surrounding Houston neighborhoods",
  },
  "rice-village": {
    paragraph: "Need AC repair or heating service near Rice Village? Call 281-331-5248 for fast service. We serve the Rice Village area and surrounding Houston neighborhoods with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call Rice Village Area", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Rice Village, West University Place, Southampton, Museum District & surrounding Houston neighborhoods",
  },
  houston: {
    paragraph: "Need AC repair or heating service in South or Southwest Houston? Call 281-331-5248 for fast service. We serve Meyerland, Braeswood, Westbury, Braeburn, Clear Lake & surrounding Houston communities with licensed residential HVAC service.",
    phoneButtons: [{ label: "Call South & Southwest Houston", number: "281-331-5248", tel: "2813315248" }],
    servingText: "Serving: Meyerland, Braeswood Place, Westbury, Braeburn, Clear Lake, Willow Meadows & surrounding South Houston communities",
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
