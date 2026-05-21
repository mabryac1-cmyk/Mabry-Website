import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { services, businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair Alvin TX | Mabry's AC & Heating",
  description: "Mabry's AC & Heating — Alvin's hometown HVAC company since 1986. Shop at 2110 S Gordon St. Same-day AC repair, flat-rate pricing, no extra charge for evenings or weekends. BBB A+. Call 281-331-5248.",
  alternates: {
    canonical: "/areas/alvin",
  },
};

const alvinFaqs = [
  {
    question: "How fast can you respond to AC repairs in Alvin?",
    answer: "We're based right here in Alvin at 2110 S Gordon St, so response times are typically much faster than companies driving in from Houston. We offer same-day service for most AC repairs in the 77511 and 77512 zip codes.",
  },
  {
    question: "Do you charge extra for evening or weekend service calls in Alvin?",
    answer: "No — we offer flat-rate pricing with no extra charge for evenings or weekends. Ever. The price you're quoted is the price you pay, regardless of when we come out.",
  },
  {
    question: "Are you a local Alvin company or a national chain?",
    answer: "We're your neighbors. Mabry's Air Conditioning & Heating has been based at 2110 S Gordon St in Alvin since 1986 — nearly 40 years. We're family-owned and operated, not a franchise or national chain.",
  },
  {
    question: "What cities near Alvin do you serve?",
    answer: "In addition to Alvin, we serve Manvel, Rosharon, Sienna, Angleton, Sugar Land, Missouri City, Pearland, and the surrounding Greater Houston area.",
  },
  {
    question: "What HVAC brands do you service in Alvin?",
    answer: "We service and repair all major brands including Trane, Carrier, Lennox, Rheem, York, American Standard, Goodman, and more. We're brand-agnostic — if it's in your home, we can work on it.",
  },
];

const alvinContent = `
  <h2>Alvin's Hometown HVAC Company — Located Right Here Since 1986</h2>
  <p>If you've ever driven down South Gordon Street in downtown Alvin, you've passed our shop. Mabry's Air Conditioning &amp; Heating has been located at 2110 S Gordon St in Alvin since 1986 — nearly 40 years. We're not a national chain with a local phone number. We're your neighbors, and Alvin is home.</p>

  <p>That matters when your AC goes out in July. We're not driving from Houston. We're already here.</p>

  <h3>HVAC Services We Provide in Alvin</h3>
  <ul>
    <li><strong>AC repair</strong> — same-day service for Alvin homes, all makes and models</li>
    <li><strong>Heating repair</strong> — furnace and heat pump service when those cold fronts hit</li>
    <li><strong>New AC installation</strong> — proper load calculations, top brands, licensed installation</li>
    <li><strong>Annual maintenance tune-ups</strong> — spring AC and fall heating service to prevent breakdowns</li>
  </ul>

  <h3>We Know Alvin Homes</h3>
  <p>The housing stock in Alvin's 77511 and 77512 zip codes includes everything from older downtown homes built in the 1950s and 60s to newer subdivisions developed in the 2000s and beyond. We've worked in them all. Older Alvin homes often have aging ductwork, systems that have been through multiple replacements, and in some cases equipment still using R-22 refrigerant that was phased out in 2020. Newer homes in subdivisions like Kendall Lakes or Country Meadows often have builder-grade equipment that benefits from regular maintenance to hit its expected lifespan.</p>

  <p>Our Gulf Coast climate — high humidity, 9-month cooling seasons, and heat indexes that push past 110°F — is tough on HVAC equipment. We've been diagnosing the specific failure patterns common to Brazoria County homes for four decades.</p>

  <h3>Why Alvin Families Have Trusted Us for Generations</h3>
  <ul>
    <li>Our shop is in your backyard — fast response times, no travel fees</li>
    <li>Flat-rate pricing with no hidden charges — we tell you the price before we start</li>
    <li>Family-owned and operated — you talk to us, not a call center</li>
    <li>BBB A+ Accredited Business — multiple BBB Gold Star Award winner</li>
    <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
    <li>Residential specialists — homes are all we do</li>
  </ul>

  <p>From the historic downtown neighborhoods near Nolan Ryan Ballpark to the newer communities along Highway 6, Mabry's is Alvin's HVAC company. Call us at 281-331-5248.</p>
`;

export default function AlvinPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AC Repair & HVAC Service in Alvin, TX",
    "description": "Residential AC repair, heating service, and installation for Alvin, TX homeowners. Flat-rate pricing, BBB A+ rated. Call 281-331-5248.",
    "url": "https://mabryac.com/areas/alvin",
    "about": {
      "@type": "HVACBusiness",
      "@id": "https://mabryac.com/#business"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "AC Repair & HVAC Service in Alvin, TX",
      "provider": {
        "@type": "HVACBusiness",
        "@id": "https://mabryac.com/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Alvin",
        "addressRegion": "TX"
      },
      "telephone": "+1-281-331-5248"
    }
  };

  return (
    <>
      <Script
        id="area-schema-alvin"
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
            AC Repair &amp; HVAC Service in Alvin, TX — Your Local Experts Since 1986
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Alvin&apos;s hometown HVAC company since 1986, proudly serving the Alvin, Pearland, and Manvel areas from our shop at 2110 S Gordon St — minutes from wherever you are.
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
              <span>Serving 77511, 77512</span>
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
              <Award className="w-3.5 h-3.5 shrink-0" /> Voted Favorite AC Company — Alvin Sun &amp; Advertiser
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
                answerParagraph="Need AC repair or heating service in Alvin? Call 281-331-5248 for fast service. We serve Alvin and nearby areas with licensed residential HVAC service."
                phoneButtons={[{ label: "Call Alvin", number: "281-331-5248", tel: "2813315248" }]}
                servingText="Serving: Alvin, Manvel, Rosharon, Sienna, Angleton"
              />
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: alvinContent }}
              />

              {/* Services Grid */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Services in Alvin</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/alvin`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {service.name} in Alvin
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Ready to Schedule Service in Alvin?</h4>
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
                <LeadForm preselectedCity="Alvin" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={alvinFaqs}
            title="Frequently Asked Questions — Alvin AC Repair"
            schemaId="faq-schema-alvin"
          />
        </div>
      </section>
    </>
  );
}
