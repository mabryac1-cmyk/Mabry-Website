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
  switch (formula) {
    case "trucomfort_system":
      // TruComfort variable-speed full system (5TTV8X gas/elec, 5TWV8X HP)
      return Math.round((listPrice + 1000 + 300) * taxMarkup + 9500);
    case "trane_single_system":
      // Trane single-stage full system (5TTR6, 5TTR4, 5TWR6, 5TWR4)
      return Math.round((listPrice + 300) * taxMarkup + 8500);
    case "trane_condcoil":
      // Trane single-stage condenser + coil only
      return Math.round((listPrice + 300) * taxMarkup + 5500);
    case "runtru_system":
      // RunTru full system (A5AC5 gas/elec, A5HP5 HP)
      return Math.round((listPrice + 300) * taxMarkup + 8000);
    case "runtru_condcoil":
      // RunTru condenser + coil only
      return Math.round((listPrice + 300) * taxMarkup + 5000);
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
