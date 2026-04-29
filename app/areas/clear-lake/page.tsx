import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { services, businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair Clear Lake TX | Mabry's AC & Heating",
  description: "Same-day AC repair in Clear Lake, TX from Mabry's AC & Heating — Bay Area's family-owned HVAC company since 1986. Serving NASA-area homes, Bay Oaks, Nassau Bay, and beyond. BBB A+. Call 281-482-8400.",
  alternates: {
    canonical: "/areas/clear-lake",
  },
};

const clearLakeFaqs = [
  {
    question: "How fast can you get to Clear Lake for AC repair?",
    answer: "Our Friendswood operation is right next door — Clear Lake is essentially across NASA Parkway, and we offer same-day AC repair throughout the Clear Lake area, including the 77058, 77059, and 77062 zip codes. No travel-fee surprises and no extra charge for evening or weekend calls.",
  },
  {
    question: "Do you service older NASA-era homes in Clear Lake?",
    answer: "Absolutely — and we know what to look for. A huge portion of Clear Lake's housing stock was built in the 1960s and 1970s during the buildup around NASA-Johnson Space Center. Homes from this era often have original ductwork that's now 50-plus years old, undersized return air for modern equipment, single-stage systems where two-stage or variable-speed would be a major efficiency upgrade, and in some cases AC equipment still using R-22 refrigerant that was phased out in 2020.",
  },
  {
    question: "Does Bay Area salt air affect outdoor AC units in Clear Lake?",
    answer: "Yes, especially in waterfront communities like Nassau Bay, Taylor Lake Village, El Lago, Seabrook, and homes directly on Clear Lake or Galveston Bay. Salt-laden air accelerates corrosion on outdoor condenser coils, contactors, and electrical components. We routinely inspect for coastal-zone wear and can recommend protective measures or coastal-rated equipment for waterfront installations.",
  },
  {
    question: "Are you a local Bay Area HVAC company or a national chain?",
    answer: "Family-owned, Bay Area–based since 1986. Mabry's Air Conditioning & Heating has been serving Clear Lake, Friendswood, League City, and the surrounding Bay Area communities for nearly 40 years. Not a franchise, not a national chain — when you call, you talk to us, not a national call center.",
  },
  {
    question: "Do you charge extra for evening or weekend service in Clear Lake?",
    answer: "No — flat-rate pricing with no extra charge for evenings or weekends. Ever. The price you're quoted up front is the price you pay, regardless of time of day or day of the week.",
  },
  {
    question: "What other Bay Area communities near Clear Lake do you serve?",
    answer: "In addition to Clear Lake itself, we regularly service the surrounding Bay Area communities: Webster, Nassau Bay, Seabrook, Taylor Lake Village, El Lago, Kemah, League City, and Friendswood. If you're in the Clear Lake / NASA area or anywhere along Clear Creek and Galveston Bay, we cover it.",
  },
];

