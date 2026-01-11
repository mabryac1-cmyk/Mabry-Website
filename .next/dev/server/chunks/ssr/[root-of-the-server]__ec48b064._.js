module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/lib/data.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "businessInfo",
    ()=>businessInfo,
    "getLocationBySlug",
    ()=>getLocationBySlug,
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "locations",
    ()=>locations,
    "reviews",
    ()=>reviews,
    "services",
    ()=>services
]);
const businessInfo = {
    name: "Mabry's Air Conditioning & Heating, Inc.",
    phone: "(281) 485-7299",
    email: "service@mabrysac.com",
    address: {
        street: "123 Industrial Blvd",
        city: "Friendswood",
        state: "TX",
        zip: "77546",
        lat: "29.5294",
        lng: "-95.2010"
    },
    license: "TACLB12058E",
    established: 1986,
    bbbRating: "A+",
    tagline: "Residential AC & Heating Experts Since 1986",
    valueProps: [
        "Flat-rate pricing with no hidden or surprise charges",
        "BBB Accredited with A+ Rating",
        "Locally owned and operated since 1986",
        "Licensed Texas HVAC Contractor",
        "Residential service only - we specialize in homes"
    ]
};
const services = [
    {
        slug: "ac-repair",
        name: "AC Repair",
        title: "AC Repair Services",
        shortDescription: "Fast, reliable residential AC repair",
        description: "Fast, reliable residential AC repair services. We fix all makes and models with honest, flat-rate pricing.",
        content: `
      <h2>Fast, Reliable Residential AC Repair</h2>
      <p>When your air conditioner stops working, you need a trusted professional who can diagnose and fix the problem quickly. Mabry's Air Conditioning & Heating has been providing reliable AC repair services since 1986.</p>
      
      <h3>Common AC Problems We Fix</h3>
      <ul>
        <li>AC not cooling or blowing warm air</li>
        <li>Unit won't turn on or keeps shutting off</li>
        <li>Strange noises or unusual odors</li>
        <li>Frozen evaporator coils</li>
        <li>Refrigerant leaks</li>
        <li>Thermostat issues</li>
        <li>Electrical and wiring problems</li>
        <li>Drainage and condensation issues</li>
      </ul>

      <h3>Benefits of Professional AC Repair</h3>
      <ul>
        <li>Proper diagnosis saves money on unnecessary repairs</li>
        <li>Licensed technicians ensure safe, code-compliant work</li>
        <li>Quality repairs extend the life of your system</li>
        <li>Improved efficiency lowers your energy bills</li>
      </ul>

      <h3>Why Choose Mabry's for AC Repair?</h3>
      <ul>
        <li>Flat-rate pricing - no hidden or surprise charges</li>
        <li>Texas licensed HVAC contractor (TACLB12058E)</li>
        <li>BBB A+ Accredited Business</li>
        <li>Serving Friendswood, Pearland, Clear Lake & Alvin</li>
        <li>Residential specialists - we know homes</li>
      </ul>
    `,
        keywords: [
            "air conditioning repair",
            "AC repair",
            "AC not cooling",
            "AC service"
        ]
    },
    {
        slug: "heating-repair",
        name: "Heating Repair & Maintenance",
        title: "Heating Repair & Maintenance Services",
        shortDescription: "Furnace and heating system repair and maintenance",
        description: "Professional furnace and heating system repair and seasonal maintenance. Keep your home warm and safe all winter.",
        content: `
      <h2>Professional Heating Repair & Maintenance</h2>
      <p>Don't let a broken heater leave your family in the cold. Mabry's provides fast, reliable heating repair for all types of residential heating systems.</p>

      <h3>Our Heating Services Include</h3>
      <ul>
        <li>Furnace repair and diagnostics</li>
        <li>Heat pump service and repair</li>
        <li>Seasonal maintenance tune-ups</li>
        <li>Thermostat calibration and replacement</li>
        <li>Ductwork inspection and repair</li>
        <li>Safety inspections</li>
      </ul>

      <h3>Why Seasonal Maintenance Matters</h3>
      <p>Regular heating maintenance is essential for:</p>
      <ul>
        <li><strong>Safety</strong> - Prevent carbon monoxide leaks and fire hazards</li>
        <li><strong>Efficiency</strong> - A tuned system uses less energy</li>
        <li><strong>Reliability</strong> - Catch problems before they become emergencies</li>
        <li><strong>Longevity</strong> - Extend the life of your equipment</li>
      </ul>

      <h3>Residential Focus Only</h3>
      <p>Unlike companies that split their attention between commercial and residential work, we focus exclusively on homes. This means our technicians are experts in residential heating systems and understand the unique needs of homeowners.</p>
    `,
        keywords: [
            "heating repair",
            "furnace repair",
            "heater not working",
            "heating maintenance"
        ]
    },
    {
        slug: "ac-installation",
        name: "AC Installation",
        title: "AC Installation & Replacement",
        shortDescription: "New system installation and energy-efficient upgrades",
        description: "Professional AC installation and replacement. We help you choose the right energy-efficient system for your home.",
        content: `
      <h2>Professional AC Installation & Replacement</h2>
      <p>When it's time for a new air conditioning system, trust the experienced team at Mabry's. We've been installing quality AC systems in homes since 1986.</p>

      <h3>Our Installation Process</h3>
      <ul>
        <li><strong>Free Consultation</strong> - We assess your home's cooling needs</li>
        <li><strong>Proper Sizing</strong> - Load calculations ensure the right-sized system</li>
        <li><strong>Quality Equipment</strong> - We install trusted, energy-efficient brands</li>
        <li><strong>Professional Installation</strong> - Licensed technicians do it right</li>
        <li><strong>System Testing</strong> - We verify everything works perfectly</li>
        <li><strong>Customer Education</strong> - Learn how to get the most from your new system</li>
      </ul>

      <h3>Energy-Efficient Upgrades</h3>
      <p>Today's AC systems are more efficient than ever. Upgrading from an older unit can significantly reduce your energy bills while keeping your home more comfortable. We'll help you understand your options and find the best system for your budget.</p>

      <h3>Signs You Need a New AC System</h3>
      <ul>
        <li>Your system is more than 10-15 years old</li>
        <li>Frequent repairs are adding up</li>
        <li>Energy bills keep rising</li>
        <li>Some rooms are hard to keep cool</li>
        <li>The system uses R-22 refrigerant (being phased out)</li>
      </ul>

      <h3>Flat-Rate Pricing</h3>
      <p>We provide clear, upfront pricing for all installations - no hidden fees or surprise charges. You'll know exactly what to expect before we begin.</p>
    `,
        keywords: [
            "AC installation",
            "new air conditioner",
            "AC replacement",
            "HVAC installation"
        ]
    }
];
const locations = [
    {
        slug: "friendswood",
        name: "Friendswood",
        state: "TX",
        zipCodes: [
            "77546",
            "77549"
        ],
        isPrimary: true,
        headline: "Air Conditioning & Heating Services in Friendswood, TX",
        description: "Proudly serving Friendswood since 1986. As your local HVAC experts, we understand the unique cooling and heating needs of Friendswood homes.",
        content: `
      <h2>Your Trusted HVAC Company in Friendswood, TX</h2>
      <p>Mabry's Air Conditioning & Heating has been serving Friendswood homeowners since 1986. As a locally owned and operated company, we're your neighbors - and we treat every customer like family.</p>

      <h3>Residential HVAC Services in Friendswood</h3>
      <ul>
        <li>AC repair and emergency service</li>
        <li>Heating repair and maintenance</li>
        <li>New AC installation and replacement</li>
        <li>Seasonal tune-ups and inspections</li>
      </ul>

      <h3>Why Friendswood Homeowners Trust Mabry's</h3>
      <ul>
        <li>Local business serving this community for nearly 40 years</li>
        <li>Flat-rate pricing with no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
      </ul>

      <p>Whether you're in the historic downtown area, near Friendswood High School, or anywhere else in the 77546 zip code, we're just a phone call away.</p>
    `,
        keywords: [
            "HVAC Friendswood TX",
            "air conditioning Friendswood",
            "AC repair Friendswood TX"
        ]
    },
    {
        slug: "pearland",
        name: "Pearland",
        state: "TX",
        zipCodes: [
            "77581",
            "77584",
            "77588"
        ],
        isPrimary: false,
        headline: "Air Conditioning & Heating Services in Pearland, TX",
        description: "Providing reliable residential HVAC services to Pearland homes. Fast response times from our nearby Friendswood location.",
        content: `
      <h2>Trusted HVAC Services for Pearland Homes</h2>
      <p>Pearland homeowners have counted on Mabry's Air Conditioning & Heating for decades. Located just minutes away in Friendswood, we provide fast, reliable service throughout Pearland.</p>

      <h3>HVAC Services We Offer in Pearland</h3>
      <ul>
        <li>AC repair - same-day service available</li>
        <li>Heating repair and furnace maintenance</li>
        <li>New AC system installation</li>
        <li>Seasonal maintenance programs</li>
      </ul>

      <h3>Serving All Pearland Neighborhoods</h3>
      <p>From Shadow Creek Ranch to Silverlake, from Old Pearland to the newest subdivisions, we service homes throughout Pearland including zip codes 77581, 77584, and 77588.</p>

      <h3>Why Pearland Residents Choose Us</h3>
      <ul>
        <li>Nearly 40 years of experience</li>
        <li>Honest, flat-rate pricing - no surprises</li>
        <li>BBB A+ Rating you can trust</li>
        <li>Residential-only focus means we specialize in homes</li>
        <li>Licensed and insured (TACLB12058E)</li>
      </ul>
    `,
        keywords: [
            "HVAC company Pearland TX",
            "AC repair Pearland",
            "heating repair Pearland TX"
        ]
    },
    {
        slug: "clear-lake",
        name: "Clear Lake",
        state: "TX",
        zipCodes: [
            "77058",
            "77059",
            "77062"
        ],
        isPrimary: false,
        headline: "Air Conditioning & Heating Services in Clear Lake (Houston), TX",
        description: "Expert residential HVAC services for Clear Lake area homes. Serving the NASA/Johnson Space Center community since 1986.",
        content: `
      <h2>HVAC Experts Serving Clear Lake, Houston</h2>
      <p>The Clear Lake area has unique cooling demands with our hot, humid Gulf Coast climate. Mabry's Air Conditioning & Heating has been keeping Clear Lake homes comfortable since 1986.</p>

      <h3>Residential HVAC Services in Clear Lake</h3>
      <ul>
        <li>Emergency AC repair when you need it most</li>
        <li>Heating system repair and maintenance</li>
        <li>Energy-efficient AC installation</li>
        <li>Annual maintenance to prevent breakdowns</li>
      </ul>

      <h3>Serving the Clear Lake Community</h3>
      <p>We provide service throughout the Clear Lake area including Nassau Bay, El Lago, Taylor Lake Village, and surrounding neighborhoods near the Johnson Space Center. Zip codes served include 77058, 77059, and 77062.</p>

      <h3>What Makes Mabry's Different</h3>
      <ul>
        <li>Established in 1986 - we've earned our reputation</li>
        <li>Flat-rate pricing you can count on</li>
        <li>BBB A+ Accredited Business</li>
        <li>Texas Licensed (TACLB12058E)</li>
        <li>We only do residential - homes are our specialty</li>
      </ul>
    `,
        keywords: [
            "AC installation Clear Lake Houston",
            "HVAC Clear Lake TX",
            "air conditioning Clear Lake"
        ]
    },
    {
        slug: "alvin",
        name: "Alvin",
        state: "TX",
        zipCodes: [
            "77511",
            "77512"
        ],
        isPrimary: false,
        headline: "Air Conditioning & Heating Services in Alvin, TX",
        description: "Quality residential HVAC services for Alvin, TX homeowners. Trusted flat-rate pricing and BBB A+ rated service.",
        content: `
      <h2>Dependable HVAC Service in Alvin, TX</h2>
      <p>Alvin homeowners deserve an HVAC company they can trust. Mabry's Air Conditioning & Heating has been providing honest, reliable service since 1986.</p>

      <h3>Our Services in Alvin</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Furnace and heating repair</li>
        <li>New air conditioning installation</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving Alvin Homeowners</h3>
      <p>From downtown Alvin to the surrounding areas, we provide prompt, professional HVAC service throughout the 77511 and 77512 zip codes.</p>

      <h3>The Mabry's Difference</h3>
      <ul>
        <li>Family-owned and operated since 1986</li>
        <li>Upfront, flat-rate pricing - no hidden fees</li>
        <li>BBB A+ Rating earned through quality service</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists - we focus on homes</li>
      </ul>

      <p>When your home's comfort is on the line, trust the company that Alvin families have relied on for decades.</p>
    `,
        keywords: [
            "heating repair Alvin TX",
            "HVAC Alvin TX",
            "AC service Alvin"
        ]
    }
];
const reviews = [
    {
        id: 1,
        name: "Jennifer M.",
        location: "Friendswood, TX",
        rating: 5,
        text: "Mabry's has been taking care of our AC for over 15 years. They're always honest, fair, and do quality work. I wouldn't call anyone else!",
        date: "2024"
    },
    {
        id: 2,
        name: "Robert K.",
        location: "Pearland, TX",
        rating: 5,
        text: "Our AC went out on one of the hottest days of the year. Mabry's came out the same day and had us back up and running. The price was exactly what they quoted - no surprises.",
        date: "2024"
    },
    {
        id: 3,
        name: "Susan T.",
        location: "Clear Lake, TX",
        rating: 5,
        text: "We've used Mabry's for both AC repair and a new system installation. Professional, punctual, and the flat-rate pricing is so refreshing. Highly recommend!",
        date: "2024"
    },
    {
        id: 4,
        name: "Michael D.",
        location: "Alvin, TX",
        rating: 5,
        text: "Been a customer since 1998. They've always treated us right. When it was time for a new unit, they didn't try to oversell us - just gave us honest advice.",
        date: "2023"
    },
    {
        id: 5,
        name: "Patricia L.",
        location: "Friendswood, TX",
        rating: 5,
        text: "The technician was professional and explained everything clearly. I appreciated the honest assessment and the fair, upfront pricing. This is how all businesses should operate.",
        date: "2024"
    },
    {
        id: 6,
        name: "David W.",
        location: "Pearland, TX",
        rating: 5,
        text: "Third generation using Mabry's! My parents recommended them, and now I recommend them to my kids. That says everything about their reputation.",
        date: "2024"
    }
];
function getServiceBySlug(slug) {
    return services.find((s)=>s.slug === slug);
}
function getLocationBySlug(slug) {
    return locations.find((l)=>l.slug === slug);
}
}),
"[project]/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-ssr] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Header() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [servicesOpen, setServicesOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [areasOpen, setAreasOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full bg-white shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-primary text-white py-2 px-4 text-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex justify-between items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline",
                            children: [
                                "Residential HVAC Experts Since 1986 | License ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessInfo"].license
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sm:hidden",
                            children: [
                                "License ",
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessInfo"].license
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessInfo"].phone}`,
                            className: "flex items-center gap-2 hover:text-accent transition-colors font-semibold",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["businessInfo"].phone
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center h-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-3 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-lg leading-tight text-primary",
                                            children: "Mabry's AC & Heating"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: "BBB A+ Rated"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden lg:flex items-center gap-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "text-sm font-semibold hover:text-accent transition-colors",
                                    children: "Home"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    onMouseEnter: ()=>setServicesOpen(true),
                                    onMouseLeave: ()=>setServicesOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors",
                                            children: [
                                                "Services ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        servicesOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border py-2",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/services/${service.slug}`,
                                                    className: "block px-4 py-2 text-sm hover:bg-muted transition-colors",
                                                    children: service.name
                                                }, service.slug, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 52,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    onMouseEnter: ()=>setAreasOpen(true),
                                    onMouseLeave: ()=>setAreasOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors",
                                            children: [
                                                "Service Areas ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 31
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        areasOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-lg border py-2",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locations"].map((location)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/areas/${location.slug}`,
                                                    className: "block px-4 py-2 text-sm hover:bg-muted transition-colors",
                                                    children: [
                                                        location.name,
                                                        ", ",
                                                        location.state
                                                    ]
                                                }, location.slug, true, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    className: "text-sm font-semibold hover:text-accent transition-colors",
                                    children: "About"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/reviews",
                                    className: "text-sm font-semibold hover:text-accent transition-colors",
                                    children: "Reviews"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg transition-colors",
                                    children: "Get a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "lg:hidden p-2",
                            onClick: ()=>setIsOpen(!isOpen),
                            "data-testid": "button-mobile-menu",
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 100,
                                columnNumber: 23
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 100,
                                columnNumber: 51
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden bg-white border-t",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "block text-lg font-semibold",
                            onClick: ()=>setIsOpen(false),
                            children: "Home"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-muted-foreground uppercase",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["services"].map((service)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/services/${service.slug}`,
                                        className: "block pl-4 py-1",
                                        onClick: ()=>setIsOpen(false),
                                        children: service.name
                                    }, service.slug, false, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 111,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-muted-foreground uppercase",
                                    children: "Service Areas"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["locations"].map((location)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/areas/${location.slug}`,
                                        className: "block pl-4 py-1",
                                        onClick: ()=>setIsOpen(false),
                                        children: [
                                            location.name,
                                            ", ",
                                            location.state
                                        ]
                                    }, location.slug, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/about",
                            className: "block text-lg font-semibold",
                            onClick: ()=>setIsOpen(false),
                            children: "About"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/reviews",
                            className: "block text-lg font-semibold",
                            onClick: ()=>setIsOpen(false),
                            children: "Reviews"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/contact",
                            className: "block w-full text-center bg-accent text-white font-bold py-3 rounded-lg",
                            onClick: ()=>setIsOpen(false),
                            children: "Get a Quote"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Header.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec48b064._.js.map