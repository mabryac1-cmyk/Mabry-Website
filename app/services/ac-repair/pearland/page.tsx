import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { businessInfo } from "@/lib/data";
import { Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Same-Day AC Repair Pearland TX | Mabry's AC & Heating",
  description: "Same-day AC repair in Pearland TX — Shadow Creek Ranch, Silverlake, Old Townsite & all neighborhoods. Flat-rate pricing, BBB A+. No extra charge for evenings or weekends. Call 281-331-5248.",
  alternates: { canonical: "/services/ac-repair/pearland" },
};

const faqs = [
  {
    question: "How much does AC repair cost in Pearland TX?",
    answer: "Common AC repairs in Pearland typically range from $150–$600. Capacitor replacements run $150–$350. Refrigerant recharges run $200–$450. Condensate drain clearing runs $100–$200. Major compressor-related repairs can run $400–$1,200+. We use flat-rate pricing — you get the exact cost before we start, no surprises.",
  },
  {
    question: "Why does my AC work in the morning but struggle in the afternoon in Pearland?",
    answer: "This is a classic Gulf Coast summer symptom. When outdoor temperatures and humidity peak in the afternoon, your AC works hardest. If it can't keep up, it's often low on refrigerant, has a dirty or restricted evaporator coil, or the system is undersized for your home's cooling load. We see this frequently in Pearland's 77581, 77584, and 77588 zip codes during summer.",
  },
  {
    question: "Is it worth repairing my AC in Pearland, or should I replace it?",
    answer: "The general rule: if repair cost exceeds half the replacement cost and your system is 10+ years old, replacement is usually the better investment. Many homes in Shadow Creek Ranch and Silverlake have systems built in the mid-2000s that are now 15–20 years old — we'll give you an honest assessment of whether a repair buys you meaningful additional life.",
  },
  {
    question: "What are the most common AC problems in Pearland TX?",
    answer: "In Pearland's zip codes, we most commonly see: capacitor failure from overworked compressors, condensate drain clogs from Gulf Coast humidity, refrigerant leaks, and contactor burnout. Shadow Creek Ranch and Silverlake homes with mid-2000s builder-grade systems also see a higher rate of compressor issues as those systems age.",
  },
  {
    question: "Do you serve Shadow Creek Ranch and Silverlake in Pearland?",
    answer: "Yes — we serve all of Pearland including Shadow Creek Ranch, Silverlake, Old Townsite, Country Place, Massey Ranch, Southern Trails, and all neighborhoods in the 77581, 77584, and 77588 zip codes.",
  },
];

