import { Metadata } from "next";
import { SchemaOrg } from "@/components/SchemaOrg";
import { LeadForm } from "@/components/LeadForm";
import { businessInfo, locations } from "@/lib/data";
import { Phone, Mail, MapPin, Clock, Shield, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact Us | ${businessInfo.name} | Call ${businessInfo.phone}`,
  description: `Contact ${businessInfo.name} for residential AC and heating service. Serving Friendswood, Pearland, Clear Lake & Alvin. License ${businessInfo.license}. BBB A+ Rated.`,
};

export default function ContactPage() {
  return (
    <>
      <SchemaOrg page="contact" />
      
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-6">
            Ready to schedule service? Call us now or fill out the form below.
          </p>
          <a 
            href={`tel:${businessInfo.phone}`}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
          >
            <Phone className="w-6 h-6" />
            {businessInfo.phone}
          </a>
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
                    <h3 className="font-bold text-primary">Phone</h3>
                    <a href={`tel:${businessInfo.phone}`} className="text-accent hover:text-accent/80 text-lg font-semibold">
                      {businessInfo.phone}
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
                    <h3 className="font-bold text-primary">Location</h3>
                    <p className="text-muted-foreground">
                      {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
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
