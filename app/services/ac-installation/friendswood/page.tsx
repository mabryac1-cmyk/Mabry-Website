import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { businessInfo } from "@/lib/data";
import { Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Installation Friendswood TX | New Systems & Replacement | Mabry's AC & Heating",
  description: "Professional AC installation & replacement in Friendswood TX. Proper sizing, all major brands, financing available. Dedicated Friendswood line: 281-482-8400. BBB A+. Serving the community since 1986.",
  alternates: { canonical: "/services/ac-installation/friendswood" },
};

const faqs = [
  {
    question: "How much does AC replacement cost in Friendswood TX?",
    answer: "A complete AC system replacement in Friendswood typically ranges from $6,000–$14,000+ fully installed, depending on system size (tonnage), SEER2 efficiency rating, brand, and whether any ductwork work is needed. We provide free, no-obligation estimates. Call 281-482-8400.",
  },
  {
    question: "What SEER2 rating should I choose for Friendswood's climate?",
    answer: "For Friendswood's Gulf Coast climate — with high humidity, long cooling seasons, and proximity to Clear Lake and Galveston Bay — we recommend a minimum 16 SEER2. The higher efficiency reduces monthly electricity bills significantly over a system's 12–15 year lifespan, and better-performing systems also do a superior job of dehumidification, which is critical near the bay.",
  },
  {
    question: "What AC brands do you install in Friendswood?",
    answer: "We install all major brands including Trane, Carrier, Lennox, Rheem, Goodman, York, and American Standard. We'll recommend the right brand and product line for your home's needs and your budget.",
  },
  {
    question: "How long does AC installation take in Friendswood?",
    answer: "Most standard AC system replacements take 4–8 hours for a full installation. We schedule a specific appointment window and aim to have your new system running the same day we start. Complex installations or homes requiring ductwork work may take longer.",
  },
  {
    question: "Should I replace just the AC unit or the whole HVAC system?",
    answer: "If your furnace or air handler is also aging, replacing the complete system at the same time is often more cost-effective and ensures matched components working at peak efficiency. Mismatched components — like a new condenser paired with an old air handler — can reduce efficiency and void manufacturer warranties. We'll give you an honest assessment.",
  },
];

const content = `
  <h2>AC Installation &amp; Replacement in Friendswood, TX — Serving This Community Since 1986</h2>
  <p>A new AC system is one of the largest home investments you'll make — and in Friendswood's Gulf Coast climate, with its proximity to Clear Lake and Galveston Bay, getting it right is especially important. High humidity, long cooling seasons, and bay-area moisture create specific demands that not every system handles equally well. Mabry's has been installing and replacing AC systems in Friendswood since 1986. Call our dedicated line: 281-482-8400.</p>

  <h3>How Much Does AC Replacement Cost in Friendswood, TX?</h3>
  <p>A complete AC system replacement in Friendswood typically ranges from <strong>$6,000–$14,000+ fully installed</strong>, depending on:</p>
  <ul>
    <li>System size (tonnage) — calculated for your specific home, not just square footage</li>
    <li>SEER2 efficiency rating — higher efficiency means lower monthly energy bills</li>
    <li>Brand and product line — we install all major brands</li>
    <li>Whether ductwork modifications or repairs are needed</li>
    <li>Full HVAC system vs. AC-only replacement</li>
  </ul>
  <p>We provide free, no-obligation in-home estimates. Call 281-482-8400.</p>

  <h3>Signs It's Time to Replace Your AC in Friendswood</h3>
  <ul>
    <li><strong>System is 12–15+ years old</strong> — In Friendswood's climate, that's a full useful life for most systems</li>
    <li><strong>Repair costs are adding up</strong> — If you're spending more than 50% of replacement cost on repairs, a new system makes financial sense</li>
    <li><strong>Home feels humid even when the AC is running</strong> — Older or improperly sized systems often fail to adequately dehumidify Friendswood's bay-area air</li>
    <li><strong>Running R-22 refrigerant</strong> — Phased out in 2020, now expensive and scarce; usually more cost-effective to replace the system</li>
    <li><strong>Energy bills climbing year over year</strong> — Efficiency degrades as systems age; new high-SEER2 units can cut cooling costs significantly</li>
    <li><strong>Uneven temperatures throughout the home</strong> — May indicate an undersized, failing, or improperly installed system</li>
  </ul>

  <h3>What's Included in Our AC Installation</h3>
  <ul>
    <li>Free in-home estimate with proper Manual J load calculation</li>
    <li>Complete removal and disposal of old equipment</li>
    <li>New system installation — condenser, air handler/furnace, and evaporator coil</li>
    <li>Refrigerant line set inspection and replacement if needed</li>
    <li>Electrical connections and thermostat programming</li>
    <li>Full system commissioning and test</li>
    <li>Permit pulled where required</li>
  </ul>

  <h3>Choosing the Right System for Friendswood's Climate</h3>
  <p>Friendswood's proximity to Clear Lake and Galveston Bay means elevated year-round humidity that your AC must manage as well as heat. We recommend systems with strong dehumidification capacity and at least <strong>16 SEER2</strong> efficiency. Variable-speed systems — which modulate output to match the actual cooling load — do especially well in humid coastal climates because they run longer at lower speeds, which removes more moisture from the air.</p>
  <p>We install all major brands and will give you an honest recommendation based on your home's specific needs, not on what carries the highest margin for us.</p>

  <h3>We Know Friendswood's Neighborhoods</h3>
  <p>From the established neighborhoods of Forest of Friendswood, Polly Ranch Estates, and Heritage Park — with 1970s and 1980s homes that may have original or older replacement ductwork — to the newer master-planned West Ranch community and developments along FM 2351, we know what Friendswood homes need. We've been working in these neighborhoods long enough to have installed systems for multiple generations of the same families.</p>

  <h3>Financing Available on New AC Systems</h3>
  <p>We offer financing through Service Finance Company with flexible terms — no money down on qualifying systems. Monthly payment options available. Ask about current promotional offers when you call for your free estimate.</p>

  <h3>Why Friendswood Homeowners Choose Mabry's for AC Replacement</h3>
  <ul>
    <li>Dedicated Friendswood service line — 281-482-8400</li>
    <li>Nearly 40 years serving the 77546 and 77549 zip codes</li>
    <li>Proper Manual J sizing — not just a square-footage guess</li>
    <li>All major brands installed and backed</li>
    <li>BBB A+ Accredited — multiple BBB Gold Star Award winner</li>
    <li>Voted Favorite AC Company</li>
    <li>Licensed Texas HVAC contractor (TACLB12058E)</li>
    <li>Financing available through Service Finance Company</li>
  </ul>
`;

