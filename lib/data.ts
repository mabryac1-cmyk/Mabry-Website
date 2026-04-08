export const businessHours = {
  weekdays: { days: "Mon–Fri", open: "7:00 AM", close: "7:00 PM" },
  saturday: { days: "Sat", open: "7:00 AM", close: "1:00 PM" },
  sunday: { days: "Sun", label: "Closed" },
  displayShort: "Mon-Fri: 7am-7pm | Sat: 7am-1pm",
  displayFull: [
    "Monday - Friday: 7:00 AM - 7:00 PM",
    "Saturday: 7:00 AM - 1:00 PM",
    "Sunday: Closed",
  ],
};

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
    "Licensed Texas HVAC Contractor (TACLB12058E)",
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
    title: "AC Repair in Alvin, Friendswood & Pearland, TX",
    shortDescription: "Fast, reliable residential AC repair",
    description: "Fast, reliable residential AC repair services. We fix all makes and models with honest, flat-rate pricing.",
    content: `
      <h2>Fast AC Repair for Alvin, Friendswood, Pearland & Greater Houston Homes</h2>
      <p>In the greater Houston area, a broken air conditioner during our brutal 100°F+ summers isn't just uncomfortable — it's a health risk. Mabry's Air Conditioning & Heating has been the trusted name for fast, reliable AC repair in Alvin, Friendswood, Pearland, Clear Lake, League City, and the surrounding Houston area since 1986. When your AC goes out, we show up.</p>

      <h3>We Repair All Major AC Brands</h3>
      <p>Our licensed technicians are trained to diagnose and repair every major brand of residential air conditioning equipment, including:</p>
      <ul>
        <li><strong>Trane</strong> — including XR, XL, and Comfort series systems</li>
        <li><strong>Carrier</strong> — including Infinity, Performance, and Comfort series</li>
        <li><strong>Lennox</strong> — including Elite, Merit, and Dave Lennox Signature series</li>
        <li><strong>Rheem</strong> — including Prestige, Classic Plus, and Classic series</li>
        <li><strong>Goodman</strong> and <strong>Amana</strong> systems</li>
        <li><strong>American Standard</strong> — including Gold and Silver series</li>
        <li><strong>York</strong>, <strong>Bryant</strong>, <strong>Daikin</strong>, and all other residential brands</li>
      </ul>

      <h3>Common AC Problems We Fix</h3>
      <ul>
        <li>AC not cooling or blowing warm air</li>
        <li>Unit won't turn on or keeps shutting off</li>
        <li>Strange noises — banging, squealing, clicking</li>
        <li>Frozen evaporator coils</li>
        <li>Refrigerant leaks (R-410A and legacy R-22 systems)</li>
        <li>Thermostat malfunctions and wiring issues</li>
        <li>Capacitor, contactor, and electrical failures</li>
        <li>Drainage clogs and condensate pan overflow</li>
        <li>Compressor problems and fan motor failure</li>
      </ul>

      <h3>Houston's Climate Demands More From Your AC</h3>
      <p>The Gulf Coast climate around Alvin, Friendswood, and Pearland is among the most demanding in the country for HVAC systems. High humidity, 9-month cooling seasons, and summer temperatures that regularly exceed 100°F put extreme stress on residential equipment. Our technicians understand the specific failure patterns common in our area — from refrigerant line sweating and drain clogs caused by humidity to capacitor failures from overworked compressors in the summer heat.</p>

      <h3>Why Choose Mabry's for AC Repair?</h3>
      <ul>
        <li>Flat-rate pricing — no hidden charges, no hourly surprises</li>
        <li>Texas licensed HVAC contractor (TACLB12058E)</li>
        <li>BBB A+ Accredited Business since 1986</li>
        <li>Family-owned — your neighbor, not a national chain</li>
        <li>Residential specialists — homes are our only business</li>
        <li>Serving Alvin, Friendswood, Pearland, Clear Lake & surrounding cities</li>
      </ul>
    `,
    keywords: ["air conditioning repair", "AC repair", "AC not cooling", "AC service", "AC repair Alvin TX", "AC repair Friendswood TX", "AC repair Pearland TX"],
    faqs: [
      {
        question: "How much does AC repair cost in the Houston area?",
        answer: "AC repair costs vary depending on the issue and parts required. Common repairs like capacitor replacement, refrigerant recharge, or thermostat replacement typically range from $150–$500. We provide honest, flat-rate pricing — you'll know the exact cost before any work begins, with no hidden charges."
      },
      {
        question: "Why is my AC blowing warm air?",
        answer: "Common causes include low refrigerant (leak), a dirty air filter blocking airflow, frozen evaporator coils, a failed capacitor, or a faulty compressor. In the Houston area heat, low refrigerant and capacitor failures are especially common in summer. Our technicians can diagnose the exact issue and fix it right."
      },
      {
        question: "How long does AC repair take?",
        answer: "Most AC repairs are completed in a single visit, typically 1–3 hours. If parts need to be ordered for less common repairs, we'll let you know upfront. We keep common parts stocked for Trane, Carrier, Lennox, Rheem, Goodman, and other major brands."
      },
      {
        question: "Do you repair all AC brands?",
        answer: "Yes — we repair all major residential AC brands including Trane, Carrier, Lennox, Rheem, Goodman, American Standard, York, Bryant, Daikin, and Amana. Our licensed technicians have been servicing residential systems since 1986."
      },
      {
        question: "Should I repair or replace my AC unit?",
        answer: "If your unit is 12–15+ years old and repairs are becoming frequent, replacement is often more cost-effective. If the system uses R-22 refrigerant (phased out as of 2020), repairs can be expensive due to limited refrigerant supply. We'll give you an honest assessment — we never push unnecessary replacements."
      },
      {
        question: "Do you service older R-22 AC systems?",
        answer: "Yes, we still service R-22 systems and can perform repairs. However, because R-22 refrigerant was phased out and is expensive, we'll discuss the cost-benefit of repair vs. replacement for older systems using R-22 so you can make the most informed decision."
      }
    ],
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    title: "Heating Repair in Alvin, Friendswood & Pearland, TX",
    shortDescription: "Furnace and heating system repair and maintenance",
    description: "Professional furnace and heating system repair for all makes and models. Keep your home warm and safe all winter.",
    content: `
      <h2>Heating Repair for Alvin, Friendswood, Pearland & Greater Houston Homes</h2>
      <p>While Houston winters are mild compared to northern states, a broken heater on a cold January night in Alvin, Friendswood, or Pearland is still a serious problem — especially for families with young children or elderly members. Mabry's Air Conditioning & Heating has been providing fast, reliable heating repair for Houston-area homeowners since 1986. We fix all types of residential heating systems, all major brands.</p>

      <h3>We Repair All Major Heating Brands</h3>
      <p>Our licensed technicians service and repair every major brand of residential heating equipment:</p>
      <ul>
        <li><strong>Trane</strong> — gas furnaces, heat pumps, and air handlers</li>
        <li><strong>Carrier</strong> — Infinity, Performance, and Comfort series furnaces and heat pumps</li>
        <li><strong>Lennox</strong> — Elite, Merit, and Dave Lennox Signature furnaces</li>
        <li><strong>Rheem</strong> — Classic, Classic Plus, and Prestige series</li>
        <li><strong>Goodman</strong> and <strong>Amana</strong> gas furnaces and heat pumps</li>
        <li><strong>American Standard</strong>, <strong>York</strong>, <strong>Bryant</strong>, <strong>Daikin</strong>, and all other residential brands</li>
      </ul>

      <h3>Our Heating Repair Services Include</h3>
      <ul>
        <li>Gas furnace repair and diagnostics</li>
        <li>Heat pump repair and service</li>
        <li>Electric air handler and strip heat repair</li>
        <li>Igniter and flame sensor replacement</li>
        <li>Heat exchanger inspection (critical safety check)</li>
        <li>Gas valve, draft inducer, and control board repair</li>
        <li>Thermostat calibration and replacement</li>
        <li>Ductwork inspection and repair</li>
      </ul>

      <h3>Houston's Heating Season Has Unique Challenges</h3>
      <p>In the Alvin, Friendswood, and Pearland area, most homes use heat pumps or gas furnaces that sit dormant for most of the year — and when the first cold front hits in November or December, they get called into action all at once. Systems that weren't properly maintained often fail right when you need them. Our technicians are experienced with the most common failure points for Houston-area heating equipment, including heat pump reversing valve failures, igniter burnout from infrequent use, and gas furnace issues common to our humidity-prone climate.</p>

      <h3>Residential Focus Only</h3>
      <p>Unlike companies that split their attention between commercial and residential work, we focus exclusively on homes. This means our technicians are experts in the specific heating systems installed in Alvin, Friendswood, Pearland, Clear Lake, and surrounding Houston-area neighborhoods.</p>

      <h3>Why Choose Mabry's for Heating Repair?</h3>
      <ul>
        <li>Flat-rate pricing — know your cost before we start</li>
        <li>Licensed Texas HVAC contractor (TACLB12058E)</li>
        <li>BBB A+ Accredited Business</li>
        <li>Family-owned since 1986 — nearly 40 years in Greater Houston</li>
        <li>Residential specialists who understand home heating systems</li>
      </ul>
    `,
    keywords: ["heating repair", "furnace repair", "heater not working", "heating maintenance", "heat pump repair Alvin TX", "furnace repair Pearland TX"],
    faqs: [
      {
        question: "Why is my heater not producing heat in the Houston area?",
        answer: "Common causes include a tripped breaker, thermostat issues, a dirty filter restricting airflow, a failed igniter or flame sensor (gas furnace), or a stuck reversing valve (heat pump). Because Houston heating systems sit unused for months, they're prone to component failures when first turned on. Our technicians can diagnose and fix the problem quickly."
      },
      {
        question: "How often should I have my heating system serviced?",
        answer: "We recommend annual maintenance in the fall — before Houston's heating season arrives. Regular tune-ups catch problems early, ensure safe operation, and keep your system running efficiently. See our maintenance tune-up service for details."
      },
      {
        question: "Do you repair heat pumps?",
        answer: "Yes — heat pumps are very common in the Houston area because of our mild winters, and we repair all major brands including Trane, Carrier, Lennox, Rheem, Goodman, and American Standard heat pumps. Common issues include reversing valve failures, refrigerant leaks, and defrost board problems."
      },
      {
        question: "Is a furnace tune-up worth it?",
        answer: "Absolutely. In the Houston area, gas furnaces often go 6–9 months without running. A fall tune-up ensures safe ignition (especially critical for gas furnaces — cracked heat exchangers can cause carbon monoxide issues), verifies the system will handle cold fronts reliably, and extends equipment life."
      },
      {
        question: "How long do furnaces typically last in Houston?",
        answer: "With proper annual maintenance, most gas furnaces last 18–25 years in Houston's climate (longer than in colder climates because they run fewer hours per year). Heat pumps typically last 12–18 years. If your system is approaching these ages and needing frequent repairs, it may be time to consider replacement."
      },
      {
        question: "What brands of furnaces do you work on?",
        answer: "We repair all residential heating brands — Trane, Carrier, Lennox, Rheem, Goodman, Amana, American Standard, York, Bryant, Daikin, and others. Our technicians are experienced with both gas furnaces and heat pump systems."
      }
    ],
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    title: "AC Installation in Alvin, Friendswood & Pearland, TX",
    shortDescription: "New system installation and energy-efficient upgrades",
    description: "Professional AC installation and replacement. We help you choose the right energy-efficient system for your Houston-area home.",
    content: `
      <h2>Professional AC Installation in Alvin, Friendswood, Pearland & Greater Houston</h2>
      <p>When it's time for a new air conditioning system, the stakes are high — the wrong size unit or a poor installation means higher energy bills, uncomfortable rooms, and more breakdowns. Mabry's Air Conditioning & Heating has been installing quality AC systems in Houston-area homes since 1986. We do it right the first time.</p>

      <h3>Top Brands We Install</h3>
      <p>We install trusted, energy-efficient systems from leading manufacturers. During your consultation, we'll recommend the best option for your home and budget:</p>
      <ul>
        <li><strong>Trane</strong> — known for durability and reliability; "It's Hard to Stop a Trane" isn't just a slogan</li>
        <li><strong>Carrier</strong> — the inventor of modern air conditioning, with excellent efficiency ratings</li>
        <li><strong>Lennox</strong> — industry-leading efficiency for homeowners focused on energy savings</li>
        <li><strong>Rheem</strong> — strong reliability and value, excellent warranty coverage</li>
        <li><strong>Goodman</strong> and <strong>Amana</strong> — great value for budget-conscious homeowners</li>
        <li><strong>American Standard</strong> — Trane technology in a different product line</li>
      </ul>

      <h3>Right-Sizing for Houston's Climate</h3>
      <p>In Alvin, Friendswood, Pearland, and the greater Houston area, proper system sizing is critical. Our hot, humid Gulf Coast climate means an undersized unit will run constantly and never properly dehumidify your home. An oversized unit short-cycles, leaving your home humid and wasting energy. We perform proper load calculations — accounting for your home's square footage, insulation, window exposure, and ceiling height — to ensure the perfect fit.</p>

      <p>For new installations in the Houston area, we recommend systems with a minimum <strong>16 SEER2</strong> rating. Higher-efficiency units (18–21+ SEER2) can deliver significant energy savings given our 9-month cooling season.</p>

      <h3>Our Installation Process</h3>
      <ul>
        <li><strong>Free In-Home Consultation</strong> — we assess your home's specific cooling needs</li>
        <li><strong>Load Calculation</strong> — Manual J calculation for proper sizing</li>
        <li><strong>Brand & Efficiency Recommendation</strong> — options at multiple price points</li>
        <li><strong>Professional Installation</strong> — licensed technicians, permit-ready</li>
        <li><strong>Refrigerant Line & Ductwork Check</strong> — we don't just swap the equipment</li>
        <li><strong>System Testing & Commissioning</strong> — we verify everything before we leave</li>
        <li><strong>Customer Walkthrough</strong> — we show you how to maximize your new system</li>
      </ul>

      <h3>Signs You Need a New AC System</h3>
      <ul>
        <li>Your system is 12–15+ years old</li>
        <li>Repairs are becoming frequent or expensive</li>
        <li>Energy bills keep rising despite normal use</li>
        <li>Some rooms are never comfortable regardless of thermostat setting</li>
        <li>The system uses R-22 refrigerant (phased out — repairs are costly)</li>
        <li>The system runs constantly but can't keep up with Houston summer heat</li>
      </ul>

      <h3>Flat-Rate Pricing — No Surprises</h3>
      <p>We provide clear, upfront pricing for all installations before any work begins. No hidden fees, no change orders after the job starts. You'll know exactly what you're paying for.</p>
    `,
    keywords: ["AC installation", "new air conditioner", "AC replacement", "HVAC installation", "AC installation Alvin TX", "AC replacement Pearland TX", "new AC system Friendswood"],
    faqs: [
      {
        question: "How much does a new AC system cost in the Alvin/Pearland area?",
        answer: "Installation costs depend on your home's square footage, the system's efficiency (SEER2 rating), the brand, and installation complexity. We provide free consultations and honest flat-rate quotes with no hidden fees. Contact us for a precise estimate for your home."
      },
      {
        question: "What size AC do I need for my Houston-area home?",
        answer: "Proper sizing requires a Manual J load calculation based on your home's square footage, ceiling height, insulation, windows, and other factors. In the Houston area, humidity is a critical factor — the right system must both cool AND dehumidify effectively. We never guess on sizing."
      },
      {
        question: "What AC brands do you install?",
        answer: "We install all major brands — Trane, Carrier, Lennox, Rheem, Goodman, Amana, and American Standard. During your consultation, we'll recommend the brand and efficiency level that best fits your home, budget, and goals. We're brand-agnostic — we recommend what's right for you."
      },
      {
        question: "What SEER rating should I get for a Houston home?",
        answer: "For the Houston area's 9-month cooling season, we recommend a minimum 16 SEER2. Higher-efficiency systems (18–21+ SEER2) offer substantial long-term savings given how many hours per year your system runs. We'll calculate the payback period so you can make an informed decision."
      },
      {
        question: "How long does AC installation take?",
        answer: "A standard residential AC installation typically takes one day. More complex projects involving ductwork modifications may take longer, but we'll always let you know upfront what to expect."
      },
      {
        question: "Should I replace my AC before it completely fails?",
        answer: "If your system is 12–15+ years old, uses R-22 refrigerant, or is experiencing frequent repairs, proactive replacement prevents an emergency breakdown during a Houston summer heatwave. A planned replacement also lets you choose your system and schedule at your convenience rather than in crisis mode."
      }
    ],
  },
  {
    slug: "ac-maintenance",
    name: "AC & Heating Maintenance",
    title: "AC & Heating Tune-Up in Alvin, Friendswood & Pearland, TX",
    shortDescription: "Annual AC and heating tune-up to prevent breakdowns",
    description: "Annual AC tune-up and heating maintenance to prevent costly breakdowns, lower energy bills, and extend equipment life.",
    content: `
      <h2>Annual AC & Heating Tune-Up Service for Greater Houston Homes</h2>
      <p>In the greater Houston area, your air conditioning system works harder than almost anywhere in the country — up to 9 months per year in some of the most demanding heat and humidity in the United States. Annual preventive maintenance is the single best thing you can do to prevent a breakdown on the hottest day of August, extend the life of your equipment, and keep your energy bills under control. Mabry's Air Conditioning & Heating has been providing thorough, honest maintenance tune-ups for Alvin, Friendswood, Pearland, and surrounding Houston-area homes since 1986.</p>

      <h3>What Our AC Tune-Up Includes</h3>
      <p>Our spring AC tune-up is a comprehensive inspection and tune-up of your entire cooling system:</p>
      <ul>
        <li><strong>Refrigerant level check</strong> — verify proper charge (low refrigerant = poor cooling and compressor damage)</li>
        <li><strong>Capacitor testing</strong> — capacitor failures are the #1 cause of AC breakdowns in Houston summers</li>
        <li><strong>Contactor inspection</strong> — worn contactors cause compressor and fan motor failure</li>
        <li><strong>Condenser coil cleaning</strong> — dirty coils reduce efficiency and cause overheating</li>
        <li><strong>Evaporator coil inspection</strong> — check for ice buildup, dirt, and refrigerant issues</li>
        <li><strong>Condensate drain flush</strong> — prevent clogged drains and water damage (Houston humidity makes this critical)</li>
        <li><strong>Blower motor and belt inspection</strong> — ensure proper airflow throughout your home</li>
        <li><strong>Thermostat calibration</strong> — confirm your system responds accurately</li>
        <li><strong>Electrical connections and wiring check</strong> — loose connections cause failures and safety hazards</li>
        <li><strong>Filter inspection and replacement guidance</strong></li>
        <li><strong>Overall system performance assessment</strong> — temperature differential check</li>
      </ul>

      <h3>What Our Heating Tune-Up Includes</h3>
      <p>Our fall heating tune-up prepares your system for the Houston winter season:</p>
      <ul>
        <li><strong>Heat exchanger inspection</strong> — critical safety check for gas furnaces (cracked exchangers can leak carbon monoxide)</li>
        <li><strong>Burner and igniter inspection</strong> — ensure reliable ignition on first use</li>
        <li><strong>Flame sensor cleaning</strong> — dirty sensors cause nuisance shutdowns</li>
        <li><strong>Gas valve and pressure check</strong> — verify safe, proper gas flow</li>
        <li><strong>Heat pump reversing valve check</strong> — ensures proper heating mode operation</li>
        <li><strong>Electrical components and wiring inspection</strong></li>
        <li><strong>Thermostat calibration</strong></li>
        <li><strong>Airflow and ductwork assessment</strong></li>
        <li><strong>Overall system safety check</strong></li>
      </ul>

      <h3>Why Houston-Area Homes Need Annual Maintenance</h3>
      <p>The Gulf Coast climate around Alvin, Friendswood, and Pearland creates specific maintenance challenges that homeowners in drier climates don't face:</p>
      <ul>
        <li><strong>High humidity</strong> clogs condensate drains quickly — a clogged drain can overflow and cause water damage or mold</li>
        <li><strong>Extended run times</strong> (9+ months of cooling) wear capacitors, contactors, and motors faster than national averages</li>
        <li><strong>Coastal air</strong> accelerates corrosion on outdoor condenser units</li>
        <li><strong>Heating systems that sit dormant</strong> for 6–9 months are more likely to fail on the first cold day</li>
      </ul>

      <h3>Catching Problems Before They Become Emergencies</h3>
      <p>The most common AC emergencies we see — failed capacitors, low refrigerant, clogged drains — are almost always detectable during a routine maintenance visit. A $99–$150 tune-up that catches a failing capacitor saves you an emergency service call on a 100°F Saturday in July. Maintenance also keeps your manufacturer's warranty valid on newer systems and can extend equipment life by 3–5 years or more.</p>

      <h3>We Service All Major Brands</h3>
      <p>We perform maintenance tune-ups on all residential equipment brands including Trane, Carrier, Lennox, Rheem, Goodman, Amana, American Standard, York, Bryant, Daikin, and any other brand in your home.</p>
    `,
    keywords: ["AC tune-up", "AC maintenance", "HVAC maintenance", "AC service", "air conditioning tune-up Houston", "furnace tune-up Alvin TX", "AC maintenance Pearland TX"],
    faqs: [
      {
        question: "How often should I have my AC tuned up?",
        answer: "Once per year at minimum — ideally in spring before the Houston summer heat kicks in. If you have both a cooling and heating system, an annual AC tune-up in spring and a heating tune-up in fall is the ideal schedule. Houston's demanding climate means your system works harder than average, making annual maintenance especially important."
      },
      {
        question: "What does an AC tune-up cost?",
        answer: "We provide honest, flat-rate pricing on all maintenance visits. The investment in annual maintenance is typically far less than even a single emergency service call — and it dramatically reduces the likelihood of a breakdown on the hottest day of the year. Contact us for current pricing."
      },
      {
        question: "What's the difference between a tune-up and a repair?",
        answer: "A tune-up is preventive maintenance performed on a working system — cleaning, inspecting, adjusting, and testing components to prevent future failures. A repair fixes something that's already broken. The goal of regular tune-ups is to avoid the need for emergency repairs by catching problems early."
      },
      {
        question: "Will maintenance help lower my energy bills?",
        answer: "Yes. A dirty condenser coil, low refrigerant, or impaired airflow can reduce your AC's efficiency by 10–25%, which shows up directly on your electric bill. A properly tuned system runs at peak efficiency, which matters a lot in Houston where AC can account for 50–60% of your summer electric bill."
      },
      {
        question: "Does annual maintenance keep my warranty valid?",
        answer: "Many manufacturers require documented annual maintenance to keep the warranty valid. Skipping maintenance can void coverage if you later need a warranty repair. We can provide a written service record for your files."
      },
      {
        question: "Do you service heat pumps and all system types?",
        answer: "Yes — we perform maintenance on all residential system types including central AC, heat pumps, gas furnaces, electric air handlers, and mini-split systems. All major brands including Trane, Carrier, Lennox, Rheem, Goodman, American Standard, and others."
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
    headline: "AC Repair & HVAC Service in Alvin, TX — Your Local Experts Since 1986",
    description: "Alvin's hometown HVAC company since 1986. Our shop is right here at 2110 S Gordon St — we live and work in this community.",
    content: `
      <h2>Alvin's Hometown HVAC Company — Located Right Here Since 1986</h2>
      <p>If you've ever driven down South Gordon Street in downtown Alvin, you've passed our shop. Mabry's Air Conditioning & Heating has been located at 2110 S Gordon St in Alvin since 1986 — nearly 40 years. We're not a national chain with a local phone number. We're your neighbors, and Alvin is home.</p>

      <p>That matters when your AC goes out in July. We're not driving from Houston. We're already here.</p>

      <h3>HVAC Services We Provide in Alvin</h3>
      <ul>
        <li><strong>AC repair</strong> — same-day service for Alvin homes, all makes and models</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service when those cold fronts hit</li>
        <li><strong>New AC installation</strong> — proper load calculations, top brands, licensed installation</li>
        <li><strong>Annual maintenance tune-ups</strong> — spring AC and fall heating service to prevent breakdowns</li>
      </ul>

      <h3>We Know Alvin Homes</h3>
      <p>The housing stock in Alvin's 77511 and 77512 zip codes includes everything from older downtown homes built in the 1950s and 60s to newer subdivisions developed in the 2000s and beyond. We've worked in them all. Older Alvin homes often have aging ductwork, systems that have been through multiple replacements, and in some cases equipment still using R-22 refrigerant that was phased out in 2020. Newer homes in subdivisions like Kendall Lakes or Country Meadows often have builder-grade equipment that benefits from regular maintenance to hit its expected lifespan.</p>

      <p>Our Gulf Coast climate — high humidity, 9-month cooling seasons, and heat indexes that push past 110°F — is tough on HVAC equipment. We've been diagnosing the specific failure patterns common to Brazoria County homes for four decades.</p>

      <h3>Why Alvin Families Have Trusted Us for Generations</h3>
      <ul>
        <li>Our shop is in your backyard — fast response times, no travel fees</li>
        <li>Flat-rate pricing with no hidden charges — we tell you the price before we start</li>
        <li>Family-owned and operated — you talk to us, not a call center</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists — homes are all we do</li>
      </ul>

      <p>From the historic downtown neighborhoods near Nolan Ryan Ballpark to the newer communities along Highway 6, Mabry's is Alvin's HVAC company. Call us at 281-331-5248.</p>
    `,
    keywords: ["HVAC Alvin TX", "AC repair Alvin TX", "heating repair Alvin TX", "air conditioning Alvin", "AC service Alvin 77511"],
  },
  {
    slug: "friendswood",
    name: "Friendswood",
    state: "TX",
    zipCodes: ["77546", "77549"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Friendswood, TX — Trusted Since 1986",
    description: "Serving Friendswood families for nearly 40 years. Dedicated Friendswood service line: 281-482-8400. Flat-rate pricing, BBB A+.",
    content: `
      <h2>Friendswood's Trusted HVAC Company — Serving This Community Since 1986</h2>
      <p>Friendswood has been part of Mabry's story since the beginning. We've been serving families in the 77546 and 77549 zip codes for nearly four decades — long enough to have worked on systems for the same families across generations. Friendswood is a community that values trust and quality work, and that's exactly what we've built our reputation on.</p>

      <p>For Friendswood service, call our dedicated line: <strong>281-482-8400</strong>.</p>

      <h3>HVAC Services We Provide in Friendswood</h3>
      <ul>
        <li><strong>AC repair</strong> — all makes and models, fast response</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — Trane, Carrier, Lennox, Rheem and other top brands</li>
        <li><strong>Annual maintenance tune-ups</strong> — prevent breakdowns before they happen</li>
      </ul>

      <h3>We Know Friendswood Homes</h3>
      <p>Friendswood's housing stock is a mix of established neighborhoods — many with homes built in the 1970s and 1980s — alongside newer developments that have expanded the city over recent decades. The older ranch-style homes in established Friendswood neighborhoods often feature ductwork and equipment that's seen one or two replacement cycles, and owners who know the value of a contractor they can trust over the long term. Newer homes near FM 518 and FM 2351 corridors benefit most from proper maintenance to maximize equipment life.</p>

      <p>The Gulf Coast humidity that defines Friendswood's climate means condensate drain maintenance is critical — clogged drains are one of the most common service calls we make in the 77546 area during summer.</p>

      <h3>Why Friendswood Homeowners Choose Mabry's</h3>
      <ul>
        <li>Dedicated Friendswood service line — 281-482-8400</li>
        <li>Nearly 40 years serving this specific community</li>
        <li>Flat-rate pricing — know your cost before work begins</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists — homes are our only business</li>
      </ul>

      <p>From neighborhoods near Friendswood High School and the historic downtown area to communities along FM 518, Mabry's is the HVAC company Friendswood has counted on for nearly 40 years.</p>
    `,
    keywords: ["HVAC Friendswood TX", "air conditioning Friendswood", "AC repair Friendswood TX", "AC service Friendswood 77546"],
  },
  {
    slug: "pearland",
    name: "Pearland",
    state: "TX",
    zipCodes: ["77581", "77584", "77588"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Pearland, TX — Fast, Reliable, Flat-Rate",
    description: "Trusted HVAC service for Pearland families since 1986. Serving Shadow Creek Ranch, Silverlake, Old Townsite & all Pearland neighborhoods.",
    content: `
      <h2>Trusted HVAC Service for Pearland Homeowners — All Neighborhoods, All Brands</h2>
      <p>Pearland has grown from a small bedroom community into one of the largest cities in Texas — and Mabry's Air Conditioning & Heating has been serving Pearland homeowners through all of it. Whether you're in an established neighborhood near Old Townsite or a newer subdivision in Shadow Creek Ranch, we know Pearland homes and we know what it takes to keep them comfortable through a Texas Gulf Coast summer.</p>

      <h3>HVAC Services We Provide in Pearland</h3>
      <ul>
        <li><strong>AC repair</strong> — same-day service available, all makes and models</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — proper sizing, top brands, licensed installation</li>
        <li><strong>Annual maintenance tune-ups</strong> — spring and fall service to prevent breakdowns</li>
      </ul>

      <h3>We Know Pearland's Neighborhoods</h3>
      <p>Pearland spans three zip codes — 77581, 77584, and 77588 — and straddles both Brazoria and Harris counties. The city includes a wide range of housing: 1970s-era homes in Old Pearland and Country Place, the large-scale master-planned communities of Shadow Creek Ranch and Silverlake (built largely in the 2000s), and newer developments along the Highway 288 corridor. Each era of construction has its own HVAC challenges.</p>

      <p>Older Pearland homes often have aging ductwork and systems approaching or past replacement age. Homes in Shadow Creek Ranch and Silverlake that were built with builder-grade equipment in the mid-2000s are now 15–20 years old — prime replacement territory. Our team is experienced across all of it.</p>

      <h3>Why Pearland Residents Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years of experience — including decades serving Pearland</li>
        <li>Honest, flat-rate pricing — no surprises on your invoice</li>
        <li>BBB A+ Rating backed by nearly 40 years of honest work</li>
        <li>Residential-only focus — homes are our specialty</li>
        <li>Licensed and insured (TACLB12058E)</li>
        <li>Dedicated service line for Pearland: 281-482-8400</li>
      </ul>
    `,
    keywords: ["HVAC company Pearland TX", "AC repair Pearland", "heating repair Pearland TX", "AC service Pearland 77584"],
  },
  {
    slug: "clear-lake",
    name: "Clear Lake",
    state: "TX",
    zipCodes: ["77058", "77059", "77062"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Clear Lake (Houston), TX",
    description: "Residential HVAC service for Clear Lake area homes. Serving Nassau Bay, El Lago, Taylor Lake Village & surrounding communities since 1986.",
    content: `
      <h2>HVAC Experts Serving the Clear Lake Area — Nassau Bay, El Lago, Taylor Lake Village & Beyond</h2>
      <p>The Clear Lake area presents some of the most demanding conditions for residential HVAC equipment in the greater Houston area. Proximity to Galveston Bay and Clear Lake means elevated humidity year-round — and humidity is the enemy of HVAC efficiency and equipment longevity. Mabry's Air Conditioning & Heating has been keeping Clear Lake area homes comfortable since 1986.</p>

      <h3>HVAC Services We Provide in Clear Lake</h3>
      <ul>
        <li><strong>AC repair</strong> — fast response for Clear Lake homeowners, all brands</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — proper sizing for bay-area humidity, top brands</li>
        <li><strong>Annual maintenance tune-ups</strong> — especially important in this high-humidity environment</li>
      </ul>

      <h3>Serving the Clear Lake Community</h3>
      <p>We provide service throughout the Clear Lake area, including the independent municipalities of Nassau Bay, El Lago, and Taylor Lake Village — home to many families connected to NASA's Johnson Space Center. We also serve the surrounding Clear Lake City neighborhoods in zip codes 77058, 77059, and 77062.</p>

      <p>Many homes in the Clear Lake area were built in the 1970s and 1980s to house the aerospace community that grew up around JSC. These homes — now 40–50 years old — often have ductwork that hasn't been updated and equipment that has been through several replacement cycles. Bay-area humidity accelerates corrosion on outdoor condenser units and condenser coils, making annual maintenance more important here than in drier inland communities.</p>

      <h3>Why Clear Lake Homeowners Choose Mabry's</h3>
      <ul>
        <li>Experience with the specific challenges of bay-area HVAC: corrosion, humidity, drain maintenance</li>
        <li>Flat-rate pricing — no hourly surprises</li>
        <li>BBB A+ Accredited Business</li>
        <li>Texas Licensed (TACLB12058E)</li>
        <li>Residential specialists — we only do homes</li>
        <li>Call our Clear Lake service line: 281-482-8400</li>
      </ul>
    `,
    keywords: ["AC installation Clear Lake Houston", "HVAC Clear Lake TX", "air conditioning Clear Lake", "AC repair Nassau Bay TX", "HVAC El Lago TX"],
  },
  {
    slug: "deer-park",
    name: "Deer Park",
    state: "TX",
    zipCodes: ["77536"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Deer Park, TX — BBB A+ Rated",
    description: "Reliable residential HVAC service for Deer Park homeowners in zip code 77536. Flat-rate pricing, BBB A+ rated since 1986.",
    content: `
      <h2>Reliable HVAC Service for Deer Park Homeowners — Honest Work, Flat-Rate Pricing</h2>
      <p>Deer Park is a hardworking community, and Deer Park homeowners expect contractors who show up, do the work right, and charge a fair price. That's exactly what Mabry's Air Conditioning & Heating has been delivering since 1986. We serve the 77536 zip code with the same flat-rate pricing and straight talk we give every customer in the greater Houston area.</p>

      <h3>HVAC Services We Provide in Deer Park</h3>
      <ul>
        <li><strong>AC repair</strong> — fast response for all makes and models</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — top brands, proper sizing, licensed installation</li>
        <li><strong>Annual maintenance tune-ups</strong> — prevent emergency breakdowns</li>
      </ul>

      <h3>We Know Deer Park Homes</h3>
      <p>Deer Park's residential neighborhoods range from post-war homes built in the 1940s and 50s near the city's older core to established mid-century neighborhoods developed through the 1960s–1980s and some newer developments toward the outskirts of the 77536 area. Many of Deer Park's homes are now at or past the typical 15–20 year replacement age for their HVAC systems, and our technicians have worked in them all.</p>

      <p>The proximity to industrial areas along the Houston Ship Channel means Deer Park air quality can put additional stress on HVAC filters and equipment. We often find systems here that are running harder than they need to be due to restricted airflow from dirty filters or coils — simple maintenance issues that cost homeowners real money on their monthly electric bills.</p>

      <h3>Why Deer Park Homeowners Trust Mabry's</h3>
      <ul>
        <li>No-nonsense flat-rate pricing — the price we quote is the price you pay</li>
        <li>Nearly 40 years of experience serving the greater Houston area</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who understand homes</li>
        <li>Call our east area service line: 281-482-8400</li>
      </ul>
    `,
    keywords: ["HVAC Deer Park TX", "AC repair Deer Park", "heating repair Deer Park TX", "air conditioning Deer Park 77536"],
  },
  {
    slug: "league-city",
    name: "League City",
    state: "TX",
    zipCodes: ["77573", "77574"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in League City, TX — All Neighborhoods",
    description: "Trusted HVAC service for League City families. Serving South Shore Harbour, Tuscan Lakes, Victory Lakes, Bay Colony & all League City neighborhoods.",
    content: `
      <h2>HVAC Service for All of League City — South Shore Harbour, Tuscan Lakes, Victory Lakes & Beyond</h2>
      <p>League City has been one of the fastest-growing cities in Texas for years, and Mabry's Air Conditioning & Heating has been proud to serve its residents throughout that growth. Whether you're in an established waterfront community like South Shore Harbour or a newer development like Tuscan Lakes or Bay Colony, we bring the same honest, flat-rate service that has defined us since 1986.</p>

      <h3>HVAC Services We Provide in League City</h3>
      <ul>
        <li><strong>AC repair</strong> — same-day service available for League City homes</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — top brands with proper sizing for your specific home</li>
        <li><strong>Annual maintenance tune-ups</strong> — especially important near the bay</li>
      </ul>

      <h3>League City's HVAC Challenges</h3>
      <p>League City sits near the shores of Clear Lake and Galveston Bay, which creates specific HVAC challenges. Bay-area humidity is relentless — it puts extra strain on condenser coils and AC components, accelerates corrosion, and makes condensate drain maintenance critical to preventing water damage inside your home. Homes in League City's waterfront communities see more corrosion-related equipment wear than homes further inland.</p>

      <p>The city's rapid growth also means a large inventory of homes built in the 2000s and early 2010s with builder-grade HVAC equipment that is now 12–20 years old — squarely in the replacement and repair window. We service homes in 77573 and 77574 across the full range of League City neighborhoods: South Shore Harbour, Tuscan Lakes, Victory Lakes, Bay Colony, Westover Park, Mar Bella, and others.</p>

      <h3>Why League City Residents Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years serving the greater Houston area</li>
        <li>Honest, flat-rate pricing — know your cost upfront</li>
        <li>BBB A+ Rating you can trust</li>
        <li>Residential-only focus — homes are our specialty</li>
        <li>Licensed and insured (TACLB12058E)</li>
        <li>League City service line: 281-482-8400</li>
      </ul>
    `,
    keywords: ["HVAC League City TX", "AC repair League City", "heating repair League City TX", "air conditioning League City 77573"],
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    state: "TX",
    zipCodes: ["77504", "77505"],
    phone: "281-482-8400",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Pasadena, TX (South Pasadena) — Flat-Rate Pricing",
    description: "Expert residential HVAC service for South Pasadena homeowners in 77504 and 77505. Honest flat-rate pricing, BBB A+ rated since 1986.",
    content: `
      <h2>HVAC Service for South Pasadena Homeowners — 77504 and 77505</h2>
      <p>Mabry's Air Conditioning & Heating serves the residential communities in South Pasadena — specifically the 77504 and 77505 zip codes. These are established neighborhoods with hardworking families who value honest work and fair pricing. That's exactly what we've delivered since 1986.</p>

      <h3>HVAC Services We Provide in Pasadena</h3>
      <ul>
        <li><strong>AC repair</strong> — all makes and models, dependable service</li>
        <li><strong>Heating repair</strong> — furnace and heat pump repair</li>
        <li><strong>New AC installation</strong> — top brands with proper sizing</li>
        <li><strong>Annual maintenance tune-ups</strong> — prevent costly breakdowns</li>
      </ul>

      <h3>We Know South Pasadena's Homes</h3>
      <p>The South Pasadena neighborhoods we serve — along the Burke Road corridor, near Pasadena Memorial High School, and throughout the 77504 and 77505 zip codes — include established residential areas with homes built primarily from the 1960s through the 1990s. These homes often have older ductwork, original-era equipment that's been replaced one or two times, and in some cases attic ductwork that has developed leaks or deterioration over the decades.</p>

      <p>Proximity to the industrial corridor means South Pasadena homes often see more particulate in the air that taxes AC filters — and homeowners sometimes go longer between filter changes than they should, reducing airflow and system efficiency. We check filter condition and airflow on every service call.</p>

      <h3>Why Pasadena Homeowners Trust Mabry's</h3>
      <ul>
        <li>Straightforward flat-rate pricing — no surprises on the invoice</li>
        <li>Nearly 40 years of experience with greater Houston homes</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists — homes only</li>
        <li>Pasadena service line: 281-482-8400</li>
      </ul>
    `,
    keywords: ["HVAC Pasadena TX", "AC repair Pasadena", "heating repair Pasadena TX", "air conditioning Pasadena 77504"],
  },
  {
    slug: "sienna",
    name: "Sienna",
    state: "TX",
    zipCodes: ["77459"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Sienna (Missouri City), TX",
    description: "Trusted HVAC service for Sienna Plantation homeowners. Serving Waters Lake, Sawmill Lake, Sienna Village & all Sienna neighborhoods. BBB A+ rated.",
    content: `
      <h2>HVAC Service for Sienna — Waters Lake, Sawmill Lake, Sienna Village & All Neighborhoods</h2>
      <p>Sienna Plantation is one of the premier master-planned communities in Fort Bend County, and the homeowners here have high standards — for their neighborhood, their homes, and the contractors they invite inside. Mabry's Air Conditioning & Heating brings those same high standards to every job. We've been serving Fort Bend County homeowners since 1986 with flat-rate pricing and work you can stand behind.</p>

      <h3>HVAC Services We Provide in Sienna</h3>
      <ul>
        <li><strong>AC repair</strong> — fast response, all major brands including Trane, Carrier, Lennox, Rheem</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service for those Fort Bend cold fronts</li>
        <li><strong>New AC installation</strong> — high-efficiency systems sized correctly for your home</li>
        <li><strong>Annual maintenance tune-ups</strong> — protect your investment and keep warranties valid</li>
      </ul>

      <h3>We Know Sienna's Homes</h3>
      <p>Sienna Plantation was developed primarily in the late 1990s through the 2010s, meaning a significant portion of the community's original HVAC equipment is now entering the 15–25 year replacement range. Builder-grade equipment installed during the construction boom is being replaced with more efficient systems — and homeowners in HOA communities like Sienna rightly expect quality work that doesn't leave a mess, respects their property, and is done right the first time.</p>

      <p>We serve all Sienna neighborhoods including Waters Lake, Sawmill Lake, Sienna Village, Lake Olympia, and the Camp Sienna areas throughout the 77459 zip code.</p>

      <h3>Why Sienna Homeowners Choose Mabry's</h3>
      <ul>
        <li>Based nearby in Alvin — fast response for Sienna and Missouri City</li>
        <li>Flat-rate pricing — zero surprises on your invoice</li>
        <li>BBB A+ Accredited — you can verify our reputation</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists who do careful, clean work</li>
        <li>Sienna service line: 281-331-5248</li>
      </ul>
    `,
    keywords: ["HVAC Sienna TX", "AC repair Sienna", "heating repair Sienna TX", "air conditioning Sienna Plantation Missouri City", "HVAC Fort Bend County"],
  },
  {
    slug: "angleton",
    name: "Angleton",
    state: "TX",
    zipCodes: ["77515", "77516"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Angleton, TX — Brazoria County's Trusted Choice",
    description: "Reliable residential HVAC service for Angleton homeowners. Based just up Highway 35 in Alvin — fast response times for Brazoria County. BBB A+ rated.",
    content: `
      <h2>HVAC Service for Angleton — Brazoria County Homeowners Deserve Honest Work</h2>
      <p>As the county seat of Brazoria County, Angleton is at the heart of our service territory. Mabry's is based just up Highway 35 in Alvin, which means fast response times for Angleton homeowners without the drive fees that larger Houston-based companies charge. We've been the trusted HVAC resource for Brazoria County families since 1986.</p>

      <h3>HVAC Services We Provide in Angleton</h3>
      <ul>
        <li><strong>AC repair</strong> — all makes and models, quick dispatch from nearby Alvin</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — energy-efficient systems, proper sizing</li>
        <li><strong>Annual maintenance tune-ups</strong> — prevent breakdowns in Brazoria County's demanding climate</li>
      </ul>

      <h3>We Know Angleton's Homes</h3>
      <p>Angleton has a mix of housing that reflects its history as a long-established county seat: older homes near the historic downtown and the Brazoria County Courthouse, mid-century neighborhoods that expanded through the 1950s–1980s, and newer development on the outskirts of the 77515 and 77516 zip codes. The Gulf Coast climate — especially the humidity that flows in from the Gulf near Surfside Beach — is relentless on HVAC equipment, and homes here benefit from the same preventive maintenance approach that protects systems closer to the Houston metro.</p>

      <p>We're familiar with the common HVAC setups found in Angleton homes, including older systems that may not have been serviced regularly. We also serve the surrounding communities in southern Brazoria County.</p>

      <h3>Why Angleton Homeowners Trust Mabry's</h3>
      <ul>
        <li>Based just 15 minutes away in Alvin — genuinely local, fast response</li>
        <li>Flat-rate pricing — what we quote is what you pay</li>
        <li>Nearly 40 years of experience in Brazoria County</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Angleton service line: 281-331-5248</li>
      </ul>
    `,
    keywords: ["HVAC Angleton TX", "AC repair Angleton", "heating repair Angleton TX", "air conditioning Angleton Brazoria County"],
  },
  {
    slug: "manvel",
    name: "Manvel",
    state: "TX",
    zipCodes: ["77578"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Manvel, TX — Your Neighbor in Alvin",
    description: "Fast HVAC service for Manvel homeowners. We're just down the road in Alvin — serving Rodeo Palms, Pomona & all Manvel neighborhoods. BBB A+ rated.",
    content: `
      <h2>HVAC Service for Manvel — Rodeo Palms, Pomona & All Neighborhoods</h2>
      <p>Manvel has grown dramatically in recent years, transforming from a quiet rural community into a thriving suburb with new master-planned neighborhoods. Mabry's Air Conditioning & Heating is just down the road in Alvin — your true local neighbor for HVAC service. We've watched Manvel grow and have been proud to serve the families who call it home.</p>

      <h3>HVAC Services We Provide in Manvel</h3>
      <ul>
        <li><strong>AC repair</strong> — fast response from our nearby Alvin shop</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — top brands, proper load calculations for newer Manvel homes</li>
        <li><strong>Annual maintenance tune-ups</strong> — protect newer equipment and keep warranties valid</li>
      </ul>

      <h3>We Know Manvel's Growing Communities</h3>
      <p>Manvel's 77578 zip code now includes established communities like Rodeo Palms — one of the area's original planned neighborhoods — alongside newer developments like Pomona, which has brought thousands of newer homes to the area. Many Manvel homeowners are dealing with one of two situations: newer homes (2010s–2020s construction) with builder-grade systems that benefit from annual maintenance to hit their expected lifespan, or older rural properties and estate homes with less standard HVAC configurations that require experienced technicians.</p>

      <p>The Brazoria County climate — humid, hot, and demanding — is the same challenge all our service area homeowners face. Our close proximity means we can respond quickly and don't pad your bill with drive-time charges.</p>

      <h3>Why Manvel Homeowners Choose Mabry's</h3>
      <ul>
        <li>Just down the road in Alvin — fast response, no long drive fees</li>
        <li>Nearly 40 years serving Brazoria County communities</li>
        <li>Flat-rate pricing — no hidden charges</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Manvel service line: 281-331-5248</li>
      </ul>
    `,
    keywords: ["HVAC Manvel TX", "AC repair Manvel", "heating repair Manvel TX", "air conditioning Manvel Rodeo Palms Pomona"],
  },
  {
    slug: "rosharon",
    name: "Rosharon",
    state: "TX",
    zipCodes: ["77583"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Rosharon, TX — Brazoria County Experts",
    description: "Dependable residential HVAC service for Rosharon homeowners. Based nearby in Alvin — quick response for the 77583 area. BBB A+ rated since 1986.",
    content: `
      <h2>HVAC Service for Rosharon — Dependable, Local, Flat-Rate</h2>
      <p>Rosharon sits in the heart of Brazoria County, along the Highway 288 corridor that has seen significant growth in recent years. Mabry's Air Conditioning & Heating is based just a few miles away in Alvin — close enough for fast response without the drive fees that larger Houston contractors charge to reach this area. We've been serving Brazoria County families since 1986.</p>

      <h3>HVAC Services We Provide in Rosharon</h3>
      <ul>
        <li><strong>AC repair</strong> — all makes and models, quick dispatch from Alvin</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — energy-efficient systems with proper sizing</li>
        <li><strong>Annual maintenance tune-ups</strong> — prevent breakdowns before they happen</li>
      </ul>

      <h3>We Know Rosharon's Homes</h3>
      <p>The 77583 zip code covers a wide range of residential properties — from rural acreage homes and established farmstead properties to newer residential developments that have come with Highway 288's growth. Rural and semi-rural properties in Rosharon sometimes present unique HVAC challenges: homes that were built with less common configurations, properties that have gone longer between service calls than ideal, and some older systems that have been maintained by the homeowner rather than a professional. We handle all of it without judgment and with honest, upfront pricing.</p>

      <p>The Brazoria County climate is no different here — high humidity, long cooling seasons, and the occasional cold front that tests heating systems that haven't run in months.</p>

      <h3>Why Rosharon Homeowners Trust Mabry's</h3>
      <ul>
        <li>Minutes away in Alvin — fast response for the 77583 area</li>
        <li>Honest, flat-rate pricing with no hidden fees</li>
        <li>Nearly 40 years of Brazoria County experience</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Rosharon service line: 281-331-5248</li>
      </ul>
    `,
    keywords: ["HVAC Rosharon TX", "AC repair Rosharon", "heating repair Rosharon TX", "air conditioning Rosharon 77583"],
  },
  {
    slug: "sugar-land",
    name: "Sugar Land",
    state: "TX",
    zipCodes: ["77478", "77479", "77498", "77496"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Sugar Land, TX — Trusted Since 1986",
    description: "Reliable residential HVAC service for Sugar Land homeowners. Flat-rate pricing, no hidden charges. Serving First Colony, Riverstone, Telfair & surrounding Fort Bend County communities.",
    content: `
      <h2>AC Repair & HVAC Service for Sugar Land Homeowners</h2>
      <p>Sugar Land has grown into one of the most sought-after communities in Greater Houston — and Mabry's Air Conditioning & Heating has been serving Fort Bend County homeowners since 1986. Whether you're in an established First Colony home, a newer Riverstone or Telfair property, or anywhere across the Sugar Land area, you deserve HVAC service from a company that treats your home like their own.</p>

      <p>We bring nearly four decades of Gulf Coast HVAC experience to every Sugar Land service call — flat-rate pricing, licensed technicians, and honest work.</p>

      <h3>HVAC Services We Provide in Sugar Land</h3>
      <ul>
        <li><strong>AC repair</strong> — fast diagnosis and repair on all makes and models</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service when those cold fronts hit</li>
        <li><strong>New AC installation</strong> — Trane, Carrier, Lennox, Rheem and other top brands, properly sized</li>
        <li><strong>Annual maintenance tune-ups</strong> — pre-season service to prevent summer breakdowns</li>
      </ul>

      <h3>We Know Sugar Land Homes</h3>
      <p>Sugar Land's housing stock is remarkably diverse. First Colony — one of the Houston area's original master-planned communities — features homes built throughout the 1980s and 1990s, many of which are now approaching their second or third HVAC replacement cycle. Newer developments like Riverstone, Telfair, New Territory, and Commonwealth include homes built in the 2000s and 2010s that benefit from professional maintenance to maximize equipment life in our demanding Gulf Coast climate.</p>

      <p>Fort Bend County's heat and humidity are relentless. The combination of high summer temperatures and moisture levels that regularly push into the 90% range means your AC system is under sustained stress for nine months out of the year. Regular maintenance isn't optional here — it's what separates a system that lasts 15 years from one that fails at year 10.</p>

      <h3>Why Sugar Land Homeowners Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years serving Greater Houston and Fort Bend County</li>
        <li>Flat-rate pricing — you know the cost before we start</li>
        <li>All major brands serviced: Trane, Carrier, Lennox, Rheem, Goodman, American Standard</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists — homes are our only business</li>
      </ul>

      <p>From Sugar Creek to Greatwood, First Colony to Riverstone — call Mabry's at 281-331-5248 for honest, flat-rate HVAC service.</p>
    `,
    keywords: ["HVAC Sugar Land TX", "AC repair Sugar Land TX", "heating repair Sugar Land", "air conditioning Sugar Land 77478 77479", "AC service Fort Bend County"],
  },
  {
    slug: "bellaire",
    name: "Bellaire",
    state: "TX",
    zipCodes: ["77401"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in Bellaire, TX — Experienced Houston Area Experts",
    description: "Trusted residential HVAC service for Bellaire homeowners. Flat-rate pricing, all major brands serviced. Serving the 77401 area with licensed AC repair, installation & maintenance.",
    content: `
      <h2>AC Repair & Heating Service in Bellaire, TX</h2>
      <p>Bellaire — Houston's "City of Homes" — is one of the most distinctive residential communities in the greater Houston area. Nestled inside Loop 610 and surrounded by the city of Houston, Bellaire is a true neighborhood community where homeowners invest in their properties and expect quality service from the contractors they invite in. Mabry's Air Conditioning & Heating has been providing that level of service to Houston-area homeowners since 1986.</p>

      <h3>HVAC Services We Provide in Bellaire</h3>
      <ul>
        <li><strong>AC repair</strong> — fast, accurate diagnosis on all makes and models</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — proper load calculation and licensed installation</li>
        <li><strong>Annual maintenance tune-ups</strong> — protect your investment with pre-season service</li>
      </ul>

      <h3>We Know Bellaire Homes</h3>
      <p>Bellaire's housing stock tells the story of Houston's post-war growth and its ongoing reinvention. The 77401 zip code is home to a remarkable mix of original mid-century ranch homes — many built in the 1950s and 1960s — alongside the newer luxury custom homes and tear-down rebuilds that have transformed many Bellaire streets over the past two decades.</p>

      <p>Older Bellaire homes often present specific HVAC considerations: ductwork that may be original or only partially updated, attic configurations that challenge airflow, and systems that may be approaching or past their expected service life. Newer construction in Bellaire tends toward high-efficiency systems and zoned cooling — equipment that rewards skilled, experienced technicians who understand modern systems.</p>

      <p>Inside Loop 610, the urban heat island effect adds to Houston's already demanding cooling load. Bellaire homes run their AC hard, and that demands reliable equipment and a contractor who shows up when things go wrong.</p>

      <h3>Why Bellaire Homeowners Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years of Greater Houston HVAC experience</li>
        <li>Flat-rate pricing — no hourly surprises, no hidden fees</li>
        <li>All major brands: Trane, Carrier, Lennox, Rheem, Goodman, American Standard, York</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists — homes are all we do</li>
      </ul>
    `,
    keywords: ["HVAC Bellaire TX", "AC repair Bellaire TX", "heating repair Bellaire", "air conditioning Bellaire 77401", "AC service Bellaire Houston"],
  },
  {
    slug: "west-university",
    name: "West University Place",
    state: "TX",
    zipCodes: ["77005"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "AC Repair & HVAC Service in West University Place, TX — Licensed Experts",
    description: "Reliable residential HVAC service for West University Place homeowners. Flat-rate pricing, experienced technicians. Serving the 77005 area with AC repair, installation & maintenance.",
    content: `
      <h2>HVAC Service for West University Place Homes</h2>
      <p>West University Place — "West U" to those who live there — is one of the most prestigious small cities in Texas, a tight-knit residential enclave completely surrounded by Houston. Homeowners here have high standards, and rightly so. Mabry's Air Conditioning & Heating brings nearly 40 years of Greater Houston HVAC experience and the same flat-rate, no-surprises approach that has built our reputation since 1986.</p>

      <h3>HVAC Services We Provide in West University Place</h3>
      <ul>
        <li><strong>AC repair</strong> — fast, licensed repair on all makes and models</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service</li>
        <li><strong>New AC installation</strong> — energy-efficient systems, properly sized for your home</li>
        <li><strong>Annual maintenance tune-ups</strong> — protect your system before the Houston summer heat arrives</li>
      </ul>

      <h3>We Know West U Homes</h3>
      <p>West University Place's housing stock ranges from charming original bungalows and craftsman homes built in the 1920s and 1930s to the substantial custom rebuilds that have become increasingly common as land values have risen. These older homes present real HVAC challenges — limited attic clearance, ductwork that may have been routed around original architectural features, and cooling loads that older systems were never designed to handle in today's climate.</p>

      <p>Newer West U homes, including the two-story custom builds that have reshaped many blocks, often feature zoned systems, high-efficiency equipment, and complex installations that require experienced technicians. Either way, you need someone who knows what they're doing and charges you a fair, transparent price.</p>

      <p>Houston's urban heat — amplified inside the Loop — means West U homes run their AC for the better part of nine months. That's a serious cooling load, and it demands a contractor who treats your equipment right.</p>

      <h3>Why West U Homeowners Choose Mabry's</h3>
      <ul>
        <li>Nearly four decades of Greater Houston residential HVAC experience</li>
        <li>Flat-rate pricing — you know exactly what you're paying before we start</li>
        <li>All major brands serviced and installed</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential specialists — homes are our entire focus</li>
      </ul>
    `,
    keywords: ["HVAC West University Place TX", "AC repair West University TX", "heating repair West U Houston", "air conditioning 77005", "AC service West University Place"],
  },
  {
    slug: "rice-village",
    name: "Rice Village",
    state: "TX",
    zipCodes: ["77005", "77025"],
    phone: "281-331-5248",
    isPrimary: false,
    headline: "AC Repair & HVAC Service Near Rice Village, Houston TX — Local Experts",
    description: "Dependable residential HVAC service for homes in and around Rice Village, Houston. Flat-rate pricing, all major brands. Serving the Museum District, Southampton & surrounding Houston neighborhoods.",
    content: `
      <h2>AC Repair & Heating Service for Rice Village & Surrounding Houston Neighborhoods</h2>
      <p>The Rice Village area — anchored by Rice University and one of Houston's most beloved urban neighborhoods — is home to a dense, established residential community with a mix of housing styles that spans nearly a century. Mabry's Air Conditioning & Heating has been serving Greater Houston homeowners since 1986, bringing experienced, licensed HVAC service to homes that range from original 1930s craftsmen to modern luxury builds.</p>

      <h3>HVAC Services We Provide in the Rice Village Area</h3>
      <ul>
        <li><strong>AC repair</strong> — accurate diagnosis and repair on all makes and models</li>
        <li><strong>Heating repair</strong> — furnace and heat pump service throughout the year</li>
        <li><strong>New AC installation</strong> — top brands, proper load calculations, licensed installation</li>
        <li><strong>Annual maintenance tune-ups</strong> — prevent breakdowns before Houston's brutal summer heat arrives</li>
      </ul>

      <h3>We Know These Houston Neighborhoods</h3>
      <p>The streets around Rice Village — Southampton, Boulevard Oaks, Braeswood Place, and the Museum District — contain some of Houston's most character-rich residential architecture. Many homes in these neighborhoods were built between the 1920s and 1950s, featuring mature tree canopies, historic detailing, and HVAC systems that have often been retrofitted into spaces not originally designed for modern equipment.</p>

      <p>These older homes require technicians who can think creatively about ductwork routing, equipment placement, and airflow challenges that newer tract homes simply don't present. At the same time, the high-end renovation and new construction that has reshaped parts of this area brings its own demands — high-efficiency systems, zoned cooling, and equipment that needs to perform to a higher standard.</p>

      <p>Inside Houston's Loop 610, the heat load is real and sustained. Homes here run their AC nearly year-round, and that demands reliable equipment and a contractor who shows up fast when something fails.</p>

      <h3>Why Homeowners in This Area Choose Mabry's</h3>
      <ul>
        <li>Nearly 40 years serving Greater Houston residential customers</li>
        <li>Flat-rate pricing — no hidden fees, no hourly rates that surprise you</li>
        <li>Trane, Carrier, Lennox, Rheem, Goodman, American Standard and more</li>
        <li>BBB A+ Accredited Business</li>
        <li>Licensed Texas HVAC Contractor (TACLB12058E)</li>
        <li>Residential only — homes are our entire business</li>
      </ul>
    `,
    keywords: ["HVAC Rice Village Houston", "AC repair Rice Village TX", "heating repair Museum District Houston", "air conditioning Southampton Houston", "AC service 77005 77025"],
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
