import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { businessInfo } from "@/lib/data";
import { Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Installation Alvin TX | New Systems & Replacement | Mabry's AC & Heating",
  description: "Professional AC installation & replacement in Alvin TX. Proper sizing, all major brands, licensed installation, financing available. Shop at 2110 S Gordon St since 1986. BBB A+. Call 281-331-5248.",
  alternates: { canonical: "/services/ac-installation/alvin" },
};

const faqs = [
  {
    question: "How much does AC installation cost in Alvin TX?",
    answer: "A complete AC system replacement in Alvin typically ranges from $6,000–$14,000+ fully installed, depending on system size (tonnage), SEER2 efficiency rating, brand, and whether any ductwork modifications are needed. We provide free, no-obligation estimates. Call 281-331-5248 or fill out the form.",
  },
  {
    question: "When should I replace my AC instead of repairing it in Alvin's climate?",
    answer: "The general rule: if repair cost exceeds half the replacement cost and your system is 10+ years old, replacement is usually the smarter investment. In Alvin's Gulf Coast climate with 9-month cooling seasons, AC systems typically last 12–15 years. If your unit is over 12 years old and needs a major repair, we'll give you an honest comparison.",
  },
  {
    question: "How long do AC units last in Alvin and Brazoria County?",
    answer: "In Brazoria County's Gulf Coast climate, residential AC systems typically last 12–15 years — shorter than national averages because they run up to 9 months per year under heavy heat and humidity loads. Regular annual maintenance can extend system life by several years.",
  },
  {
    question: "What size AC unit do I need for my Alvin home?",
    answer: "Proper sizing requires a Manual J load calculation — not just square footage. We account for your home's insulation, window exposure, ceiling height, and orientation. An oversized unit short-cycles and leaves your home humid. An undersized unit runs constantly and can't keep up. We do this right.",
  },
  {
    question: "Do you offer financing on new AC systems in Alvin?",
    answer: "Yes. We offer financing through Service Finance Company with flexible terms and options including no money down. Monthly payments from around $38/week on qualifying systems. Ask us about current offers when you call for your free estimate.",
  },
];

const content = `
  <h2>AC Installation &amp; Replacement in Alvin, TX — Done Right the First Time</h2>
  <p>Replacing your AC system is one of the biggest home investments you'll make — and in Alvin's Gulf Coast climate, getting it right matters. An improperly sized or poorly installed system means higher energy bills, uneven cooling, and a shorter equipment life. Mabry's Air Conditioning &amp; Heating has been installing and replacing AC systems in Alvin since 1986. Our shop is right here at 2110 S Gordon St.</p>

  <h3>How Much Does AC Replacement Cost in Alvin, TX?</h3>
  <p>A complete AC system replacement in Alvin typically ranges from <strong>$6,000–$14,000+ fully installed</strong>, depending on:</p>
  <ul>
    <li>System size (tonnage) — properly calculated for your specific home</li>
    <li>SEER2 efficiency rating — higher efficiency means lower monthly bills</li>
    <li>Brand and product line — we install all major brands</li>
    <li>Whether ductwork modifications or repairs are needed</li>
    <li>Whether you're replacing AC only or the full HVAC system</li>
  </ul>
  <p>We provide free, no-obligation estimates. Call 281-331-5248 or fill out the form.</p>

  <h3>Signs It's Time to Replace Your AC in Alvin</h3>
  <ul>
    <li><strong>System is 12–15+ years old</strong> — In Brazoria County's climate, that's a full service life</li>
    <li><strong>Frequent repairs adding up</strong> — If repair costs exceed 50% of replacement cost, a new system makes more financial sense</li>
    <li><strong>Running R-22 refrigerant</strong> — R-22 was phased out in 2020 and is now expensive and scarce; it's usually more cost-effective to replace</li>
    <li><strong>Energy bills climbing</strong> — Older systems lose efficiency; a new high-SEER2 system can reduce cooling costs significantly</li>
    <li><strong>Uneven cooling throughout the house</strong> — May indicate an undersized or failing system</li>
    <li><strong>System can't keep up on the hottest days</strong> — A properly sized new system should handle any Texas summer day</li>
  </ul>

  <h3>What's Included in Our AC Installation</h3>
  <ul>
    <li>Free in-home estimate with proper Manual J sizing calculation</li>
    <li>Complete system removal and disposal of old equipment</li>
    <li>New system installation — outdoor condenser, indoor air handler/furnace, and coil</li>
    <li>Refrigerant line set inspection and replacement if needed</li>
    <li>Electrical connections and thermostat setup</li>
    <li>Full system test and commissioning</li>
    <li>Permit pulled where required</li>
  </ul>

  <h3>Choosing the Right System for Alvin's Climate</h3>
  <p>For Brazoria County's Gulf Coast climate — high humidity, 100°F+ summers, 9-month cooling seasons — we recommend systems with a minimum <strong>16 SEER2</strong> efficiency rating. Higher-efficiency systems deliver meaningful monthly savings on the electricity bills that come with near-year-round cooling. We also focus on proper dehumidification capacity, which is as important as cooling capacity in Alvin's climate.</p>
  <p>We install all major brands: Trane, Carrier, Lennox, Rheem, Goodman, York, and American Standard. We'll recommend the right brand and model for your home's specific needs and your budget.</p>

  <h3>We Know Alvin's Homes</h3>
  <p>From older homes near Nolan Ryan Ballpark and downtown Alvin to newer subdivisions like Kendall Lakes and Country Meadows along Highway 6 — we know what each generation of Alvin construction needs from an HVAC system. Older homes often need ductwork evaluation as part of a system replacement. Newer homes typically need proper sizing verification, since builder-grade installations aren't always sized optimally.</p>

  <h3>Financing Available on New AC Systems</h3>
  <p>We offer flexible financing through Service Finance Company — no money down on qualifying systems, with monthly payment options starting around $38/week. Ask about current promotions when you call for your free estimate.</p>

  <h3>Why Alvin Homeowners Choose Mabry's for AC Replacement</h3>
  <ul>
    <li>Based in Alvin since 1986 — your true local contractor</li>
    <li>Proper Manual J sizing — we don't guess</li>
    <li>All major brands installed and backed</li>
    <li>Flat-rate pricing with written estimates before work begins</li>
    <li>BBB A+ Accredited — multiple BBB Gold Star Award winner</li>
    <li>Voted Favorite AC Company — Alvin Sun &amp; Advertiser</li>
    <li>Licensed Texas HVAC contractor (TACLB12058E)</li>
    <li>Financing available through Service Finance Company</li>
  </ul>
`;

