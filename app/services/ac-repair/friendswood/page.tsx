import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { GoalCompletionBlock } from "@/components/GoalCompletionBlock";
import { businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench, Shield, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Same-Day AC Repair Friendswood TX | Mabry's Air Conditioning & Heating",
  description: "Same-day AC repair in Friendswood TX. Flat-rate pricing, no extra charge for evenings or weekends. Serving the 77546 & 77549 zip codes since 1986. BBB A+. Call 281-482-8400.",
  alternates: { canonical: "/services/ac-repair/friendswood" },
};

const faqs = [
  {
    question: "How much does AC repair cost in Friendswood TX?",
    answer: "Common AC repairs in Friendswood typically range from $150–$600. Capacitor replacements run $150–$350. Refrigerant recharges (with leak check) run $200–$450. Condensate drain clearing — one of our most common Friendswood calls due to Gulf Coast humidity — runs $100–$200. We use flat-rate pricing: you know the exact cost before we start.",
  },
  {
    question: "Why is my AC struggling with the humidity in Friendswood?",
    answer: "Friendswood's proximity to Clear Lake and Galveston Bay means elevated humidity year-round. A properly functioning AC removes both heat and moisture from your home. If your AC is running but the house feels humid and clammy, your system may be low on refrigerant, have a dirty evaporator coil, or be oversized (short-cycling). We can diagnose which issue you're dealing with.",
  },
  {
    question: "Do you charge extra for evening or weekend calls in Friendswood?",
    answer: "No. We use flat-rate pricing with no extra charge for evenings or weekends — ever. The price you're quoted is what you pay, regardless of when we show up.",
  },
  {
    question: "How quickly can you respond to AC emergencies in Friendswood?",
    answer: "We offer same-day service for most AC repairs in Friendswood's 77546 and 77549 zip codes. Call our dedicated Friendswood line at 281-482-8400 — you'll reach a local team, not a call center.",
  },
  {
    question: "What neighborhoods in Friendswood do you serve?",
    answer: "We serve all of Friendswood including Forest of Friendswood, West Ranch, Sunmeadow, Autumn Creek, Polly Ranch Estates, Heritage Park, communities along FM 518 and FM 2351, and all of the 77546 and 77549 zip codes.",
  },
];

const content = `
  <h2>AC Repair in Friendswood, TX — Fast, Reliable Service Since 1986</h2>
  <p>When your AC breaks down in Friendswood's summer heat — with humidity from nearby Clear Lake and Galveston Bay making every degree feel worse — you need it fixed today. Mabry's Air Conditioning &amp; Heating has been Friendswood's trusted AC repair company since 1986. Call our dedicated Friendswood line at 281-482-8400 and reach a local team that knows your neighborhood.</p>

  <h3>Common AC Problems We Fix in Friendswood</h3>
  <ul>
    <li><strong>AC not blowing cold air</strong> — Low refrigerant, failed capacitor, or a dirty evaporator coil. All common in Friendswood during the peak cooling season.</li>
    <li><strong>AC running but house stays humid and warm</strong> — Gulf Coast humidity means your AC must remove moisture as well as heat. If it's not dehumidifying properly, refrigerant levels or coil cleanliness are likely the issue.</li>
    <li><strong>Condensate drain clogged</strong> — One of our most frequent Friendswood calls. High Gulf Coast humidity fills condensate drain pans fast. An overflowing pan causes water damage to ceilings and walls — don't wait on this one.</li>
    <li><strong>AC stopped working suddenly</strong> — Failed capacitor, tripped breaker, or burnt contactor. We carry common parts on every truck for same-day repairs.</li>
    <li><strong>AC not keeping up in the afternoon heat</strong> — If your system struggles when it's hottest, it may be low on refrigerant, have a dirty filter restricting airflow, or need coil cleaning.</li>
    <li><strong>AC freezing up</strong> — Turn the system off. Ice on the coils means restricted airflow or low refrigerant. Running it further damages the compressor.</li>
    <li><strong>AC making strange noises</strong> — Squealing, grinding, or rattling all have specific causes. A quick diagnosis now prevents a larger repair bill later.</li>
  </ul>

  <h3>What Does AC Repair Cost in Friendswood, TX?</h3>
  <p>Our flat-rate pricing means you get the exact cost before work begins — no surprises:</p>
  <ul>
    <li>Capacitor replacement: $150–$350</li>
    <li>Refrigerant recharge (with leak check): $200–$450</li>
    <li>Condensate drain clear &amp; treat: $100–$200</li>
    <li>Contactor replacement: $150–$300</li>
    <li>Compressor or major repairs: $400–$1,200+</li>
  </ul>
  <p>No overtime charges. No after-hours fees. No hidden charges on the invoice.</p>

  <h3>We Know Friendswood's Homes and Neighborhoods</h3>
  <p>Friendswood's established neighborhoods — many with homes built in the 1970s and 1980s near FM 518 and Friendswood High School — sit alongside newer developments in West Ranch and communities along FM 2351. We've worked in all of them for nearly four decades.</p>
  <p>Older Friendswood homes in Forest of Friendswood, Polly Ranch Estates, and Heritage Park often have ductwork and equipment that's seen one or two replacement cycles. Newer West Ranch and Autumn Creek homes have modern systems that benefit most from regular maintenance under Gulf Coast humidity conditions. Whatever your home's age, we've been here long enough to know its HVAC history.</p>

  <h3>Repair or Replace? Honest Guidance Every Time</h3>
  <p>We won't push you toward a new system if a repair makes sense. The general benchmark: if repair cost exceeds half the price of a new comparable system and your unit is 10+ years old, replacement is usually the wiser investment. In Friendswood's climate, AC units average 12–15 years. We'll give you a straight answer.</p>

  <h3>Why Friendswood Homeowners Choose Mabry's</h3>
  <ul>
    <li>Dedicated Friendswood service line — 281-482-8400</li>
    <li>Nearly 40 years serving the 77546 and 77549 zip codes</li>
    <li>Flat-rate pricing — no overtime charges, no hidden fees</li>
    <li>BBB A+ Accredited — multiple BBB Gold Star Award winner</li>
    <li>Voted Favorite AC Company</li>
    <li>Licensed Texas HVAC contractor (TACLB12058E)</li>
    <li>Family-owned — you talk to us directly, not a national dispatch center</li>
  </ul>
`;