const crossLinks = [
  { href: "/services/ac-repair/friendswood", label: "AC Repair in Friendswood" },
  { href: "/services/heating-repair/friendswood", label: "Heating Repair in Friendswood" },
  { href: "/services/ac-maintenance/friendswood", label: "AC Maintenance in Friendswood" },
];

export default function AcInstallationFriendswoodPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mabryac.com/services/ac-installation/friendswood",
    name: "AC Installation in Friendswood, TX",
    serviceType: "AC Installation",
    description: "Professional AC installation and replacement in Friendswood, TX. Proper sizing, all major brands, licensed installation. BBB A+ rated. License TACLB12058E.",
    provider: { "@type": "HVACBusiness", "@id": "https://mabryac.com/#business" },
    areaServed: { "@type": "City", name: "Friendswood", addressRegion: "TX" },
    telephone: "+1-281-482-8400",
  };

  return (
    <>
      <Script id="schema-ac-install-friendswood" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <span className="text-white/60">/</span>
            <Link href="/services/ac-installation" className="text-white/80 hover:text-white transition-colors">AC Installation</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Friendswood</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            AC Installation &amp; Replacement in Friendswood, TX — Serving This Community Since 1986
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Free estimates, proper sizing, all major brands, financing available. Dedicated Friendswood line: 281-482-8400.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a href="tel:2814828400" className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors">
              <Phone className="w-5 h-5" /> 281-482-8400
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Serving 77546, 77549</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <a href="https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805/addressId/92394#sealclick" target="_blank" rel="nofollow" aria-label="Mabry's BBB Business Review">
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
              { icon: Clock, title: "Free Estimates", desc: "No-obligation quotes for Friendswood homeowners" },
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
          <div className="elfsight-app-b3584e39-3dd0-448f-a2f3-f6bcd278e919" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <GoalCompletionBlock
                answerParagraph="Need a new AC system in Friendswood? Call 281-482-8400 for a free estimate. Proper sizing, all major brands, licensed installation, financing available."
                phoneButtons={[{ label: "Call Friendswood", number: "281-482-8400", tel: "2814828400" }]}
                servingText="New AC installations throughout Friendswood, League City, Clear Lake, Deer Park, Pearland & surrounding areas"
              />
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Other HVAC Services in Friendswood</h3>
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
                <h4 className="font-bold text-primary mb-2">Get a Free AC Installation Estimate in Friendswood</h4>
                <p className="text-muted-foreground mb-4">No obligation. Proper sizing, written quote, all major brands. Call 281-482-8400 or fill out the form.</p>
                <a href="tel:2814828400" className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors">
                  <Phone className="w-5 h-5" /> Call 281-482-8400
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
          <FAQSection faqs={faqs} title="AC Installation in Friendswood TX — Frequently Asked Questions" schemaId="faq-ac-install-friendswood" />
        </div>
      </section>
    </>
  );
}