const clearLakeContent = `
  <h2>HVAC Service in Clear Lake, TX — The Bay Area's Family-Owned AC Company Since 1986</h2>
  <p>Clear Lake is one of the most distinctive communities in the Houston metro — it grew up around NASA-Johnson Space Center in the 1960s and developed into the cultural and residential heart of the Bay Area. Today it's home to engineers, aerospace professionals, families, and waterfront homeowners across the 77058, 77059, and 77062 zip codes. We've been servicing AC units in Clear Lake homes for nearly 40 years out of our Friendswood operation, just minutes away across NASA Parkway.</p>

  <p>Family-owned since 1986. Licensed Texas HVAC contractor (TACLB12058E). BBB A+ accredited. We know this community.</p>

  <h3>HVAC Services We Provide in Clear Lake</h3>
  <ul>
    <li><strong>AC repair</strong> — same-day service for Clear Lake homes, all makes and models</li>
    <li><strong>Heating repair</strong> — furnace and heat pump diagnostics for those Bay Area cold snaps</li>
    <li><strong>New AC installation</strong> — proper Manual J load calculations, top brands, licensed installation</li>
    <li><strong>Annual maintenance tune-ups</strong> — spring AC and fall heating service to prevent breakdowns</li>
  </ul>

  <h3>We Know Clear Lake Homes</h3>
  <p>Clear Lake's housing tells the story of the Space Race. A huge portion of the area was built up between the 1960s and 1970s as NASA expanded — neighborhoods like Bay Oaks, Clear Lake Forest, Brook Forest, University Park, and the Nassau Bay community were designed and constructed during that boom. These homes are well-built, but the HVAC equipment and ductwork in many of them dates back to the original construction or hasn't been comprehensively updated. That means original cloth-wrapped ducting, undersized return air for modern high-efficiency systems, single-stage equipment where modern two-stage or variable-speed systems would deliver dramatic efficiency gains, and in some cases AC systems still using R-22 refrigerant that was phased out in 2020 and is now prohibitively expensive to recharge.</p>

  <p>The waterfront communities are a different challenge. Homes in Nassau Bay, Taylor Lake Village, El Lago, Seabrook, and along the shorelines of Clear Lake and Galveston Bay see accelerated corrosion on outdoor condenser units. Salt-laden Gulf air eats through coil fins, copper line sets, and electrical contactors faster than it does inland. We inspect for coastal wear during every maintenance visit and can recommend coastal-rated equipment when it's time to replace.</p>

  <p>Then there's the climate. Clear Lake sits right on Galveston Bay, which means high humidity year-round, hurricane and tropical storm exposure (Hurricane Ike's 2008 storm surge devastated parts of this area), and the kind of summer heat where AC systems run nearly nonstop from May through October. Equipment in Clear Lake homes works harder than equipment in inland communities — which is why annual maintenance pays for itself many times over.</p>

  <h3>Why Clear Lake Homeowners Choose Mabry's</h3>
  <ul>
    <li>Bay Area–based — our shop is in Friendswood, minutes from NASA Parkway</li>
    <li>Flat-rate pricing with no hidden charges — we tell you the price before we start</li>
    <li>No extra charge for evenings or weekends — ever</li>
    <li>Family-owned and operated since 1986 — talk to us, not a national call center</li>
    <li>BBB A+ Accredited Business, multiple BBB Gold Star Award winner</li>
    <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
    <li>Residential specialists — homes are all we do, no commercial detours</li>
    <li>Experience with both NASA-era homes and modern construction across the Bay Area</li>
  </ul>

  <p>From the original NASA-era neighborhoods around Bay Oaks and Clear Lake Forest to the waterfront homes of Nassau Bay and Taylor Lake Village, and out to Webster, Seabrook, El Lago, and Kemah, Mabry's is the Bay Area HVAC company that's been here, will be here, and treats your home like it's our own. Call us at 281-482-8400.</p>
`;

export default function ClearLakePage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AC Repair & HVAC Service in Clear Lake, TX",
    "description": "Residential AC repair, heating service, and installation for Clear Lake, TX homeowners. Bay Area's trusted family-owned HVAC company since 1986. Flat-rate pricing, BBB A+ rated. Call 281-482-8400.",
    "url": "https://mabryac.com/areas/clear-lake",
    "about": {
      "@type": "HVACBusiness",
      "@id": "https://mabryac.com/#business"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "AC Repair & HVAC Service in Clear Lake, TX",
      "provider": {
        "@type": "HVACBusiness",
        "@id": "https://mabryac.com/#business"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Clear Lake, Houston, TX"
      },
      "telephone": "+1-281-482-8400"
    }
  };

  return (
    <>
      <Script
        id="area-schema-clear-lake"
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
            AC Repair &amp; HVAC Service in Clear Lake, TX — Bay Area's Trusted Choice Since 1986
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Family-owned and Bay Area–based. Same-day AC repair for Bay Oaks, Nassau Bay, Clear Lake Forest, and the entire NASA-area community — no extra charge for evenings or weekends.
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
              <span>Serving 77058, 77059, 77062</span>
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
                answerParagraph="Need AC repair or heating service in Clear Lake? Call 281-482-8400 for fast service. We serve Clear Lake and the surrounding Bay Area with licensed residential HVAC service."
                phoneButtons={[{ label: "Call Clear Lake", number: "281-482-8400", tel: "2814828400" }]}
                servingText="Serving: Clear Lake, Webster, Nassau Bay, Seabrook, Taylor Lake Village, El Lago, Kemah, Friendswood, League City"
              />
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: clearLakeContent }}
              />

              {/* Services Grid */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Services in Clear Lake</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/clear-lake`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {service.name} in Clear Lake
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Ready to Schedule Service in Clear Lake?</h4>
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
                <LeadForm preselectedCity="Clear Lake" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={clearLakeFaqs}
            title="Frequently Asked Questions — Clear Lake AC Repair"
            schemaId="faq-schema-clear-lake"
          />
        </div>
      </section>
    </>
  );
}
