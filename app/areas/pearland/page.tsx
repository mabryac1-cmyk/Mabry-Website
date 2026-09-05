import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { services, businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair Pearland TX | Mabry's AC & Heating",
  description: "Fast, reliable AC repair & HVAC service in Pearland TX — Shadow Creek Ranch, Silverlake, Old Townsite & all neighborhoods. Flat-rate pricing, BBB A+. Call 281-331-5248.",
  alternates: {
    canonical: "/areas/pearland",
  },
};

const pearlandFaqs = [
  {
    question: "How fast can you respond to AC repairs in Pearland?",
    answer: "We offer same-day service for most AC repairs in Pearland's 77581, 77584, and 77588 zip codes. Call 281-331-5248 to schedule — we'll get you taken care of quickly.",
  },
  {
    question: "Do you charge extra for evening or weekend service calls in Pearland?",
    answer: "No — our flat-rate pricing means no extra charge for evenings or weekends. The price you're quoted is what you pay, period.",
  },
  {
    question: "What Pearland neighborhoods do you serve?",
    answer: "We serve all of Pearland including Old Townsite, Country Place, Shadow Creek Ranch, Silverlake, Massey Ranch, Southern Trails, and all neighborhoods along the Highway 288 corridor.",
  },
  {
    question: "How long have you been serving Pearland?",
    answer: "Since 1986 — nearly 40 years of serving Pearland homeowners through the city's remarkable growth from a small bedroom community to one of the largest cities in Texas.",
  },
  {
    question: "What HVAC brands do you service in Pearland?",
    answer: "All major brands — Trane, Carrier, Lennox, Rheem, York, American Standard, Goodman, and more. We're not brand-specific, so we can service whatever system is in your home.",
  },
];

const pearlandContent = `
  <h2>Trusted HVAC Service for Pearland Homeowners — All Neighborhoods, All Brands</h2>
  <p>Pearland has grown from a small bedroom community into one of the largest cities in Texas — and Mabry's Air Conditioning &amp; Heating has been serving Pearland homeowners through all of it. Whether you're in an established neighborhood near Old Townsite or a newer subdivision in Shadow Creek Ranch, we know Pearland homes and we know what it takes to keep them comfortable through a Texas Gulf Coast summer.</p>

  <h3>HVAC Services We Provide in Pearland</h3>
  <ul>
    <li><strong>AC repair</strong> — same-day service available, all makes and models</li>
    <li><strong>Heating repair</strong> — furnace and heat pump service</li>
    <li><strong>New AC installation</strong> — proper sizing, top brands, licensed installation</li>
    <li><strong>Annual maintenance tune-ups</strong> — spring and fall service to prevent breakdowns</li>
  </ul>

  <h3>We Know Pearland's Neighborhoods</h3>
  <p>Pearland spans three zip codes — 77581, 77584, and 77588 — and straddles both Brazoria and Harris counties. The city includes a wide range of housing: 1970s-era homes in Old Pearland and Country Place, the large-scale master-planned communities of Shadow Creek Ranch and Silverlake (built largely in the 2000s), and newer developments along the Highway 288 corridor. Each era of construction has its own HVAC challenges.</p>

  <p>Older Pearland homes often have aging ductwork and systems approaching or past replacement age. Homes in Shadow Creek Ranch and Silverlake that were built with builder-grade equipment in the mid-2000s are now 15–20 years old — prime replacement territory. Our team is experienced across all of it.</p>

  <h3>Why Pearland Residents Choose Mabry's</h3>
  <ul>
    <li>Nearly 40 years of experience — including decades serving Pearland</li>
    <li>Honest, flat-rate pricing — no surprises on your invoice</li>
    <li>BBB A+ Accredited Business — multiple BBB Gold Star Award winner</li>
    <li>Residential-only focus — homes are our specialty</li>
    <li>Licensed and insured (TACLB12058E)</li>
    <li>Dedicated service line for Pearland: 281-331-5248</li>
  </ul>
`;

