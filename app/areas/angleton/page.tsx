import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { services, businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair Angleton TX | Mabry's AC & Heating",
  description: "Same-day AC repair in Angleton, TX from Mabry's AC & Heating — serving Brazoria County since 1986. Flat-rate pricing, no extra charge for evenings or weekends. BBB A+. Call 281-331-5248.",
  alternates: {
    canonical: "/areas/angleton",
  },
};

const angletonFaqs = [
  {
    question: "How fast can you get to Angleton for AC repair?",
    answer: "Our shop is in Alvin at 2110 S Gordon St — a straight shot down Highway 35 to Angleton, typically a 30-minute drive. We offer same-day service for most AC repairs in Angleton's 77515 and 77516 zip codes and don't charge a separate travel fee to come down.",
  },
  {
    question: "Do you service older homes in downtown Angleton?",
    answer: "Yes. A lot of Angleton's older housing stock near the downtown courthouse area was built in the 1940s through 1970s, and we work in homes like these every week. Older homes often have legacy ductwork, undersized return air, or equipment using phased-out R-22 refrigerant — all things we diagnose and fix regularly.",
  },
  {
    question: "Does the Gulf Coast salt air affect outdoor AC units in Angleton?",
    answer: "It can. Angleton sits about 20 miles inland from Freeport and Surfside, and homes closer to the coast see accelerated corrosion on outdoor condenser coils and electrical components. We routinely inspect for salt-related wear during maintenance visits and can recommend protective measures for coastal-zone homes.",
  },
  {
    question: "Are you a local Brazoria County HVAC company or a chain?",
    answer: "Family-owned and based right here in Brazoria County. Mabry's Air Conditioning & Heating has been operating from our Alvin shop since 1986 — nearly 40 years serving Angleton and surrounding communities. Not a franchise, not a national chain.",
  },
  {
    question: "Do you charge extra for evening or weekend service in Angleton?",
    answer: "No — flat-rate pricing with no extra charge for evenings or weekends. Ever. The price you're quoted up front is the price you pay, regardless of time of day or day of the week.",
  },
  {
    question: "What HVAC brands do you service in Angleton?",
    answer: "We service and repair all major brands: Trane, Carrier, Lennox, Rheem, York, American Standard, Goodman, Bryant, and others. We're brand-agnostic — if it's installed in your Angleton home, we can work on it.",
  },
];

const angletonContent = `
  <h2>HVAC Service in Angleton, TX — Brazoria County's Trusted Local AC Company</h2>
  <p>Angleton is the seat of Brazoria County, and it's right in our backyard. Our shop sits about 30 minutes north up Highway 35 in Alvin, and we've been making the drive down for residential AC repair, heating service, and installations for nearly 40 years. When the AC goes out in July down here, you don't want to wait on a Houston company — you want a Brazoria County HVAC company that already knows the area.</p>

  <p>That's where Mabry's comes in. Family-owned since 1986, fully licensed (TACLB12058E), and BBB A+ accredited.</p>

  <h3>HVAC Services We Provide in Angleton</h3>
  <ul>
    <li><strong>AC repair</strong> — same-day service for Angleton homes, all makes and models</li>
    <li><strong>Heating repair</strong> — furnace and heat pump diagnostics when those Gulf Coast cold fronts roll in</li>
    <li><strong>New AC installation</strong> — proper Manual J load calculations, top brands, licensed installation</li>
    <li><strong>Annual maintenance tune-ups</strong> — spring AC and fall heating service to catch problems before they break down</li>
  </ul>

  <h3>We Know Angleton Homes</h3>
  <p>Angleton's housing mix is one of the more varied in Brazoria County. Around the historic downtown courthouse area you've got older homes from the 1940s through 1970s — well-built, but often with aging ductwork, original return air sized for smaller equipment, and in some cases AC systems still using R-22 refrigerant that was phased out in 2020. Out toward the highways and the newer subdivisions on the outskirts, the housing tends to be larger 1990s-and-newer construction with builder-grade HVAC equipment that benefits from regular maintenance to hit its full lifespan.</p>

  <p>The Gulf Coast climate doesn't make any of this easier. Angleton sits roughly 20 miles inland from the coast, which means high humidity year-round, brutal summer heat indexes, and salt air that can accelerate corrosion on outdoor condenser coils — especially on homes closer to the Brazos River bottom or further south toward Lake Jackson. We've been diagnosing the specific failure patterns of Brazoria County homes for four decades, and we know what to look for.</p>

  <h3>Why Angleton Homeowners Choose Mabry's</h3>
  <ul>
    <li>Brazoria County–based — we're not driving in from Houston, we're coming from Alvin</li>
    <li>Flat-rate pricing with no hidden charges — we tell you the price before we start the work</li>
    <li>No extra charge for evenings or weekends — ever</li>
    <li>Family-owned and operated since 1986 — talk to us, not a national call center</li>
    <li>BBB A+ Accredited Business, multiple BBB Gold Star Award winner</li>
    <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
    <li>Residential specialists — homes are all we do, no commercial detours</li>
  </ul>

  <p>From the historic neighborhoods around downtown Angleton to the newer subdivisions out by Highway 288, Mabry's is the Brazoria County HVAC company that's been here, will be here, and treats your home like it's our own. Call us at 281-331-5248.</p>
`;

export default function AngletonPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AC Repair & HVAC Service in Angleton, TX",
    "description": "Residential AC repair, heating service, and installation for Angleton, TX homeowners. Flat-rate pricing, BBB A+ rated. Call 281-331-5248.",
    "url": "https://mabryac.com/areas/angleton",
    "about": {
      "@type": "HVACBusiness",
      "@id": "https://mabryac.com/#business"
    },
    "mainEntity": {
      "@type": "Service",
      "name": "AC Repair & HVAC Service in Angleton, TX",
      "provider": {
        "@type": "HVACBusiness",
        "@id": "https://mabryac.com/#business"
      },
      "areaServed": {
        "@type": "City",
        "name": "Angleton",
        "addressRegion": "TX"
      },
      "telephone": "+1-281-331-5248"
    }
  };

  return (
    <>
      <Script
        id="area-schema-angleton"
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
            AC Repair &amp; HVAC Service in Angleton, TX — Brazoria County's Trusted Choice Since 1986
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Family-owned and Brazoria County–based. Our Alvin shop is just 30 minutes up Highway 35 — same-day AC repair for Angleton homes, no extra charge for evenings or weekends.
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
              <span>Serving 77515, 77516</span>
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
                answerParagraph="Need AC repair or heating service in Angleton? Call 281-331-5248 for fast service. We serve Angleton and nearby Brazoria County areas with licensed residential HVAC service."
                phoneButtons={[{ label: "Call Angleton", number: "281-331-5248", tel: "2813315248" }]}
                servingText="Serving: Angleton, Alvin, Manvel, Rosharon, Sienna, Lake Jackson"
              />
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: angletonContent }}
              />

              {/* Services Grid */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Services in Angleton</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}/angleton`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {service.name} in Angleton
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Ready to Schedule Service in Angleton?</h4>
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
                <LeadForm preselectedCity="Angleton" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={angletonFaqs}
            title="Frequently Asked Questions — Angleton AC Repair"
            schemaId="faq-schema-angleton"
          />
        </div>
      </section>
    </>
  );
}
