import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Same-Day AC Repair Alvin TX | Mabry's Air Conditioning & Heating",
  description: "Same-day AC repair in Alvin TX. Flat-rate pricing, no extra charge for evenings or weekends. Shop at 2110 S Gordon St — your neighbors since 1986. BBB A+. Call 281-331-5248.",
  alternates: { canonical: "/services/ac-repair/alvin" },
};

const faqs = [
  {
    question: "How much does AC repair cost in Alvin TX?",
    answer: "Common AC repairs in Alvin typically range from $150–$600 depending on the problem. Capacitor replacements run $150–$350. Refrigerant recharges run $200–$400. Major repairs like compressor work can run higher. We use flat-rate pricing — you know the exact cost before we start, no surprises.",
  },
  {
    question: "Do you offer same-day AC repair in Alvin?",
    answer: "Yes. Our shop is right here at 2110 S Gordon St in Alvin — we're not driving from Houston. Same-day service is available for most AC repairs in the 77511 and 77512 zip codes. Call 281-331-5248.",
  },
  {
    question: "Is it worth repairing a 10-year-old AC in Alvin's climate?",
    answer: "It depends on the repair cost vs. system value. A common rule: if the repair costs more than half the price of a new system, replacement is usually smarter. In Alvin's Gulf Coast climate, AC units typically last 12–15 years — shorter than national averages due to our 9-month cooling season. We'll give you an honest recommendation either way.",
  },
  {
    question: "What are the most common AC problems in Alvin TX?",
    answer: "In Alvin's 77511 and 77512 zip codes, the most common issues we see are: capacitor failure from overworked compressors in summer heat, condensate drain clogs from Gulf Coast humidity, refrigerant leaks, and contactor failure. Frozen coils (from dirty filters or low refrigerant) are also common during peak summer months.",
  },
  {
    question: "What should I check before calling for AC repair in Alvin?",
    answer: "Check your thermostat settings, make sure your air filter isn't clogged, and verify your circuit breaker hasn't tripped. If the AC is running but not cooling, check that all vents are open. If you hear unusual noises or see ice on the unit — stop the system and call us. Running a damaged AC can cause more expensive damage.",
  },
];

const content = `
  <h2>AC Repair in Alvin, TX — When It Breaks, We Fix It Fast</h2>
  <p>In July in Alvin, a broken AC isn't an inconvenience — it's a health emergency. Heat indexes regularly push past 110°F in Brazoria County, and the Gulf Coast humidity makes an uncooled home genuinely dangerous, especially for children, elderly family members, and pets. When your AC goes out, you need it fixed today — not next week.</p>
  <p>Mabry's Air Conditioning &amp; Heating has been the AC repair company Alvin calls since 1986. Our shop is at 2110 S Gordon St — we're already here. When you call 281-331-5248, you're not reaching a call center routing a tech from across Houston. You're calling your neighbors.</p>

  <h3>Common AC Problems We Fix in Alvin</h3>
  <ul>
    <li><strong>AC not blowing cold air</strong> — Low refrigerant, failed capacitor, or dirty evaporator coil. We diagnose and fix all three.</li>
    <li><strong>AC running but not cooling the house</strong> — Often a refrigerant issue, an oversized cycling problem, or a failing compressor. Common in Alvin homes during peak summer months.</li>
    <li><strong>AC stopped working suddenly</strong> — Could be a tripped breaker, failed capacitor, or burnt contactor. We carry common parts on every truck for same-day repairs.</li>
    <li><strong>AC not keeping up with the heat</strong> — If your system runs constantly but can't hit your set temperature, it may be undersized, low on refrigerant, or have leaking ductwork.</li>
    <li><strong>AC leaking water inside the house</strong> — A clogged condensate drain is the most common cause in Alvin's humid climate. Left unaddressed, it causes water damage to ceilings and walls.</li>
    <li><strong>AC freezing up / ice on the coils</strong> — Turn the system off immediately. This indicates low refrigerant or restricted airflow. Running it further causes compressor damage.</li>
    <li><strong>AC making loud or unusual noises</strong> — Squealing, grinding, or banging sounds all point to specific mechanical failures. Don't ignore them — they get more expensive fast.</li>
  </ul>

  <h3>What Does AC Repair Cost in Alvin, TX?</h3>
  <p>We use flat-rate pricing — you get the exact price before work starts. Common repair ranges for Alvin homeowners:</p>
  <ul>
    <li>Capacitor replacement: $150–$350</li>
    <li>Refrigerant recharge (with leak check): $200–$450</li>
    <li>Contactor replacement: $150–$300</li>
    <li>Condensate drain clear &amp; treat: $100–$200</li>
    <li>Compressor or major repairs: $400–$1,200+</li>
  </ul>
  <p>No hidden charges, no after-hours fees, no surprises on the invoice.</p>

  <h3>We Know Alvin's Homes — and What Breaks Them</h3>
  <p>Alvin's housing stock ranges from historic downtown homes near Nolan Ryan Ballpark and Alvin Community College to newer subdivisions like Kendall Lakes, Country Meadows, and communities along the Highway 6 and Highway 35 corridors. We've repaired AC systems in all of them.</p>
  <p>Older homes in Alvin's 77511 zip code often have aging ductwork, equipment running R-22 refrigerant (phased out in 2020), and systems that have been through one or two replacement cycles. Newer subdivisions like Kendall Lakes have builder-grade equipment that benefits from regular maintenance to hit its full lifespan under Brazoria County's demanding climate.</p>

  <h3>Repair or Replace? We'll Be Honest With You</h3>
  <p>Not every AC problem needs a new system — and we won't push you toward replacement if a repair makes more sense. A general rule: if the repair cost exceeds half the price of a comparable new system, and your unit is over 10 years old, replacement is usually the smarter long-term investment. We'll give you that honest assessment every time.</p>

  <h3>Why Alvin Homeowners Call Mabry's First</h3>
  <ul>
    <li>Based in Alvin at 2110 S Gordon St — fastest response times, no travel fees</li>
    <li>Flat-rate pricing — know your cost before we start, no overtime charges</li>
    <li>Nearly 40 years serving Alvin and Brazoria County homes</li>
    <li>BBB A+ Accredited — multiple BBB Gold Star Award winner</li>
    <li>Voted Favorite AC Company — Alvin Sun &amp; Advertiser</li>
    <li>Licensed Texas HVAC contractor (TACLB12058E)</li>
    <li>Family-owned — you talk to us, not a call center</li>
  </ul>
`;

