import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Phone, CheckCircle, DollarSign, Wrench, Home, Zap } from "lucide-react";
import PricingTool from "@/components/PricingTool";
import { businessInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "HVAC Pricing | Mabry's AC & Heating — Alvin & Friendswood TX",
  description:
    "Transparent, upfront HVAC pricing for Alvin, Friendswood, Pearland & Greater Houston. See exact Trane & RunTru installation costs plus service & repair pricing. No hidden fees, no surprises.",
  alternates: {
    canonical: "/pricing",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "HVAC Pricing — Mabry's Air Conditioning & Heating",
  description:
    "Transparent HVAC installation and repair pricing for Greater Houston homeowners. Trane and RunTru equipment pricing, service call rates, and repair costs.",
  url: "https://mabryac.com/pricing",
  about: {
    "@type": "HVACBusiness",
    "@id": "https://mabryac.com/#business",
  },
  mainEntity: {
    "@type": "ItemList",
    name: "HVAC Pricing",
    description: "Upfront pricing for HVAC installation and repair services",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "HVAC Service Call & Diagnostic",
          description:
            "Flat $79 service call — full system diagnosis and upfront written quote before any work begins. No hourly charges, no hidden fees.",
          provider: { "@id": "https://mabryac.com/#business" },
          areaServed: "Greater Houston, TX",
          offers: {
            "@type": "Offer",
            price: "79.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://mabryac.com/pricing",
            priceValidUntil: "2026-12-31",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "RunTru by Trane AC & Heating Installation — Value Tier",
          description:
            "Complete RunTru by Trane AC and heating system installation, fully installed. Reliable Trane quality at our most accessible price point. Up to 15.2 SEER2. Serving Alvin, Friendswood, Pearland and the Greater Houston area.",
          provider: { "@id": "https://mabryac.com/#business" },
          areaServed: "Greater Houston, TX",
          offers: {
            "@type": "Offer",
            price: "11480.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://mabryac.com/pricing",
            priceValidUntil: "2026-12-31",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "11480.00",
              priceCurrency: "USD",
              valueAddedTaxIncluded: false,
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Trane Single-Stage AC & Heating Installation — Standard Tier",
          description:
            "Complete Trane single-stage AC and heating system installation, fully installed. Our most popular tier — legendary Trane reliability with quiet, efficient performance. Up to 16 SEER2. Serving Alvin, Friendswood, Pearland and the Greater Houston area.",
          provider: { "@id": "https://mabryac.com/#business" },
          areaServed: "Greater Houston, TX",
          offers: {
            "@type": "Offer",
            price: "12660.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://mabryac.com/pricing",
            priceValidUntil: "2026-12-31",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "12660.00",
              priceCurrency: "USD",
              valueAddedTaxIncluded: false,
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Trane TruComfort Variable-Speed AC & Heating Installation — Premium Tier",
          description:
            "Complete Trane TruComfort variable-speed AC and heating system installation, fully installed. Trane's flagship variable-speed system — whisper-quiet operation, precisely controlled comfort, and the lowest energy bills. Up to 18 SEER2. Serving Alvin, Friendswood, Pearland and the Greater Houston area.",
          provider: { "@id": "https://mabryac.com/#business" },
          areaServed: "Greater Houston, TX",
          offers: {
            "@type": "Offer",
            price: "17357.00",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: "https://mabryac.com/pricing",
            priceValidUntil: "2026-12-31",
            priceSpecification: {
              "@type": "PriceSpecification",
              price: "17357.00",
              priceCurrency: "USD",
              valueAddedTaxIncluded: false,
            },
          },
        },
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "AC & Heating Repair",
          description:
            "Flat-rate residential HVAC repair pricing. Diagnosis fee waived when repair is performed. Upfront quote before any work begins. Serving Alvin, Friendswood, Pearland and the Greater Houston area.",
          provider: { "@id": "https://mabryac.com/#business" },
          areaServed: "Greater Houston, TX",
        },
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <>
      <Script
        id="pricing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Honest Pricing. No Hidden Fees.
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-6">
            Most HVAC companies won&apos;t show you prices online. We will. We&apos;ve published our
            full pricing — equipment installation costs and service & repair rates — because we believe
            homeowners deserve to know what things cost before anyone shows up at their door.
            No hourly charges. No surprises. Flat-rate pricing, every time.
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

      {/* Installation Tier Cards — Option B (visible pricing above the wizard) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Authorized Trane® Dealer
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              New AC & Heating System Installation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-3">
              Complete system pricing starting at these amounts — fully installed by our licensed technicians.
              Use the tool below to build your exact quote based on your home&apos;s specific needs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Serving Alvin, Friendswood, Pearland &amp; Greater Houston since 1986.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Value Tier — RunTru */}
            <div className="rounded-2xl border-2 border-gray-200 p-8 bg-gray-50 shadow-sm flex flex-col">
              <div className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">
                Value Tier
              </div>
              <h3 className="text-2xl font-black text-primary mb-2">RunTru by Trane</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Reliable Trane quality at our most accessible price point. A major upgrade for budget-conscious homeowners.
              </p>
              <div className="mb-6">
                <span className="text-sm text-gray-600">Starting at</span>
                <div className="text-4xl font-black text-primary">$11,480</div>
                <div className="text-xs text-gray-500 mt-1">Complete system, fully installed</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Up to 15.2 SEER2 efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Full manufacturer warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Professional installation included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>AC + heating system, complete</span>
                </li>
              </ul>
            </div>

            {/* Standard Tier — Trane Single-Stage (Most Popular) */}
            <div className="relative rounded-2xl border-2 border-accent p-8 bg-white shadow-xl flex flex-col">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow">
                Most Popular
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                Standard Tier
              </div>
              <h3 className="text-2xl font-black text-primary mb-2">Trane Single-Stage</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Our most popular tier — legendary Trane reliability with quiet, efficient performance at a smart price.
              </p>
              <div className="mb-6">
                <span className="text-sm text-gray-600">Starting at</span>
                <div className="text-4xl font-black text-primary">$12,660</div>
                <div className="text-xs text-gray-500 mt-1">Complete system, fully installed</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Up to 16 SEER2 efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Quieter than standard systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Full manufacturer warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Professional installation included</span>
                </li>
              </ul>
            </div>

            {/* Premium Tier — Trane TruComfort */}
            <div className="rounded-2xl border-2 border-primary/20 p-8 bg-primary/5 shadow-sm flex flex-col">
              <div className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
                Premium Tier
              </div>
              <h3 className="text-2xl font-black text-primary mb-2">Trane TruComfort®</h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Trane&apos;s flagship variable-speed system. Whisper-quiet, precisely controlled comfort, and the lowest energy bills.
              </p>
              <div className="mb-6">
                <span className="text-sm text-gray-600">Starting at</span>
                <div className="text-4xl font-black text-primary">$17,357</div>
                <div className="text-xs text-gray-500 mt-1">Complete system, fully installed</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-grow">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Up to 18 SEER2 efficiency</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Variable-speed for precise comfort</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Whisper-quiet operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span>Lowest monthly utility bills</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center max-w-2xl mx-auto">
            <p className="text-sm text-gray-600 mb-3">
              Final price depends on system size, configuration, and home-specific factors like ductwork and electrical requirements.
              Every quote is honest and upfront — no hidden fees.
            </p>
            <p className="text-base text-primary font-bold">
              ↓ Get your exact price with the tool below ↓
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tool */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingTool />
        </div>
      </section>

      {/* What affects your final price */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-4">
            What Might Affect Your Final Price
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-10">
            Our published prices cover standard installations. Here are the most common
            variables that can add to the final cost — we&apos;ll always quote any extras
            upfront before work begins.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Home,
                title: "Ductwork",
                desc: "If your existing ductwork needs repairs, modifications, or replacement to properly support the new system, that will be quoted separately.",
              },
              {
                icon: Zap,
                title: "Electrical",
                desc: "Older homes sometimes need electrical upgrades — a new dedicated circuit or disconnect box — to safely support modern high-efficiency equipment.",
              },
              {
                icon: Wrench,
                title: "Access & Location",
                desc: "Attic installs, tight crawlspaces, or difficult access locations (like enclosed closets) may require additional labor time.",
              },
              {
                icon: DollarSign,
                title: "Permits",
                desc: "Some cities in our service area require a mechanical permit for HVAC installations. Where required, permit fees are passed through at cost.",
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
            Ready to Schedule?
          </h2>
          <p className="text-white/80 mb-8">
            Use the price tool above to get your number, then give us a call or fill out
            our form. We&apos;ll confirm availability and get you on the schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2813315248"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              281-331-5248
            </a>
            <a
              href="tel:2814828400"
              className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              281-482-8400
            </a>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-lg transition-colors text-center"
            >
              Get a Quote Online →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
