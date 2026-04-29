import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { services, businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair League City TX | Mabry's AC & Heating",
  description: "Same-day AC repair in League City, TX from Mabry's AC & Heating — serving the Bay Area since 1986. Flat-rate pricing, no extra charge for evenings or weekends. BBB A+. Call 281-482-8400.",
  alternates: {
    canonical: "/areas/league-city",
  },
};

const leagueCityFaqs = [
  {
    question: "How fast can you get to League City for AC repair?",
    answer: "Our Friendswood operation is right next door — League City is essentially across the street, and we serve South Shore Harbour, Tuscan Lakes, Magnolia Creek, Marina Bay, and the rest of League City with same-day AC repair in the 77573 and 77574 zip codes.",
  },
  {
    question: "Do you service homes in South Shore Harbour and Marina Bay?",
    answer: "Yes — waterfront and near-water homes in South Shore Harbour, Marina Bay, and the marina-area neighborhoods see accelerated salt-air corrosion on outdoor condenser units and electrical components. We routinely inspect for coastal-zone wear and can recommend protective measures specific to waterfront homes.",
  },
  {
    question: "What about newer master-planned communities like Tuscan Lakes and Magnolia Creek?",
    answer: "We work in those communities regularly. Newer master-planned subdivisions like Tuscan Lakes, Magnolia Creek, Mar Bella, and the Westover Park area typically have builder-grade HVAC equipment that benefits from annual maintenance to hit its full lifespan. Many of these systems are now 10–20 years old and reaching the age where preventive service really pays off.",
  },
  {
    question: "Are you a local Bay Area HVAC company or a national chain?",
    answer: "Family-owned, Bay Area–based since 1986. Mabry's Air Conditioning & Heating has been serving League City and the surrounding Friendswood/Clear Lake area for nearly 40 years. Not a franchise, not a national chain — you talk to us, not a call center.",
  },
  {
    question: "Do you charge extra for evening or weekend service in League City?",
    answer: "No — flat-rate pricing with no extra charge for evenings or weekends. Ever. The price you're quoted up front is the price you pay, regardless of what time we come out.",
  },
  {
    question: "What HVAC brands do you service in League City?",
    answer: "We service and repair all major brands: Trane, Carrier, Lennox, Rheem, York, American Standard, Goodman, Bryant, and others. We're brand-agnostic — if it's installed in your League City home, we can work on it.",
  },
];

const leagueCityContent = `
  <h2>HVAC Service in League City, TX — The Bay Area's Family-Owned AC Company Since 1986</h2>
  <p>League City is one of the fastest-growing cities in Galveston County, sitting right on the edge of Clear Lake and the NASA-Johnson Space Center area. We've been servicing AC units in League City homes for nearly 40 years out of our Friendswood operation — close enough that response times feel like we're right next door, because we essentially are.</p>

  <p>From the older established neighborhoods near Old League City and Heritage Park to the master-planned communities that have built up over the last two decades, we know the housing here. And we know what the Bay Area climate does to HVAC equipment.</p>

  <h3>HVAC Services We Provide in League City</h3>
  <ul>
    <li><strong>AC repair</strong> — same-day service for League City homes, all makes and models</li>
    <li><strong>Heating repair</strong> — furnace and heat pump diagnostics for those Bay Area cold snaps</li>
    <li><strong>New AC installation</strong> — proper Manual J load calculations, top brands, licensed installation</li>
    <li><strong>Annual maintenance tune-ups</strong> — spring AC and fall heating service to prevent breakdowns</li>
  </ul>

  <h3>We Know League City Homes</h3>
  <p>League City's housing is incredibly varied. Around the Old League City historic district near Main Street you've got homes dating back decades — well-built but often with aging ductwork, undersized return air, and in some cases AC equipment still using R-22 refrigerant that was phased out in 2020. Out toward I-45 and FM 518 you've got the master-planned communities — South Shore Harbour, Tuscan Lakes, Magnolia Creek, Marina Bay, Mar Bella, Westover Park — many of which were built between the 1990s and 2010s. The HVAC systems in those neighborhoods are now reaching the 10-to-20-year mark where regular maintenance becomes critical and replacements start to make economic sense.</p>

  <p>Then there's the climate. League City sits on the western shore of Clear Lake and Galveston Bay, which means high humidity year-round, hurricane and tropical storm exposure, and salt-laden air that accelerates corrosion on outdoor condenser coils and electrical contactors — especially in waterfront communities like South Shore Harbour and Marina Bay. We've been diagnosing the specific failure patterns of Bay Area homes for four decades, and we know what salt air does to a condenser.</p>

  <h3>Why League City Homeowners Choose Mabry's</h3>
  <ul>
    <li>Bay Area–based — we're not driving in from Houston, we're already here</li>
    <li>Flat-rate pricing with no hidden charges — we tell you the price before we start</li>
    <li>No extra charge for evenings or weekends — ever</li>
    <li>Family-owned and operated since 1986 — talk to us, not a national call center</li>
    <li>BBB A+ Accredited Business, multiple BBB Gold Star Award winner</li>
    <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
    <li>Residential specialists — homes are all we do, no commercial detours</li>
  </ul>

  <p>From the waterfront homes of South Shore Harbour to the established neighborhoods around Tuscan Lakes and the historic streets of Old League City, Mabry's is the Bay Area HVAC company that's been here, will be here, and treats your home like it's our own. Call us at 281-482-8400.</p>
`;

