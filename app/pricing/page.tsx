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
        name: "Service Call",
        description: "Flat $79 service call — diagnosis and upfront quote before any work begins",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "AC Installation",
        description:
          "Full system installation pricing for Trane TruComfort, Trane single-stage, and RunTru equipment",
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
              Call Alvin: 281-331-5248
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
