"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Minus, Plus, Home, Sun, Cloud, CloudSun, Building, Ruler } from "lucide-react";

type HomeAge = "older" | "average" | "newer";
type WindowType = "single" | "double";
type SunExposure = "shaded" | "average" | "full";
type CeilingHeight = "8ft" | "9ft" | "10ft+";

const HOME_AGE_OPTIONS: { value: HomeAge; label: string; sub: string }[] = [
  { value: "older", label: "Older", sub: "Before 1990" },
  { value: "average", label: "Average", sub: "1990–2010" },
  { value: "newer", label: "Newer", sub: "After 2010" },
];

const WINDOW_OPTIONS: { value: WindowType; label: string; sub: string }[] = [
  { value: "single", label: "Single-Pane", sub: "Older windows" },
  { value: "double", label: "Double-Pane", sub: "Modern / energy efficient" },
];

const SUN_OPTIONS: { value: SunExposure; label: string; icon: typeof Sun }[] = [
  { value: "shaded", label: "Mostly Shaded", icon: Cloud },
  { value: "average", label: "Some Shade", icon: CloudSun },
  { value: "full", label: "Full Sun", icon: Sun },
];

const CEILING_OPTIONS: { value: CeilingHeight; label: string }[] = [
  { value: "8ft", label: "8 ft (Standard)" },
  { value: "9ft", label: "9 ft" },
  { value: "10ft+", label: "10 ft or Higher" },
];

function computeTonnage(inputs: {
  sqft: number;
  bedrooms: number;
  age: HomeAge;
  windows: WindowType;
  sun: SunExposure;
  ceiling: CeilingHeight;
}) {
  const { sqft, bedrooms, age, windows, sun, ceiling } = inputs;

  const baseTable: Record<HomeAge, Record<WindowType, number>> = {
    older: { single: 35, double: 30 },
    average: { single: 30, double: 25 },
    newer: { single: 25, double: 18 },
  };
  const baseBtuPerSqft = baseTable[age][windows];

  const ceilingMult: Record<CeilingHeight, number> = {
    "8ft": 1.0,
    "9ft": 1.08,
    "10ft+": 1.15,
  };

  const sunMult: Record<SunExposure, number> = {
    shaded: 0.9,
    average: 1.0,
    full: 1.1,
  };

  const envelope = sqft * baseBtuPerSqft * ceilingMult[ceiling] * sunMult[sun];
  const peopleLoad = bedrooms * 2 * 530;
  const appliances = 1200;

  const subtotal = envelope + peopleLoad + appliances;
  const withDuct = subtotal * 1.15;
  const withSafety = withDuct * 1.10;

  const tonsRaw = withSafety / 12000;
  const tonsRounded = Math.ceil(tonsRaw * 2) / 2;

  return {
    envelope: Math.round(envelope),
    peopleLoad: Math.round(peopleLoad),
    appliances,
    withDuct: Math.round(withDuct),
    withSafety: Math.round(withSafety),
    tonsRaw,
    tons: tonsRounded,
    baseBtuPerSqft,
  };
}

