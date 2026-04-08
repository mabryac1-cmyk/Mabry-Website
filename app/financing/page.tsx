import { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, DollarSign, ClipboardList, Wrench } from "lucide-react";

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

      {/* Main Apply Now section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Big callout */}
          <div className="bg-primary rounded-2xl p-10 text-center mb-10 shadow-xl">
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-2">New Complete AC & Heating System</p>
            <p className="text-6xl lg:text-7xl font-bold text-white leading-none">$38</p>
            <p className="text-2xl font-semibold text-white/80 mt-1">per week<span className="text-accent">*</span></p>
            <p className="text-white/60 text-sm mt-3">With approved credit through participating lenders</p>
            <a
              href={SFC_FINANCING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white font-bold py-5 px-12 rounded-xl text-xl transition-colors mt-8 w-full sm:w-auto"
            >
              <DollarSign className="w-6 h-6" />
              Apply Now — It Only Takes Minutes
            </a>
            <p className="text-white/50 text-xs mt-4">Applying does not affect your credit score</p>
          </div>

          {/* How it works */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
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
                  desc: "Our licensed technicians install your new system — same day or next day in most cases.",
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
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">What Financing Covers</h2>
            <ul className="space-y-3">
              {[
                "Complete new AC & heating system — fully installed",
                "All major brands: Trane, Carrier, Lennox, Rheem, Goodman, American Standard",
                "Proper load calculation and sizing for your home",
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

          {/* Questions — call us */}
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
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
            <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              <strong>Financing Disclosure:</strong> *Financing example based on a financed amount of $11,500 at 9.99% APR for 120 months with a monthly payment of approximately $151.80 ($35.06/week). Actual payment depends on amount financed and loan terms selected. 100% financing available with approved credit through participating lenders; standard rates apply. Financing terms are subject to change without notice. Financing applies to new equipment purchases and installations only. Service Finance Company, LLC | FHA Title I Lender.
            </p>
          </div>

        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h2>
          <p className="text-white/80 mb-6">Apply online now or call us to discuss your options — we make it simple.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SFC_FINANCING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Apply Now →
            </a>
            <a
              href="tel:2813315248"
              className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 text-primary font-bold py-3 px-8 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5" /> 281-331-5248
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
