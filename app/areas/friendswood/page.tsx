import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { services, businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair Friendswood TX | Mabry's AC & Heating",
  description: "Trusted AC repair & HVAC service in Friendswood TX since 1986. Flat-rate pricing, no extra charge for evenings or weekends. BBB A+. Dedicated Friendswood line: 281-482-8400.",
  alternates: {
    canonical: "/areas/friendswood",
  },
};

const friendswoodFaqs = [
  {
    question: "How fast can you respond to AC repairs in Friendswood?",
    answer: "We offer fast response times for Friendswood homes — typically same-day or next-day service for most AC repairs in the 77546 and 77549 zip codes. Call our dedicated Friendswood line at 281-482-8400.",
  },
  {
    question: "Do you charge extra for evening or weekend service calls in Friendswood?",
    answer: "No — flat-rate pricing applies to all calls, all times. No extra charge for evenings or weekends — ever. The price you're quoted is the price you pay.",
  },
  {
    question: "What is your dedicated Friendswood phone number?",
    answer: "Our dedicated Friendswood service line is 281-482-8400. This line is specifically for Friendswood and the Bay Area — you'll get faster routing and someone familiar with your area.",
  },
  {
    question: "How long have you been serving Friendswood?",
    answer: "Since 1986 — nearly 40 years. We've served Friendswood families across generations, and many of our Friendswood customers are now calling us for the same homes their parents used us for.",
  },
  {
    question: "What neighborhoods in Friendswood do you serve?",
    answer: "We serve all of Friendswood including neighborhoods near Friendswood High School, the historic downtown area, and communities along FM 518 and FM 2351 in both the 77546 and 77549 zip codes.",
  },
];

const friendswoodContent = `
  <h2>Friendswood's Trusted HVAC Company — Serving This Community Since 1986</h2>
  <p>Friendswood has been part of Mabry's story since the beginning. We've been serving families in the 77546 and 77549 zip codes for nearly four decades — long enough to have worked on systems for the same families across generations. Friendswood is a community that values trust and quality work, and that's exactly what we've built our reputation on.</p>

  <p>For Friendswood service, call our dedicated line: <strong>281-482-8400</strong>.</p>

  <h3>HVAC Services We Provide in Friendswood</h3>
  <ul>
    <li><strong>AC repair</strong> — all makes and models, fast response</li>
    <li><strong>Heating repair</strong> — furnace and heat pump service</li>
    <li><strong>New AC installation</strong> — Trane, Carrier, Lennox, Rheem and other top brands</li>
    <li><strong>Annual maintenance tune-ups</strong> — prevent breakdowns before they happen</li>
  </ul>

  <h3>We Know Friendswood Homes</h3>
  <p>Friendswood's housing stock is a mix of established neighborhoods — many with homes built in the 1970s and 1980s — alongside newer developments that have expanded the city over recent decades. The older ranch-style homes in established Friendswood neighborhoods often feature ductwork and equipment that's seen one or two replacement cycles, and owners who know the value of a contractor they can trust over the long term. Newer homes near FM 518 and FM 2351 corridors benefit most from proper maintenance to maximize equipment life.</p>

  <p>The Gulf Coast humidity that defines Friendswood's climate means condensate drain maintenance is critical — clogged drains are one of the most common service calls we make in the 77546 area during summer.</p>

  <h3>Why Friendswood Homeowners Choose Mabry's</h3>
  <ul>
    <li>Dedicated Friendswood service line — 281-482-8400</li>
    <li>Nearly 40 years serving this specific community</li>
    <li>Flat-rate pricing — know your cost before work begins</li>
    <li>BBB A+ Accredited Business — multiple BBB Gold Star Award winner</li>
    <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
    <li>Residential specialists — homes are our only business</li>
  </ul>

  <p>From neighborhoods near Friendswood High School and the historic downtown area to communities along FM 518, Mabry's is the HVAC company Friendswood has counted on for nearly 40 years.</p>
`;

