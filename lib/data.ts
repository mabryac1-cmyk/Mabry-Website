export const businessInfo = {
  name: "Mabry's Air Conditioning & Heating, Inc.",
  phone: "(281) 485-7299",
  email: "service@mabrysac.com",
  address: {
    street: "123 Industrial Blvd",
    city: "Friendswood",
    state: "TX",
    zip: "77546",
    lat: "29.5294",
    lng: "-95.2010",
  },
  license: "TACLB12058E",
  established: 1986,
  bbbRating: "A+",
};

export const services = [
  {
    slug: "ac-repair",
    name: "AC Repair",
    title: "AC Repair Services",
    description: "Fast, reliable air conditioning repair for your home. 24/7 emergency service available.",
    content: `
      <h2>Expert AC Repair in Friendswood & Surrounding Areas</h2>
      <p>When your air conditioner breaks down, Mabry's is here to help. With over 35 years of experience, our certified technicians diagnose and fix problems quickly.</p>
      <h3>Common AC Issues We Fix:</h3>
      <ul>
        <li>AC not cooling properly</li>
        <li>Strange noises or odors</li>
        <li>Frozen evaporator coils</li>
        <li>Refrigerant leaks</li>
        <li>Thermostat problems</li>
        <li>Electrical issues</li>
      </ul>
      <h3>Why Choose Mabry's for AC Repair?</h3>
      <ul>
        <li>Honest, flat-rate pricing with no hidden charges</li>
        <li>Licensed technicians (TACLB12058E)</li>
        <li>BBB A+ Rated since 1986</li>
        <li>Same-day service available</li>
      </ul>
    `,
  },
  {
    slug: "heating-repair",
    name: "Heating Repair & Maintenance",
    title: "Heating Repair & Maintenance Services",
    description: "Keep your home warm with expert heating repair and maintenance. All brands serviced.",
    content: `
      <h2>Professional Heating Repair & Maintenance</h2>
      <p>Don't let a broken heater leave you in the cold. Mabry's provides fast, reliable heating repair for all makes and models.</p>
      <h3>Our Heating Services Include:</h3>
      <ul>
        <li>Furnace repair and diagnostics</li>
        <li>Heat pump repair</li>
        <li>Annual maintenance tune-ups</li>
        <li>Thermostat calibration</li>
        <li>Ductwork inspection</li>
      </ul>
      <h3>Preventive Maintenance Benefits:</h3>
      <ul>
        <li>Improved energy efficiency</li>
        <li>Extended equipment lifespan</li>
        <li>Fewer emergency repairs</li>
        <li>Better indoor air quality</li>
      </ul>
    `,
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    title: "AC Installation & Replacement",
    description: "Professional AC installation with proper sizing. Energy-efficient systems with warranty.",
    content: `
      <h2>Expert AC Installation & Replacement</h2>
      <p>When it's time for a new air conditioning system, trust the experts at Mabry's. We help you choose the right system for your home and budget.</p>
      <h3>Our Installation Process:</h3>
      <ul>
        <li>Free in-home consultation</li>
        <li>Proper load calculation for sizing</li>
        <li>Professional installation by licensed technicians</li>
        <li>System testing and optimization</li>
        <li>Customer education on operation</li>
      </ul>
      <h3>We Install All Major Brands:</h3>
      <ul>
        <li>Carrier</li>
        <li>Trane</li>
        <li>Lennox</li>
        <li>Rheem</li>
        <li>And more...</li>
      </ul>
    `,
  },
];

export const locations = [
  {
    slug: "friendswood",
    name: "Friendswood",
    state: "TX",
    zipCodes: ["77546", "77549"],
    isPrimary: true,
    description: "Proudly serving Friendswood since 1986. Our headquarters is located right here in your community.",
  },
  {
    slug: "pearland",
    name: "Pearland",
    state: "TX",
    zipCodes: ["77581", "77584", "77588"],
    isPrimary: false,
    description: "Fast, reliable HVAC service for Pearland residents. Just minutes from our Friendswood location.",
  },
  {
    slug: "clear-lake",
    name: "Clear Lake",
    state: "TX",
    zipCodes: ["77058", "77059", "77062"],
    isPrimary: false,
    description: "Serving the Clear Lake area including NASA and surrounding neighborhoods.",
  },
  {
    slug: "alvin",
    name: "Alvin",
    state: "TX",
    zipCodes: ["77511", "77512"],
    isPrimary: false,
    description: "Quality HVAC services for Alvin homes and families.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getLocationBySlug(slug: string) {
  return locations.find((l) => l.slug === slug);
}
