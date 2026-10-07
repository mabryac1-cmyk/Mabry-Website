import Link from "next/link";
import { Wrench, CheckCircle, Flame } from "lucide-react";
import { getStartingPrices, fmtUSD } from "@/lib/crm-catalog";

/**
 * Visible, transparent pricing band (Caleb visible-pricing playbook).
 * Two price-forward cards: $79 service call + "new system from $X" (links to /pricing).
 * Used on the homepage and every city page so it stays consistent.
 *
 * SOURCE OF TRUTH: the "new system from" price is fed from the CRM's published
 * catalog (same feed as /pricing), so it can never drift. The $79 service call is a
 * fixed flat rate. This is a server component, so every page that renders it gets the
 * live price automatically with no per-page changes.
 */
const SERVICE_CALL_PRICE = "$79";

/**
 * SEASONAL PROMO RIBBON — sits above the two permanent price cards and mirrors the
 * current offer on /promotions. ⚠️ SWAP THIS EACH SEASON so it never goes stale:
 *   Fall/Winter → "Heater Tune-Up"   |   Spring/Summer → "AC Tune-Up"
 * Set active:false to hide it between promos. Keep it in sync with the /promotions page.
 */
const SEASONAL_PROMO = {
  active: true,
  label: "Fall Special",
  offer: "$79 Heater Tune-Up",
  tagline: "Get your heat checked before winter",
  validThrough: "Now through March 31, 2027",
  href: "/promotions",
};

export async function PricingBand({ className = "bg-white pt-10 pb-2" }: { className?: string }) {
  const starting = await getStartingPrices();
  const NEW_SYSTEM_FROM_PRICE = fmtUSD(starting.value);
  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {SEASONAL_PROMO.active && (
          <Link
            href={SEASONAL_PROMO.href}
            className="mb-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-2xl border border-accent/40 bg-accent/10 px-5 py-3 text-center transition-all hover:border-accent hover:shadow-md group"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-white shrink-0">
              <Flame className="w-3.5 h-3.5 shrink-0" /> {SEASONAL_PROMO.label}
            </span>
            <span className="text-base sm:text-lg font-black text-primary">{SEASONAL_PROMO.offer}</span>
            <span className="text-muted-foreground text-sm hidden sm:inline">— {SEASONAL_PROMO.tagline}</span>
            <span className="text-muted-foreground text-xs">· {SEASONAL_PROMO.validThrough}</span>
            <span className="text-accent font-semibold text-sm group-hover:underline shrink-0">See details →</span>
          </Link>
        )}
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
