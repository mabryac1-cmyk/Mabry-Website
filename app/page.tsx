import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { businessInfo, services, locations, generalFaqs } from "@/lib/data";
import { Shield, Clock, Award, ArrowRight, MapPin, Phone, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "AC Repair in Alvin, Friendswood & Pearland | Greater Houston Area | Mabry's AC & Heating",
  description: "Licensed HVAC contractor serving Alvin, Friendswood, Pearland & the Greater Houston area. Open Mon–Fri 7am–7pm & Saturdays. Flat-rate pricing — no after-hours fees. Call 281-331-5248 or 281-482-8400.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" 
            alt="HVAC system" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight text-shadow">
              AC Repair in Alvin, Friendswood, Pearland & the Greater Houston Area
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-white/90 leading-snug">
              Full-Service HVAC — Air Conditioning, Heating &amp; Maintenance Since 1986
            </h2>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.bbb.org/us/tx/alvin/profile/air-conditioning-contractors/mabrys-air-conditioning-heating-inc-0915-50000805#sealclick"
                target="_blank"
                rel="nofollow"
                className="shrink-0"
                aria-label="Mabry's Air Conditioning & Heating, Inc. BBB Business Review"
              >
                <img
                  src="https://seal-houston.bbb.org/seals/blue-seal-280-80-bbb-50000805.png"
                  alt="Mabry's Air Conditioning & Heating, Inc. BBB Business Review"
                  width={280}
                  height={80}
                  style={{ border: 0 }}
                  className="rounded"
                />
              </a>
              <span className="inline-flex items-center gap-1.5 bg-accent/25 border border-accent/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 shrink-0" /> Voted Favorite AC Company — Alvin Sun &amp; Advertiser
              </span>
            </div>

            <p className="text-lg text-white/90 max-w-lg leading-relaxed">
              Proudly serving Alvin, Friendswood, Pearland, Sugar Land, Bellaire, Clear Lake, League City, and communities throughout the Greater Houston area. Licensed residential HVAC — {businessInfo.license}.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-lg p-4 max-w-md">
              <p className="text-white/90 text-sm font-semibold mb-1">Call for Urgent or Emergency Service:</p>
              <p className="text-white/70 text-xs mb-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                Mon–Fri 7am–7pm · Sat 7am–1pm · On-call after hours — flat-rate pricing, no after-hours fees
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:2813315248"
                  className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-5 rounded-lg text-base transition-colors min-h-[48px]"
                  data-testid="link-phone-alvin-hero"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  281-331-5248
                </a>
                <a
                  href="tel:2814828400"
                  className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-bold py-3 px-5 rounded-lg text-base transition-colors min-h-[48px]"
                  data-testid="link-phone-friendswood-hero"
                >
                  <Phone className="w-5 h-5 shrink-0" />
                  281-482-8400
                </a>
                <Link
                  href="/promotions"
                  className="flex items-center justify-center gap-1 text-white/80 hover:text-white text-sm font-semibold transition-colors pt-1"
                >
                  🏷️ See Our Current Offers &amp; Discounts →
                </Link>
              </div>
            </div>

            <p className="text-sm text-white/70">
              Serving homeowners since 1986 | Licensed {businessInfo.license} | BBB A+ Rated
            </p>
          </div>

          <div className="hidden lg:block">
            <LeadForm className="relative z-10" />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Same-Day Service", desc: "Fast response when you need it most" },
              { icon: Shield, title: "Licensed & Insured", desc: `License ${businessInfo.license}` },
              { icon: Award, title: "Flat-Rate Pricing", desc: "No hidden charges, ever" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex items-start gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our HVAC Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive residential heating and cooling solutions for your home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                    <div className="text-white text-center px-6">
                      <h3 className="text-2xl font-bold">{service.name}</h3>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center font-bold text-accent uppercase tracking-wide text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Locations</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">Alvin Office & Shop</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>2110 S Gordon St<br />Alvin, TX 77511</span>
                </p>
                <a href="tel:281-331-5248" className="flex items-center gap-3 hover:text-accent transition-colors font-semibold">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>281-331-5248</span>
                </a>
                <p className="text-sm text-muted-foreground pt-2">
                  Serving South & Southwest Houston — Alvin, Manvel, Sugar Land, Sienna & surrounding communities
                </p>
                <Link href="/areas/alvin" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors pt-1">
                  View Alvin Area <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
              <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wide">Friendswood Service Area</h3>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span>Serving Friendswood, TX 77546</span>
                </p>
                <a href="tel:281-482-8400" className="flex items-center gap-3 hover:text-accent transition-colors font-semibold">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span>281-482-8400</span>
                </a>
                <p className="text-sm text-muted-foreground pt-2">
                  Serving Bay Area & Southeast Houston — Friendswood, Pearland, Clear Lake, League City, Bellaire & surrounding communities
                </p>
                <Link href="/areas/friendswood" className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent/80 transition-colors pt-1">
                  View Friendswood Area <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 relative z-10">
              Proudly Serving Your Community
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
              With our office and shop in Alvin and a dedicated service area covering Friendswood, we provide expert HVAC services to homes throughout the greater Houston area.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              {locations.map((location) => (
                <Link 
                  key={location.slug} 
                  href={`/areas/${location.slug}`}
                  className={`px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all ${
                    location.isPrimary 
                      ? "bg-accent text-white hover:bg-accent/90" 
                      : "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-primary"
                  }`}
                >
                  <MapPin className="w-4 h-4" />
                  {location.name}, {location.state}
                                  </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Elfsight Google Reviews Widget */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
          <div className="elfsight-app-35a13954-516a-4f3e-aead-43fd4158b663" data-elfsight-app-lazy></div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get answers to common questions about our HVAC services, pricing, and service areas.
            </p>
          </div>
          <FAQSection faqs={generalFaqs} title="" schemaId="faq-schema-homepage" />
        </div>
      </section>

      <section className="lg:hidden py-16 px-4 bg-white">
        <div className="max-w-md mx-auto">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
