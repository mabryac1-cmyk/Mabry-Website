// Mabry AC — Price Book Data & Formulas
// Source: Hunton Distribution / Trane price book (account 13315248)
// Generated 05/22/2026. Update list prices here when Trane raises prices.

export type Brand = "trane" | "runtru";
export type SystemType = "gas" | "electric" | "heatpump" | "condcoil";

export type FormulaKey =
  | "trucomfort_system"
  | "trane_single_system"
  | "trane_condcoil"
  | "runtru_system"
  | "runtru_condcoil";

export interface ModelInfo {
  id: string;
  brand: Brand;
  systemType: SystemType;
  shortName: string;
  longName: string;
  tier: string;
  formula: FormulaKey;
  // tonnage string ("2", "2.5", "3", "3.5", "4", "5", etc.) -> system list price
  prices: Record<string, number>;
}

// === FORMULAS ===
// Returns the final customer-facing quote price for a given list price + formula.
export function quotePrice(listPrice: number, formula: FormulaKey): number {
  const taxMarkup = 1.12; // 12% covers taxes, financing, overhead, unforeseen misc
  const operatingMultiplier = 1.05; // 5% operating cost inflation adjustment (effective 2026-06-11)
  switch (formula) {
    case "trucomfort_system":
      // TruComfort variable-speed full system (5TTV8X gas/elec, 5TWV8X HP)
      return Math.round(((listPrice + 1000 + 300) * taxMarkup + 9500) * operatingMultiplier);
    case "trane_single_system":
      // Trane single-stage full system (5TTR6, 5TTR4, 5TWR6, 5TWR4)
      return Math.round(((listPrice + 300) * taxMarkup + 8500) * operatingMultiplier);
    case "trane_condcoil":
      // Trane single-stage condenser + coil only
      return Math.round(((listPrice + 300) * taxMarkup + 5500) * operatingMultiplier);
    case "runtru_system":
      // RunTru full system (A5AC5 gas/elec, A5HP5 HP)
      return Math.round(((listPrice + 300) * taxMarkup + 8000) * operatingMultiplier);
    case "runtru_condcoil":
      // RunTru condenser + coil only
      return Math.round(((listPrice + 300) * taxMarkup + 5000) * operatingMultiplier);
  }
}

// === ADD-ONS ===
export const ADD_ONS = [
  {
    id: "media_filter",
    name: "Media Filter Filtration System",
    price: 879,
    availableOn: ["gas", "electric", "heatpump", "condcoil"] as SystemType[],
  },
  {
    id: "uv_light",
    name: "UV Light System",
    price: 589,
    availableOn: ["gas", "electric", "heatpump", "condcoil"] as SystemType[],
  },
  {
    id: "ext_warranty",
    name: "10-Year Parts & Labor Extended Warranty",
    price: 895,
    availableOn: ["gas", "electric", "heatpump"] as SystemType[], // complete systems only
  },
] as const;

// === MODELS & LIST PRICES ===
// All list prices verified by Tom Mabry against vendor PDF on 2026-06-02.
export const MODELS: ModelInfo[] = [
  // ===== TRANE TRUCOMFORT (variable speed, system-only, no half tons) =====
  {
    id: "5ttv8x_gas",
    brand: "trane",
    systemType: "gas",
    shortName: "5TTV8X",
    longName: "TruComfort Variable Speed — Gas System",
    tier: "Premium",
    formula: "trucomfort_system",
    prices: { "2": 5894, "3": 6615, "4": 7328, "5": 7867 },
  },
  {
    id: "5ttv8x_electric",
    brand: "trane",
    systemType: "electric",
    shortName: "5TTV8X",
    longName: "TruComfort Variable Speed — Electric System",
    tier: "Premium",
    formula: "trucomfort_system",
    prices: { "2": 4977, "3": 5762, "4": 6798, "5": 7657 },
  },
  {
    id: "5twv8x_hp",
    brand: "trane",
    systemType: "heatpump",
    shortName: "5TWV8X",
    longName: "TruComfort Variable Speed — Heat Pump System",
    tier: "Premium",
    formula: "trucomfort_system",
    prices: { "2": 5573, "3": 6502, "4": 7683, "5": 8687 },
  },

  // ===== TRANE SINGLE-STAGE =====
  {
    id: "5ttr6_gas",
    brand: "trane",
    systemType: "gas",
    shortName: "5TTR6",
    longName: "15-16 SEER Single-Stage — Gas System",
    tier: "Standard",
    formula: "trane_single_system",
    prices: { "1.5": 3600, "2": 3888, "2.5": 4117, "3": 4281, "3.5": 4565, "4": 4834, "5": 5334 },
  },
  {
    id: "5ttr6_electric",
    brand: "trane",
    systemType: "electric",
    shortName: "5TTR6",
    longName: "15-16 SEER Single-Stage — Electric System",
    tier: "Standard",
    formula: "trane_single_system",
    prices: { "1.5": 2955, "2": 3275, "2.5": 3533, "3": 4009, "3.5": 4241, "4": 4417, "5": 5161 },
  },
  {
    id: "5ttr4_electric",
    brand: "trane",
    systemType: "electric",
    shortName: "5TTR4",
    longName: "14 SEER Single-Stage — Electric System",
    tier: "Standard",
    formula: "trane_single_system",
    prices: { "1.5": 2876, "2": 3011, "2.5": 3232, "3": 3437, "3.5": 3870, "4": 4008, "5": 4681 },
  },
  {
    id: "5twr6_hp",
    brand: "trane",
    systemType: "heatpump",
    shortName: "5TWR6",
    longName: "15-16 SEER Single-Stage — Heat Pump System",
    tier: "Standard",
    formula: "trane_single_system",
    prices: { "1.5": 3644, "2": 3929, "2.5": 4167, "3": 4631, "3.5": 4848, "4": 5363, "5": 5698 },
  },
  {
    id: "5twr4_hp",
    brand: "trane",
    systemType: "heatpump",
    shortName: "5TWR4",
    longName: "14 SEER Single-Stage — Heat Pump System",
    tier: "Standard",
    formula: "trane_single_system",
    // Note: 1.5T omitted — no system bundle in vendor PDF
    prices: { "2": 3483, "2.5": 3705, "3": 3910, "3.5": 4345, "4": 4480, "5": 5145 },
  },

  // ===== TRANE COND+COIL ONLY =====
  {
    id: "5ttr6_condcoil",
    brand: "trane",
    systemType: "condcoil",
    shortName: "5TTR6",
    longName: "15-16 SEER Condenser + Coil Only",
    tier: "Standard",
    formula: "trane_condcoil",
    prices: { "1.5": 2520, "2": 2808, "2.5": 2926, "3": 3200, "3.5": 3384, "4": 3673, "5": 4024 },
  },
  {
    id: "5ttr4_condcoil",
    brand: "trane",
    systemType: "condcoil",
    shortName: "5TTR4",
    longName: "14 SEER Condenser + Coil Only",
    tier: "Standard",
    formula: "trane_condcoil",
    prices: { "1.5": 2441, "2": 2544, "2.5": 2625, "3": 2863, "3.5": 3003, "4": 3141, "5": 3544 },
  },

  // ===== RUNTRU =====
  {
    id: "a5ac5_gas",
    brand: "runtru",
    systemType: "gas",
    shortName: "A5AC5",
    longName: "15 SEER2 Single-Stage — Gas System",
    tier: "Value",
    formula: "runtru_system",
    prices: { "1.5": 2928, "2": 3079, "2.5": 3304, "3": 3541, "3.5": 3701, "4": 3910, "5": 4475 },
  },
  {
    id: "a5ac5_electric",
    brand: "runtru",
    systemType: "electric",
    shortName: "A5AC5",
    longName: "15 SEER2 Single-Stage — Electric System",
    tier: "Value",
    formula: "runtru_system",
    prices: { "1.5": 2319, "2": 2479, "2.5": 2608, "3": 2796, "3.5": 3014, "4": 3385, "5": 3951 },
  },
  {
    id: "a5hp5_hp",
    brand: "runtru",
    systemType: "heatpump",
    shortName: "A5HP5",
    longName: "15 SEER2 Single-Stage — Heat Pump System",
    tier: "Value",
    formula: "runtru_system",
    prices: { "1.5": 2765, "2": 3002, "2.5": 3163, "3": 3360, "3.5": 3804, "4": 3971, "5": 4552 },
  },
  {
    id: "a5ac5_condcoil",
    brand: "runtru",
    systemType: "condcoil",
    shortName: "A5AC5",
    longName: "15 SEER2 Condenser + Coil Only",
    tier: "Value",
    formula: "runtru_condcoil",
    prices: { "1.5": 2116, "2": 2221, "2.5": 2478, "3": 2495, "3.5": 2765, "4": 3045, "5": 3405 },
  },
];

