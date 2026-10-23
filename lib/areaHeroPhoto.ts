/**
 * Above-the-fold hero photo for each city/area page (Caleb visible-proof playbook).
 *
 * Integrity rule: a photo is only labeled as being *in* a city when it actually was
 * taken there. Cities where we have a genuine local photo get it (CITY_PHOTOS). Cities
 * without one fall back to a zone truck shot with TRUTHFUL alt text that says the truck
 * is "serving {city}" — never claiming the photo was taken in that city.
 */
type AreaPhoto = { src: string; alt: string; pos: string };

const ALVIN_TRUCK = "/photos/mabrys-ac-service-truck-neighborhood-alvin-tx.jpg";
const FRIENDSWOOD_TRUCK = "/photos/mabrys-ac-service-truck-neighborhood-friendswood-tx.jpg";

/** Real, city-specific photos (genuine local work / presence in that exact city). */
const CITY_PHOTOS: Record<string, AreaPhoto> = {
  alvin: {
    src: ALVIN_TRUCK,
    alt: "Mabry's Air Conditioning & Heating branded service truck in an Alvin, TX neighborhood",
    pos: "object-center",
  },
  friendswood: {
    src: FRIENDSWOOD_TRUCK,
    alt: "Mabry's Air Conditioning & Heating branded service truck at a Friendswood, TX home",
    pos: "object-center",
  },
  "deer-park": {
    src: "/photos/mabrys-ac-service-trucks-deer-park-tx.jpg",
    alt: "Mabry's Air Conditioning & Heating service truck and ductwork trailer on a job in Deer Park, TX",
    pos: "object-center",
  },
  "league-city": {
    src: "/photos/mabrys-ac-service-truck-neighborhood-league-city-tx.jpg",
    alt: "Mabry's Air Conditioning & Heating branded service truck at a League City, TX home",
    pos: "object-center",
  },
  pasadena: {
    src: "/photos/mabrys-trane-ac-condenser-service-pasadena-tx.jpg",
    alt: "Trane AC condenser serviced by Mabry's Air Conditioning & Heating in Pasadena, TX",
    // Tall equipment shot: anchor to top so the Trane badge + gauges show cleanly
    // (crops the plain base/ground at the bottom instead of the top of the unit).
    pos: "object-top",
  },
  pearland: {
    src: "/photos/mabrys-ac-service-truck-neighborhood-pearland-tx.jpg",
    alt: "Mabry's Air Conditioning & Heating branded service truck at a Pearland, TX home",
    pos: "object-center",
  },
};

/**
 * Bay Area / East dispatch zone (Friendswood GBP). Used only to pick which truck
 * the zone fallback shows for a city we don't have a specific photo of. Keep in sync
 * with the GBP review-link routing.
 */
const BAY_AREA_SLUGS = new Set([
  "friendswood",
  "clear-lake",
  "league-city",
  "deer-park",
  "pasadena",
]);

export function getAreaHeroPhoto(slug: string, cityName: string): AreaPhoto {
  const specific = CITY_PHOTOS[slug];
  if (specific) return specific;

  // Fallback: a zone truck shot with honest "serving {city}" alt (not "in {city}").
  const bayArea = BAY_AREA_SLUGS.has(slug);
  return {
    src: bayArea ? FRIENDSWOOD_TRUCK : ALVIN_TRUCK,
    alt: `Mabry's Air Conditioning & Heating branded service truck serving ${cityName}, TX and the Greater Houston area`,
    pos: "object-center",
  };
}