export default function SizingTool() {
  const [sqft, setSqft] = useState(2000);
  const [bedrooms, setBedrooms] = useState(3);
  const [age, setAge] = useState<HomeAge>("average");
  const [windows, setWindows] = useState<WindowType>("double");
  const [sun, setSun] = useState<SunExposure>("average");
  const [ceiling, setCeiling] = useState<CeilingHeight>("8ft");

  const result = useMemo(
    () => computeTonnage({ sqft, bedrooms, age, windows, sun, ceiling }),
    [sqft, bedrooms, age, windows, sun, ceiling]
  );

  const tonsDisplay =
    result.tons % 1 === 0 ? `${result.tons}` : `${Math.floor(result.tons)}½`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      {/* Questions column */}
      <div className="lg:col-span-3 space-y-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Q1: Square Footage */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Ruler className="w-5 h-5 text-accent" />
              <label className="text-lg font-bold text-primary">
                1. Home Square Footage
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Total heated & cooled living area (not counting garage or attic).
            </p>
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-4xl font-black text-primary">
                {sqft.toLocaleString()}
              </span>
              <span className="text-lg text-gray-600 font-semibold">sq ft</span>
            </div>
            <input
              type="range"
              min={800}
              max={5000}
              step={50}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full accent-accent"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>800</span>
              <span>5,000</span>
            </div>
          </div>

          {/* Q2: Bedrooms */}
          <div className="mb-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Home className="w-5 h-5 text-accent" />
              <label className="text-lg font-bold text-primary">
                2. Number of Bedrooms
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Used to estimate typical occupancy load.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Decrease bedrooms"
              >
                <Minus className="w-5 h-5 text-primary" />
              </button>
              <span className="text-4xl font-black text-primary w-16 text-center">
                {bedrooms}
              </span>
              <button
                onClick={() => setBedrooms(Math.min(8, bedrooms + 1))}
                className="w-12 h-12 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                aria-label="Increase bedrooms"
              >
                <Plus className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          {/* Q3: Home Age */}
          <div className="mb-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Building className="w-5 h-5 text-accent" />
              <label className="text-lg font-bold text-primary">
                3. Approximate Age of Home
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Older homes generally have less insulation and higher cooling loads.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HOME_AGE_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setAge(opt.value)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    age === opt.value
                      ? "border-accent bg-accent/5"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="font-bold text-primary">{opt.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{opt.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Q4: Windows */}
          <div className="mb-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-accent rounded-sm" />
              </div>
              <label className="text-lg font-bold text-primary">
                4. Window Type
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Double-pane windows dramatically reduce cooling load.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {WINDOW_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setWindows(opt.value)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    windows === opt.value
                      ? "border-accent bg-accent/5"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="font-bold text-primary">{opt.label}</div>
                  <div className="text-xs text-gray-600 mt-1">{opt.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Q5: Sun Exposure */}
          <div className="mb-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <Sun className="w-5 h-5 text-accent" />
              <label className="text-lg font-bold text-primary">
                5. Sun Exposure
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              How much direct sun does your home get during the day?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SUN_OPTIONS.map((opt) => {
                const Icon = opt.icon;
                return (
                  <button
                    key={opt.value}
                    onClick={() => setSun(opt.value)}
                    className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${
                      sun === opt.value
                        ? "border-accent bg-accent/5"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <Icon className="w-6 h-6 text-primary" />
                    <div className="font-bold text-primary text-sm text-center">
                      {opt.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Q6: Ceiling Height */}
          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 flex items-center justify-center">
                <div className="w-4 h-1 bg-accent rounded-sm" />
              </div>
              <label className="text-lg font-bold text-primary">
                6. Ceiling Height
              </label>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Higher ceilings mean more air volume to cool.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CEILING_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setCeiling(opt.value)}
                  className={`p-4 rounded-lg border-2 text-center transition-all ${
                    ceiling === opt.value
                      ? "border-accent bg-accent/5"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="font-bold text-primary text-sm">{opt.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Result column (sticky) */}
      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-32">
          <div className="bg-primary rounded-2xl shadow-xl p-8 text-white mb-4">
            <div className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3">
              Recommended System Size
            </div>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-7xl font-black text-white leading-none">
                {tonsDisplay}
              </span>
              <span className="text-2xl text-white/80 font-bold">tons</span>
            </div>
            <div className="text-white/70 text-sm mb-6">
              ({result.withSafety.toLocaleString()} BTUs)
            </div>
            <Link
              href="/pricing"
              className="block w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 px-6 rounded-lg transition-colors text-center"
            >
              See Pricing for This Size →
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
              How We Got There
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Envelope load</span>
                <span className="font-semibold">{result.envelope.toLocaleString()} BTU</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>People ({bedrooms} bed)</span>
                <span className="font-semibold">{result.peopleLoad.toLocaleString()} BTU</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Appliances</span>
                <span className="font-semibold">{result.appliances.toLocaleString()} BTU</span>
              </div>
              <div className="flex justify-between text-gray-700 pt-2 border-t border-gray-100">
                <span>+ Duct load (15%)</span>
                <span className="font-semibold">{(result.withDuct - result.envelope - result.peopleLoad - result.appliances).toLocaleString()} BTU</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>+ Safety margin (10%)</span>
                <span className="font-semibold">{(result.withSafety - result.withDuct).toLocaleString()} BTU</span>
              </div>
              <div className="flex justify-between text-primary pt-2 border-t border-gray-100 font-bold">
                <span>Total load</span>
                <span>{result.withSafety.toLocaleString()} BTU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