// === HELPERS ===
export function getBrandModels(brand: Brand): ModelInfo[] {
  return MODELS.filter((m) => m.brand === brand);
}

export function getModelsByBrandAndType(brand: Brand, systemType: SystemType): ModelInfo[] {
  return MODELS.filter((m) => m.brand === brand && m.systemType === systemType);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const BRAND_INFO: Record<Brand, { name: string; tagline: string }> = {
  trane: { name: "Trane", tagline: "Premium & Standard tier equipment" },
  runtru: { name: "RunTru by Trane", tagline: "Value tier equipment" },
};

// ============================================================================
// SERVICE & REPAIR PRICING
// Source: Service Price List 2026 (effective 05/01/26)
// "All items not listed shall be quoted thru office. Prices subject to change."
// ============================================================================

export interface ServiceItem {
  id: string;
  name: string;
  price?: number;                      // flat price
  priceRange?: [number, number];       // range display
  additionalPrice?: number;            // for "first/additional" pricing
  additionalLabel?: string;            // e.g. "each additional unit"
  note?: string;                       // inline subtle note
  officeQuote?: boolean;               // show "Call Office" instead of a price
}

export interface ServiceCategory {
  id: string;
  name: string;
  description?: string;
  warning?: string;                    // red warning banner at top of category
  items: ServiceItem[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "service-calls",
    name: "Service Calls & Checkups",
    items: [
      { id: "service-call", name: "Service Call (Arrival & Diagnosis)", price: 79, note: "No hourly charges, ever" },
      { id: "ac-checkup", name: "A/C Checkup", price: 89, additionalPrice: 79, additionalLabel: "each additional unit" },
      { id: "heater-checkup", name: "Heater Checkup", price: 79, additionalPrice: 69, additionalLabel: "each additional unit" },
      { id: "real-estate-inspect", name: "Real Estate Inspection (A/C + Heater)", price: 159, additionalPrice: 139, additionalLabel: "each additional system" },
    ],
  },
  {
    id: "refrigerant",
    name: "Refrigerant",
    description: "Recharge for R-410A, R-454B, and R-32 systems",
    warning: "EPA R-22 Phaseout in Effect — R-22 refrigerant service is no longer available",
    items: [
      { id: "recharge-low", name: "Recharge — Suction Below 50 psi", price: 239 },
      { id: "recharge-high", name: "Recharge — Suction Above 50 psi", price: 149 },
      { id: "filter-drier", name: "Filter / Drier Change Out", price: 860 },
      { id: "exp-valve", name: "Expansion Valve Replacement", price: 1360, note: "If serviceable" },
      { id: "leak-check", name: "Leak Check / Locate", price: 360, note: "No guarantee" },
    ],
  },
  {
    id: "fan-motors",
    name: "Fan Motors",
    items: [
      { id: "condenser-fan", name: "Condenser Fan Motor", price: 519, note: "Variable speed = office quote" },
      { id: "blower-small", name: "Blower Motor — 1/3 to 1/2 HP", priceRange: [679, 869] },
      { id: "blower-large", name: "Blower Motor — 3/4 to 1 HP", priceRange: [789, 1260] },
      { id: "blower-ecm", name: "Blower Motor — ECM Variable Speed", officeQuote: true, note: "Many require factory OEM motors only and programming" },
    ],
  },
  {
    id: "electrical-condenser",
    name: "Electrical Controls — Condenser",
    items: [
      { id: "contactor", name: "Contactor", price: 139 },
      { id: "start-kit", name: "Start Kit", price: 239 },
      { id: "soft-start-icm", name: "Soft Start Kit — ICM", price: 569 },
      { id: "cap-single", name: "Capacitor (Single)", price: 89 },
      { id: "cap-dual", name: "Capacitor (Dual)", price: 149 },
      { id: "disconnect", name: "Disconnect (includes whip)", price: 469 },
      { id: "hp-controls", name: "Heat Pump Controls", officeQuote: true },
    ],
  },
  {
    id: "electrical-heater",
    name: "Electrical Controls — Heater / Air Handler",
    items: [
      { id: "transformer", name: "Transformer", price: 269 },
      { id: "sequencer", name: "Sequencer", price: 269 },
      { id: "gas-valve", name: "Gas Valve", officeQuote: true },
      { id: "pressure-switch", name: "Pressure Switch", price: 569 },
      { id: "float-switch", name: "Float Switch", price: 269 },
      { id: "circuit-board", name: "Computer / Circuit Board", officeQuote: true },
      { id: "ignitor", name: "Ignitor", price: 239 },
      { id: "flame-sensor", name: "Flame Sensor", price: 219 },
      { id: "inducer-motor", name: "Inducer Motor Assembly", officeQuote: true },
    ],
  },
  {
    id: "thermostats",
    name: "Thermostats",
    items: [
      { id: "tstat-digital", name: "Digital Thermostat (Basic)", price: 239 },
      { id: "tstat-wifi", name: "WiFi Digital Thermostat (Honeywell)", price: 469 },
      { id: "tstat-controller", name: "Model-Specific Thermostat / Controller", officeQuote: true },
    ],
  },
  {
    id: "ductwork",
    name: "Ductwork",
    items: [
      { id: "duct-drop", name: "Duct — Per Drop", price: 480 },
      { id: "plenum", name: "Plenum", price: 1560, note: "Includes new collars & jumpers" },
    ],
  },
  {
    id: "accessories-service",
    name: "Accessories",
    items: [
      { id: "uv-service", name: "UV Light (24V only)", price: 649, note: "Must be accessible" },
      { id: "media-service", name: "Media Filter (Non-Electronic)", price: 1179 },
      { id: "refrigerant-lines", name: "Refrigerant Lines (up to 50 ft)", price: 2679 },
    ],
  },
  {
    id: "cleaning",
    name: "Cleaning",
    items: [
      { id: "drain-blowout", name: "Drain Line — CO₂ Cartridge Blowout", price: 79, note: "No guarantee. Clogged drains may require customer to contact a plumber." },
      { id: "evap-clean", name: "Evaporator Coil Cleaning", officeQuote: true, note: "Typically not permitted" },
    ],
  },
];

export const SYSTEM_TYPE_INFO: Record<SystemType, { name: string; description: string }> = {
  gas: { name: "Gas Heat System", description: "Outdoor unit + gas furnace + coil" },
  electric: { name: "Electric Heat System", description: "Outdoor unit + air handler with heat strips" },
  heatpump: { name: "Heat Pump System", description: "Outdoor heat pump + air handler" },
  condcoil: { name: "Condenser + Coil Only", description: "Outdoor unit + coil replacement" },
};

// ============================================================================
// PRICING V2 (added 2026-09-05, coexists with legacy above — Phase 1)
// New formula: base = wholesale × 1.11, then + tier profit, then + controller
// (if Premier/Priority on complete_system or standalone_condenser).
// Legacy MODELS/quotePrice above are untouched — UI still consumes them.
// Phase 2 will wire the UI to consume V2 directly.
// ============================================================================

export type Tier = "premier" | "priority" | "choice" | "value";

export type Scenario =
  | "complete_system"
  | "cond_coil"
  | "standalone_condenser"
  | "standalone_coil"
  | "standalone_furnace"
  | "standalone_ah"
  | "standalone_small";

export interface ComboParts {
  type: string;
  furn?: string;
  furnCost?: number;
  coil?: string;
  coilCost?: number;
  ah?: string;
  ahCost?: number;
  hk?: string;
  hkCost?: number;
  volt?: string;
  indoorDims?: string;
  seer2: string;
  eer2: string;
  hspf2?: string;
  ccap2: string;
  ahri: string;
}

export interface TonnageEntry {
  model: string;
  condCost: number;
  condDims: string;
  combo: ComboParts;
}

export type SectionKey =
  | "split_gas"
  | "split_electric"
  | "split_hp"
  | "cond_coil"
  | "runtru_gas_elec"
  | "runtru_electric"
  | "runtru_cond_coil"
  | "runtru_hp";

export interface SystemV2 {
  key: string;
  base: string;
  section: SectionKey;
  tier: Tier;
  seriesLabel: string;
  tonnages: Record<string, TonnageEntry>;
}

export interface StandaloneFurnace {
  model: string;
  cost: number;
}

// Retail pricing constants
const TAX_FINANCE_MULT = 1.11;

// Profit targets by scenario+tier ($). Undefined = tier not permitted for scenario.
const PROFIT_TABLE: Record<Scenario, Partial<Record<Tier, number>>> = {
  complete_system:      { premier: 10500, priority: 9500, choice: 9500, value: 8750 },
  cond_coil:            { choice: 7000, value: 5500 }, // Premier/Priority NOT allowed
  standalone_condenser: { premier: 4500, priority: 4500, choice: 4500, value: 4500 },
  standalone_coil:      { premier: 4500, priority: 4500, choice: 4500, value: 4500 },
  standalone_furnace:   { premier: 5500, priority: 5500, choice: 5500, value: 5500 },
  standalone_ah:        { premier: 5500, priority: 5500, choice: 5500, value: 5500 },
  standalone_small:     { premier: 250,  priority: 250,  choice: 250,  value: 250  },
};

// $1,000 controller add for Premier/Priority when it's a complete system or
// a standalone condenser sale (they physically require the Trane Link controller).
function controllerAdd(tier: Tier, scenario: Scenario): number {
  if (tier !== "premier" && tier !== "priority") return 0;
  if (scenario === "complete_system" || scenario === "standalone_condenser") return 1000;
  return 0;
}

export function calcRetail(wholesaleTotal: number, tier: Tier, scenario: Scenario): number {
  const profit = PROFIT_TABLE[scenario]?.[tier];
  if (profit === undefined) {
    throw new Error(`Tier "${tier}" is not permitted for scenario "${scenario}"`);
  }
  const base = Math.round(wholesaleTotal * TAX_FINANCE_MULT);
  return base + profit + controllerAdd(tier, scenario);
}

// Sum the itemized wholesale costs for a given system+tonnage.
export function systemWholesale(sys: SystemV2, tonnage: string): number {
  const t = sys.tonnages[tonnage];
  if (!t) throw new Error(`Tonnage ${tonnage} not available for ${sys.key}`);
  const c = t.combo;
  return (
    t.condCost +
    (c.furnCost ?? 0) +
    (c.coilCost ?? 0) +
    (c.ahCost ?? 0) +
    (c.hkCost ?? 0)
  );
}

// Compute the customer-facing retail price for a full system+tonnage.
export function systemRetail(sys: SystemV2, tonnage: string): number {
  const wholesale = systemWholesale(sys, tonnage);
  const scenario: Scenario =
    sys.section === "cond_coil" || sys.section === "runtru_cond_coil"
      ? "cond_coil"
      : "complete_system";
  return calcRetail(wholesale, sys.tier, scenario);
}

// ============================================================================
// DATA SOURCE OF TRUTH
// ============================================================================
// Sourced from: Hunton Distribution / Trane price book PDF dated 06/29/2026.
// Local file: ~/Desktop/06-29-0026 Trane.pdf
//
// WHEN TRANE PUBLISHES A NEW PRICE BOOK, refresh EVERY field for the affected
// models — condCost, furnCost, coilCost, ahri, seer2, eer2, hspf2, ccap2,
// dimensions. Model numbers themselves can change. Do NOT just update prices.
//
// The System Details expander on /pricing surfaces AHRI cert numbers, SEER2/
// EER2/HSPF2 ratings, and physical dimensions to customers for use in warranty
// registration and tax/utility rebate paperwork. Stale data here shows up in
// customers' rebate applications, so refresh promptly after each Trane update.
// ============================================================================
export const SYSTEMS_V2: SystemV2[] = [
  {
    key: "5TTV0X__split_gas",
    base: "5TTV0X",
    section: "split_gas",
    tier: "premier" as Tier,
    seriesLabel: "Premier Series 20 Variable Speed",
    tonnages: {
      "2": {
        model: "5TTV0X24A1000*",
        condCost: 4224,
        condDims: "46H x 30W x 33D",
        combo: {
          type: "fc",
          furn: "S8V2A040M3PCB*",
          furnCost: 1780,
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          indoorDims: "34x14.5x28.75",
          seer2: "18.1",
          eer2: "11.5",
          ccap2: "21000",
          ahri: "215862931",
        },
      },
      "3": {
        model: "5TTV0X36A1000*",
        condCost: 4710,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "fc",
          furn: "S8V2B060M4PCB*",
          furnCost: 1889,
          coil: "5TXCB006AS3HC*",
          coilCost: 980,
          indoorDims: "34x17.5x28.75",
          seer2: "18.1",
          eer2: "10.5",
          ccap2: "33000",
          ahri: "215863007",
        },
      },
      "4": {
        model: "5TTV0X48A1000*",
        condCost: 5198,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "fc",
          furn: "S8V2C080M5PCB*",
          furnCost: 2000,
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          indoorDims: "34x21x28.75",
          seer2: "18.1",
          eer2: "10.5",
          ccap2: "45500",
          ahri: "215863389",
        },
      },
      "5": {
        model: "5TTV0X60A1000*",
        condCost: 5198,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "fc",
          furn: "S8V2C100M5PCB*",
          furnCost: 2059,
          coil: "5TXCC009AS3HC*",
          coilCost: 1108,
          indoorDims: "34x21x28.75",
          seer2: "20.6",
          eer2: "12.0",
          ccap2: "54500",
          ahri: "216570668",
        },
      },
    },
  },
  {
    key: "5TTV8X__split_gas",
    base: "5TTV8X",
    section: "split_gas",
    tier: "premier" as Tier,
    seriesLabel: "Premier Series 18 Variable Speed",
    tonnages: {
      "2": {
        model: "5TTV8X24A1000*",
        condCost: 3478,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "fc",
          furn: "S8V2A040M3PCB*",
          furnCost: 1780,
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          indoorDims: "34x14.5x28.75",
          seer2: "18.1",
          eer2: "11.5",
          ccap2: "21000",
          ahri: "215862931",
        },
      },
      "3": {
        model: "5TTV8X36A1000*",
        condCost: 3978,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "fc",
          furn: "S8V2B060M4PCB*",
          furnCost: 1889,
          coil: "5TXCB006AS3HC*",
          coilCost: 980,
          indoorDims: "34x17.5x28.75",
          seer2: "18.1",
          eer2: "10.5",
          ccap2: "33000",
          ahri: "215863007",
        },
      },
      "4": {
        model: "5TTV8X48A1000*",
        condCost: 4476,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "fc",
          furn: "S8V2C080M5PCB*",
          furnCost: 2000,
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          indoorDims: "34x21x28.75",
          seer2: "18.1",
          eer2: "10.5",
          ccap2: "45500",
          ahri: "215863389",
        },
      },
      "5": {
        model: "5TTV8X60A1000*",
        condCost: 4976,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "fc",
          furn: "S8V2C100M5PCB*",
          furnCost: 2059,
          coil: "5TXCC009AS3HC*",
          coilCost: 1108,
          indoorDims: "34x21x28.75",
          seer2: "18.1",
          eer2: "10.5",
          ccap2: "54500",
          ahri: "215863087",
        },
      },
    },
  },
  {
    key: "5TTR7__split_gas",
    base: "5TTR7",
    section: "split_gas",
    tier: "priority" as Tier,
    seriesLabel: "Priority Series 17 Multi-Speed",
    tonnages: {
      "2": {
        model: "5TTR7024A1000*",
        condCost: 2754,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "fc",
          furn: "S8V2A040M3PCB*",
          furnCost: 1780,
          coil: "5PXFH001AC3*",
          coilCost: 774,
          indoorDims: "34x14.5x28.75",
          seer2: "17.0",
          eer2: "12.5",
          ccap2: "23400",
          ahri: "217213096",
        },
      },
      "3": {
        model: "5TTR7036A1000*",
        condCost: 3241,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "fc",
          furn: "S8V2B060M4PCB*",
          furnCost: 1889,
          coil: "5TXCB004AS3HC*",
          coilCost: 866,
          indoorDims: "34x17.5x28.75",
          seer2: "17.0",
          eer2: "12.0",
          ccap2: "33000",
          ahri: "216567493",
        },
      },
      "4": {
        model: "5TTR7048A1000*",
        condCost: 3730,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "fc",
          furn: "S8V2C080M5PCB*",
          furnCost: 2000,
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          indoorDims: "34x21x28.75",
          seer2: "17.1",
          eer2: "12.0",
          ccap2: "43500",
          ahri: "216568143",
        },
      },
      "5": {
        model: "5TTR7060A1000*",
        condCost: 4215,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "fc",
          furn: "S8V2C100M5PCB*",
          furnCost: 2059,
          coil: "5PXFH009AZ3*",
          coilCost: 1071,
          indoorDims: "34x21x28.75",
          seer2: "16.0",
          eer2: "11.2",
          ccap2: "50000",
          ahri: "217219387",
        },
      },
    },
  },
  {
    key: "5TTR6__split_gas",
    base: "5TTR6",
    section: "split_gas",
    tier: "choice" as Tier,
    seriesLabel: "Choice Series 16 Single-Stage",
    tonnages: {
      "1.5": {
        model: "5TTR6018A1000*",
        condCost: 1742,
        condDims: "36-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "fc",
          furn: "S8X1B040M2PSC*",
          furnCost: 1142,
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          indoorDims: "34x17.5x28.75",
          seer2: "16.0",
          eer2: "12.0",
          ccap2: "18500",
          ahri: "218103175",
        },
      },
      "2": {
        model: "5TTR6024A1000*",
        condCost: 2040,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "fc",
          furn: "S8X1B040M2PSC*",
          furnCost: 1142,
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          indoorDims: "34x17.5x28.75",
          seer2: "16.0",
          eer2: "12.0",
          ccap2: "24000",
          ahri: "218103176",
        },
      },
      "2.5": {
        model: "5TTR6030A1000*",
        condCost: 2186,
        condDims: "36-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "fc",
          furn: "S8X1B060M4PSC*",
          furnCost: 1232,
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          indoorDims: "34x17.5x28.75",
          seer2: "16.0",
          eer2: "12.0",
          ccap2: "30000",
          ahri: "218103191",
        },
      },
      "3": {
        model: "5TTR6036A1000*",
        condCost: 2331,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "fc",
          furn: "S8X1B060M4PSC*",
          furnCost: 1232,
          coil: "5TXCB004AS3HC*",
          coilCost: 866,
          indoorDims: "34x17.5x28.75",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "33400",
          ahri: "218103613",
        },
      },
      "3.5": {
        model: "5TTR6042A1000*",
        condCost: 2512,
        condDims: "37-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "fc",
          furn: "S8X1B060M4PSC*",
          furnCost: 1232,
          coil: "5TXCB006AS3HC*",
          coilCost: 980,
          indoorDims: "34x17.5x28.75",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "41500",
          ahri: "218104124",
        },
      },
      "4": {
        model: "5TTR6048A1000*",
        condCost: 2694,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "fc",
          furn: "S8X1C080M5PSC*",
          furnCost: 1318,
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          indoorDims: "34x21x28.75",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "46500",
          ahri: "218104761",
        },
      },
      "5": {
        model: "5TTR6060A1000*",
        condCost: 3058,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "fc",
          furn: "S8X1C100M5PSC*",
          furnCost: 1355,
          coil: "5TXCC009AS3HC*",
          coilCost: 1108,
          indoorDims: "34x21x28.75",
          seer2: "15.2",
          eer2: "11.7",
          ccap2: "55000",
          ahri: "218105045",
        },
      },
    },
  },
  {
    key: "5TTV0X__split_electric",
    base: "5TTV0X",
    section: "split_electric",
    tier: "premier" as Tier,
    seriesLabel: "Premier Series 20 Variable Speed",
    tonnages: {
      "2": {
        model: "5TTV0X24A1000*",
        condCost: 4224,
        condDims: "46H x 30W x 33D",
        combo: {
          type: "ahe",
          ah: "5TEMCB02AV21",
          ahCost: 1634,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "20.0",
          eer2: "11.7",
          ccap2: "22000",
          ahri: "216439138",
        },
      },
      "3": {
        model: "5TTV0X36A1000*",
        condCost: 4710,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "ahe",
          ah: "5TEMCD04AV31",
          ahCost: 1964,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "21.2",
          eer2: "13.0",
          ccap2: "35600",
          ahri: "216439580",
        },
      },
      "4": {
        model: "5TTV0X48A1000*",
        condCost: 5198,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "ahe",
          ah: "5TEMCD06AV41",
          ahCost: 2515,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "21.4",
          eer2: "13.0",
          ccap2: "48000",
          ahri: "216439140",
        },
      },
      "5": {
        model: "5TTV0X60A1000*",
        condCost: 5198,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "ahe",
          ah: "5TEMCD07AV51",
          ahCost: 2900,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "19.4",
          eer2: "12.5",
          ccap2: "54500",
          ahri: "216439582",
        },
      },
    },
  },
  {
    key: "5TTV8X__split_electric",
    base: "5TTV8X",
    section: "split_electric",
    tier: "premier" as Tier,
    seriesLabel: "Premier Series 18 Variable Speed",
    tonnages: {
      "2": {
        model: "5TTV8X24A1000*",
        condCost: 3478,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "ahe",
          ah: "5TEMCB02AV21",
          ahCost: 1634,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "18.1",
          eer2: "11.2",
          ccap2: "22000",
          ahri: "215835671",
        },
      },
      "3": {
        model: "5TTV8X36A1000*",
        condCost: 3978,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "ahe",
          ah: "5TEMCD04AV31",
          ahCost: 1964,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "18.1",
          eer2: "10.0",
          ccap2: "34000",
          ahri: "215835673",
        },
      },
      "4": {
        model: "5TTV8X48A1000*",
        condCost: 4476,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "ahe",
          ah: "5TEMCD06AV41",
          ahCost: 2515,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "18.1",
          eer2: "11.0",
          ccap2: "47000",
          ahri: "215835675",
        },
      },
      "5": {
        model: "5TTV8X60A1000*",
        condCost: 4976,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "ahe",
          ah: "5TEMCD07AV51",
          ahCost: 2900,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "18.1",
          eer2: "10.0",
          ccap2: "55000",
          ahri: "215835669",
        },
      },
    },
  },
  {
    key: "5TTR7__split_electric",
    base: "5TTR7",
    section: "split_electric",
    tier: "priority" as Tier,
    seriesLabel: "Priority Series 17 Multi-Speed",
    tonnages: {
      "2": {
        model: "5TTR7024A1000*",
        condCost: 2754,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "ahe",
          ah: "5TAMXB02AV21D",
          ahCost: 2217,
          hk: "BAYEA1308BK1A",
          hkCost: 230,
          volt: "208/230/1/60",
          indoorDims: "49-7/8x17-1/2x21-3/4",
          seer2: "17.1",
          eer2: "12.5",
          ccap2: "23400",
          ahri: "216566597",
        },
      },
      "3": {
        model: "5TTR7036A1000*",
        condCost: 3241,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "ahe",
          ah: "5TAMXD04AV31D",
          ahCost: 2434,
          hk: "BAYEA1310BK1A",
          hkCost: 240,
          volt: "208/230/1/60",
          indoorDims: "56-7/8x23-1/2x21-3/4",
          seer2: "17.1",
          eer2: "12.5",
          ccap2: "33800",
          ahri: "216567391",
        },
      },
      "4": {
        model: "5TTR7048A1000*",
        condCost: 3730,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "ahe",
          ah: "5TAMXD06AV41D",
          ahCost: 2771,
          hk: "BAYEA2315BK1A",
          hkCost: 207,
          volt: "208/230/1/60",
          indoorDims: "61-3/4x23-1/2x21-3/4",
          seer2: "17.1",
          eer2: "12.5",
          ccap2: "44000",
          ahri: "216568081",
        },
      },
      "5": {
        model: "5TTR7060A1000*",
        condCost: 4215,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "ahe",
          ah: "5TAMXD07AV51D",
          ahCost: 3105,
          hk: "BAYEA2320BK1A",
          hkCost: 340,
          volt: "208/230/1/60",
          indoorDims: "61-3/4x23-1/2x21-3/4",
          seer2: "16.0",
          eer2: "11.2",
          ccap2: "51500",
          ahri: "216533244",
        },
      },
    },
  },
  {
    key: "5TTR4__split_electric",
    base: "5TTR4",
    section: "split_electric",
    tier: "choice" as Tier,
    seriesLabel: "Choice Series 14 Single-Stage",
    tonnages: {
      "1.5": {
        model: "5TTR4018A1000*",
        condCost: 1661,
        condDims: "36-3/4H x 29-3/4W x 32-5/8D",
        combo: {
          type: "ahe",
          ah: "5TEM4B02AC21S*",
          ahCost: 1199,
          hk: "81-0695-01",
          hkCost: 113,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "18400",
          ahri: "215440445",
        },
      },
      "2": {
        model: "5TTR4024A1000*",
        condCost: 1767,
        condDims: "32-3/4H x 29-3/4W x 32-5/8D",
        combo: {
          type: "ahe",
          ah: "5TEM4B02AC21S*",
          ahCost: 1199,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "24000",
          ahri: "215440449",
        },
      },
      "2.5": {
        model: "5TTR4030A1000*",
        condCost: 1874,
        condDims: "36-3/4H x 29-3/4W x 32-5/8D",
        combo: {
          type: "ahe",
          ah: "5TEM4B03AC31S*",
          ahCost: 1315,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "28800",
          ahri: "215440453",
        },
      },
      "3": {
        model: "5TTR4036A1000*",
        condCost: 1983,
        condDims: "32-3/4H x 29-3/4W x 32-5/8D",
        combo: {
          type: "ahe",
          ah: "5TEM4B04AC31S*",
          ahCost: 1418,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/4x18-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "33400",
          ahri: "218154647",
        },
      },
      "3.5": {
        model: "5TTR4042A1000*",
        condCost: 2127,
        condDims: "37-1/8H x 34-1/4W x 37-1/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "41000",
          ahri: "215440467",
        },
      },
      "4": {
        model: "5TTR4048A1000*",
        condCost: 2271,
        condDims: "45-1/8H x 34-1/4W x 37-1/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "46500",
          ahri: "215440473",
        },
      },
      "5": {
        model: "5TTR4060A1000*",
        condCost: 2561,
        condDims: "45-1/8H x 34-1/4W x 37-1/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4D07AC51S*",
          ahCost: 2040,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "55500",
          ahri: "215440917",
        },
      },
    },
  },
  {
    key: "5TTR6__split_electric",
    base: "5TTR6",
    section: "split_electric",
    tier: "choice" as Tier,
    seriesLabel: "Choice Series 16 Single-Stage",
    tonnages: {
      "1.5": {
        model: "5TTR6018A1000*",
        condCost: 1742,
        condDims: "36-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4B02AC21S*",
          ahCost: 1199,
          hk: "81-0695-01",
          hkCost: 113,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "18500",
          ahri: "218102669",
        },
      },
      "2": {
        model: "5TTR6024A1000*",
        condCost: 2040,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4B02AC21S*",
          ahCost: 1199,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "24000",
          ahri: "218102670",
        },
      },
      "2.5": {
        model: "5TTR6030A1000*",
        condCost: 2186,
        condDims: "36-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4B03AC31S*",
          ahCost: 1315,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "30600",
          ahri: "218102677",
        },
      },
      "3": {
        model: "5TTR6036A1000*",
        condCost: 2331,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "35600",
          ahri: "218102707",
        },
      },
      "3.5": {
        model: "5TTR6042A1000*",
        condCost: 2512,
        condDims: "37-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "42500",
          ahri: "218102708",
        },
      },
      "4": {
        model: "5TTR6048A1000*",
        condCost: 2694,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "46500",
          ahri: "218102709",
        },
      },
      "5": {
        model: "5TTR6060A1000*",
        condCost: 3058,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "ahe",
          ah: "5TEM4D07AC51S*",
          ahCost: 2040,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "56000",
          ahri: "218102720",
        },
      },
    },
  },
  {
    key: "5TWV0X__split_hp",
    base: "5TWV0X",
    section: "split_hp",
    tier: "premier" as Tier,
    seriesLabel: "Premier Series 20 Variable Speed",
    tonnages: {
      "2": {
        model: "5TWV0X24A1000*",
        condCost: 4824,
        condDims: "46H x 30W x 33D",
        combo: {
          type: "ahp",
          ah: "5TEMCB02AV21",
          ahCost: 1634,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "20.0",
          eer2: "11.7",
          hspf2: "9.0",
          ccap2: "22000",
          ahri: "216439314",
        },
      },
      "3": {
        model: "5TWV0X36A1000*",
        condCost: 5456,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEMCD04AV31",
          ahCost: 1964,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "19.2",
          eer2: "12.0",
          hspf2: "9.4",
          ccap2: "34600",
          ahri: "216439316",
        },
      },
      "4": {
        model: "5TWV0X48A1000*",
        condCost: 6087,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEMCD06AV41",
          ahCost: 2515,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "20.0",
          eer2: "12.0",
          hspf2: "9.4",
          ccap2: "47000",
          ahri: "216439318",
        },
      },
      "5": {
        model: "5TWV0X60A1000*",
        condCost: 6719,
        condDims: "51H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEMCD07AV51",
          ahCost: 2900,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "19.0",
          eer2: "10.5",
          hspf2: "8.7",
          ccap2: "54000",
          ahri: "216439572",
        },
      },
    },
  },
  {
    key: "5TWV8X__split_hp",
    base: "5TWV8X",
    section: "split_hp",
    tier: "premier" as Tier,
    seriesLabel: "Premier Series 18 Variable Speed",
    tonnages: {
      "2": {
        model: "5TWV8X24A1000*",
        condCost: 4095,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "ahp",
          ah: "5TEMCB02AV21",
          ahCost: 1634,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "18.1",
          eer2: "11.2",
          hspf2: "8.5",
          ccap2: "22000",
          ahri: "215835677",
        },
      },
      "3": {
        model: "5TWV8X36A1000*",
        condCost: 4743,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "ahp",
          ah: "5TEMCD04AV31",
          ahCost: 1964,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "18.1",
          eer2: "10.0",
          hspf2: "8.5",
          ccap2: "33600",
          ahri: "215835679",
        },
      },
      "4": {
        model: "5TWV8X48A1000*",
        condCost: 5393,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEMCD06AV41",
          ahCost: 2515,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "18.1",
          eer2: "11.0",
          hspf2: "8.5",
          ccap2: "46500",
          ahri: "215835681",
        },
      },
      "5": {
        model: "5TWV8X60A1000*",
        condCost: 6042,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEMCD07AV51",
          ahCost: 2900,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "18.1",
          eer2: "10.0",
          hspf2: "8.5",
          ccap2: "54500",
          ahri: "215835683",
        },
      },
    },
  },
  {
    key: "5TWR7__split_hp",
    base: "5TWR7",
    section: "split_hp",
    tier: "priority" as Tier,
    seriesLabel: "Priority Series 17 Multi-Speed",
    tonnages: {
      "2": {
        model: "5TWR7024A1000*",
        condCost: 3530,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "ahp",
          ah: "5TAMXC03AV31D",
          ahCost: 2325,
          hk: "BAYEA1308BK1A",
          hkCost: 230,
          volt: "208/230/1/60",
          indoorDims: "55-3/4x21-1/4x21-3/4",
          seer2: "17.1",
          eer2: "12.5",
          hspf2: "8.7",
          ccap2: "23800",
          ahri: "216763458",
        },
      },
      "3": {
        model: "5TWR7036A1000*",
        condCost: 4165,
        condDims: "41H x 30W x 33D",
        combo: {
          type: "ahp",
          ah: "5TAMXD04AV31D",
          ahCost: 2434,
          hk: "BAYEA1310BK1A",
          hkCost: 240,
          volt: "208/230/1/60",
          indoorDims: "56-7/8x23-1/2x21-3/4",
          seer2: "17.1",
          eer2: "12.0",
          hspf2: "9.0",
          ccap2: "33200",
          ahri: "216763770",
        },
      },
      "4": {
        model: "5TWR7048A1000*",
        condCost: 4637,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TAMXD06AV41D",
          ahCost: 2771,
          hk: "BAYEA2315BK1A",
          hkCost: 207,
          volt: "208/230/1/60",
          indoorDims: "61-3/4x23-1/2x21-3/4",
          seer2: "17.1",
          eer2: "12.0",
          hspf2: "9.0",
          ccap2: "43500",
          ahri: "216763989",
        },
      },
      "5": {
        model: "5TWR7060A1000*",
        condCost: 5433,
        condDims: "41H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TAMXD07AV51D",
          ahCost: 3105,
          hk: "BAYEA2320BK1A",
          hkCost: 340,
          volt: "208/230/1/60",
          indoorDims: "61-3/4x23-1/2x21-3/4",
          seer2: "15.2",
          eer2: "11.2",
          hspf2: "8.7",
          ccap2: "51000",
          ahri: "216770070",
        },
      },
    },
  },
  {
    key: "5TWR4__split_hp",
    base: "5TWR4",
    section: "split_hp",
    tier: "choice" as Tier,
    seriesLabel: "Choice Series 14 Single-Stage",
    tonnages: {
      "1.5": {
        model: "5TWR4018A1000*",
        condCost: 2150,
        condDims: "33H x 30W x 33D",
        combo: {
          type: "ahp",
          ah: "5TEM4B02AC21S*",
          ahCost: 1199,
          hk: "81-0695-01",
          hkCost: 113,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          hspf2: "7.5",
          ccap2: "18800",
          ahri: "215610839",
        },
      },
      "2": {
        model: "5TWR4024A1000*",
        condCost: 2254,
        condDims: "33H x 30W x 33D",
        combo: {
          type: "ahp",
          ah: "5TEM4B02AC21S*",
          ahCost: 1199,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          hspf2: "7.5",
          ccap2: "22800",
          ahri: "215610845",
        },
      },
      "2.5": {
        model: "5TWR4030A1000*",
        condCost: 2363,
        condDims: "33H x 30W x 33D",
        combo: {
          type: "ahp",
          ah: "5TEM4B03AC31S*",
          ahCost: 1315,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          hspf2: "7.5",
          ccap2: "26600",
          ahri: "215610853",
        },
      },
      "3": {
        model: "5TWR4036A1000*",
        condCost: 2472,
        condDims: "33H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEM4B04AC31S*",
          ahCost: 1418,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/4x18-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          hspf2: "7.5",
          ccap2: "32600",
          ahri: "218154607",
        },
      },
      "3.5": {
        model: "5TWR4042A1000*",
        condCost: 2620,
        condDims: "45H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          hspf2: "7.5",
          ccap2: "39500",
          ahri: "215610881",
        },
      },
      "4": {
        model: "5TWR4048A1000*",
        condCost: 2759,
        condDims: "45H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          hspf2: "7.5",
          ccap2: "43500",
          ahri: "215610891",
        },
      },
      "5": {
        model: "5TWR4060A1000*",
        condCost: 3040,
        condDims: "45H x 34W x 37D",
        combo: {
          type: "ahp",
          ah: "5TEM4D07AC51S*",
          ahCost: 2040,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "14.3",
          eer2: "11.7",
          hspf2: "7.5",
          ccap2: "54000",
          ahri: "215610901",
        },
      },
    },
  },
  {
    key: "5TWR6__split_hp",
    base: "5TWR6",
    section: "split_hp",
    tier: "choice" as Tier,
    seriesLabel: "Choice Series 16 Single-Stage",
    tonnages: {
      "1.5": {
        model: "5TWR6018A1000*",
        condCost: 2455,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "ahp",
          ah: "5TEM4B02AC21S*",
          ahCost: 1199,
          hk: "81-0695-01",
          hkCost: 113,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "7.8",
          ccap2: "19200",
          ahri: "218105928",
        },
      },
      "2": {
        model: "5TWR6024A1000*",
        condCost: 2717,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "ahp",
          ah: "5TEM4B02AC21S*",
          ahCost: 1199,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "7.8",
          ccap2: "23600",
          ahri: "218106486",
        },
      },
      "2.5": {
        model: "5TWR6030A1000*",
        condCost: 2842,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "ahp",
          ah: "5TEM4B03AC31S*",
          ahCost: 1315,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "7.8",
          ccap2: "27200",
          ahri: "218107100",
        },
      },
      "3": {
        model: "5TWR6036A1000*",
        condCost: 2975,
        condDims: "33-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "ahp",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "8.1",
          ccap2: "34400",
          ahri: "218107884",
        },
      },
      "3.5": {
        model: "5TWR6042A1000*",
        condCost: 3141,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "ahp",
          ah: "5TEM4D06AC41S*",
          ahCost: 1663,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "8.1",
          ccap2: "40000",
          ahri: "218108544",
        },
      },
      "4": {
        model: "5TWR6048A1000*",
        condCost: 3295,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "ahp",
          ah: "5TEM4D07AC51S*",
          ahCost: 2040,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "8.1",
          ccap2: "45500",
          ahri: "218109006",
        },
      },
      "5": {
        model: "5TWR6060A1000*",
        condCost: 3613,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "ahp",
          ah: "5TEM4D07AC51S*",
          ahCost: 2040,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "14.3",
          eer2: "12.0",
          hspf2: "7.8",
          ccap2: "54000",
          ahri: "218109374",
        },
      },
    },
  },
  {
    key: "5TTR4__cond_coil",
    base: "5TTR4",
    section: "cond_coil",
    tier: "choice" as Tier,
    seriesLabel: "Choice Series 14 Single-Stage",
    tonnages: {
      "1.5": {
        model: "5TTR4018A1000*",
        condCost: 1661,
        condDims: "36-3/4H x 29-3/4W x 32-5/8D",
        combo: {
          type: "cc",
          coil: "DE36C3J-175L-552",
          coilCost: 670,
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "15400",
          ahri: "217149622",
        },
      },
      "2": {
        model: "5TTR4024A1000*",
        condCost: 1767,
        condDims: "32-3/4H x 29-3/4W x 32-5/8D",
        combo: {
          type: "cc",
          coil: "DE36C3J-175L-552",
          coilCost: 670,
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "21400",
          ahri: "217149623",
        },
      },
      "2.5": {
        model: "5TTR4030A1000*",
        condCost: 1874,
        condDims: "36-3/4H x 29-3/4W x 32-5/8D",
        combo: {
          type: "cc",
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "28600",
          ahri: "215558006",
        },
      },
      "3": {
        model: "5TTR4036A1000*",
        condCost: 1983,
        condDims: "32-3/4H x 29-3/4W x 32-5/8D",
        combo: {
          type: "cc",
          coil: "5TXCB006AS3HC*",
          coilCost: 980,
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "32600",
          ahri: "215558442",
        },
      },
      "3.5": {
        model: "5TTR4042A1000*",
        condCost: 2127,
        condDims: "37-1/8H x 34-1/4W x 37-1/4D",
        combo: {
          type: "cc",
          coil: "5TXCB006AS3HC*",
          coilCost: 980,
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "40500",
          ahri: "216020634",
        },
      },
      "4": {
        model: "5TTR4048A1000*",
        condCost: 2271,
        condDims: "45-1/8H x 34-1/4W x 37-1/4D",
        combo: {
          type: "cc",
          coil: "5TXCB006AS3HC*",
          coilCost: 980,
          seer2: "13.8",
          eer2: "11.2",
          ccap2: "45000",
          ahri: "215559000",
        },
      },
      "5": {
        model: "5TTR4060A1000*",
        condCost: 2561,
        condDims: "45-1/8H x 34-1/4W x 37-1/4D",
        combo: {
          type: "cc",
          coil: "5TXCC009AS3HC*",
          coilCost: 1108,
          seer2: "14.3",
          eer2: "11.2",
          ccap2: "53500",
          ahri: "216387778",
        },
      },
    },
  },
  {
    key: "5TTR6__cond_coil",
    base: "5TTR6",
    section: "cond_coil",
    tier: "choice" as Tier,
    seriesLabel: "Choice Series 16 Single-Stage",
    tonnages: {
      "1.5": {
        model: "5TTR6018A1000*",
        condCost: 1742,
        condDims: "36-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "cc",
          coil: "5TXCA002AS3HC*",
          coilCost: 866,
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "18200",
          ahri: "218102929",
        },
      },
      "2": {
        model: "5TTR6024A1000*",
        condCost: 2040,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "cc",
          coil: "5TXCA002AS3HC*",
          coilCost: 866,
          seer2: "15.0",
          eer2: "12.0",
          ccap2: "24000",
          ahri: "218102930",
        },
      },
      "2.5": {
        model: "5TTR6030A1000*",
        condCost: 2186,
        condDims: "36-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "cc",
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          seer2: "15.0",
          eer2: "12.0",
          ccap2: "30000",
          ahri: "218103018",
        },
      },
      "3": {
        model: "5TTR6036A1000*",
        condCost: 2331,
        condDims: "32-3/4H x 32-5/8W x 29-3/4D",
        combo: {
          type: "cc",
          coil: "5TXCB006AS3HC*",
          coilCost: 980,
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "34600",
          ahri: "218103905",
        },
      },
      "3.5": {
        model: "5TTR6042A1000*",
        condCost: 2512,
        condDims: "37-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "cc",
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          seer2: "15.0",
          eer2: "12.0",
          ccap2: "42000",
          ahri: "218104673",
        },
      },
      "4": {
        model: "5TTR6048A1000*",
        condCost: 2694,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "cc",
          coil: "5TXCC009AS3HC*",
          coilCost: 1108,
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "47000",
          ahri: "218104943",
        },
      },
      "5": {
        model: "5TTR6060A1000*",
        condCost: 3058,
        condDims: "45-1/8H x 37-1/4W x 34-1/4D",
        combo: {
          type: "cc",
          coil: "5TXCC009AS3HC*",
          coilCost: 1108,
          seer2: "14.3",
          eer2: "11.2",
          ccap2: "54000",
          ahri: "218104944",
        },
      },
    },
  },
  {
    key: "A5AC5__runtru_gas_elec",
    base: "A5AC5",
    section: "runtru_gas_elec",
    tier: "value" as Tier,
    seriesLabel: "Value Series 15 SEER2",
    tonnages: {
      "1.5": {
        model: "A5AC5018A1000*",
        condCost: 1324,
        condDims: "36.6H x 29.8W x 29.8D",
        combo: {
          type: "fc",
          furn: "A801X040BM2SD*",
          furnCost: 864,
          coil: "5TXCA002AS3HC*",
          coilCost: 866,
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "18600",
          ahri: "215479438",
        },
      },
      "2": {
        model: "A5AC5024A1000*",
        condCost: 1455,
        condDims: "32.6H x 29.8W x 29.8D",
        combo: {
          type: "fc",
          furn: "A801X040BM2SD*",
          furnCost: 864,
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "24600",
          ahri: "215479658",
        },
      },
      "2.5": {
        model: "A5AC5030A1000*",
        condCost: 1585,
        condDims: "36.6H x 29.8W x 29.8D",
        combo: {
          type: "fc",
          furn: "A801X060BM4SD*",
          furnCost: 970,
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          seer2: "15.0",
          eer2: "12.0",
          ccap2: "30000",
          ahri: "215480023",
        },
      },
      "3": {
        model: "A5AC5036A1000*",
        condCost: 1716,
        condDims: "32.6H x 29.8W x 29.8D",
        combo: {
          type: "fc",
          furn: "A801X060BM4SD*",
          furnCost: 970,
          coil: "5TXCB004AS3HC*",
          coilCost: 866,
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "33400",
          ahri: "215480359",
        },
      },
      "3.5": {
        model: "A5AC5042A1000*",
        condCost: 1881,
        condDims: "36.6H x 34.3W x 34.3D",
        combo: {
          type: "fc",
          furn: "A801X060BM4SD*",
          furnCost: 970,
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "42000",
          ahri: "215480563",
        },
      },
      "4": {
        model: "A5AC5048A1000*",
        condCost: 2044,
        condDims: "44.6H x 34.3W x 34.3D",
        combo: {
          type: "fc",
          furn: "A801X080BM4SD*",
          furnCost: 1023,
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          seer2: "15.0",
          eer2: "12.0",
          ccap2: "46000",
          ahri: "215480805",
        },
      },
      "5": {
        model: "A5AC5060A1000*",
        condCost: 2374,
        condDims: "44.6H x 34.3W x 34.3D",
        combo: {
          type: "fc",
          furn: "A801X100CM5SD*",
          furnCost: 1107,
          coil: "5TXCC009AS3HC*",
          coilCost: 1108,
          indoorDims: "34x21x28.75",
          seer2: "15.2",
          eer2: "11.5",
          ccap2: "57000",
          ahri: "215480999",
        },
      },
    },
  },
  {
    key: "A5AC5__runtru_electric",
    base: "A5AC5",
    section: "runtru_electric",
    tier: "value" as Tier,
    seriesLabel: "Value Series 15 SEER2",
    tonnages: {
      "1.5": {
        model: "A5AC5018A1000*",
        condCost: 1324,
        condDims: "36.6H x 29.8W x 29.8D",
        combo: {
          type: "ahe",
          ah: "A5AHC003A1B30A*",
          ahCost: 959,
          hk: "81-0695-01",
          hkCost: 113,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "18100",
          ahri: "215440887",
        },
      },
      "2": {
        model: "A5AC5024A1000*",
        condCost: 1455,
        condDims: "32.6H x 29.8W x 29.8D",
        combo: {
          type: "ahe",
          ah: "A5AHC003A1B30A*",
          ahCost: 959,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "25400",
          ahri: "215440889",
        },
      },
      "2.5": {
        model: "A5AC5030A1000*",
        condCost: 1585,
        condDims: "36.6H x 29.8W x 29.8D",
        combo: {
          type: "ahe",
          ah: "A5AHC003A1B30A*",
          ahCost: 959,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "30000",
          ahri: "215440891",
        },
      },
      "3": {
        model: "A5AC5036A1000*",
        condCost: 1716,
        condDims: "32.6H x 29.8W x 29.8D",
        combo: {
          type: "ahe",
          ah: "A5AHC004A1B30A*",
          ahCost: 1022,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "33800",
          ahri: "218154688",
        },
      },
      "3.5": {
        model: "A5AC5042A1000*",
        condCost: 1881,
        condDims: "36.6H x 34.3W x 34.3D",
        combo: {
          type: "ahe",
          ah: "A5AHC004A1B30A*",
          ahCost: 1022,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "40500",
          ahri: "218154690",
        },
      },
      "4": {
        model: "A5AC5048A1000*",
        condCost: 2044,
        condDims: "44.6H x 34.3W x 34.3D",
        combo: {
          type: "ahe",
          ah: "A5AHC006A1D30A*",
          ahCost: 1244,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "47500",
          ahri: "215440909",
        },
      },
      "5": {
        model: "A5AC5060A1000*",
        condCost: 2374,
        condDims: "44.6H x 34.3W x 34.3D",
        combo: {
          type: "ahe",
          ah: "A5AHC007A1D30A*",
          ahCost: 1472,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "15.0",
          eer2: "12.0",
          ccap2: "56500",
          ahri: "215440829",
        },
      },
    },
  },
  {
    key: "A5AC5__runtru_cond_coil",
    base: "A5AC5",
    section: "runtru_cond_coil",
    tier: "value" as Tier,
    seriesLabel: "Value Series 15 SEER2",
    tonnages: {
      "1.5": {
        model: "A5AC5018A1000*",
        condCost: 1324,
        condDims: "36.6H x 29.8W x 29.8D",
        combo: {
          type: "cc",
          coil: "5TXCA002AS3HC*",
          coilCost: 866,
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "18600",
          ahri: "215479438",
        },
      },
      "2": {
        model: "A5AC5024A1000*",
        condCost: 1455,
        condDims: "32.6H x 29.8W x 29.8D",
        combo: {
          type: "cc",
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "24600",
          ahri: "215479658",
        },
      },
      "2.5": {
        model: "A5AC5030A1000*",
        condCost: 1585,
        condDims: "36.6H x 29.8W x 29.8D",
        combo: {
          type: "cc",
          coil: "5TXCB003AS3HC*",
          coilCost: 843,
          seer2: "15.0",
          eer2: "12.0",
          ccap2: "30000",
          ahri: "215480023",
        },
      },
      "3": {
        model: "A5AC5036A1000*",
        condCost: 1716,
        condDims: "32.6H x 29.8W x 29.8D",
        combo: {
          type: "cc",
          coil: "5TXCB004AS3HC*",
          coilCost: 866,
          seer2: "14.3",
          eer2: "11.7",
          ccap2: "33400",
          ahri: "215480359",
        },
      },
      "3.5": {
        model: "A5AC5042A1000*",
        condCost: 1881,
        condDims: "36.6H x 34.3W x 34.3D",
        combo: {
          type: "cc",
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          seer2: "15.2",
          eer2: "12.0",
          ccap2: "42000",
          ahri: "215480563",
        },
      },
      "4": {
        model: "A5AC5048A1000*",
        condCost: 2044,
        condDims: "44.6H x 34.3W x 34.3D",
        combo: {
          type: "cc",
          coil: "5TXCC007AS3HC*",
          coilCost: 990,
          seer2: "15.0",
          eer2: "12.0",
          ccap2: "46000",
          ahri: "215480805",
        },
      },
      "5": {
        model: "A5AC5060A1000*",
        condCost: 2374,
        condDims: "44.6H x 34.3W x 34.3D",
        combo: {
          type: "cc",
          coil: "5TXCD010AS3HC*",
          coilCost: 1151,
          seer2: "14.3",
          eer2: "11.5",
          ccap2: "55500",
          ahri: "215481033",
        },
      },
    },
  },
  {
    key: "A5HP5__runtru_hp",
    base: "A5HP5",
    section: "runtru_hp",
    tier: "value" as Tier,
    seriesLabel: "Value Series 15 SEER2",
    tonnages: {
      "1.5": {
        model: "A5HP5018A1000*",
        condCost: 1842,
        condDims: "32.75H x 32.63W x 29.75D",
        combo: {
          type: "ahp",
          ah: "A5AHC002A1B30A*",
          ahCost: 903,
          hk: "81-0695-01",
          hkCost: 113,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "7.8",
          ccap2: "19200",
          ahri: "215611058",
        },
      },
      "2": {
        model: "A5HP5024A1000*",
        condCost: 2054,
        condDims: "32.75H x 32.63W x 29.75D",
        combo: {
          type: "ahp",
          ah: "A5AHC002A1B30A*",
          ahCost: 903,
          hk: "81-0698-01",
          hkCost: 145,
          volt: "208/230/1/60",
          indoorDims: "45-1/8x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "7.8",
          ccap2: "23400",
          ahri: "215611064",
        },
      },
      "2.5": {
        model: "A5HP5030A1000*",
        condCost: 2159,
        condDims: "32.75H x 32.63W x 29.75D",
        combo: {
          type: "ahp",
          ah: "A5AHC003A1B30A*",
          ahCost: 959,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "46-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "8.1",
          ccap2: "27200",
          ahri: "215611074",
        },
      },
      "3": {
        model: "A5HP5036A1000*",
        condCost: 2300,
        condDims: "33.13H x 37.25W x 34.25D",
        combo: {
          type: "ahp",
          ah: "A5AHC004A1B30A*",
          ahCost: 1022,
          hk: "81-0701-01",
          hkCost: 150,
          volt: "208/230/1/60",
          indoorDims: "51-3/4x18-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "8.1",
          ccap2: "33200",
          ahri: "218154633",
        },
      },
      "3.5": {
        model: "A5HP5042A1000*",
        condCost: 2479,
        condDims: "45.13H x 37.25W x 34.25D",
        combo: {
          type: "ahp",
          ah: "A5AHC006A1D30A*",
          ahCost: 1244,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "8.1",
          ccap2: "40000",
          ahri: "215611102",
        },
      },
      "4": {
        model: "A5HP5048A1000*",
        condCost: 2652,
        condDims: "45.13H x 37.25W x 34.25D",
        combo: {
          type: "ahp",
          ah: "A5AHC006A1D30A*",
          ahCost: 1244,
          hk: "81-0821-00",
          hkCost: 208,
          volt: "208/230/1/60",
          indoorDims: "51-3/8x23-1/2x21-1/8",
          seer2: "15.2",
          eer2: "12.0",
          hspf2: "7.8",
          ccap2: "44500",
          ahri: "215611108",
        },
      },
      "5": {
        model: "A5HP5060A1000*",
        condCost: 2996,
        condDims: "45.13H x 37.25W x 34.25D",
        combo: {
          type: "ahp",
          ah: "A5AHC007A1D30A*",
          ahCost: 1472,
          hk: "81-0703-01",
          hkCost: 236,
          volt: "208/230/1/60",
          indoorDims: "57-3/8x23-1/2x21-1/8",
          seer2: "14.3",
          eer2: "12.0",
          hspf2: "8.0",
          ccap2: "54000",
          ahri: "215611114",
        },
      },
    },
  },
];

