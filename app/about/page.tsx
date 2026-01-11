import { Metadata } from "next";
import Link from "next/link";
import { SchemaOrg } from "@/components/SchemaOrg";
import { businessInfo, locations } from "@/lib/data";
import { Shield, Award, Clock, Users, CheckCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${businessInfo.name} | Friendswood TX HVAC Since 1986`,
  description: `Learn about ${businessInfo.name} - a family-owned residential HVAC company serving Friendswood, Pearland, Clear Lake & Alvin since 1986. License ${businessInfo.license}. BBB A+ Rated.`,
};

export default function AboutPage() {
  return (
    <>
      <SchemaOrg page="about" />
      
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">About {businessInfo.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Family-owned and operated since 1986. Your trusted residential HVAC experts.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <div className="prose prose-lg">
                <p>
                  Since 1986, {businessInfo.name} has been providing honest, reliable HVAC services to homeowners in Friendswood and the surrounding communities. What started as a small family business has grown into one of the most trusted names in residential air conditioning and heating.
                </p>
                <p>
                  For nearly four decades, we've built our reputation on doing things the right way: honest assessments, quality workmanship, and fair, flat-rate pricing with no hidden charges. We don't believe in surprise fees or upselling services you don't need.
                </p>
                <p>
                  As a residential-only company, we focus exclusively on homes - not commercial buildings. This specialization means our technicians are experts in the systems that keep your family comfortable, and we understand the unique needs of homeowners.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Our Credentials</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">BBB A+ Accredited</h4>
                    <p className="text-muted-foreground">Maintaining the highest rating from the Better Business Bureau through years of quality service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Licensed & Insured</h4>
                    <p className="text-muted-foreground">Texas HVAC License {businessInfo.license}. Fully insured for your protection.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Established 1986</h4>
                    <p className="text-muted-foreground">Nearly 40 years of experience serving local homeowners.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Residential Specialists</h4>
                    <p className="text-muted-foreground">We focus exclusively on homes - not commercial buildings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Commitment to You</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Honest Pricing", desc: "Flat-rate pricing with no hidden or surprise charges" },
              { title: "Quality Work", desc: "We do the job right the first time, every time" },
              { title: "Prompt Service", desc: "We respect your time and show up when promised" },
              { title: "Expert Advice", desc: "We give you honest recommendations, not sales pitches" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Mabry's Difference?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join the thousands of homeowners who trust us for their residential HVAC needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={`tel:${businessInfo.phone}`}
                className="bg-accent hover:bg-accent/90 text-white font-bold py-4 px-8 rounded-lg flex items-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call {businessInfo.phone}
              </a>
              <Link 
                href="/contact"
                className="bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
