import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { businessInfo } from "@/lib/data";
import { Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Installation Pearland TX | New Systems & Replacement | Mabry's AC & Heating",
  description: "Professional AC installation & replacement in Pearland TX — Shadow Creek Ranch, Silverlake, Old Townsite & all neighborhoods. Proper sizing, financing available, BBB A+. Call 281-331-5248.",
  alternates: { canonical: "/services/ac-installation/pearland" },
};

const faqs = [
  {
    question: "How much does AC installation cost in Pearland TX?",
    answer: "A complete AC system replacement in Pearland typically ranges from $6,000–$14,000+ fully installed, depending on system size, SEER2 efficiency rating, brand, and whether any ductwork work is needed. We provide free, no-obligation in-home estimates. Call 281-331-5248.",
  },
  {
    question: "My AC is 15 years old in Pearland — should I repair or replace it?",
    answer: "At 15 years, your system has had a full service life in Pearland's demanding Gulf Coast climate. If it needs a significant repair, we'd recommend getting a replacement quote alongside the repair estimate. Many Pearland homeowners in Shadow Creek Ranch and Silverlake are at this exact decision point — mid-2000s builder-grade equipment hitting 15–20 years old. We'll give you an honest comparison.",
  },
  {
    question: "What SEER2 rating is best for Pearland's climate?",
    answer: "For Pearland's hot, humid Gulf Coast summers with cooling seasons running April through October, we recommend a minimum 16 SEER2 efficiency rating. Variable-speed systems perform especially well in humid climates because they run longer at lower capacity, removing more moisture from the air and keeping your home more comfortable.",
  },
  {
    question: "How long does AC installation take in Pearland?",
    answer: "Most standard AC replacements take 4–8 hours from start to finish. We schedule a specific appointment, arrive on time, and aim to have your new system running the same day. We'll let you know in advance if your installation is likely to take longer.",
  },
  {
    question: "Do you offer free estimates on new AC systems in Pearland?",
    answer: "Yes — free, no-obligation in-home estimates for all Pearland homeowners. We assess your home, calculate proper sizing, and provide a written quote before any work begins. Call 281-331-5248 or fill out the form.",
  },
];

const content = `
  <h2>AC Installation &amp; Replacement in Pearland, TX — All Neighborhoods, Properly Sized</h2>
  <p>Pearland has become one of Texas's largest cities — and its housing spans every era of construction, from 1970s Old Townsite homes to mid-2000s Shadow Creek Ranch and Silverlake communities to new construction along the Highway 288 corridor. Each generation of homes has different HVAC needs, and a one-size-fits-all approach doesn't work. Mabry's Air Conditioning &amp; Heating has been serving Pearland homeowners through all of this growth since 1986. Call 281-331-5248 for a free estimate.</p>

  <h3>How Much Does AC Replacement Cost in Pearland, TX?</h3>
  <p>A complete AC system replacement in Pearland typically ranges from <strong>$6,000–$14,000+ fully installed</strong>, depending on:</p>
  <ul>
    <li>System size (tonnage) — calculated for your specific home, not just square footage</li>
    <li>SEER2 efficiency rating — higher efficiency means lower monthly energy costs</li>
    <li>Brand and product line — we install all major brands</li>
    <li>Whether ductwork modifications are needed</li>
    <li>AC-only vs. full HVAC system replacement</li>
  </ul>
  <p>We provide free, no-obligation in-home estimates. Call 281-331-5248 or fill out the form on this page.</p>

  <h3>Is It Time to Replace Your Pearland AC?</h3>
  <p>Many Pearland homeowners — especially in Shadow Creek Ranch and Silverlake — are at a critical decision point. Builder-grade systems installed in the mid-2000s are now 15–20 years old. In Pearland's Gulf Coast climate with long cooling seasons, that's a full service life for most systems.</p>
  <ul>
    <li><strong>System is 12–15+ years old</strong> — A full lifespan under Gulf Coast conditions</li>
    <li><strong>Repair costs are escalating</strong> — If repairs exceed 50% of replacement cost, a new system makes more sense</li>
    <li><strong>Running R-22 refrigerant</strong> — Phased out in 2020, now expensive and scarce</li>
    <li><strong>Home feels humid even when AC runs</strong> — Older systems lose dehumidification capacity over time</li>
    <li><strong>Energy bills climbing</strong> — New high-SEER2 systems can significantly reduce cooling costs</li>
    <li><strong>Uneven temperatures or rooms that won't cool</strong> — May indicate undersized or failing equipment</li>
  </ul>

  <h3>What's Included in Our AC Installation</h3>
  <ul>
    <li>Free in-home estimate with Manual J load calculation</li>
    <li>Complete removal and disposal of old equipment</li>
    <li>New system installation — outdoor condenser, indoor air handler/furnace, evaporator coil</li>
    <li>Refrigerant line set inspection and replacement if needed</li>
    <li>Electrical connections and thermostat setup</li>
    <li>Full system commissioning and test</li>
    <li>Permit pulled where required</li>
  </ul>

  <h3>Choosing the Right System for Pearland's Climate</h3>
  <p>Pearland's position in Gulf Coast humidity territory — with summers running April through October and heat indexes regularly above 110°F — demands a system with strong dehumidification as well as raw cooling power. We recommend <strong>16 SEER2 or higher</strong> for most Pearland homes. Variable-speed systems are especially effective in humid climates because they run longer at lower speeds, pulling more moisture from the air and creating more consistent comfort.</p>
  <p>For Shadow Creek Ranch and Silverlake homes in the 77584 zip code, and Old Pearland homes in 77581, proper sizing is especially critical — these neighborhoods include a wide range of home configurations, and an improperly sized system will underperform regardless of brand.</p>

  <h3>We Know Pearland's Neighborhoods</h3>
  <p>Old Townsite and Country Place homes from the 1970s often have original or aging ductwork that benefits from evaluation as part of a system replacement. Shadow Creek Ranch and Silverlake homes from the 2000s typically have intact ductwork but builder-grade systems reaching end of life. Newer Highway 288 corridor developments have modern infrastructure that supports high-efficiency equipment well.</p>

  <h3>Financing Available on New AC Systems</h3>
  <p>We offer financing through Service Finance Company — no money down on qualifying systems, with flexible monthly payment options. Ask about current promotional offers when you call for your free estimate.</p>

  <h3>Why Pearland Homeowners Choose Mabry's for AC Replacement</h3>
  <ul>
    <li>Nearly 40 years serving Pearland — through the city's entire growth</li>
    <li>Proper Manual J sizing — never just a square-footage guess</li>
    <li>All major brands installed: Trane, Carrier, Lennox, Rheem, Goodman, York, American Standard</li>
    <li>Flat-rate pricing with written estimates before work begins</li>
    <li>BBB A+ Accredited — multiple BBB Gold Star Award winner</li>
    <li>Voted Favorite AC Company</li>
    <li>Licensed Texas HVAC contractor (TACLB12058E)</li>
    <li>Financing available through Service Finance Company</li>
  </ul>
`;

