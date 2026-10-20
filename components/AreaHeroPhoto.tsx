import Image from "next/image";
import { getAreaHeroPhoto } from "@/lib/areaHeroPhoto";

/**
 * Real, zone-appropriate hero photo for a city/area page, rendered in a uniform
 * 4:3 frame to the right of the hero copy (stacks below it on mobile). Used on
 * both the dynamic [slug] area template and the dedicated city pages so every
 * city looks consistent.
 */
export function AreaHeroPhoto({ slug, cityName }: { slug: string; cityName: string }) {
  const photo = getAreaHeroPhoto(slug, cityName);
  const imageUrl = `https://mabryac.com${photo.src}`;
  const imageSchema = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    url: imageUrl,
    contentUrl: imageUrl,
    caption: photo.alt,
    representativeOfPage: true,
  };
  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema) }}
      />
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className={`object-cover ${photo.pos}`}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
      />
    </div>
  );
}
