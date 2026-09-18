import Link from "next/link";
import { Wrench, CheckCircle } from "lucide-react";

/**
 * Visible, transparent pricing band (Caleb visible-pricing playbook).
 * Two price-forward cards: $79 service call + "new system from $X" (links to /pricing).
 * Used on the homepage and every city page so it stays consistent and
 * future price changes happen in ONE place.
 *
 * ⚠️ Prices below are brand-wide and must stay in sync with lib/pricing.ts,
 * the /pricing hero cards, and the city Offer schemas. When Trane pricing
 * changes: update lib/pricing.ts first, then update these two values.
 */
const SERVICE_CALL_PRICE = "$79";
const NEW_SYSTEM_FROM_PRICE = "$12,140";

export function PricingBand({ className = "bg-white pt-10 pb-2" }: { className?: string }) {
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Service call price */}
          <div className="flex items-start gap-4 bg-accent/5 border border-accent/20 rounded-2xl p-6">
            <div className="w-12 h-12 shrink-0 bg-accent/15 rounded-xl flex items-center justify-center text-accent">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-primary leading-tight">{SERVICE_CALL_PRICE} Flat-Rate Service Call</div>
              <p className="text-muted-foreground text-sm mt-1">
                We come out, diagnose the problem, and walk you through the fix — no overtime charges, no surprises.
              </p>
            </div>
          </div>
          {/* New system starting price */}
          <Link
            href="/pricing"
            className="flex items-start gap-4 bg-primary/5 border border-primary/15 rounded-2xl p-6 hover:border-accent hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl font-black text-primary leading-tight">New AC &amp; Heating Systems from {NEW_SYSTEM_FROM_PRICE}</div>
              <p className="text-muted-foreground text-sm mt-1">
                Complete installations — flat-rate and transparent.{" "}
                <span className="text-accent font-semibold group-hover:underline">See full pricing →</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