export default function PearlandPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AC Repair & HVAC Service in Pearland, TX",
    "description": "Residential AC repair, heating service, and installation for Pearland, TX homeowners. Flat-rate pricing, BBB A+ rated. Call 281-331-5248.",
    "url": "https://mabryac.com/areas/pearland",
    "about": {
      "@type": "HVACBusiness",
      "@id": "https://mabryac.com/#business"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "HVAC Services & Installation Pricing in Pearland, TX",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Service",
            "name": "AC Repair & HVAC Service in Pearland, TX",
            "provider": { "@id": "https://mabryac.com/#business" },
            "areaServed": { "@type": "City", "name": "Pearland", "addressRegion": "TX" },
            "telephone": "+1-281-331-5248"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Service",
            "name": "RunTru by Trane AC & Heating System Installation in Pearland, TX — Value Tier",
            "description": "Complete new RunTru by Trane AC and heating system installation for Pearland homeowners — including Silverlake, Shadow Creek Ranch, and surrounding neighborhoods. Fully installed by our licensed Texas HVAC technicians (TACLB12058E). Family-owned since 1986.",
            "provider": { "@id": "https://mabryac.com/#business" },
            "areaServed": { "@type": "City", "name": "Pearland", "addressRegion": "TX" },
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
            "name": "Trane Single-Stage AC & Heating System Installation in Pearland, TX — Choice Tier",
            "description": "Complete new Trane single-stage AC and heating system installation for Pearland homeowners — our most popular installation tier, serving Silverlake, Shadow Creek Ranch, and surrounding neighborhoods. Fully installed by our licensed Texas HVAC technicians (TACLB12058E). Family-owned since 1986.",
            "provider": { "@id": "https://mabryac.com/#business" },
            "areaServed": { "@type": "City", "name": "Pearland", "addressRegion": "TX" },
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
            "name": "Trane TruComfort Variable-Speed AC & Heating System Installation in Pearland, TX — Premier Tier",
            "description": "Complete new Trane TruComfort variable-speed AC and heating system installation for Pearland homeowners — Trane's flagship Premier tier with whisper-quiet operation and lowest utility bills, serving Silverlake, Shadow Creek Ranch, and surrounding neighborhoods. Fully installed by our licensed Texas HVAC technicians (TACLB12058E). Family-owned since 1986.",
            "provider": { "@id": "https://mabryac.com/#business" },
            "areaServed": { "@type": "City", "name": "Pearland", "addressRegion": "TX" },
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
        id="area-schema-pearland"
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
            AC Repair &amp; HVAC Service in Pearland, TX — Fast, Reliable, Flat-Rate
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Trusted HVAC service for Pearland families since 1986. Serving Shadow Creek Ranch, Silverlake, Old Townsite &amp; all Pearland neighborhoods.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a
              href="tel:2813315248"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              281-331-5248
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Serving 77581, 77584, 77588</span>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <a
              href="https://www.bbb.org/us/tx/alvin/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805#sealclick"
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
          <div className="elfsight-app-35a13954-516a-4f3e-aead-43fd4158b663" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <GoalCompletionBlock
                answerParagraph="Need AC repair or heating service in Pearland? Call 281-331-5248 for fast service. We serve Pearland and nearby areas with licensed residential HVAC service."
                phoneButtons={[{ label: "Call Pearland", number: "281-331-5248", tel: "2813315248" }]}
                servingText="Serving: Pearland, Alvin, Manvel, Sugar Land, Sienna, Missouri City"
              />
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: pearlandContent }}
              />

              {/* Services Grid */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Services in Pearland</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/pearland`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {service.name} in Pearland
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
                  Whether you&apos;re in Silverlake, Shadow Creek Ranch, or anywhere across Pearland, we&apos;ve
                  kept our pricing simple for nearly four decades. Complete AC &amp; heating system installations
                  start at just <strong className="text-primary">$12,140</strong> — with our most popular
                  Trane Single-Stage tier at <strong className="text-primary">$13,637</strong>. Honest,
                  flat-rate pricing since 1986.
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
                <h4 className="font-bold text-primary mb-2">Ready to Schedule Service in Pearland?</h4>
                <p className="text-muted-foreground mb-4">
                  Call us now or fill out the form. Flat-rate pricing, no hidden charges.
                </p>
                <a
                  href="tel:2813315248"
                  className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call 281-331-5248
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm preselectedCity="Pearland" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={pearlandFaqs}
            title="Frequently Asked Questions — Pearland AC Repair"
            schemaId="faq-schema-pearland"
          />
        </div>
      </section>
    </>
  );
}