const crossLinks = [
  { href: "/services/ac-repair/alvin", label: "AC Repair in Alvin" },
  { href: "/services/heating-repair/alvin", label: "Heating Repair in Alvin" },
  { href: "/services/ac-maintenance/alvin", label: "AC Maintenance in Alvin" },
];

export default function AcInstallationAlvinPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mabryac.com/services/ac-installation/alvin",
    name: "AC Installation in Alvin, TX",
    serviceType: "AC Installation",
    description: "Professional AC installation and replacement in Alvin, TX. Proper sizing, all major brands, licensed installation. BBB A+ rated. License TACLB12058E.",
    provider: { "@type": "HVACBusiness", "@id": "https://mabryac.com/#business" },
    areaServed: { "@type": "City", name: "Alvin", addressRegion: "TX" },
    telephone: "+1-281-331-5248",
  };

  return (
    <>
      <Script id="schema-ac-install-alvin" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <span className="text-white/60">/</span>
            <Link href="/services/ac-installation" className="text-white/80 hover:text-white transition-colors">AC Installation</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Alvin</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            AC Installation &amp; Replacement in Alvin, TX — Proper Sizing, Licensed Install
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Ready for a new AC system? Free estimates, all major brands, financing available. Our shop is at 2110 S Gordon St in Alvin — your neighbors since 1986.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a href="tel:2813315248" className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
              <Phone className="w-5 h-5" /> 281-331-5248
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Serving 77511, 77512</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <a href="https://www.bbb.org/us/tx/alvin/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805#sealclick" target="_blank" rel="nofollow" aria-label="Mabry's BBB Business Review">
              <img src="https://seal-houston.bbb.org/seals/blue-seal-200-42-bbb-50000805.png" alt="BBB Accredited Business — A+ Rated" width={200} height={42} style={{ border: 0 }} className="rounded" />
            </a>
            <span className="inline-flex items-center gap-1.5 bg-accent/25 border border-accent/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5 shrink-0" /> Voted Favorite AC Company — Alvin Sun &amp; Advertiser
            </span>
          </div>
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
              { icon: Clock, title: "Free Estimates", desc: "No-obligation quotes for Alvin homeowners" },
              { icon: Shield, title: "Licensed & Insured", desc: `License ${businessInfo.license}` },
              { icon: Award, title: "Financing Available", desc: "Flexible payment options, no money down" },
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
                answerParagraph="Ready for a new AC system in Alvin? Get a free estimate from your local experts — at 2110 S Gordon St since 1986. Proper sizing, all major brands, financing available."
                phoneButtons={[{ label: "Call Alvin", number: "281-331-5248", tel: "2813315248" }]}
                servingText="New AC installations throughout Alvin, Manvel, Rosharon, Sienna, Angleton & surrounding areas"
              />
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Other HVAC Services in Alvin</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {crossLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors text-sm">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Get a Free AC Installation Estimate in Alvin</h4>
                <p className="text-muted-foreground mb-4">No obligation. We'll assess your home, calculate proper sizing, and give you a written quote before any work begins.</p>
                <a href="tel:2813315248" className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors">
                  <Phone className="w-5 h-5" /> Call 281-331-5248
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
          <FAQSection faqs={faqs} title="AC Installation in Alvin TX — Frequently Asked Questions" schemaId="faq-ac-install-alvin" />
        </div>
      </section>
    </>
  );
}
