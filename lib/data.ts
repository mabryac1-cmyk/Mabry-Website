export const businessInfo = {
  name: "Mabry's Air Conditioning & Heating, Inc.",
  phone: "281-331-5248",
  email: "office@mabryac.com",
  address: {
    street: "2110 S Gordon St",
    city: "Alvin",
    state: "TX",
    zip: "77511",
    lat: "29.4241",
    lng: "-95.2441",
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
    "Residential service only - we specialize in homes",
  ],
};

export const generalFaqs = [
  {
    question: "What areas do you serve?",
    answer: "We serve Alvin, Friendswood, Pearland, Clear Lake, League City, Deer Park, Pasadena, Sienna, Angleton, Manvel, Rosharon, and the surrounding greater Houston area. Our office and shop is located at 2110 S Gordon St in Alvin (281-331-5248), and we have a dedicated service area covering Friendswood and the eastern territory (281-482-8400)."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are a fully licensed Texas HVAC contractor (License TACLB12058E) and carry full insurance for your protection."
  },
  {
    question: "What does flat-rate pricing mean?",
    answer: "Flat-rate pricing means you get a clear, upfront price before any work begins - no surprise charges, no hourly rates that add up, and no hidden fees. The price we quote is the price you pay."
  },
  {
    question: "Do you offer emergency HVAC service?",
    answer: "Yes, we offer emergency service for urgent AC and heating repairs. Call our main line and we'll do our best to help you as quickly as possible."
  },
  {
    question: "How long has Mabry's been in business?",
    answer: "Mabry's Air Conditioning & Heating has been family-owned and operated since 1986 - nearly 40 years of serving the Alvin and greater Houston area."
  },
  {
    question: "Do you work on commercial properties?",
    answer: "No, we specialize exclusively in residential HVAC service. This focus allows our technicians to be true experts in home cooling and heating systems."
  }
];