export const STANDALONE_FURNACES: StandaloneFurnace[] = [
  { model: "S8B1B040M2PS**", cost: 1011 },
  { model: "S8B1B060M4PS**", cost: 1107 },
  { model: "S8B1B080M4PS**", cost: 1150 },
  { model: "S8B1C100M5PS**", cost: 1219 },
  { model: "S8X1B040M2PSC*", cost: 1142 },
  { model: "S8X1B060M4PSC*", cost: 1232 },
  { model: "S8X1C080M5PSC*", cost: 1318 },
  { model: "S8X1C100M5PSC*", cost: 1355 },
  { model: "S8V2A040M3PCB*", cost: 1780 },
  { model: "S8V2B060M4PCB*", cost: 1889 },
  { model: "S8V2C080M5PCB*", cost: 2000 },
  { model: "S8V2C100M5PCB*", cost: 2059 },
];
// ============================================================================
// V2 HELPERS (Phase 2 additions)
// ============================================================================

// Furnace tier definitions for the new "Furnace" system type.
// All three tiers use the "standalone_furnace" scenario at profit $5,500.
export type FurnaceTier = "standard" | "enhanced" | "twostage_vs";

export const FURNACE_TIER_INFO: Record<FurnaceTier, { name: string; description: string; series: string }> = {
  standard:    { name: "Standard",              description: "Reliable single-stage 80% AFUE gas furnace.",                 series: "S8B1" },
  enhanced:    { name: "Enhanced",              description: "Upgraded 80% AFUE single-stage — better build & warranty.",  series: "S8X1" },
  twostage_vs: { name: "2-Stage Variable Speed", description: "Two-stage variable speed — quieter, more even heat.",        series: "S8V2" },
};