export default function FriendswoodPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AC Repair & HVAC Service in Friendswood, TX",
    "description": "Residential AC repair, heating service, and installation for Friendswood, TX homeowners. Flat-rate pricing, BBB A+ rated. Call 281-482-8400.",
    "url": "https://mabryac.com/areas/friendswood",
    "about": {
      "@type": "HVACBusiness",
      "@id": "https://mabryac.com/#business"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "HVAC Services & Installation Pricing in Friendswood, TX",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "AC Repair & HVAC Service in Friendswood, TX",
            "provider": { "@id": "https://mabryac.com/#business" },
            "areaServed": { "@type": "City", "name": "Friendswood", "addressRegion": "TX" },
            "telephone": "+1-281-482-8400"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "RunTru by Trane AC & Heating System Installation in Friendswood, TX — Value Tier",
            "description": "Complete new RunTru by Trane AC and heating system installation for Friendswood homeowners. Fully installed by our licensed Texas HVAC technicians (TACLB12058E). Serving the Bay Area since 1986.",
            "provider": { "@id": "https://mabryac.com/#business" },
            "areaServed": { "@type": "City", "name": "Friendswood", "addressRegion": "TX" },
            "offers": {
              "@type": "Offer",
              "price": "12140.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://mabryac.com/pricing",
              "priceValidUntil": "2026-12-31"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Service",
            "name": "Trane Single-Stage AC & Heating System Installation in Friendswood, TX — Choice Tier",
            "description": "Complete new Trane single-stage AC and heating system installation for Friendswood homeowners — our most popular installation tier. Fully installed by our licensed Texas HVAC technicians (TACLB12058E). Serving the Bay Area since 1986.",
            "provider": { "@id": "https://mabryac.com/#business" },
            "areaServed": { "@type": "City", "name": "Friendswood", "addressRegion": "TX" },
            "offers": {
              "@type": "Offer",
              "price": "13637.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://mabryac.com/pricing",
              "priceValidUntil": "2026-12-31"
            }
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Service",
            "name": "Trane TruComfort Variable-Speed AC & Heating System Installation in Friendswood, TX — Premier Tier",
            "description": "Complete new Trane TruComfort variable-speed AC and heating system installation for Friendswood homeowners — Trane's flagship Premier tier with whisper-quiet operation and lowest utility bills. Fully installed by our licensed Texas HVAC technicians (TACLB12058E). Serving the Bay Area since 1986.",
            "provider": { "@id": "https://mabryac.com/#business" },
            "areaServed": { "@type": "City", "name": "Friendswood", "addressRegion": "TX" },
            "offers": {
              "@type": "Offer",
              "price": "18272.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://mabryac.com/pricing",
              "priceValidUntil": "2026-12-31"
            }
          }
        }
      ]
    }
  };

  return (
    <>
      <Script
        id="area-schema-friendswood"
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
            AC Repair &amp; HVAC Service in Friendswood, TX — Trusted Since 1986
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Serving Friendswood families for nearly 40 years — along with the Greater Clear Lake area. Flat-rate pricing, BBB A+.
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
              <span>Serving 77546, 77549</span>
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
                answerParagraph="Need AC repair or heating service in Friendswood? Call 281-482-8400 for fast service. We serve Friendswood and nearby areas with licensed residential HVAC service."
                phoneButtons={[{ label: "Call Friendswood", number: "281-482-8400", tel: "2814828400" }]}
                servingText="Serving: Friendswood, League City, Clear Lake, Deer Park, Pasadena, Pearland"
              />
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: friendswoodContent }}
              />

              {/* Services Grid */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Services in Friendswood</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/friendswood`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {service.name} in Friendswood
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* New System Installation Pricing */}
              <div className="mt-8 p-8 bg-primary/5 rounded-2xl border-2 border-primary/10">
                <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                  New System Installation Pricing
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Friendswood homeowners have several options when it&apos;s time to replace their AC &amp;
                  heating system. Our most popular tier — the trusted Trane Single-Stage — starts at
                  <strong className="text-primary"> $13,637</strong> for a complete installation. From the
                  Forest of Friendswood to communities throughout the Bay Area, we keep our pricing flat-rate
                  and straightforward. No surprises.
                </p>
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  See Full Pricing Details →
                </Link>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Ready to Schedule Service in Friendswood?</h4>
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
                <LeadForm preselectedCity="Friendswood" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={friendswoodFaqs}
            title="Frequently Asked Questions — Friendswood AC Repair"
            schemaId="faq-schema-friendswood"
          />
        </div>
      </section>
    </>
  );
}
