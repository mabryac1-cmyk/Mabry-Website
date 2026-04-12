import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { businessInfo } from "@/lib/data";
import { Star, Phone, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: `5-Star Google Reviews | Mabry's AC & Heating | Alvin, Friendswood & Pearland TX`,
  description: `See why homeowners in Alvin, Friendswood & Pearland give Mabry's AC & Heating a perfect 5.0 rating on Google. 37+ verified reviews. BBB A+ Rated since 1986. Read reviews or leave your own.`,
  alternates: {
    canonical: "/reviews",
  },
};

const reviewsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mabry's Air Conditioning & Heating, Inc.",
  "url": "https://mabryac.com",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "37",
    "ratingCount": "37"
  }
};

export default function ReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">5-Star Google Reviews — Mabry&apos;s AC &amp; Heating</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            See why homeowners have trusted {businessInfo.name} since 1986.
          </p>
          <div className="flex justify-center items-center gap-2 mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-8 h-8 fill-accent text-accent" />
            ))}
            <span className="text-white ml-2 text-lg font-semibold">5.0 on Google</span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-35a13954-516a-4f3e-aead-43fd4158b663" data-elfsight-app-lazy></div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Reputation Speaks for Itself</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              For nearly 40 years, we've earned our reputation through honest service and quality workmanship. 
              Many of our customers are second and third-generation - that's the kind of trust we're proud of.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-accent mb-2">{new Date().getFullYear() - businessInfo.established}+</p>
                <p className="text-muted-foreground">Years in Business</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-accent mb-2">A+</p>
                <p className="text-muted-foreground">BBB Rating</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <p className="text-4xl font-bold text-accent mb-2">5.0</p>
                <p className="text-muted-foreground">Google Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Had a Great Experience?</h2>
                <p className="text-muted-foreground mb-6">
                  We'd love to hear from you! Your feedback helps other homeowners find a trustworthy HVAC company. 
                  Please consider leaving us a review on Google.
                </p>
                <a 
                  href="https://g.page/r/CYYTwAG-fhnzEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                  data-testid="link-google-review"
                >
                  Leave a Google Review <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-muted-foreground mb-2">Need HVAC service?</p>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="inline-flex items-center gap-2 text-2xl font-bold text-accent hover:text-accent/80 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