const content = `
  <h2>AC Repair in Pearland, TX — All Neighborhoods, All Brands, Same-Day Service</h2>
  <p>Pearland summers are no joke — heat indexes above 110°F combined with Gulf Coast humidity make a broken AC a genuine emergency. Whether you're in Shadow Creek Ranch, Silverlake, Old Townsite, or anywhere along the Highway 288 corridor, Mabry's Air Conditioning &amp; Heating is your local choice for fast, honest AC repair. Call 281-331-5248.</p>

  <h3>Common AC Problems We Fix in Pearland</h3>
  <ul>
    <li><strong>AC not blowing cold air</strong> — Low refrigerant, failed capacitor, or dirty evaporator coil. All common in Pearland during the summer cooling season.</li>
    <li><strong>AC running but not cooling the house</strong> — If your system runs all day but can't hit your set temperature, it may be low on refrigerant, have a restricted airflow problem, or be undersized for your home's load.</li>
    <li><strong>AC struggling in the afternoon heat</strong> — When Gulf Coast temperatures and humidity peak, struggling AC systems reveal their underlying issues. Low refrigerant and dirty coils show up most clearly on the hottest days.</li>
    <li><strong>Condensate drain clogged</strong> — High humidity means condensate pans fill fast. A clogged drain overflows into your ceiling or walls. We clear and treat drains on every maintenance call and offer emergency service when they fail.</li>
    <li><strong>AC stopped working suddenly</strong> — Capacitor failure, tripped breaker, or burnt contactor. We carry the most common parts on every truck for same-day repairs.</li>
    <li><strong>AC freezing up / ice on coils</strong> — Shut the system off immediately. This indicates low refrigerant or blocked airflow. Running it further destroys the compressor.</li>
    <li><strong>AC making noise</strong> — Grinding, squealing, or banging all indicate specific mechanical failures. Diagnosing early costs far less than waiting.</li>
  </ul>

  <h3>What Does AC Repair Cost in Pearland, TX?</h3>
  <p>We use flat-rate pricing — exact cost before we start:</p>
  <ul>
    <li>Capacitor replacement: $150–$350</li>
    <li>Refrigerant recharge (with leak check): $200–$450</li>
    <li>Condensate drain clear &amp; treat: $100–$200</li>
    <li>Contactor replacement: $150–$300</li>
    <li>Compressor or major repairs: $400–$1,200+</li>
  </ul>
  <p>No overtime charges. No extra fees for evenings or weekends. No surprises.</p>

  <h3>We Know Pearland's Neighborhoods</h3>
  <p>Pearland's three zip codes — 77581, 77584, and 77588 — span Brazoria and Harris counties and cover an enormous range of housing. Old Pearland and Country Place have 1970s-era homes with older ductwork and systems that may be on their second or third replacement. Shadow Creek Ranch and Silverlake — built primarily in the 2000s — have builder-grade systems that are now 15–20 years old and entering the repair-or-replace window. Newer developments along Highway 288 have modern systems that reward proactive maintenance.</p>
  <p>We've been serving Pearland through all of this growth, and we know what each generation of homes needs.</p>

  <h3>Should You Repair or Replace Your Pearland AC?</h3>
  <p>Many Pearland homeowners — especially in Shadow Creek Ranch and Silverlake — are facing this question right now. If your mid-2000s builder-grade system needs a major repair, we'll give you the honest comparison: repair cost vs. a new system's long-term value. No pressure, no upsell — just the information you need to make a smart decision.</p>

  <h3>Why Pearland Homeowners Choose Mabry's</h3>
  <ul>
    <li>Same-day service throughout Pearland's 77581, 77584, and 77588 zip codes</li>
    <li>Nearly 40 years serving Pearland — through the city's entire growth</li>
    <li>Flat-rate pricing — no overtime, no hidden charges</li>
    <li>BBB A+ Accredited — multiple BBB Gold Star Award winner</li>
    <li>Voted Favorite AC Company</li>
    <li>Licensed Texas HVAC contractor (TACLB12058E)</li>
    <li>Residential specialists — homes are all we do</li>
  </ul>
`;

const crossLinks = [
  { href: "/services/ac-installation/pearland", label: "AC Installation in Pearland" },
  { href: "/services/heating-repair/pearland", label: "Heating Repair in Pearland" },
  { href: "/services/ac-maintenance/pearland", label: "AC Maintenance in Pearland" },
];

export default function AcRepairPearlandPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mabryac.com/services/ac-repair/pearland",
    name: "AC Repair in Pearland, TX",
    serviceType: "AC Repair",
    description: "Same-day residential AC repair in Pearland, TX. Flat-rate pricing, all makes and models. BBB A+ rated. License TACLB12058E.",
    provider: { "@type": "HVACBusiness", "@id": "https://mabryac.com/#business" },
    areaServed: { "@type": "City", name: "Pearland", addressRegion: "TX" },
    telephone: "+1-281-331-5248",
  };

  return (
    <>
      <Script id="schema-ac-repair-pearland" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <span className="text-white/60">/</span>
            <Link href="/services/ac-repair" className="text-white/80 hover:text-white transition-colors">AC Repair</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Pearland</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            AC Repair in Pearland, TX — All Neighborhoods, All Brands
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Shadow Creek Ranch, Silverlake, Old Townsite — wherever you are in Pearland, we're your same-day AC repair team. Flat-rate pricing, no extra charge for evenings or weekends.
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
              { icon: Clock, title: "Same-Day Service", desc: "Serving all Pearland neighborhoods" },
              { icon: Shield, title: "Licensed & Insured", desc: `License ${businessInfo.license}` },
              { icon: Award, title: "Flat-Rate Pricing", desc: "No hidden charges, no overtime fees" },
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
                answerParagraph="AC not working in Pearland? Call 281-331-5248 for same-day service. We serve Shadow Creek Ranch, Silverlake, Old Townsite, and all Pearland neighborhoods with flat-rate pricing."
                phoneButtons={[{ label: "Call Pearland", number: "281-331-5248", tel: "2813315248" }]}
                servingText="Same-day AC repair: Pearland, Alvin, Manvel, Sugar Land, Sienna & surrounding areas"
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
                <h4 className="font-bold text-primary mb-2">AC Not Working in Pearland? Call Now.</h4>
                <p className="text-muted-foreground mb-4">Same-day service available. Flat-rate pricing — know your cost before we start.</p>
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
          <FAQSection faqs={faqs} title="AC Repair in Pearland TX — Frequently Asked Questions" schemaId="faq-ac-repair-pearland" />
        </div>
      </section>
    </>
  );
}
