import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, CreditCard, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Promotions & Financing | Mabry's AC & Heating | Alvin & Friendswood TX",
  description: "Special offers on AC tune-ups and flexible financing for new HVAC systems. Finance a new AC & heating system for as low as $38/week. Serving Alvin, Friendswood & Pearland TX.",
  alternates: {
    canonical: "/promotions",
  },
};

const SFC_FINANCING_URL = "https://apply.svcfin.com/home/dealerAuthentication?id=400303655&key=1742219857";

export default function PromotionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Promotions & Financing
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Special offers and flexible financing options for Alvin, Friendswood, Pearland & surrounding Houston-area homeowners.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* ── Tune-Up Special ── */}
          <div>
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Limited-Time Special Offer
            </h2>

            <div className="max-w-lg mx-auto">
              <div className="relative bg-white rounded-2xl shadow-xl border-2 border-accent overflow-hidden">

                {/* Badge */}
                <div className="bg-accent text-white text-center py-3 px-6">
                  <span className="text-sm font-bold uppercase tracking-widest">Special Offer — Now Through May 15, 2026</span>
                </div>

                {/* WOW burst */}
                <div className="flex justify-center mt-6 mb-2">
                  <div className="relative flex items-center justify-center">
                    <svg viewBox="0 0 120 120" className="w-28 h-28 text-accent" fill="currentColor">
                      <polygon points="60,0 67,40 100,20 80,50 120,55 85,68 105,100 68,83 65,120 52,83 15,100 35,68 0,55 40,50 20,20 53,40" />
                    </svg>
                    <div className="absolute text-white text-center leading-tight">
                      <div className="text-xs font-bold uppercase">WOW</div>
                      <div className="text-xs font-semibold">SPECIAL</div>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8">
                  <h3 className="text-2xl font-bold text-primary text-center mb-1">
                    Pre-Season AC Tune-Up
                  </h3>
                  <p className="text-center text-muted-foreground mb-4">
                    Get your AC ready before the Houston summer heat arrives
                  </p>

                  {/* Price */}
                  <div className="bg-primary rounded-xl py-5 px-6 text-center mb-6">
                    <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-1">Special Promotional Price</p>
                    <p className="text-6xl font-bold text-white">$89</p>
                    <p className="text-accent font-semibold mt-1">Standard Residential Systems</p>
                  </div>

                  {/* What's included */}
                  <div className="mb-6">
                    <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">What's Included:</p>
                    <ul className="space-y-2">
                      {[
                        "Refrigerant level check",
                        "Capacitor & contactor inspection",
                        "Condenser coil inspection",
                        "Condensate drain flush",
                        "Thermostat calibration & test",
                        "Electrical connections check",
                        "Overall system performance check",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Schedule Now — phone buttons */}
                  <div>
                    <p className="text-center text-sm font-bold text-primary mb-3">Call to Schedule:</p>
                    <div className="flex flex-col gap-3">
                      <a
                        href="tel:2813315248"
                        className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        Alvin / Manvel / Sienna: 281-331-5248
                      </a>
                      <a
                        href="tel:2814828400"
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        Friendswood / Pearland / Clear Lake: 281-482-8400
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Financing ── */}
          <div>
            <h2 className="text-3xl font-bold text-primary text-center mb-2">
              Financing Available
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let cost stand between your family and a comfortable home. Flexible financing options make a new AC and heating system more affordable than you think.
            </p>

            {/* $38/week callout */}
            <div className="bg-primary rounded-2xl p-8 text-center mb-8 max-w-2xl mx-auto">
              <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">New Complete AC & Heating System</p>
              <p className="text-5xl lg:text-6xl font-bold text-white mb-2">
                As Low As $38<span className="text-2xl font-semibold text-white/80">/week</span><span className="text-accent">*</span>
              </p>
              <p className="text-white/70 text-sm">With approved credit through participating lenders</p>
            </div>

            {/* Two cards */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">

              {/* Financing card */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <DollarSign className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">100% Financing Available<span className="text-accent">*</span></h3>
                <p className="text-muted-foreground text-sm mb-4">With approved credit</p>
                <a
                  href={SFC_FINANCING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Apply Now →
                </a>
              </div>

              {/* Credit cards card */}
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <CreditCard className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">All Major Credit Cards Accepted</h3>
                <p className="text-muted-foreground text-sm mb-4">Visa, Mastercard, Amex, Discover</p>
                <div className="flex flex-col gap-2 w-full">
                  <a
                    href="tel:2813315248"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" /> 281-331-5248
                  </a>
                  <a
                    href="tel:2814828400"
                    className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4" /> 281-482-8400
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Disclosure ── */}
          <div className="border-t pt-8">
            <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              <strong>Promotional Pricing & Financing Disclosure:</strong> $89 AC tune-up special valid through May 15, 2026 on standard residential systems only. Promotional pricing may not be combined with financing offers, other discounts, coupons, or special promotions unless explicitly stated. *Financing example based on a financed amount of $11,500 at 9.99% APR for 120 months with a monthly payment of approximately $151.80 ($35.06/week). Actual payment depends on amount financed and loan terms selected. 100% financing available with approved credit through participating lenders; standard rates apply. Financing terms are subject to change without notice. Service Finance Company, LLC | FHA Title I Lender.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Questions About Financing or Our Special Offer?</h2>
          <p className="text-white/80 mb-6">Call us — we're happy to walk you through your options.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2813315248"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" /> Alvin: 281-331-5248
            </a>
            <a
              href="tel:2814828400"
              className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-primary font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" /> Friendswood: 281-482-8400
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