export default function LeagueCityPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AC Repair & HVAC Service in League City, TX",
    "description": "Residential AC repair, heating service, and installation for League City, TX homeowners. Flat-rate pricing, BBB A+ rated. Call 281-482-8400.",
    "url": "https://mabryac.com/areas/league-city",
    "about": {
      "@type": "HVACBusiness",
      "@id": "https://mabryac.com/#business"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "AC Repair & HVAC Service in League City, TX",
      "provider": {
        "@type": "HVACBusiness",
        "@id": "https://mabryac.com/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "League City",
        "addressRegion": "TX"
      },
      "telephone": "+1-281-482-8400"
    }
  };

  return (
    <>
      <Script
        id="area-schema-league-city"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            AC Repair &amp; HVAC Service in League City, TX — Bay Area's Trusted Choice Since 1986
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Family-owned and Bay Area–based. Same-day AC repair for South Shore Harbour, Tuscan Lakes, Magnolia Creek, and all of League City — no extra charge for evenings or weekends.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a
              href="tel:2814828400"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              281-482-8400
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Serving 77573, 77574</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <a
              href="https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805/addressId/92394#sealclick"
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

          {/* Urgency */}
          <p className="text-white/80 text-sm flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent shrink-0" />
            Open late daily and Saturday for emergency and urgent calls. No extra charge for evenings or weekends — ever.
          </p>
        </div>
      </section>

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
          <div className="elfsight-app-b3584e39-3dd0-448f-a2f3-f6bcd278e919" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <GoalCompletionBlock
                answerParagraph="Need AC repair or heating service in League City? Call 281-482-8400 for fast service. We serve League City and the surrounding Bay Area with licensed residential HVAC service."
                phoneButtons={[{ label: "Call League City", number: "281-482-8400", tel: "2814828400" }]}
                servingText="Serving: League City, Friendswood, Clear Lake, Webster, Pasadena, Deer Park"
              />
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: leagueCityContent }}
              />

              {/* Services Grid */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Services in League City</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/league-city`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {service.name} in League City
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Ready to Schedule Service in League City?</h4>
                <p className="text-muted-foreground mb-4">
                  Call us now or fill out the form. Flat-rate pricing, no hidden charges.
                </p>
                <a
                  href="tel:2814828400"
                  className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call 281-482-8400
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm preselectedCity="League City" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={leagueCityFaqs}
            title="Frequently Asked Questions — League City AC Repair"
            schemaId="faq-schema-league-city"
          />
        </div>
      </section>
    </>
  );
}
