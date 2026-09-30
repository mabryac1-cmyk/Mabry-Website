/**
 * crm-catalog.ts — SOURCE OF TRUTH feed for the website.
 *
 * Fetches the retail-only catalog the CRM publishes (the Mabry Retail Price Book)
 * and turns it into serializable price maps the site overlays on its own structure.
 * Equipment prices then come from ONE place — the CRM — so the website can never
 * drift from the technician/customer Price Book.
 *
 * RETAIL ONLY: the feed carries no wholesale, margin, or formula. Fetched on the
 * server with short-lived caching (ISR) so a CRM "Publish" propagates in a few
 * minutes with no redeploy.
 */
import { sectionSystemType, furnaceBtuSize } from "./pricing";

const CRM_URL =
  process.env.CRM_PRICEBOOK_URL || "https://mabry-ac-crm-production.up.railway.app/api/price-book/public-catalog";
const REVALIDATE_SECONDS = 300; // 5 min — how fast a CRM Publish shows on the site

// Last-known fallbacks so a page never breaks if the feed is briefly unreachable.
const FALLBACK_STARTING = { value: 12140, choice: 13637, premier: 18272 };

export interface CrmPriceMaps {
  systemPrices: Record<string, number>;   // `${systemType}|${family}|${tonnage}`
  furnacePrices: Record<string, number>;  // `${series}|${btu}`
  addOnPrices: Record<string, number>;    // add-on id → price
  startingByTier: Record<string, number>; // tier → lowest GAS complete-system retail
  meta: { published: boolean; source: string; publishedAt: string };
}

export async function getCrmPriceMaps(): Promise<CrmPriceMaps | null> {
  try {
    const res = await fetch(CRM_URL, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) throw new Error(`CRM feed HTTP ${res.status}`);
    const cat: any = await res.json();
    if (!Array.isArray(cat.models) || cat.models.length === 0) throw new Error("CRM feed empty");

    const systemPrices: Record<string, number> = {};
    for (const m of cat.models) for (const [t, p] of Object.entries(m.prices || {})) systemPrices[`${m.systemType}|${m.shortName}|${t}`] = p as number;

    const furnacePrices: Record<string, number> = {};
    for (const f of cat.furnaces || []) for (const [b, p] of Object.entries(f.prices || {})) furnacePrices[`${f.series}|${b}`] = p as number;

    const addOnPrices: Record<string, number> = {};
    for (const a of cat.addOns || []) addOnPrices[a.id] = a.price;

    // "Starting at" = lowest GAS complete-system retail per tier — the basis the
    // headline cards have always used (electric/heat-pump run cheaper w/o a furnace,
    // which would silently change what the card means).
    const startingByTier: Record<string, number> = {};
    for (const m of cat.models) {
      if (m.systemType !== "gas") continue;
      const tier = String(m.tier || "").toLowerCase();
      for (const p of Object.values(m.prices || {})) {
        const price = p as number;
        if (startingByTier[tier] == null || price < startingByTier[tier]) startingByTier[tier] = price;
      }
    }

    return {
      systemPrices, furnacePrices, addOnPrices, startingByTier,
      meta: { published: !!cat.published, source: cat.source || "", publishedAt: cat.publishedAt || "" },
    };
  } catch (e) {
    console.error("[crm-catalog] falling back to bundled prices:", (e as Error).message);
    return null;
  }
}

/** Convenience for server components (PricingBand, city schema, hero cards): the
 *  per-tier "Starting at" prices, fed from the CRM with last-known fallbacks so the
 *  page always renders. */
export async function getStartingPrices(): Promise<{ value: number; choice: number; premier: number }> {
  const maps = await getCrmPriceMaps();
  return {
    value: maps?.startingByTier.value ?? FALLBACK_STARTING.value,
    choice: maps?.startingByTier.choice ?? FALLBACK_STARTING.choice,
    premier: maps?.startingByTier.premier ?? FALLBACK_STARTING.premier,
  };
}

export const fmtUSD = (n: number) => "$" + n.toLocaleString("en-US");

// Overlay lookups for the wizard (return undefined when the feed doesn't cover it).
export function crmSystemPrice(maps: CrmPriceMaps | null, systemType: string, family: string, tonnage: string): number | undefined {
  return maps?.systemPrices[`${systemType}|${family}|${tonnage}`];
}
export function crmFurnacePrice(maps: CrmPriceMaps | null, model: string): number | undefined {
  if (!maps) return undefined;
  const series = model.toUpperCase().slice(0, 4);
  const btu = furnaceBtuSize(model).replace("k", "");
  return maps.furnacePrices[`${series}|${btu}`];
}
export function crmAddOnPrice(maps: CrmPriceMaps | null, id: string): number | undefined {
  return maps?.addOnPrices[id];
}

export { sectionSystemType };
