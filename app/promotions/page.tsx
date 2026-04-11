import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, CreditCard, DollarSign, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "HVAC Promotions & Special Offers | Mabry's AC & Heating | Houston Area",
  description: "Special offers on AC tune-ups, AC repairs, and flexible financing for new HVAC systems. Finance a new AC & heating system for as low as $38/week. Serving the Greater Houston area.",
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* ── Limited-Time Special Offers ── */}
          <div>
            <h2 className="text-3xl font-bold text-primary text-center mb-10">
              Limited-Time Special Offers
            </h2>

            <div className="grid md:grid-cols-3 gap-8 items-start">

              {/* ── Card 1: $89 Tune-Up ── */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-accent overflow-hidden flex flex-col">
                {/* Badge */}
                <div className="bg-accent text-white text-center py-3 px-4">
                  <span className="text-xs font-bold uppercase tracking-widest">Special Offer — Now Through May 15, 2026</span>
                </div>

                <div className="px-6 py-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary text-center mb-1">
                    Pre-Season AC Tune-Up
                  </h3>
                  <p className="text-center text-muted-foreground text-sm mb-4">
                    Get your AC ready before the Houston summer heat arrives
                  </p>

                  {/* Price */}
                  <div className="bg-primary rounded-xl py-4 px-4 text-center mb-5">
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Special Promotional Price</p>
                    <p className="text-5xl font-bold text-white">$89</p>
                    <p className="text-accent text-sm font-semibold mt-1">Standard Residential Systems</p>
                  </div>

                  {/* What's included */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">What's Included:</p>
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
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Phone buttons */}
                  <div className="mt-auto">
                    <p className="text-center text-xs font-bold text-primary mb-3 uppercase tracking-wider">Call to Schedule:</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:2813315248"
                        className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        281-331-5248
                      </a>
                      <a
                        href="tel:2814828400"
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        281-482-8400
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Card 2: $38/week Financing ── */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-accent overflow-hidden flex flex-col">
                {/* Badge */}
                <div className="bg-accent text-white text-center py-3 px-4">
                  <span className="text-xs font-bold uppercase tracking-widest">Special Offer</span>
                </div>

                <div className="px-6 py-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary text-center mb-1">
                    New AC & Heating System
                  </h3>
                  <p className="text-center text-muted-foreground text-sm mb-4">
                    Don't let cost stand between your family and a comfortable home
                  </p>

                  {/* Price */}
                  <div className="bg-primary rounded-xl py-4 px-4 text-center mb-5">
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Complete System — Fully Installed</p>
                    <p className="text-white font-bold leading-none mt-2">
                      <span className="text-2xl">As Low As</span>
                    </p>
                    <p className="text-5xl font-bold text-white mt-1">
                      $38<span className="text-xl font-semibold text-white/80">/week</span><span className="text-accent text-lg">*</span>
                    </p>
                    <p className="text-white/70 text-xs mt-2">With approved credit through participating lenders</p>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Why Finance With Us:</p>
                    <ul className="space-y-2">
                      {[
                        "100% financing available with approved credit",
                        "Flexible terms to fit your budget",
                        "Fast & easy application process",
                        "New system installed same day or next day",
                        "All major brands available",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply Now button */}
                  <div className="mt-auto flex flex-col gap-2">
                    <a
                      href={SFC_FINANCING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
                    >
                      Apply Now →
                    </a>
                    <a
                      href="tel:2813315248"
                      className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Learn More
                    </a>
                  </div>
                </div>
              </div>

              {/* ── Card 3: 10% Off AC Repair ── */}
              <div className="bg-white rounded-2xl shadow-xl border-2 border-accent overflow-hidden flex flex-col">
                {/* Badge */}
                <div className="bg-accent text-white text-center py-3 px-4">
                  <span className="text-xs font-bold uppercase tracking-widest">Special Offer</span>
                </div>

                <div className="px-6 py-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-primary text-center mb-1">
                    AC Repair Discount
                  </h3>
                  <p className="text-center text-muted-foreground text-sm mb-4">
                    Save on your next AC or heating repair service call
                  </p>

                  {/* Discount callout */}
                  <div className="bg-primary rounded-xl py-4 px-4 text-center mb-5">
                    <p className="text-white/80 text-xs font-semibold uppercase tracking-wider mb-1">Repair Service Discount</p>
                    <p className="text-5xl font-bold text-white">10%</p>
                    <p className="text-accent text-sm font-semibold mt-1">Off Any AC or Heating Repair</p>
                  </div>

                  {/* Details */}
                  <div className="mb-6">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Offer Details:</p>
                    <ul className="space-y-2">
                      {[
                        "Applies to AC & heating repair services",
                        "All major brands serviced",
                        "Experienced, licensed technicians",
                        "Same-day service available",
                        "No hidden fees — upfront pricing",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      * Applies to repair services only. Does not apply to new equipment purchases or installations.
                    </p>
                  </div>

                  {/* Phone buttons */}
                  <div className="mt-auto">
                    <p className="text-center text-xs font-bold text-primary mb-3 uppercase tracking-wider">Call to Schedule:</p>
                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:2813315248"
                        className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        281-331-5248
                      </a>
                      <a
                        href="tel:2814828400"
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        281-482-8400
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── Financing Available ── */}
          <div>
            <h2 className="text-3xl font-bold text-primary text-center mb-2">
              Financing Available
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let cost stand between your family and a comfortable home. Flexible financing options make a new AC and heating system more affordable than you think.
            </p>

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
              <strong>Promotional Pricing & Financing Disclosure:</strong> $89 AC tune-up special valid through May 15, 2026 on standard residential systems only. 10% repair discount applies to repair services only and does not apply to new equipment purchases or installations. Promotional pricing, special offers, and discounts cannot be combined with rebates, coupons, other promotional offers, manufacturer incentives, promotional financing offers, or other discounts unless explicitly stated in writing. *Financing example based on a financed amount of $11,500 at 9.99% APR for 120 months with a monthly payment of approximately $151.80 ($35.06/week). Actual payment depends on amount financed and loan terms selected. 100% financing available with approved credit through participating lenders; standard rates apply. Financing terms are subject to change without notice. Service Finance Company, LLC | FHA Title I Lender.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Questions About Our Special Offers or Financing?</h2>
          <p className="text-white/80 mb-6">Call us — we're happy to walk you through your options.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2813315248"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" /> 281-331-5248
            </a>
            <a
              href="tel:2814828400"
              className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-primary font-bold py-3 px-6 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" /> 281-482-8400
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