export const services = [
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
        <li>Serving Alvin, Friendswood, Pearland, Clear Lake & surrounding cities</li>
        <li>Residential specialists - we know homes</li>
      </ul>
    `,
    keywords: ["air conditioning repair", "AC repair", "AC not cooling", "AC service"],
    faqs: [
      {
        question: "How much does AC repair cost?",
        answer: "AC repair costs vary depending on the issue, but we provide honest, flat-rate pricing with no hidden charges. We'll diagnose the problem and give you an upfront price before any work begins."
      },
      {
        question: "Why is my AC blowing warm air?",
        answer: "Common causes include low refrigerant, a dirty air filter, frozen evaporator coils, or a faulty compressor. Our technicians can diagnose the exact issue and provide a reliable fix."
      },
      {
        question: "How long does AC repair take?",
        answer: "Most AC repairs can be completed in one visit, typically within 1-3 hours. More complex issues may require ordering parts, but we'll keep you informed throughout the process."
      },
      {
        question: "Do you repair all AC brands?",
        answer: "Yes, our licensed technicians repair all major AC brands and models. We've been servicing residential air conditioners since 1986."
      },
      {
        question: "Should I repair or replace my AC unit?",
        answer: "Generally, if your unit is over 10-15 years old and repairs are becoming frequent, replacement may be more cost-effective. We'll give you an honest assessment to help you decide."
      }
    ],
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
    keywords: ["heating repair", "furnace repair", "heater not working", "heating maintenance"],
    faqs: [
      {
        question: "Why is my heater not producing heat?",
        answer: "Common causes include a tripped breaker, thermostat issues, a dirty filter restricting airflow, or a faulty pilot light or igniter. Our technicians can diagnose and fix the problem quickly."
      },
      {
        question: "How often should I have my heating system serviced?",
        answer: "We recommend annual maintenance before the heating season begins. Regular tune-ups prevent breakdowns, improve efficiency, and extend your system's lifespan."
      },
      {
        question: "Is a furnace tune-up worth it?",
        answer: "Absolutely. A tune-up catches small problems before they become expensive repairs, ensures safe operation (especially important for gas furnaces), and keeps your system running efficiently."
      },
      {
        question: "How long do furnaces typically last?",
        answer: "With proper maintenance, most furnaces last 15-20 years. If your furnace is approaching this age and needing frequent repairs, it may be time to consider replacement."
      },
      {
        question: "Do you service heat pumps?",
        answer: "Yes, we service and repair all types of residential heating systems including heat pumps, gas furnaces, and electric heaters."
      }
    ],
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
    keywords: ["AC installation", "new air conditioner", "AC replacement", "HVAC installation"],
    faqs: [
      {
        question: "How much does a new AC system cost?",
        answer: "AC installation costs depend on your home's size, the system's efficiency rating, and installation complexity. We provide free consultations and upfront, flat-rate pricing with no hidden fees."
      },
      {
        question: "How long does AC installation take?",
        answer: "A typical residential AC installation takes one day. More complex installations involving ductwork modifications may take longer, but we'll let you know upfront."
      },
      {
        question: "What size AC do I need for my home?",
        answer: "Proper sizing requires a load calculation based on your home's square footage, insulation, windows, and other factors. An oversized or undersized unit won't cool efficiently - we ensure you get the right fit."
      },
      {
        question: "What brands do you install?",
        answer: "We install quality, energy-efficient systems from trusted manufacturers. During your consultation, we'll recommend options that fit your budget and cooling needs."
      },
      {
        question: "Should I replace my AC before it completely fails?",
        answer: "If your system is 10-15+ years old, uses R-22 refrigerant (being phased out), or needs frequent repairs, proactive replacement can save money on energy bills and prevent an emergency breakdown."
      }
    ],
  },
];

export const locations = [
  {
    slug: "alvin",
    name: "Alvin",
    state: "TX",
    zipCodes: ["77511", "77512"],
    phone: "281-331-5248",
    isPrimary: true,
    headline: "Air Conditioning & Heating Services in Alvin, TX",
    description: "Located in downtown Alvin since 1986. Your trusted local HVAC experts providing honest, flat-rate pricing and BBB A+ rated service.",
    content: `
      <h2>Your Hometown HVAC Company in Alvin, TX</h2>
      <p>Located at 2110 S Gordon St in downtown Alvin, Mabry's Air Conditioning & Heating has been your trusted local HVAC company since 1986. We're proud to call Alvin home and treat every customer like family.</p>

      <h3>Our Services in Alvin</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Furnace and heating repair</li>
        <li>New air conditioning installation</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Why Alvin Homeowners Trust Mabry's</h3>
      <ul>
        <li>Locally owned with our shop right here in downtown Alvin</li>
        <li>Family-owned and operated since 1986</li>
        <li>Upfront, flat-rate pricing - no hidden fees</li>
        <li>BBB A+ Rating earned through quality service</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists - we focus on homes</li>
      </ul>

      <p>From downtown Alvin to the surrounding areas, we provide prompt, professional HVAC service throughout the 77511 and 77512 zip codes. When your home's comfort is on the line, trust the company that Alvin families have relied on for decades.</p>
    `,
    keywords: ["HVAC Alvin TX", "AC repair Alvin TX", "heating repair Alvin TX", "air conditioning Alvin"],
  },
  {
    slug: "friendswood",
    name: "Friendswood",
    state: "TX",
    zipCodes: ["77546", "77549"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in Friendswood, TX",
    description: "Trusted local HVAC service for Friendswood families since 1986. BBB A+ rated with fast response times.",
    content: `
      <h2>Your Trusted HVAC Company in Friendswood, TX</h2>
      <p>Mabry's Air Conditioning & Heating has been serving Friendswood homeowners since 1986. We provide fast, reliable service throughout Friendswood with a commitment to treat every customer like family.</p>

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
    keywords: ["HVAC Friendswood TX", "air conditioning Friendswood", "AC repair Friendswood TX"],
  },
  {
    slug: "pearland",
    name: "Pearland",
    state: "TX",
    zipCodes: ["77581", "77584", "77588"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in Pearland, TX",
    description: "Trusted local HVAC service for Pearland families since 1986. BBB A+ rated with fast response times.",
    content: `
      <h2>Trusted HVAC Services for Pearland Homes</h2>
      <p>Pearland homeowners have counted on Mabry's Air Conditioning & Heating for decades. We provide fast, reliable service throughout Pearland with a commitment to treat every customer like family.</p>

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
    keywords: ["HVAC company Pearland TX", "AC repair Pearland", "heating repair Pearland TX"],
  },
  {
    slug: "clear-lake",
    name: "Clear Lake",
    state: "TX",
    zipCodes: ["77058", "77059", "77062"],
    phone: "281-482-8400",
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
    keywords: ["AC installation Clear Lake Houston", "HVAC Clear Lake TX", "air conditioning Clear Lake"],
  },
  {
    slug: "deer-park",
    name: "Deer Park",
    state: "TX",
    zipCodes: ["77536"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in Deer Park, TX",
    description: "Reliable residential HVAC service for Deer Park homeowners. BBB A+ rated with flat-rate pricing since 1986.",
    content: `
      <h2>Reliable HVAC Services for Deer Park Homes</h2>
      <p>Deer Park homeowners deserve an HVAC company they can count on. Mabry's Air Conditioning & Heating has been providing honest, dependable service to the greater Houston area since 1986, and we're proud to serve the Deer Park community.</p>

      <h3>Residential HVAC Services in Deer Park</h3>
      <ul>
        <li>AC repair - fast response times</li>
        <li>Heating repair and furnace service</li>
        <li>New AC system installation</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving the Deer Park Community</h3>
      <p>From neighborhoods near Deer Park High School to the areas around the San Jacinto Monument, we provide service throughout Deer Park and the 77536 zip code.</p>

      <h3>Why Deer Park Homeowners Trust Mabry's</h3>
      <ul>
        <li>Nearly 40 years of experience serving the Houston area</li>
        <li>Flat-rate pricing with no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
      </ul>
    `,
    keywords: ["HVAC Deer Park TX", "AC repair Deer Park", "heating repair Deer Park TX", "air conditioning Deer Park"],
  },
  {
    slug: "league-city",
    name: "League City",
    state: "TX",
    zipCodes: ["77573", "77574"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in League City, TX",
    description: "Trusted HVAC service for League City families. BBB A+ rated with flat-rate pricing since 1986.",
    content: `
      <h2>Trusted HVAC Services for League City Homes</h2>
      <p>League City is one of the fastest-growing communities in the Houston area, and Mabry's Air Conditioning & Heating is proud to serve its residents. Since 1986, we've built our reputation on honest service and fair pricing.</p>

      <h3>HVAC Services We Offer in League City</h3>
      <ul>
        <li>AC repair - same-day service available</li>
        <li>Heating repair and furnace maintenance</li>
        <li>New AC system installation and replacement</li>
        <li>Seasonal maintenance programs</li>
      </ul>

      <h3>Serving All League City Neighborhoods</h3>
      <p>From South Shore Harbour to Tuscan Lakes, from Victory Lakes to Bay Colony, we service homes throughout League City including zip codes 77573 and 77574.</p>

      <h3>Why League City Residents Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years serving the greater Houston area</li>
        <li>Honest, flat-rate pricing - no surprises</li>
        <li>BBB A+ Rating you can trust</li>
        <li>Residential-only focus means we specialize in homes</li>
        <li>Licensed and insured (TACLB12058E)</li>
      </ul>
    `,
    keywords: ["HVAC League City TX", "AC repair League City", "heating repair League City TX", "air conditioning League City"],
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    state: "TX",
    zipCodes: ["77504", "77505"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in Pasadena, TX",
    description: "Expert residential HVAC service for Pasadena homeowners. BBB A+ rated with flat-rate pricing since 1986.",
    content: `
      <h2>Expert HVAC Services for Pasadena Homes</h2>
      <p>Pasadena homeowners in the 77504 and 77505 areas can count on Mabry's Air Conditioning & Heating for reliable, honest HVAC service. We've been serving the greater Houston area since 1986.</p>

      <h3>Residential HVAC Services in Pasadena</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Heating repair and furnace service</li>
        <li>New AC installation and replacement</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving South Pasadena Neighborhoods</h3>
      <p>We provide service throughout the southern Pasadena area, including neighborhoods near Pasadena Memorial High School, South Shaver, and the Burke Road corridor. Our service area covers the 77504 and 77505 zip codes.</p>

      <h3>Why Pasadena Homeowners Trust Mabry's</h3>
      <ul>
        <li>Nearly 40 years of proven experience</li>
        <li>Flat-rate pricing with no hidden fees</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who focus on homes</li>
      </ul>
    `,
    keywords: ["HVAC Pasadena TX", "AC repair Pasadena", "heating repair Pasadena TX", "air conditioning Pasadena"],
  },
  {
    slug: "sienna",
    name: "Sienna",
    state: "TX",
    zipCodes: ["77459"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in Sienna, TX",
    description: "Trusted HVAC service for Sienna Plantation homeowners. BBB A+ rated with flat-rate pricing since 1986.",
    content: `
      <h2>Quality HVAC Services for Sienna Homes</h2>
      <p>Sienna is known for its beautiful master-planned community and family-friendly neighborhoods. Mabry's Air Conditioning & Heating is proud to serve Sienna homeowners with the same honest, reliable service we've provided since 1986.</p>

      <h3>HVAC Services We Offer in Sienna</h3>
      <ul>
        <li>AC repair - fast response times</li>
        <li>Heating repair and furnace maintenance</li>
        <li>New AC system installation</li>
        <li>Seasonal maintenance programs</li>
      </ul>

      <h3>Serving the Sienna Community</h3>
      <p>From Waters Lake to Sawmill Lake, from Sienna Village to the Club Sienna areas, we service homes throughout the Sienna Plantation community and the 77459 zip code.</p>

      <h3>Why Sienna Homeowners Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years serving the greater Houston area</li>
        <li>Flat-rate pricing with no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
      </ul>
    `,
    keywords: ["HVAC Sienna TX", "AC repair Sienna", "heating repair Sienna TX", "air conditioning Sienna Plantation"],
  },
  {
    slug: "angleton",
    name: "Angleton",
    state: "TX",
    zipCodes: ["77515", "77516"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in Angleton, TX",
    description: "Reliable residential HVAC service for Angleton homeowners. BBB A+ rated with flat-rate pricing since 1986.",
    content: `
      <h2>Reliable HVAC Services for Angleton Homes</h2>
      <p>As the county seat of Brazoria County, Angleton is at the heart of our service area. Mabry's Air Conditioning & Heating has been providing honest, dependable HVAC service to the region since 1986, and we're proud to serve Angleton homeowners.</p>

      <h3>Residential HVAC Services in Angleton</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Heating repair and furnace service</li>
        <li>New AC installation and replacement</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving the Angleton Community</h3>
      <p>From downtown Angleton to the surrounding neighborhoods, including areas near Angleton High School and the Brazoria County Courthouse, we service homes throughout Angleton and the 77515 and 77516 zip codes.</p>

      <h3>Why Angleton Homeowners Trust Mabry's</h3>
      <ul>
        <li>Based nearby in Alvin - just a short drive away</li>
        <li>Nearly 40 years of proven experience</li>
        <li>Flat-rate pricing with no hidden fees</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who focus on homes</li>
      </ul>
    `,
    keywords: ["HVAC Angleton TX", "AC repair Angleton", "heating repair Angleton TX", "air conditioning Angleton"],
  },
  {
    slug: "manvel",
    name: "Manvel",
    state: "TX",
    zipCodes: ["77578"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in Manvel, TX",
    description: "Trusted residential HVAC service for Manvel homeowners. BBB A+ rated with flat-rate pricing since 1986.",
    content: `
      <h2>Trusted HVAC Services for Manvel Homes</h2>
      <p>Manvel has grown rapidly in recent years, and Mabry's Air Conditioning & Heating is proud to serve this thriving community. Based nearby in Alvin, we provide fast, reliable HVAC service with the same honest approach we've used since 1986.</p>

      <h3>Residential HVAC Services in Manvel</h3>
      <ul>
        <li>AC repair - fast response times</li>
        <li>Heating repair and furnace maintenance</li>
        <li>New AC system installation</li>
        <li>Seasonal maintenance programs</li>
      </ul>

      <h3>Serving the Manvel Community</h3>
      <p>From Rodeo Palms to Pomona, from Manvel Town Center to the surrounding neighborhoods, we service homes throughout Manvel and the 77578 zip code.</p>

      <h3>Why Manvel Homeowners Choose Mabry's</h3>
      <ul>
        <li>Based nearby in Alvin - quick response times</li>
        <li>Nearly 40 years serving the greater Houston area</li>
        <li>Flat-rate pricing with no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
      </ul>
    `,
    keywords: ["HVAC Manvel TX", "AC repair Manvel", "heating repair Manvel TX", "air conditioning Manvel"],
  },
  {
    slug: "rosharon",
    name: "Rosharon",
    state: "TX",
    zipCodes: ["77583"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "Air Conditioning & Heating Services in Rosharon, TX",
    description: "Reliable residential HVAC service for Rosharon homeowners. BBB A+ rated with flat-rate pricing since 1986.",
    content: `
      <h2>Reliable HVAC Services for Rosharon Homes</h2>
      <p>Rosharon residents can count on Mabry's Air Conditioning & Heating for dependable, honest HVAC service. Located nearby in Alvin, we've been serving the Brazoria County area since 1986.</p>

      <h3>Residential HVAC Services in Rosharon</h3>
      <ul>
        <li>AC repair for all makes and models</li>
        <li>Heating repair and furnace service</li>
        <li>New AC installation and replacement</li>
        <li>Preventive maintenance programs</li>
      </ul>

      <h3>Serving the Rosharon Community</h3>
      <p>From the rural homesteads to the newer developments, we service homes throughout Rosharon and the 77583 zip code. Our proximity in Alvin means fast response times for your HVAC needs.</p>

      <h3>Why Rosharon Homeowners Trust Mabry's</h3>
      <ul>
        <li>Based nearby in Alvin - just minutes away</li>
        <li>Nearly 40 years of proven experience</li>
        <li>Flat-rate pricing with no hidden fees</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who focus on homes</li>
      </ul>
    `,
    keywords: ["HVAC Rosharon TX", "AC repair Rosharon", "heating repair Rosharon TX", "air conditioning Rosharon"],
  },
];

export const reviews = [
  {
    id: 1,
    name: "Melody U.",
    location: "Pearland, TX",
    rating: 5,
    text: "Mabrys has been our go-to HVAC professionals for over 10 years. They're wonderful at diagnosing issues and offering options to get our home comfortable again. Highly recommend!",
    date: "2024",
  },
  {
    id: 2,
    name: "Steve H.",
    location: "Friendswood, TX",
    rating: 5,
    text: "Mabry's A/C company is a company you can trust to do a thorough job. Nathan and his team are courteous and respectful.",
    date: "2024",
  },
  {
    id: 3,
    name: "Gregory H.",
    location: "Houston, TX",
    rating: 5,
    text: "Nathan and all their techs are great people. Living in Houston, it's wise to develop a relationship with a good A/C company.",
    date: "2024",
  },
  {
    id: 4,
    name: "rj C.",
    location: "Texas",
    rating: 5,
    text: "Mabry's installed my three Trane AC/heat systems and done maintenance on them. All three have been reliable. Good work, fair pricing, and honest answers.",
    date: "2024",
  },
  {
    id: 5,
    name: "Sue P.",
    location: "Texas",
    rating: 5,
    text: "When our old A/C died, Mabry's replaced our whole HVAC system. The estimate was fair, workers were skilled and courteous, and work was completed in just a few hours. Highly recommend!",
    date: "2024",
  },
  {
    id: 6,
    name: "Gerald E.",
    location: "Texas",
    rating: 5,
    text: "These folks have taken care of several properties for me over the years. Always fair and extremely professional. They show up when they say they will and clean up afterwards.",
    date: "2024",
  },
  {
    id: 7,
    name: "Sarah J.",
    location: "Texas",
    rating: 5,
    text: "Excellent and fair service! They came out same day, diagnosed the issue, and fixed it. The tech had our AC up and running fast, and for a fair price. Highly recommend!",
    date: "2023",
  },
  {
    id: 8,
    name: "Merlin O.",
    location: "Texas",
    rating: 5,
    text: "My AC went out - a critical emergency! Mabry's had a tech out in under an hour. He found the problem, located the part, and had us back in the cool within hours. This company has it together! Highly recommended.",
    date: "2023",
  },
  {
    id: 9,
    name: "Lance M.",
    location: "Texas",
    rating: 5,
    text: "Mabry's made it as easy as possible for me and this whole ordeal hardly took up any of my time. Spoke with Nate and he is a very friendly person that took care of me and was a pleasure working with.",
    date: "2023",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
