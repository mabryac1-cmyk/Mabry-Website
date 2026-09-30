/**
 * Shared pricing structured data (schema.org ItemList of tiered install Offers).
 * Mirrors the visible <PricingBand> and the /pricing page so on-page prices are
 * backed by machine-readable data on every city page.
 *
 * SOURCE OF TRUTH: the tier prices are fed from the CRM's published catalog (same
 * feed as /pricing and PricingBand), so the SEO data can never drift. Async because
 * it fetches the feed — callers await it in their server component.
 */
import { getStartingPrices } from "./crm-catalog";

export async function pricingMainEntity(opts: {
  cityName: string;
  state: string;
  phone: string; // e.g. "281-331-5248"
  serviceName: string;
  license: string;
}) {
  const { cityName, state, phone, serviceName, license } = opts;
  const starting = await getStartingPrices();
  const provider = { "@id": "https://mabryac.com/#business" };
  const areaServed = { "@type": "City", name: cityName, addressRegion: state };

  const tier = (name: string, description: string, price: string) => ({
    "@type": "Service",
    name,
    description,
    provider,
    areaServed,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://mabryac.com/pricing",
      priceValidUntil: "2026-12-31",
    },
  });

  return {
    "@type": "ItemList",
    name: `HVAC Services & Installation Pricing in ${cityName}, ${state}`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: serviceName,
          provider,
          areaServed,
          telephone: `+1-${phone}`,
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: tier(
          `RunTru by Trane AC & Heating System Installation in ${cityName}, TX — Value Tier`,
          `Complete new RunTru by Trane AC and heating system installation for ${cityName} homeowners. Fully installed by our licensed Texas HVAC technicians (${license}). Family-owned and operated since 1986.`,
          starting.value.toFixed(2)
        ),
      },
      {
        "@type": "ListItem",
        position: 3,
        item: tier(
          `Trane Single-Stage AC & Heating System Installation in ${cityName}, TX — Choice Tier`,
          `Complete new Trane single-stage AC and heating system installation for ${cityName} homeowners — our most popular installation tier. Fully installed by our licensed Texas HVAC technicians (${license}). Family-owned since 1986.`,
          starting.choice.toFixed(2)
        ),
      },
      {
        "@type": "ListItem",
        position: 4,
        item: tier(
          `Trane TruComfort Variable-Speed AC & Heating System Installation in ${cityName}, TX — Premier Tier`,
          `Complete new Trane TruComfort variable-speed AC and heating system installation for ${cityName} homeowners — Trane's flagship Premier tier with whisper-quiet operation and lowest utility bills. Fully installed by our licensed Texas HVAC technicians (${license}). Family-owned since 1986.`,
          starting.premier.toFixed(2)
        ),
      },
    ],
  };
}