// Furnaces for a given tier (filters STANDALONE_FURNACES by series prefix)
export function getFurnacesByTier(tier: FurnaceTier): StandaloneFurnace[] {
  const info = FURNACE_TIER_INFO[tier];
  return STANDALONE_FURNACES.filter((f) => f.model.startsWith(info.series));
}

// Extract BTU size in "40k"/"60k"/"80k"/"100k" form from a furnace model number.
// Furnace model numbers include the BTU capacity: S8B1B040 = 40k, S8B1B060 = 60k, etc.
export function furnaceBtuSize(model: string): string {
  // Match the 040/060/080/100 group after the series letters.
  const m = model.match(/[A-Z]0?(\d{2,3})M/);
  if (!m) return "?";
  return `${parseInt(m[1], 10)}k`;
}

// Section → (Brand, SystemType) mapping for SYSTEMS_V2 entries.
export function sectionBrand(section: SectionKey): Brand {
  return section.startsWith("runtru_") ? "runtru" : "trane";
}
export function sectionSystemType(section: SectionKey): SystemType {
  if (section === "split_gas" || section === "runtru_gas_elec") return "gas";
  if (section === "split_electric" || section === "runtru_electric") return "electric";
  if (section === "split_hp" || section === "runtru_hp") return "heatpump";
  return "condcoil";
}