const crossLinks = [
  { href: "/services/ac-installation/alvin", label: "AC Installation in Alvin" },
  { href: "/services/heating-repair/alvin", label: "Heating Repair in Alvin" },
  { href: "/services/ac-maintenance/alvin", label: "AC Maintenance in Alvin" },
];

export default function AcRepairAlvinPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mabryac.com/services/ac-repair/alvin",
    name: "AC Repair in Alvin, TX",
    serviceType: "AC Repair",
    description: "Same-day residential AC repair in Alvin, TX. Flat-rate pricing, all makes and models. BBB A+ rated. License TACLB12058E.",
    provider: { "@type": "HVACBusiness", "@id": "https://mabryac.com/#business" },
    areaServed: { "@type": "City", name: "Alvin", addressRegion: "TX" },
    telephone: "+1-281-331-5248",
  };

  return (
    <>
      <Script id="schema-ac-repair-alvin" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <span className="text-white/60">/</span>
            <Link href="/services/ac-repair" className="text-white/80 hover:text-white transition-colors">AC Repair</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Alvin</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            AC Repair in Alvin, TX — Same-Day Service Since 1986
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            Your AC broke down in Brazoria County heat? We're already here — shop at 2110 S Gordon St. Flat-rate pricing, all makes and models, no extra charge for evenings or weekends.
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
              { icon: Clock, title: "Same-Day Service", desc: "In Alvin — no long drive from Houston" },
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
                answerParagraph="AC broken in Alvin? Call 281-331-5248 for same-day service. Flat-rate pricing — we tell you the cost before we start. No extra charge for evenings or weekends."
                phoneButtons={[{ label: "Call Alvin", number: "281-331-5248", tel: "2813315248" }]}
                servingText="Same-day AC repair: Alvin, Manvel, Rosharon, Sienna, Angleton & surrounding areas"
              />
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: content }} />

              {/* Other Services */}
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

              {/* CTA */}
              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">AC Not Working in Alvin? Call Now.</h4>
                <p className="text-muted-foreground mb-4">Same-day service available. Flat-rate pricing — know your cost before we start.</p>
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
          <FAQSection faqs={faqs} title="AC Repair in Alvin TX — Frequently Asked Questions" schemaId="faq-ac-repair-alvin" />
        </div>
      </section>
    </>
  );
}
