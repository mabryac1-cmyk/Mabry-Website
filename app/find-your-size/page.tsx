import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Phone, CheckCircle, Home, Ruler, Wrench, Sun } from "lucide-react";
import SizingTool from "@/components/SizingTool";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Find Your AC Size | Free HVAC Sizing Estimator | Mabry's AC & Heating",
  description:
    "Get a ballpark estimate of the right AC & heating system size for your Alvin, Friendswood, Pearland or Greater Houston home. Free, instant, no email required.",
  alternates: {
    canonical: "/find-your-size",
  },
};

const sizingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Find Your AC Size — Free HVAC Sizing Estimator",
  description:
    "Free interactive tool to estimate the proper size AC and heating system for your Greater Houston home based on square footage, home age, windows, sun exposure, and other key factors.",
  url: "https://mabryac.com/find-your-size",
  about: {
    "@type": "HVACBusiness",
    "@id": "https://mabryac.com/#business",
  },
  provider: {
    "@type": "HVACBusiness",
    "@id": "https://mabryac.com/#business",
  },
};

export default function FindYourSizePage() {
  return (
    <>
      <Script
        id="sizing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sizingSchema) }}
      />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Find Your AC Size
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-6">
            Not sure what size AC and heating system your home needs? Answer a few
            quick questions and we&apos;ll give you an instant ballpark estimate — free,
            no email required. It&apos;s a great starting point before scheduling an
            in-home evaluation.
          </p>
          <div className="flex flex-wrap gap-4 items-center mb-6">
            <a
              href="tel:2813315248"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              281-331-5248
            </a>
            <a
              href="tel:2814828400"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              281-482-8400
            </a>
          </div>
          <div className="flex flex-wrap gap-4 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent" />
              License {businessInfo.license}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent" />
              BBB A+ Accredited
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-accent" />
              Serving Greater Houston Since 1986
            </span>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Free Interactive Estimator
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Six Quick Questions. Instant Result.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Answer the questions below and your recommended system size updates
            live. When you&apos;re ready to see pricing for that size, one click takes
            you straight to our transparent installation quotes.
          </p>
        </div>
      </section>

      {/* Sizing Tool */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SizingTool />

          {/* Disclosure footnote */}
          <div className="max-w-4xl mx-auto mt-10 bg-white border-l-4 border-accent rounded-r-lg p-6 shadow-sm">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-primary">Please note:</span> This
              sizing tool provides a general &quot;ball park&quot; estimate based
              on the information you enter. Actual system sizing depends on many
              build variables — insulation quality, ductwork condition, home
              orientation, window placement, air-sealing, and more — that only an
              in-home evaluation can properly assess. Every home is different. For
              an accurate recommendation and quote,{" "}
              <Link href="/contact" className="text-accent font-bold hover:underline">
                schedule a free in-home consultation
              </Link>{" "}
              with one of our comfort advisors.
            </p>
          </div>
        </div>
      </section>

      {/* Why Proper Sizing Matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Why Proper Sizing Matters
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Getting the size right is one of the most important decisions in
            replacing an HVAC system. Here&apos;s why it matters — and what can go
            wrong when a system is sized incorrectly.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: "Comfort",
                desc: "An oversized system cycles on and off too quickly — cooling the air but never removing enough humidity. You feel clammy even at 72°.",
              },
              {
                icon: Sun,
                title: "Efficiency",
                desc: "An undersized system runs constantly on hot Houston days, driving up electric bills and never quite catching up during peak afternoons.",
              },
              {
                icon: Wrench,
                title: "Longevity",
                desc: "Both oversized and undersized systems wear out faster. Proper sizing lets the equipment run at its designed sweet spot for years longer.",
              },
              {
                icon: Ruler,
                title: "Real Evaluation",
                desc: "This tool is a starting point. A full Manual J load calculation done in-home accounts for orientation, ductwork, insulation, and air sealing.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for an Exact Quote?
          </h2>
          <p className="text-white/80 mb-8">
            Now that you have a ballpark size, see our upfront installation pricing
            or schedule a free in-home evaluation for an exact quote tailored to
            your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg transition-colors text-center"
            >
              See Installation Pricing →
            </Link>
            <a
              href="tel:2813315248"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              281-331-5248
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
