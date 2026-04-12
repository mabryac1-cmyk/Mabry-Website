import { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { businessInfo, businessHours, locations } from "@/lib/data";
import { Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact Mabry's AC & Heating | Alvin 281-331-5248 | Friendswood 281-482-8400`,
  description: `Contact Mabry's AC & Heating for HVAC service in Alvin, Friendswood, Pearland & Greater Houston. Alvin: 281-331-5248 · Friendswood: 281-482-8400. Open Mon–Fri 7am–7pm & Saturdays. License ${businessInfo.license}.`,
  alternates: {
    canonical: "/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Mabry's AC & Heating",
  "url": "https://mabryac.com/contact",
  "description": "Contact Mabry's Air Conditioning & Heating for AC repair, heating repair, installation and maintenance in Alvin, Friendswood, Pearland and the Greater Houston area.",
  "mainEntity": {
    "@type": "HVACBusiness",
    "name": "Mabry's Air Conditioning & Heating, Inc.",
    "url": "https://mabryac.com",
    "telephone": ["281-331-5248", "281-482-8400"],
    "email": "office@mabryac.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2110 S Gordon St",
      "addressLocality": "Alvin",
      "addressRegion": "TX",
      "postalCode": "77511",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "19:00" },
      { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "07:00", "closes": "13:00" }
    ]
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Mabry&apos;s AC &amp; Heating — Alvin &amp; Friendswood</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Ready to schedule service? Call us now or fill out the form below.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:281-331-5248"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              <Phone className="w-6 h-6" />
              281-331-5248
            </a>
            <a 
              href="tel:281-482-8400"
              className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-primary font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              <Phone className="w-6 h-6" />
              281-482-8400
            </a>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Alvin Office</h3>
                    <a href="tel:281-331-5248" className="text-accent hover:text-accent/80 text-lg font-semibold">
                      281-331-5248
                    </a>
                    <h3 className="font-bold text-primary mt-3">Friendswood Service Area</h3>
                    <a href="tel:281-482-8400" className="text-accent hover:text-accent/80 text-lg font-semibold">
                      281-482-8400
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Email</h3>
                    <a href={`mailto:${businessInfo.email}`} className="text-accent hover:text-accent/80">
                      {businessInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Alvin Office & Shop</h3>
                    <p className="text-muted-foreground">
                      2110 S Gordon St<br />Alvin, TX 77511
                    </p>
                    <h3 className="font-bold text-primary mt-3">Friendswood Service Area</h3>
                    <p className="text-muted-foreground">
                      Serving Friendswood, TX 77546
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Business Hours</h3>
                    {businessHours.displayFull.map((line, i) => (
                      <p key={i} className="text-muted-foreground">{line}</p>
                    ))}
                    <p className="text-muted-foreground">Emergency service available</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-bold text-primary mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {locations.map((location) => (
                    <span 
                      key={location.slug}
                      className="bg-white px-4 py-2 rounded-full text-sm border"
                    >
                      {location.name}, {location.state}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden border">
                <iframe
                  src="https://www.google.com/maps?q=2110+S+Gordon+St,+Alvin,+TX+77511&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mabry's Air Conditioning & Heating location in Alvin, TX"
                  data-testid="google-map-embed"
                />
                <div className="bg-white p-4">
                  <p className="font-semibold text-primary">{businessInfo.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {businessInfo.address.street}, {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-accent/10 p-4 rounded-xl">
                  <Shield className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">License</p>
                    <p className="font-bold text-primary">{businessInfo.license}</p>
                  </div>
                </div>
                <a 
                  href="https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805/addressId/92394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-accent/10 p-4 rounded-xl hover:bg-accent/20 transition-colors"
                >
                  <Award className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">BBB Rating</p>
                    <p className="font-bold text-primary">{businessInfo.bbbRating}</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[
              "Flat-rate pricing - no hidden fees",
              "BBB A+ Accredited",
              "Licensed Texas HVAC Contractor",
              "Serving homes since 1986",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
