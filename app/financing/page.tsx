import { Metadata } from "next";
import { Phone, DollarSign, CheckCircle, ClipboardList, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Financing from $38/Week | New AC & Heating | Mabry's Alvin & Houston Area",
  description: "Finance a new AC & heating system for as low as $38/week with approved credit. 100% financing available. Serving Alvin, Friendswood, Pearland & Greater Houston. Call 281-331-5248.",
  alternates: {
    canonical: "/financing",
  },
};

const financingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "HVAC Financing — Mabry's AC & Heating",
  "url": "https://mabryac.com/financing",
  "description": "Finance a new AC and heating system for as low as $38/week with approved credit through Mabry's AC & Heating.",
  "mainEntity": {
    "@type": "Offer",
    "name": "HVAC System Financing",
    "description": "Finance a new complete AC and heating system installed by Mabry's licensed technicians. 100% financing available with approved credit. Payments from $38/week.",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "38",
      "priceCurrency": "USD",
      "unitText": "WK"
    },
    "availability": "https://schema.org/InStock",
    "areaServed": [
      "Alvin, TX", "Friendswood, TX", "Pearland, TX", "Sugar Land, TX",
      "Clear Lake, TX", "League City, TX", "Bellaire, TX"
    ],
    "seller": {
      "@type": "HVACBusiness",
      "name": "Mabry's Air Conditioning & Heating, Inc.",
      "url": "https://mabryac.com",
      "telephone": "281-331-5248"
    }
  }
};

const SFC_FINANCING_URL = "https://apply.svcfin.com/home/dealerAuthentication?id=400303655&key=1742219857";

export default function FinancingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financingSchema) }}
      />
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Finance a New AC &amp; Heating System — As Low As $38/Week
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Don't let cost stand between your family and a comfortable home. Get a new AC & heating system today with flexible financing options.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          {/* Box 1 — Special Offer */}
          <div className="bg-primary rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-accent text-white text-center py-3 px-4">
              <span className="text-sm font-bold uppercase tracking-widest">Special Offer</span>
            </div>
            <div className="p-10 text-center">
              <p className="text-white/80 text-base font-semibold mb-3">
                Get a New Complete AC &amp; Heating System
              </p>
              <p className="text-7xl font-bold text-white leading-none">$38</p>
              <p className="text-2xl font-semibold text-white/80 mt-2">
                per week<span className="text-accent">*</span>
              </p>
              <p className="text-white/60 text-sm mt-3">
                With approved credit through participating lenders
              </p>
            </div>
          </div>

          {/* Box 2 — Apply Here */}
          <div className="bg-white rounded-2xl shadow-xl border-2 border-accent overflow-hidden">
            <div className="p-10 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">
                100% Financing Available<span className="text-accent">*</span>
              </p>
              <a
                href={SFC_FINANCING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white font-bold py-5 px-10 rounded-xl text-xl transition-colors w-full"
              >
                <DollarSign className="w-6 h-6 shrink-0" />
                Apply Here — It Only Takes a Moment
              </a>
              <p className="text-muted-foreground text-xs mt-4">
                Applying does not affect your credit score
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary text-center mb-8">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: ClipboardList,
                  step: "1",
                  title: "Apply Online",
                  desc: "Complete the simple online application in just a few minutes from your phone or computer.",
                },
                {
                  icon: CheckCircle,
                  step: "2",
                  title: "Get Approved",
                  desc: "Receive a fast financing decision. Once approved, we confirm your installation date.",
                },
                {
                  icon: Wrench,
                  step: "3",
                  title: "Get It Installed",
                  desc: "Our licensed technicians arrive on your scheduled day and install your new system.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">Step {item.step}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What's covered */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">What Financing Covers</h2>
            <ul className="space-y-3">
              {[
                "New AC & heating system or equipment — fully installed",
                "Licensed installation by our certified HVAC technicians",
                "100% financing available with approved credit — no money down",
                "Flexible loan terms to fit your monthly budget",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Phone numbers */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-primary text-center mb-2">Have Questions?</h2>
            <p className="text-center text-muted-foreground mb-6">
              Call us — we're happy to walk you through the financing process before you apply.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:2813315248"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                281-331-5248
              </a>
              <a
                href="tel:2814828400"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                281-482-8400
              </a>
            </div>
          </div>

          {/* Disclosure */}
          <div className="border-t pt-8">
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              <strong>Financing Disclosure:</strong> *Financing example based on a financed amount of $11,500 at 9.99% APR for 120 months with a monthly payment of approximately $151.80 ($35.06/week). Actual payment depends on amount financed and loan terms selected. 100% financing available with approved credit through participating lenders; standard rates apply. Financing terms are subject to change without notice. Financing applies to new equipment purchases and installations only. Promotional pricing, special offers, and discounts cannot be combined with rebates, coupons, other promotional offers, manufacturer incentives, promotional financing offers, or other discounts unless explicitly stated in writing. Service Finance Company, LLC | FHA Title I Lender.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
