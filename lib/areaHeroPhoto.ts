/**
 * Zone-appropriate above-the-fold hero photo for each city/area page
 * (Caleb visible-proof playbook): a real branded service truck in a local
 * neighborhood, chosen by dispatch/GBP zone so the "we serve your area"
 * message matches the city.
 *
 *   Bay Area / East cities (Friendswood GBP)  → Friendswood neighborhood truck
 *   Everything else (Alvin GBP, incl. Pearland) → Alvin neighborhood truck
 *
 * Keep BAY_AREA_SLUGS in sync with the GBP review-link zone routing.
 */
const BAY_AREA_SLUGS = new Set([
  "friendswood",
  "clear-lake",
  "league-city",
  "deer-park",
  "pasadena",
]);

export function getAreaHeroPhoto(slug: string, cityName: string): {
  src: string;
  alt: string;
  pos: string;
} {
  const bayArea = BAY_AREA_SLUGS.has(slug);
  return {
    src: bayArea
      ? "/photos/mabrys-ac-service-truck-neighborhood-friendswood-tx.jpg"
      : "/photos/mabrys-ac-service-truck-neighborhood-alvin-tx.jpg",
    alt: `Mabry's Air Conditioning & Heating branded service truck in a ${cityName}, TX neighborhood`,
    // Friendswood shot is portrait; center-crop keeps the truck in frame.
    // Alvin shot is landscape (4:3) and fills the frame with no crop.
    pos: "object-center",
  };
}
