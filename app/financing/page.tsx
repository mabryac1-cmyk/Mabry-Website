import { Metadata } from "next";
import { Phone, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Financing | New AC & Heating Systems | Mabry's AC & Heating",
  description: "Finance a new AC & heating system for as low as $38/week with approved credit. Fast, easy application. Serving the Greater Houston area. Call 281-331-5248.",
  alternates: {
    canonical: "/financing",
  },
};

const SFC_FINANCING_URL = "https://apply.svcfin.com/home/dealerAuthentication?id=400303655&key=1742219857";

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            HVAC Financing
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

          {/* Phone numbers */}
          <div className="pt-2">
            <p className="text-center text-sm font-bold text-primary uppercase tracking-wider mb-4">
              Questions? Call Us:
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:2813315248"
                className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                South &amp; Southwest Houston: 281-331-5248
              </a>
              <a
                href="tel:2814828400"
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5" />
                Bay Area &amp; Southeast Houston: 281-482-8400
              </a>
            </div>
          </div>

          {/* Disclosure */}
          <div className="border-t pt-8">
            <p className="text-xs text-muted-foreground leading-relaxed text-center">
              <strong>Financing Disclosure:</strong> *Financing example based on a financed amount of $11,500 at 9.99% APR for 120 months with a monthly payment of approximately $151.80 ($35.06/week). Actual payment depends on amount financed and loan terms selected. 100% financing available with approved credit through participating lenders; standard rates apply. Financing terms are subject to change without notice. Financing applies to new equipment purchases and installations only. Promotional pricing, special offers, and discounts cannot be combined with rebates, coupons, other promotional offers, manufacturer incentives, or other discounts unless explicitly stated in writing. Service Finance Company, LLC | FHA Title I Lender.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