// SystemTypeV2 adds "furnace" (Trane only) on top of the existing SystemType.
export type SystemTypeV2 = SystemType | "furnace";

export const SYSTEM_TYPE_INFO_V2: Record<SystemTypeV2, { name: string; description: string }> = {
  gas:      { name: "Gas Heat System",       description: "Outdoor unit + gas furnace + coil" },
  electric: { name: "Electric Heat System",  description: "Outdoor unit + air handler with heat strips" },
  heatpump: { name: "Heat Pump System",      description: "Outdoor heat pump + air handler" },
  condcoil: { name: "Condenser + Coil Only", description: "Outdoor unit + coil replacement" },
  furnace:  { name: "Furnace",               description: "Furnace-only replacement" },
};

// Systems matching a (brand, systemType) — NOT for "furnace" (that flow uses tiers).
export function getSystemsByBrandAndType(brand: Brand, systemType: SystemType): SystemV2[] {
  return SYSTEMS_V2.filter(
    (s) => sectionBrand(s.section) === brand && sectionSystemType(s.section) === systemType
  );
}

// Sort systems for display: Premier > Priority > Choice > Value, then by SEER descending.
const TIER_ORDER: Record<Tier, number> = { premier: 1, priority: 2, choice: 3, value: 4 };
// Within-tier order: lower number = shown first (higher SEER first).
const BASE_ORDER: Record<string, number> = {
  "5TTV0X": 1, "5TWV0X": 1, // Premier SEER 20 (top)
  "5TTV8X": 2, "5TWV8X": 2, // Premier SEER 18
  "5TTR7":  1, "5TWR7":  1, // Priority SEER 17
  "5TTR6":  1, "5TWR6":  1, // Choice   SEER 16
  "5TTR4":  2, "5TWR4":  2, // Choice   SEER 14
  "A5AC5":  1, "A5HP5":  1, // Value    SEER 15
};
export function sortSystemsByTier(systems: SystemV2[]): SystemV2[] {
  return [...systems].sort((a, b) => {
    const tierDiff = TIER_ORDER[a.tier] - TIER_ORDER[b.tier];
    if (tierDiff !== 0) return tierDiff;
    const orderA = BASE_ORDER[a.base] ?? 99;
    const orderB = BASE_ORDER[b.base] ?? 99;
    return orderA - orderB;
  });
}

// Available system types for a given brand. Trane gets "furnace" too.
export function getAvailableSystemTypesV2(brand: Brand): SystemTypeV2[] {
  const set = new Set<SystemTypeV2>();
  SYSTEMS_V2.filter((s) => sectionBrand(s.section) === brand).forEach((s) => {
    set.add(sectionSystemType(s.section));
  });
  if (brand === "trane") set.add("furnace");
  const order: SystemTypeV2[] = ["gas", "electric", "heatpump", "condcoil", "furnace"];
  return order.filter((t) => set.has(t));
}

// Available tonnages for a given system.
export function getSystemTonnages(sys: SystemV2): string[] {
  return Object.keys(sys.tonnages).sort((a, b) => parseFloat(a) - parseFloat(b));
}

// Display label for a tier (badge text on model cards).
export const TIER_DISPLAY: Record<Tier, string> = {
  premier: "PREMIER",
  priority: "PRIORITY",
  choice: "CHOICE",
  value: "VALUE",
};

// Furnace retail (uses standalone_furnace scenario; tier does not affect profit for furnace).
export function furnaceRetail(cost: number): number {
  // Any tier works — same profit for furnace. Use "choice" as the ceremonial tier.
  return calcRetail(cost, "choice", "standalone_furnace");
}