const crossLinks = [
  { href: "/services/ac-installation/friendswood", label: "AC Installation in Friendswood" },
  { href: "/services/heating-repair/friendswood", label: "Heating Repair in Friendswood" },
  { href: "/services/ac-maintenance/friendswood", label: "AC Maintenance in Friendswood" },
];

export default function AcRepairFriendswoodPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://mabryac.com/services/ac-repair/friendswood",
    name: "AC Repair in Friendswood, TX",
    serviceType: "AC Repair",
    description: "Same-day residential AC repair in Friendswood, TX. Flat-rate pricing, all makes and models. BBB A+ rated. License TACLB12058E.",
    provider: { "@type": "HVACBusiness", "@id": "https://mabryac.com/#business" },
    areaServed: { "@type": "City", name: "Friendswood", addressRegion: "TX" },
    telephone: "+1-281-482-8400",
  };

  return (
    <>
      <Script id="schema-ac-repair-friendswood" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6 text-sm">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
            <span className="text-white/60">/</span>
            <Link href="/services/ac-repair" className="text-white/80 hover:text-white transition-colors">AC Repair</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Friendswood</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            AC Repair in Friendswood, TX — Trusted Since 1986
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-6">
            AC broke down in the Friendswood heat and humidity? Dedicated Friendswood line: 281-482-8400. Flat-rate pricing, all makes and models, no extra charge for evenings or weekends.
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
              { icon: Clock, title: "Same-Day Service", desc: "Fast response for Friendswood homeowners" },
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
          <div className="elfsight-app-b3584e39-3dd0-448f-a2f3-f6bcd278e919" data-elfsight-app-lazy></div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <GoalCompletionBlock
                answerParagraph="AC not cooling in Friendswood? Call 281-482-8400 for same-day service. Flat-rate pricing — we tell you the cost before we start. No extra charge for evenings or weekends."
                phoneButtons={[{ label: "Call Friendswood", number: "281-482-8400", tel: "2814828400" }]}
                servingText="Same-day AC repair: Friendswood, League City, Clear Lake, Deer Park, Pasadena & surrounding areas"
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
                <h4 className="font-bold text-primary mb-2">AC Not Working in Friendswood? Call Now.</h4>
                <p className="text-muted-foreground mb-4">Same-day service available. Flat-rate pricing — know your cost before we start.</p>
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
          <FAQSection faqs={faqs} title="AC Repair in Friendswood TX — Frequently Asked Questions" schemaId="faq-ac-repair-friendswood" />
        </div>
      </section>
    </>
  );
}