const crossLinks = [
  { href: "/services/ac-repair/pearland", label: "AC Repair in Pearland" },
  { href: "/services/heating-repair/pearland", label: "Heating Repair in Pearland" },
  { href: "/services/ac-maintenance/pearland", label: "AC Maintenance in Pearland" },
];

export default function AcInstallationPearlandPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mabryac.com/services/ac-installation/pearland",
    name: "AC Installation in Pearland, TX",
    serviceType: "AC Installation",
    description: "Professional AC installation and replacement in Pearland, TX. Proper sizing, all major brands, licensed installation. BBB A+ rated. License TACLB12058E.",
    provider: { "@type": "HVACBusiness", "@id": "https://mabryac.com/#business" },
    areaServed: { "@type": "City", name: "Pearland", addressRegion: "TX" },
    telephone: "+1-281-331-5248",
  };

  return (
    <>
      <Script id="schema-ac-install-pearland" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <span className="text-white/60">/</span>
            <Link href="/services/ac-installation" className="text-white/80 hover:text-white transition-colors">AC Installation</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Pearland</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            AC Installation &amp; Replacement in Pearland, TX — Shadow Creek Ranch, Silverlake &amp; All Neighborhoods
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Free estimates, proper sizing, all major brands, financing available. Serving Pearland homeowners since 1986.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a href="tel:2813315248" className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
              <Phone className="w-5 h-5" /> 281-331-5248
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Serving 77581, 77584, 77588</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <a href="https://www.bbb.org/us/tx/alvin/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805#sealclick" target="_blank" rel="nofollow" aria-label="Mabry's BBB Business Review">
              <img src="https://seal-houston.bbb.org/seals/blue-seal-200-42-bbb-50000805.png" alt="BBB Accredited Business — A+ Rated" width={200} height={42} style={{ border: 0 }} className="rounded" />
            </a>
            <span className="inline-flex items-center gap-1.5 bg-accent/25 border border-accent/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              <Award className="w-3.5 h-3.5 shrink-0" /> Voted Favorite AC Company
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
              { icon: Clock, title: "Free Estimates", desc: "No-obligation quotes for Pearland homeowners" },
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
                answerParagraph="Replacing your AC in Pearland? Call 281-331-5248 for a free estimate. Proper sizing for your home, all major brands, licensed installation, financing available."
                phoneButtons={[{ label: "Call Pearland", number: "281-331-5248", tel: "2813315248" }]}
                servingText="New AC installations throughout Pearland, Alvin, Manvel, Sugar Land, Sienna & surrounding areas"
              />
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Other HVAC Services in Pearland</h3>
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
                <h4 className="font-bold text-primary mb-2">Get a Free AC Installation Estimate in Pearland</h4>
                <p className="text-muted-foreground mb-4">No obligation. Proper sizing, written quote, all major brands. Call 281-331-5248 or fill out the form.</p>
                <a href="tel:2813315248" className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors">
                  <Phone className="w-5 h-5" /> Call 281-331-5248
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
          <FAQSection faqs={faqs} title="AC Installation in Pearland TX — Frequently Asked Questions" schemaId="faq-ac-install-pearland" />
        </div>
      </section>
    </>
  );
}
