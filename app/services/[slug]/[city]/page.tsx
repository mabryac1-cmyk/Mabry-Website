import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { services, locations, getServiceBySlug, getLocationBySlug, businessInfo } from "@/lib/data";
import { Phone, CheckCircle, MapPin } from "lucide-react";

// City-specific HVAC context — unique intro, climate, and housing notes per city
const cityContext: Record<string, { intro: string; climate: string; housing: string }> = {
  "alvin": {
    intro:
      "Our shop is right here at 2110 S Gordon St in Alvin — we live and work in this community. When your AC goes out, we're already nearby.",
    climate:
      "Alvin's Gulf Coast location in Brazoria County means your AC runs up to 9 months per year under intense heat and humidity. The failure patterns we see most often in Alvin's 77511 and 77512 zip codes — capacitor burnout from overworked compressors, condensate drain clogs from persistent Gulf Coast humidity — are things we've been diagnosing and fixing for nearly four decades.",
    housing:
      "Alvin homes range from historic downtown neighborhoods near Nolan Ryan Ballpark to newer subdivisions along Highway 6 and Kendall Lakes. Older Alvin homes often have aging ductwork and legacy R-22 equipment approaching or past end-of-life. Newer build areas benefit most from proactive maintenance to maximize system life.",
  },
  "friendswood": {
    intro:
      "Friendswood families have relied on Mabry's since 1986. Our dedicated Friendswood line — 281-482-8400 — means you always reach a local team that knows your neighborhood.",
    climate:
      "Friendswood's proximity to Clear Lake and Galveston Bay keeps humidity elevated year-round. Condensate drain clogs are among our most common service calls in Friendswood's 77546 and 77549 zip codes — Gulf Coast humidity fills drip pans fast, and an overflowing condensate pan can cause serious water damage inside your home.",
    housing:
      "Friendswood's established neighborhoods — many with homes built in the 1970s and 1980s near Friendswood High School and FM 518 — sit alongside newer FM 2351 corridor developments. We've serviced HVAC systems in this community long enough to work for multiple generations of the same families.",
  },
  "pearland": {
    intro:
      "Mabry's has been serving Pearland homeowners through the city's entire growth — from the established Old Townsite neighborhoods to Shadow Creek Ranch and Silverlake.",
    climate:
      "Pearland's position between Houston and Alvin puts it squarely in Gulf Coast humidity territory. Homes in Pearland's 77581, 77584, and 77588 zip codes face 100°F+ summers, high humidity, and cooling seasons that stretch from April through October — among the most demanding HVAC conditions in the country.",
    housing:
      "Pearland spans Brazoria and Harris counties with an enormous range of housing: 1970s-era homes in Old Pearland and Country Place, mid-2000s master-planned communities in Shadow Creek Ranch and Silverlake (whose builder-grade systems are now 15–20 years old), and newer developments along Highway 288.",
  },
  "clear-lake": {
    intro:
      "The Clear Lake area — including Nassau Bay, El Lago, and Taylor Lake Village — presents some of the most demanding HVAC conditions in Greater Houston. Bay-area humidity and salt air are relentless on residential equipment.",
    climate:
      "Clear Lake's proximity to Galveston Bay means elevated humidity year-round and salt air that accelerates corrosion on outdoor condenser units and coils. Annual maintenance is especially critical here — we routinely find coastal corrosion damage in Clear Lake homes that goes undetected until it triggers a full system failure.",
    housing:
      "Much of Clear Lake's housing stock was built in the 1970s and 1980s to house the aerospace community around NASA's Johnson Space Center. These 40–50-year-old homes in zip codes 77058, 77059, and 77062 often have original or older replacement ductwork and systems that have been through multiple replacement cycles.",
  },
  "deer-park": {
    intro:
      "Deer Park homeowners have relied on Mabry's for dependable HVAC service since 1986. Flat-rate pricing, no surprises — that's how we do business in the 77536 area.",
    climate:
      "Deer Park's location in East Harris County, near the Ship Channel and Galveston Bay, means Gulf Coast humidity is a constant factor and AC equipment runs nearly nonstop from May through October. Condensate drains, outdoor unit corrosion in waterfront-adjacent areas, and coil maintenance are recurring HVAC concerns we address regularly throughout the 77536 area.",
    housing:
      "Deer Park's established residential neighborhoods range from post-war homes near the city's historic core to mid-century subdivisions developed through the 1960s–1980s and newer developments on the outskirts of the 77536 area. Many Deer Park homes are at or past the typical 15–20 year replacement age for their HVAC systems.",
  },
  "league-city": {
    intro:
      "League City has become one of the fastest-growing communities on the I-45 Gulf Freeway corridor, and Mabry's has been serving League City homeowners with reliable, flat-rate HVAC service since 1986.",
    climate:
      "League City's Galveston County location puts it in the heart of Gulf Coast humidity territory. Clear Lake and Galveston Bay mean elevated moisture year-round — accelerating condensate drain clogs and outdoor unit corrosion that we address regularly in League City's 77573 and 77574 zip codes.",
    housing:
      "League City includes established communities near the historic downtown and Clear Creek alongside large master-planned developments — South Shore Harbour, Tuscan Lakes, Victory Lakes, and Bay Colony — built in the 2000s and 2010s. The newer communities have builder-grade systems now reaching the 12–20 year repair-or-replace decision window.",
  },
  "pasadena": {
    intro:
      "Mabry's serves the residential communities of South Pasadena — the 77504 and 77505 zip codes — with the flat-rate, licensed HVAC service Greater Houston homeowners have relied on since 1986.",
    climate:
      "Pasadena's location in the Houston Ship Channel corridor and its proximity to Galveston Bay means Gulf Coast heat and humidity define the local climate. Heat indexes regularly above 110°F and sustained humidity make reliable AC non-negotiable for Pasadena families, and AC systems in this part of Greater Houston run nearly nonstop from May through October.",
    housing:
      "The South Pasadena neighborhoods we serve — along the Burke Road corridor and throughout 77504 and 77505 — include established residential areas with homes built primarily from the 1960s through the 1990s. These homes often have older ductwork, original-era equipment that's been replaced once or twice, and in some cases attic ductwork that has developed leaks or deteriorated over the decades.",
  },
  "sienna": {
    intro:
      "Sienna — one of Fort Bend County's premier master-planned communities — features newer homes built for modern HVAC systems. Mabry's provides trusted service throughout Sienna's neighborhoods with flat-rate pricing and no surprises.",
    climate:
      "Despite being inland, Sienna's Fort Bend County location keeps it fully in Gulf Coast humidity territory. Summer heat indexes above 105°F and long cooling seasons mean even newer, higher-efficiency systems in Sienna homes work hard — and benefit significantly from annual maintenance to protect that investment.",
    housing:
      "Sienna Plantation was developed primarily from the late 1990s through the 2010s — including Waters Lake, Sawmill Lake, Sienna Village, and Lake Olympia — meaning a significant portion of the community's original HVAC equipment is now entering the 15–25 year replacement range. These systems, often builder-grade, are reaching the point where maintenance or proactive replacement becomes the smart financial decision.",
  },
  "angleton": {
    intro:
      "Angleton is in Mabry's home territory — we're just up Highway 35 in Alvin. That means fast response times for Angleton homeowners without the travel fees that larger Houston-based companies charge to reach Brazoria County.",
    climate:
      "Angleton's Brazoria County location subjects homes to full Gulf Coast heat and humidity — the area regularly sees summer heat indexes above 105°F and cooling seasons that stretch from spring through October. Annual condensate drain maintenance remains important in Angleton's 77515 and 77516 zip codes despite being somewhat further from the bay.",
    housing:
      "Angleton has a mix of housing reflecting its history as a long-established county seat: older homes near the historic downtown and the Brazoria County Courthouse, mid-century neighborhoods that expanded through the 1950s–1980s, and newer development on the city's outskirts. Many Angleton homeowners have systems approaching typical replacement age.",
  },
  "manvel": {
    intro:
      "Mabry's is just down the road from Manvel, based in Alvin — your true local neighbor for HVAC service in the 77578 area. Fast response, no travel fees, honest flat-rate pricing.",
    climate:
      "Manvel's Brazoria County location means full Gulf Coast heat loads in summer. The rapid residential growth in Manvel has brought many newer homes whose builder-grade systems need proper maintenance to achieve their full lifespan under these demanding climate conditions.",
    housing:
      "Manvel's 77578 zip code now includes Rodeo Palms — one of the area's original planned neighborhoods — alongside newer developments like Pomona that have brought thousands of newer homes to the area. Most Manvel homes are 2010s–2020s construction with modern systems that reward proactive maintenance to maximize their lifespan.",
  },
  "rosharon": {
    intro:
      "Rosharon sits in the heart of Brazoria County, close to our Alvin shop. We've been serving Rosharon and the surrounding 77583 zip code since 1986 with honest, flat-rate pricing.",
    climate:
      "Rosharon's rural Brazoria County setting doesn't insulate it from Gulf Coast heat and humidity. Summer heat indexes above 100°F and a 9-month effective cooling season mean residential HVAC systems in the 77583 area work as hard as anywhere in the greater Houston area.",
    housing:
      "The 77583 zip code covers a wide range of residential properties — from rural acreage homes and older farmstead properties to newer residential developments that have grown along the Highway 288 corridor. Rural and semi-rural properties sometimes present unique HVAC configurations that require experienced technicians.",
  },
  "sugar-land": {
    intro:
      "Sugar Land is one of Fort Bend County's most established communities, and Mabry's brings the flat-rate, licensed HVAC service that Sugar Land homeowners expect — nearly four decades of Gulf Coast HVAC experience.",
    climate:
      "Sugar Land's Fort Bend County location puts it in full Gulf Coast territory for heat and humidity. The city's well-developed master-planned communities represent significant real estate investments that depend on reliable HVAC performance through demanding Houston summers — with heat indexes regularly pushing above 105°F.",
    housing:
      "Sugar Land includes master-planned communities like First Colony and Riverstone spanning multiple decades of construction. First Colony homes from the 1980s and 1990s are approaching their second or third HVAC replacement cycle. Newer Riverstone, Telfair, and New Territory homes from the 2000s–2010s benefit from the maintenance that protects newer systems from premature failure.",
  },
  "bellaire": {
    intro:
      "Bellaire — the 'City of Homes' inside Houston's Loop 610 — is a community where homeowners invest in their properties and expect quality service. Mabry's brings nearly four decades of Greater Houston HVAC experience to every Bellaire service call.",
    climate:
      "Inside Loop 610, the urban heat island effect adds to Houston's already demanding cooling load. Bellaire homes run their AC hard — for the better part of nine months — and that requires reliable equipment and a contractor who shows up fast when something fails. High humidity, sustained summer heat, and condensate systems under constant stress are facts of life in the 77401 zip code.",
    housing:
      "Bellaire's 77401 zip code features a remarkable mix of original mid-century ranch homes (many built in the 1950s and 1960s) alongside the newer luxury custom homes and tear-down rebuilds that have transformed many Bellaire streets over the past two decades. Older homes may have original or partially updated ductwork; newer construction often features zoned cooling and high-efficiency equipment.",
  },
  "west-university": {
    intro:
      "West University Place — 'West U' — is one of Texas's most prestigious small cities, a residential enclave surrounded by Houston. Mabry's brings nearly 40 years of Greater Houston experience and flat-rate, no-surprises pricing to West U homeowners.",
    climate:
      "Houston's urban heat, amplified inside Loop 610, means West U homes run their AC for the better part of nine months — a serious cooling load. High humidity, heat island effects, and sustained summer temperatures make reliable HVAC performance critical in the 77005 zip code.",
    housing:
      "West University Place's housing ranges from charming original bungalows and craftsman homes built in the 1920s–1930s to substantial custom rebuilds that have reshaped many blocks as land values have risen. Older homes present real HVAC challenges — limited attic clearance, complex ductwork routing, and cooling loads that older systems were never designed for. Newer builds often feature zoned systems and high-efficiency equipment.",
  },
  "rice-village": {
    intro:
      "The Rice Village area — anchored by Rice University and the Museum District — is home to some of Houston's most character-rich residential neighborhoods. Mabry's has served Greater Houston homeowners since 1986 with licensed, flat-rate HVAC service.",
    climate:
      "Inside Houston's Loop 610, the sustained heat load is real. Homes in the Rice Village area, Southampton, Boulevard Oaks, and Braeswood Place run their AC nearly year-round — and Gulf Coast humidity means condensate drain systems are under constant stress. That demands reliable equipment and a contractor who responds fast when something fails.",
    housing:
      "The streets around Rice Village include homes built between the 1920s and 1950s alongside high-end renovations and newer construction. Many of these older homes have HVAC systems retrofitted into spaces not originally designed for modern equipment — requiring technicians who can navigate complex ductwork routing, limited attic access, and configurations that newer tract homes simply don't present.",
  },
  "houston": {
    intro:
      "Mabry's serves the South and Southwest Houston corridor — Meyerland, Braeswood Place, Westbury, Braeburn, Willow Meadows, and the communities connecting Houston's inner loop to the suburbs further south and west.",
    climate:
      "Houston's Gulf Coast climate hits South Houston hard. The combination of sustained summer heat, high humidity, and the urban heat island effect means AC systems in this area work harder than almost anywhere in the country — with heat indexes above 105°F common from May through September and cooling seasons that run nine months or more.",
    housing:
      "South and Southwest Houston includes a remarkable range of housing: mid-century ranch homes in Meyerland and Braeswood (many rebuilt or renovated after flooding), established 1960s–70s neighborhoods in Westbury and Braeburn, and the NASA-era communities in the Clear Lake corridor. Each era and neighborhood has its own HVAC challenges — we've worked in them all.",
  },
};

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  for (const service of services) {
    for (const location of locations) {
      params.push({ slug: service.slug, city: location.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}): Promise<Metadata> {
  const { slug, city } = await params;
  const service = getServiceBySlug(slug);
  const location = getLocationBySlug(city);
  if (!service || !location) return { title: "Page Not Found" };

  const title = `${service.name} in ${location.name}, TX | Mabry's AC & Heating`;
  const description = `Licensed ${service.name} for ${location.name}, TX homeowners. Flat-rate pricing, no hidden charges. BBB A+ rated. License ${businessInfo.license}. Call ${location.phone} — serving ${location.zipCodes.join(", ")}.`;

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${location.name} TX`,
      `${service.name.toLowerCase()} ${location.name} ${location.zipCodes[0]}`,
      `HVAC contractor ${location.name} TX`,
      `air conditioning ${location.name}`,
      ...service.keywords.map((k) => `${k} ${location.name}`),
    ],
    alternates: { canonical: `/services/${slug}/${city}` },
  };
}

export default async function ServiceCityPage({
  params,
}: {
  params: Promise<{ slug: string; city: string }>;
}) {
  const { slug, city } = await params;
  const service = getServiceBySlug(slug);
  const location = getLocationBySlug(city);
  if (!service || !location) notFound();

  const serviceTaglines: Record<string, string> = {
    "ac-repair": "Same-Day Service, Flat-Rate Pricing",
    "heating-repair": "Fast, Reliable Service",
    "ac-installation": "Licensed Installation, Proper Sizing",
    "ac-maintenance": "Prevent Breakdowns, Extend System Life",
  };
  const tagline = serviceTaglines[slug] ?? "";

  const otherLocations = locations.filter((l) => l.slug !== location.slug);
  const ctx = cityContext[location.slug] ?? {
    intro: `${businessInfo.name} has been serving ${location.name} homeowners since ${businessInfo.established}.`,
    climate: `Gulf Coast heat and humidity define the HVAC demands in ${location.name}, TX — with summer heat indexes regularly above 100°F and cooling seasons that stretch 9 months of the year.`,
    housing: `${location.name} homes span a range of ages and styles that our experienced technicians are equipped to handle.`,
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://mabryac.com/services/${slug}/${city}`,
    name: `${service.name} in ${location.name}, TX`,
    serviceType: service.name,
    description: `Licensed ${service.name} for ${location.name}, TX homeowners. Flat-rate pricing, BBB A+ rated. License ${businessInfo.license}.`,
    provider: {
      "@type": "HVACBusiness",
      "@id": "https://mabryac.com/#business",
      name: businessInfo.name,
      telephone: location.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.address.street,
        addressLocality: businessInfo.address.city,
        addressRegion: businessInfo.address.state,
        postalCode: businessInfo.address.zip,
        addressCountry: "US",
      },
    },
    areaServed: {
      "@type": "City",
      name: location.name,
      addressRegion: "TX",
      addressCountry: "US",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Flat-rate pricing — upfront quote before work begins, no hidden charges",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/60">/</span>
            <Link
              href={`/services/${service.slug}`}
              className="text-white/80 hover:text-white transition-colors"
            >
              {service.name}
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-white">{location.name}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {service.name} in {location.name}, {location.state}{tagline ? ` — ${tagline}` : ""}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {service.description} Trusted by homeowners in {location.name} since{" "}
            {businessInfo.established}.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`tel:${location.phone}`}
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {location.phone}
            </a>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                License {businessInfo.license}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Serving {location.zipCodes.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">

              {/* ── CITY-SPECIFIC INTRO ── */}
              <div className="prose prose-lg max-w-none mb-8">
                {slug === "ac-repair" && (
                  <>
                    <h2>Fast AC Repair for {location.name} Homeowners</h2>
                    <p>
                      {ctx.intro} Mabry&apos;s Air Conditioning &amp; Heating has been the trusted
                      name for fast, reliable AC repair in {location.name}, TX since{" "}
                      {businessInfo.established} — with flat-rate pricing, licensed technicians,
                      and no hidden charges. When your AC goes out during a {location.name} summer,
                      we show up.
                    </p>
                  </>
                )}
                {slug === "heating-repair" && (
                  <>
                    <h2>Heating Repair for {location.name} Homes — All Makes &amp; Models</h2>
                    <p>
                      A broken heater on a cold January night in {location.name} is a serious
                      problem — especially for families with young children or elderly members.{" "}
                      {ctx.intro} Mabry&apos;s Air Conditioning &amp; Heating has been fixing
                      furnaces and heat pumps for {location.name} homeowners since{" "}
                      {businessInfo.established}.
                    </p>
                  </>
                )}
                {slug === "ac-installation" && (
                  <>
                    <h2>Professional AC Installation in {location.name}, TX</h2>
                    <p>
                      When it&apos;s time for a new air conditioning system in {location.name},
                      the stakes are high — the wrong size unit or a poor installation means higher
                      energy bills, uncomfortable rooms, and more breakdowns. {ctx.intro}{" "}
                      Mabry&apos;s Air Conditioning &amp; Heating has been installing quality AC
                      systems in {location.name} homes since {businessInfo.established}. We do it
                      right the first time.
                    </p>
                  </>
                )}
                {slug === "ac-maintenance" && (
                  <>
                    <h2>AC &amp; Heating Tune-Up for {location.name} Homeowners</h2>
                    <p>
                      In {location.name}, your air conditioning system works harder than almost
                      anywhere in the country — up to 9 months per year under Gulf Coast heat and
                      humidity. Annual preventive maintenance is the single best thing you can do
                      to prevent a breakdown on the hottest day of August and keep your energy bills
                      under control. {ctx.intro}
                    </p>
                  </>
                )}
              </div>

              {/* ── SERVICE-SPECIFIC TECHNICAL CONTENT ── */}
              <div className="prose prose-lg max-w-none">
                {slug === "ac-repair" && (
                  <>
                    <h3>We Repair All Major AC Brands in {location.name}</h3>
                    <p>
                      Our licensed technicians are trained to diagnose and repair every major brand
                      of residential air conditioning equipment, including:
                    </p>
                    <ul>
                      <li>
                        <strong>Trane</strong> — including XR, XL, and Comfort series systems
                      </li>
                      <li>
                        <strong>Carrier</strong> — including Infinity, Performance, and Comfort
                        series
                      </li>
                      <li>
                        <strong>Lennox</strong> — including Elite, Merit, and Dave Lennox Signature
                        series
                      </li>
                      <li>
                        <strong>Rheem</strong> — including Prestige, Classic Plus, and Classic
                        series
                      </li>
                      <li>
                        <strong>Goodman</strong> and <strong>Amana</strong> systems
                      </li>
                      <li>
                        <strong>American Standard</strong> — including Gold and Silver series
                      </li>
                      <li>
                        <strong>York</strong>, <strong>Bryant</strong>, <strong>Daikin</strong>,
                        and all other residential brands
                      </li>
                    </ul>

                    <h3>Common AC Problems We Fix in {location.name}</h3>
                    <ul>
                      <li>AC not cooling or blowing warm air</li>
                      <li>Unit won&apos;t turn on or keeps shutting off</li>
                      <li>Strange noises — banging, squealing, clicking</li>
                      <li>Frozen evaporator coils</li>
                      <li>Refrigerant leaks (R-410A and legacy R-22 systems)</li>
                      <li>Thermostat malfunctions and wiring issues</li>
                      <li>Capacitor, contactor, and electrical failures</li>
                      <li>Drainage clogs and condensate pan overflow</li>
                      <li>Compressor problems and fan motor failure</li>
                    </ul>
                  </>
                )}

                {slug === "heating-repair" && (
                  <>
                    <h3>We Repair All Major Heating Brands in {location.name}</h3>
                    <p>
                      Our licensed technicians service and repair every major brand of residential
                      heating equipment:
                    </p>
                    <ul>
                      <li>
                        <strong>Trane</strong> — gas furnaces, heat pumps, and air handlers
                      </li>
                      <li>
                        <strong>Carrier</strong> — Infinity, Performance, and Comfort series
                        furnaces and heat pumps
                      </li>
                      <li>
                        <strong>Lennox</strong> — Elite, Merit, and Dave Lennox Signature furnaces
                      </li>
                      <li>
                        <strong>Rheem</strong> — Classic, Classic Plus, and Prestige series
                      </li>
                      <li>
                        <strong>Goodman</strong> and <strong>Amana</strong> gas furnaces and heat
                        pumps
                      </li>
                      <li>
                        <strong>American Standard</strong>, <strong>York</strong>,{" "}
                        <strong>Bryant</strong>, <strong>Daikin</strong>, and all other residential
                        brands
                      </li>
                    </ul>

                    <h3>Heating Services We Provide in {location.name}</h3>
                    <ul>
                      <li>Gas furnace repair and diagnostics</li>
                      <li>Heat pump repair and service</li>
                      <li>Electric air handler and strip heat repair</li>
                      <li>Igniter and flame sensor replacement</li>
                      <li>
                        Heat exchanger inspection (critical safety check for gas furnaces —
                        cracked exchangers can leak carbon monoxide)
                      </li>
                      <li>Gas valve, draft inducer, and control board repair</li>
                      <li>Thermostat calibration and replacement</li>
                      <li>Ductwork inspection and repair</li>
                    </ul>
                  </>
                )}

                {slug === "ac-installation" && (
                  <>
                    <h3>Top Brands We Install in {location.name}</h3>
                    <p>
                      We install trusted, energy-efficient systems from leading manufacturers.
                      During your consultation, we&apos;ll recommend the best option for your{" "}
                      {location.name} home and budget:
                    </p>
                    <ul>
                      <li>
                        <strong>Trane</strong> — known for durability and reliability in
                        Houston&apos;s demanding climate
                      </li>
                      <li>
                        <strong>Carrier</strong> — the inventor of modern air conditioning, with
                        excellent efficiency ratings
                      </li>
                      <li>
                        <strong>Lennox</strong> — industry-leading efficiency for homeowners
                        focused on energy savings
                      </li>
                      <li>
                        <strong>Rheem</strong> — strong reliability and value, excellent warranty
                        coverage
                      </li>
                      <li>
                        <strong>Goodman</strong> and <strong>Amana</strong> — great value for
                        budget-conscious homeowners
                      </li>
                      <li>
                        <strong>American Standard</strong> — Trane technology in a different
                        product line
                      </li>
                    </ul>

                    <h3>Our Installation Process in {location.name}</h3>
                    <ul>
                      <li>
                        <strong>Free In-Home Consultation</strong> — we assess your{" "}
                        {location.name} home&apos;s specific cooling needs
                      </li>
                      <li>
                        <strong>Load Calculation</strong> — Manual J calculation for proper sizing
                      </li>
                      <li>
                        <strong>Brand &amp; Efficiency Recommendation</strong> — options at
                        multiple price points
                      </li>
                      <li>
                        <strong>Professional Installation</strong> — licensed technicians,
                        permit-ready
                      </li>
                      <li>
                        <strong>Refrigerant Line &amp; Ductwork Check</strong> — we don&apos;t
                        just swap the equipment
                      </li>
                      <li>
                        <strong>System Testing &amp; Commissioning</strong> — we verify
                        everything before we leave
                      </li>
                      <li>
                        <strong>Customer Walkthrough</strong> — we show you how to maximize your
                        new system
                      </li>
                    </ul>

                    <h3>Signs You Need a New AC System in {location.name}</h3>
                    <ul>
                      <li>Your system is 12–15+ years old</li>
                      <li>Repairs are becoming frequent or expensive</li>
                      <li>Energy bills keep rising despite normal use</li>
                      <li>
                        Some rooms are never comfortable regardless of thermostat setting
                      </li>
                      <li>
                        The system uses R-22 refrigerant (phased out — repairs are costly)
                      </li>
                      <li>
                        The system runs constantly but can&apos;t keep up with{" "}
                        {location.name}&apos;s summer heat
                      </li>
                    </ul>
                  </>
                )}

                {slug === "ac-maintenance" && (
                  <>
                    <h3>What Our AC Tune-Up Includes</h3>
                    <p>
                      Our spring AC tune-up is a comprehensive inspection and tune-up of your
                      entire cooling system:
                    </p>
                    <ul>
                      <li>
                        <strong>Refrigerant level check</strong> — verify proper charge (low
                        refrigerant = poor cooling and compressor damage)
                      </li>
                      <li>
                        <strong>Capacitor testing</strong> — capacitor failures are the #1 cause
                        of AC breakdowns in Houston summers
                      </li>
                      <li>
                        <strong>Contactor inspection</strong> — worn contactors cause compressor
                        and fan motor failure
                      </li>
                      <li>
                        <strong>Condenser coil cleaning</strong> — dirty coils reduce efficiency
                        and cause overheating
                      </li>
                      <li>
                        <strong>Evaporator coil inspection</strong> — check for ice buildup,
                        dirt, and refrigerant issues
                      </li>
                      <li>
                        <strong>Condensate drain flush</strong> — prevent clogged drains and
                        water damage (Gulf Coast humidity makes this critical for{" "}
                        {location.name} homes)
                      </li>
                      <li>
                        <strong>Blower motor and belt inspection</strong> — ensure proper airflow
                        throughout your home
                      </li>
                      <li>
                        <strong>Thermostat calibration</strong> — confirm your system responds
                        accurately
                      </li>
                      <li>
                        <strong>Electrical connections and wiring check</strong> — loose
                        connections cause failures and safety hazards
                      </li>
                      <li>
                        <strong>Filter inspection and replacement guidance</strong>
                      </li>
                      <li>
                        <strong>Overall system performance assessment</strong> — temperature
                        differential check
                      </li>
                    </ul>

                    <h3>What Our Heating Tune-Up Includes</h3>
                    <p>
                      Our fall heating tune-up prepares your {location.name} home&apos;s heating
                      system for winter:
                    </p>
                    <ul>
                      <li>
                        <strong>Heat exchanger inspection</strong> — critical safety check for
                        gas furnaces (cracked exchangers can leak carbon monoxide)
                      </li>
                      <li>
                        <strong>Burner and igniter inspection</strong> — ensure reliable ignition
                        on first use
                      </li>
                      <li>
                        <strong>Flame sensor cleaning</strong> — dirty sensors cause nuisance
                        shutdowns
                      </li>
                      <li>
                        <strong>Gas valve and pressure check</strong> — verify safe, proper gas
                        flow
                      </li>
                      <li>
                        <strong>Heat pump reversing valve check</strong> — ensures proper heating
                        mode operation
                      </li>
                      <li>
                        <strong>Electrical components and wiring inspection</strong>
                      </li>
                      <li>
                        <strong>Thermostat calibration</strong>
                      </li>
                      <li>
                        <strong>Airflow and ductwork assessment</strong>
                      </li>
                      <li>
                        <strong>Overall system safety check</strong>
                      </li>
                    </ul>
                  </>
                )}

                {/* ── CITY-SPECIFIC CLIMATE SECTION ── */}
                <h3>{location.name}&apos;s Climate and Your HVAC System</h3>
                <p>{ctx.climate}</p>

                {/* ── CITY-SPECIFIC HOUSING SECTION ── */}
                <h3>We Know {location.name} Homes</h3>
                <p>{ctx.housing}</p>

                {slug === "ac-installation" && (
                  <p>
                    For new installations in {location.name}, we recommend systems with a minimum{" "}
                    <strong>16 SEER2</strong> rating. Higher-efficiency units (18–21+ SEER2) can
                    deliver significant energy savings given our 9-month cooling season — and
                    we&apos;ll calculate the exact payback period so you can make an informed
                    decision.
                  </p>
                )}

                {slug === "ac-maintenance" && (
                  <p>
                    The most common AC emergencies we see in {location.name} — failed capacitors,
                    low refrigerant, clogged condensate drains — are almost always detectable
                    during a routine maintenance visit. A pre-season tune-up that catches a
                    failing capacitor saves you an emergency service call on a 100°F Saturday in
                    July. Maintenance also keeps your manufacturer&apos;s warranty valid on newer
                    systems and can extend equipment life by 3–5 years or more.
                  </p>
                )}
              </div>

              {/* Why Choose Us */}
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Why {location.name} Homeowners Choose Mabry&apos;s
                </h3>
                <ul className="space-y-3">
                  {businessInfo.valueProps.map((prop, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-8 bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold text-primary mb-2">
                  Need {service.name} in {location.name}?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Call us now or fill out the form. Flat-rate pricing with no hidden charges.
                </p>
                <a
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {location.phone}
                </a>
              </div>

              {/* Nearby areas */}
              <div className="mt-12">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Also Serving Nearby Areas
                </h3>
                <div className="flex flex-wrap gap-3">
                  {otherLocations.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={`/services/${service.slug}/${loc.slug}`}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border hover:border-accent hover:text-accent transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      {service.name} in {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm
                  preselectedService={service.slug}
                  preselectedCity={location.name}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
