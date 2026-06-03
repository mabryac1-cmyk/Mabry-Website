"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ADD_ONS,
  Brand,
  BRAND_INFO,
  ModelInfo,
  MODELS,
  SERVICE_CATEGORIES,
  ServiceCategory,
  ServiceItem,
  SystemType,
  SYSTEM_TYPE_INFO,
  formatCurrency,
  getModelsByBrandAndType,
  quotePrice,
} from "@/lib/pricing";

type Step = "brand" | "systemType" | "model" | "tonnage" | "quote" | "service";

export default function PricingTool() {
  const [step, setStep] = useState<Step>("brand");
  const [brand, setBrand] = useState<Brand | null>(null);
  const [systemType, setSystemType] = useState<SystemType | null>(null);
  const [model, setModel] = useState<ModelInfo | null>(null);
  const [tonnage, setTonnage] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);

  const reset = () => {
    setStep("brand");
    setBrand(null);
    setSystemType(null);
    setModel(null);
    setTonnage(null);
    setSelectedAddOns([]);
  };

  const goBack = () => {
    if (step === "quote") setStep("tonnage");
    else if (step === "tonnage") setStep("model");
    else if (step === "model") setStep("systemType");
    else if (step === "systemType") setStep("brand");
    else if (step === "service") setStep("brand");
  };

  const availableSystemTypes = useMemo<SystemType[]>(() => {
    if (!brand) return [];
    const types = new Set<SystemType>();
    MODELS.filter((m) => m.brand === brand).forEach((m) => types.add(m.systemType));
    const order: SystemType[] = ["gas", "electric", "heatpump", "condcoil"];
    return order.filter((t) => types.has(t));
  }, [brand]);

  const availableModels = useMemo<ModelInfo[]>(() => {
    if (!brand || !systemType) return [];
    return getModelsByBrandAndType(brand, systemType);
  }, [brand, systemType]);

  const availableTonnages = useMemo<string[]>(() => {
    if (!model) return [];
    return Object.keys(model.prices).sort((a, b) => parseFloat(a) - parseFloat(b));
  }, [model]);

  const availableAddOns = useMemo(() => {
    if (!systemType) return [];
    return ADD_ONS.filter((a) => (a.availableOn as SystemType[]).includes(systemType));
  }, [systemType]);

  const baseQuote = useMemo(() => {
    if (!model || !tonnage) return null;
    const listPrice = model.prices[tonnage];
    return quotePrice(listPrice, model.formula);
  }, [model, tonnage]);

  const addOnTotal = useMemo(() => {
    return selectedAddOns.reduce((sum, id) => {
      const addOn = ADD_ONS.find((a) => a.id === id);
      return sum + (addOn?.price ?? 0);
    }, 0);
  }, [selectedAddOns]);

  const totalQuote = (baseQuote ?? 0) + addOnTotal;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-6 sm:py-10">
      {/* Back / Start Over controls */}
      {step !== "brand" && (
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={goBack}
            className="text-primary hover:text-accent text-sm font-medium flex items-center gap-1 transition-colors"
          >
            <span aria-hidden>←</span> Back
          </button>
          <button
            onClick={reset}
            className="text-xs bg-white hover:bg-muted text-primary px-3 py-1 rounded-lg font-medium transition-colors border border-gray-200 shadow-sm"
          >
            Start Over
          </button>
        </div>
      )}

      <Breadcrumbs brand={brand} systemType={systemType} model={model} tonnage={tonnage} step={step} />

      {/* Landing / brand selection */}
      {step === "brand" && (
        <>
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center gap-3 mb-3">
              <span className="text-3xl" aria-hidden>❄️</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary">
                Get Your Price
              </h2>
              <span className="text-3xl" aria-hidden>☀️</span>
            </div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Honest, transparent pricing for every job — no surprises,
              no hidden fees, just straight-up pricing.
            </p>
          </div>
          <StepCard title="What can we help price?" subtitle="Choose a category to get started.">
            <div className="grid sm:grid-cols-3 gap-4">
              {(["trane", "runtru"] as Brand[]).map((b) => (
                <button
                  key={b}
                  onClick={() => {
                    setBrand(b);
                    setStep("systemType");
                  }}
                  className="group bg-white border-2 border-gray-200 hover:border-accent hover:shadow-lg rounded-2xl p-5 text-left transition-all"
                >
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                    Equipment
                  </div>
                  <div className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {BRAND_INFO[b].name}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{BRAND_INFO[b].tagline}</div>
                </button>
              ))}
              <button
                onClick={() => setStep("service")}
                className="group bg-white border-2 border-gray-200 hover:border-accent hover:shadow-lg rounded-2xl p-5 text-left transition-all"
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Repair
                </div>
                <div className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                  Service &amp; Repair
                </div>
                <div className="text-sm text-muted-foreground mt-1">Parts, labor, and service pricing</div>
              </button>
            </div>
          </StepCard>
        </>
      )}

      {step === "service" && <ServicePage />}

      {step === "systemType" && brand && (
        <StepCard title="System Type" subtitle="What kind of system are you quoting?">
          <div className="grid sm:grid-cols-2 gap-4">
            {availableSystemTypes.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setSystemType(t);
                  setStep("model");
                }}
                className="group bg-white border-2 border-gray-200 hover:border-accent hover:shadow-lg rounded-2xl p-5 text-left transition-all"
              >
                <div className="text-lg font-semibold text-primary group-hover:text-accent transition-colors">
                  {SYSTEM_TYPE_INFO[t].name}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{SYSTEM_TYPE_INFO[t].description}</div>
              </button>
            ))}
          </div>
        </StepCard>
      )}

      {step === "model" && (
        <StepCard title="Choose Model" subtitle="Select the equipment model.">
          <div className="grid gap-3">
            {availableModels.map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  setModel(m);
                  setStep("tonnage");
                }}
                className="group bg-white border-2 border-gray-200 hover:border-accent hover:shadow-lg rounded-2xl p-5 text-left transition-all flex items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                      {m.shortName}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wide bg-accent text-white px-2 py-0.5 rounded">
                      {m.tier}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{m.longName}</div>
                </div>
                <span className="text-accent text-2xl" aria-hidden>›</span>
              </button>
            ))}
          </div>
        </StepCard>
      )}

      {step === "tonnage" && model && (
        <StepCard title="System Size" subtitle="Choose the equipment tonnage.">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableTonnages.map((t) => (
              <button
                key={t}
                onClick={() => {
                  setTonnage(t);
                  setStep("quote");
                }}
                className="bg-white border-2 border-gray-200 hover:border-accent hover:shadow-lg rounded-xl py-5 text-center transition-all"
              >
                <div className="text-2xl font-bold text-primary">{t}</div>
                <div className="text-sm text-muted-foreground">ton{parseFloat(t) === 1 ? "" : "s"}</div>
              </button>
            ))}
          </div>
        </StepCard>
      )}

      {step === "quote" && model && tonnage && baseQuote !== null && (
        <QuoteCard
          model={model}
          tonnage={tonnage}
          baseQuote={baseQuote}
          totalQuote={totalQuote}
          availableAddOns={availableAddOns}
          selectedAddOns={selectedAddOns}
          toggleAddOn={toggleAddOn}
          onReset={reset}
        />
      )}

      {/* Installation & Pricing Disclosure — verbatim per Tom */}
      <div className="mt-12 bg-muted border-t border-gray-200 rounded-xl py-8 px-6">
        <div className="text-center mb-4">
          <p className="text-base font-bold text-primary">Installation &amp; Pricing Disclosure</p>
          <div className="mt-1.5 h-0.5 w-16 bg-accent mx-auto rounded-full"></div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          New equipment shall be attached to existing plenum(s), ductwork, refrigerant lines,
          electrical, gas lines, drain lines, and flue pipe as applicable. All new installations
          also include a basic digital thermostat, new emergency drain pan, and safety float
          switch, as applicable. Any additional items may incur an additional charge. Any
          accessories requested shall be quoted as an additional charge. Prices include all
          applicable discounts, special offers, coupons, and rebates. 100% financing available
          with approved credit through participating lenders. Financing terms are subject to
          change without notice.
        </p>
      </div>
    </div>
  );
}

function StepCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-1">{title}</h2>
      {subtitle && <p className="text-muted-foreground mb-6">{subtitle}</p>}
      {children}
    </div>
  );
}

function Breadcrumbs({
  brand,
  systemType,
  model,
  tonnage,
  step,
}: {
  brand: Brand | null;
  systemType: SystemType | null;
  model: ModelInfo | null;
  tonnage: string | null;
  step: Step;
}) {
  if (step === "brand") return null;
  const items: string[] = [];
  if (step === "service") {
    items.push("Service & Repair");
  } else {
    if (brand) items.push(BRAND_INFO[brand].name);
    if (systemType) items.push(SYSTEM_TYPE_INFO[systemType].name);
    if (model) items.push(model.shortName);
    if (tonnage) items.push(`${tonnage} ton`);
  }
  return (
    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
      {items.join(" › ")}
    </div>
  );
}

function QuoteCard({
  model,
  tonnage,
  baseQuote,
  totalQuote,
  availableAddOns,
  selectedAddOns,
  toggleAddOn,
  onReset,
}: {
  model: ModelInfo;
  tonnage: string;
  baseQuote: number;
  totalQuote: number;
  availableAddOns: typeof ADD_ONS[number][];
  selectedAddOns: string[];
  toggleAddOn: (id: string) => void;
  onReset: () => void;
}) {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-primary/5 px-6 py-5 border-b border-primary/10">
          <div className="text-xs uppercase tracking-wider text-primary font-semibold">
            Your Quote
          </div>
          <div className="text-xl sm:text-2xl font-bold mt-1 text-primary">
            {model.shortName} — {tonnage} Ton {SYSTEM_TYPE_INFO[model.systemType].name}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{model.longName}</div>
        </div>

        <div className="px-6 py-8 text-center border-b border-gray-100">
          <div className="text-sm uppercase tracking-wider text-muted-foreground font-semibold mb-2">
            Total Price
          </div>
          <div className="text-5xl sm:text-6xl font-bold text-accent tabular-nums">
            {formatCurrency(totalQuote)}
          </div>
          {selectedAddOns.length > 0 && (
            <div className="text-sm text-muted-foreground mt-2">
              System: {formatCurrency(baseQuote)} &nbsp;+&nbsp; Add-ons: {formatCurrency(totalQuote - baseQuote)}
            </div>
          )}
        </div>

        <div className="px-6 py-6 border-b border-gray-100">
          <div className="font-semibold text-primary mb-3">Your Quote Includes:</div>
          <ul className="space-y-2 text-sm text-gray-700">
            <IncludeItem>Trane factory-matched equipment</IncludeItem>
            <IncludeItem>Professional installation by Mabry&apos;s AC technicians</IncludeItem>
            <IncludeItem>
              <strong>10-year</strong> parts warranty (registered with Trane)
            </IncludeItem>
            <IncludeItem>
              <strong>2-year</strong> labor warranty
            </IncludeItem>
            <IncludeItem>All standard installation, labor, supplies, and taxes</IncludeItem>
          </ul>
        </div>

        {availableAddOns.length > 0 && (
          <div className="px-6 py-6">
            <div className="font-semibold text-primary mb-3">Available Add-Ons:</div>
            <div className="space-y-2">
              {availableAddOns.map((addon) => {
                const checked = selectedAddOns.includes(addon.id);
                return (
                  <label
                    key={addon.id}
                    className={`flex items-center justify-between gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      checked
                        ? "border-accent bg-accent/10"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleAddOn(addon.id)}
                        className="w-5 h-5 accent-accent"
                      />
                      <span className="text-sm font-medium text-primary">{addon.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-accent tabular-nums">
                      +{formatCurrency(addon.price)}
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div className="text-xs text-muted-foreground mt-4 px-2 text-center">
        Quote based on standard installation. On-site conditions (ductwork, electrical, access)
        may affect final price.
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button
          onClick={onReset}
          className="flex-1 bg-accent hover:bg-accent/90 text-white font-semibold py-4 rounded-xl shadow-md transition-colors"
        >
          Build Another Quote
        </button>
        <Link
          href="/contact"
          className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl shadow-md transition-colors text-center"
        >
          Schedule Installation →
        </Link>
      </div>
    </div>
  );
}

function IncludeItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="text-accent font-bold mt-0.5" aria-hidden>✓</span>
      <span>{children}</span>
    </li>
  );
}

function ServicePage() {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo<ServiceCategory[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SERVICE_CATEGORIES;
    return SERVICE_CATEGORIES
      .map((cat) => ({
        ...cat,
        items: cat.items.filter(
          (item) =>
            item.name.toLowerCase().includes(q) ||
            (item.note && item.note.toLowerCase().includes(q))
        ),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-1">
        Service &amp; Repair Pricing
      </h2>
      <p className="text-muted-foreground mb-2">
        Parts and labor pricing for repair calls.
      </p>
      <p className="text-sm font-semibold text-primary mb-5">
        No hourly charges, ever. Flat $79 service call — we diagnose the problem and quote you before any work begins.
      </p>

      <div className="relative mb-6">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a part or service (e.g. capacitor, ignitor, thermostat)…"
          className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none text-base bg-white shadow-sm transition-colors"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg pointer-events-none" aria-hidden>
          🔍
        </div>
      </div>

      {filteredCategories.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground bg-white rounded-2xl border border-gray-200">
          No matching items. Try a different search term.
        </div>
      ) : (
        <div className="space-y-5">
          {filteredCategories.map((cat) => (
            <ServiceCategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      )}

      <div className="mt-8 text-xs text-muted-foreground text-center px-4 leading-relaxed">
        All items not listed shall be quoted thru office. Prices subject to change without notice.
      </div>
    </div>
  );
}

function ServiceCategoryCard({ category }: { category: ServiceCategory }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-primary/5 px-5 py-3 border-b border-primary/10">
        <div className="text-lg font-bold text-primary">{category.name}</div>
        {category.description && (
          <div className="text-xs text-muted-foreground mt-0.5">{category.description}</div>
        )}
      </div>

      {category.warning && (
        <div className="bg-red-50 border-b border-red-200 px-5 py-3 text-sm text-red-800 font-medium">
          ⚠️ {category.warning}
        </div>
      )}

      <ul className="divide-y divide-gray-100">
        {category.items.map((item) => (
          <ServiceItemRow key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function ServiceItemRow({ item }: { item: ServiceItem }) {
  return (
    <li className="px-5 py-3 flex items-start justify-between gap-4">
      <div className="min-w-0 flex-1">
        <div className="font-medium text-primary">{item.name}</div>
        {item.note && (
          <div className="text-xs text-muted-foreground italic mt-0.5">{item.note}</div>
        )}
      </div>
      <div className="shrink-0 text-right">
        {item.officeQuote ? (
          <div className="text-sm font-semibold text-muted-foreground italic">Call Office</div>
        ) : item.priceRange ? (
          <div className="text-base font-bold text-accent tabular-nums">
            {formatCurrency(item.priceRange[0])} – {formatCurrency(item.priceRange[1])}
          </div>
        ) : item.price !== undefined ? (
          <>
            <div className="text-lg font-bold text-accent tabular-nums leading-tight">
              {formatCurrency(item.price)}
            </div>
            {item.additionalPrice !== undefined && (
              <div className="text-[11px] text-muted-foreground mt-0.5 leading-tight">
                {formatCurrency(item.additionalPrice)} {item.additionalLabel ?? "additional"}
              </div>
            )}
          </>
        ) : null}
      </div>
    </li>
  );
}
