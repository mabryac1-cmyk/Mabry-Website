import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { businessInfo, services, locations } from "@/lib/data";
import { Shield, Clock, Award, ArrowRight, MapPin, Phone, CheckCircle } from "lucide-react";

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
            <a 
              href="https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805/addressId/92394"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold text-sm uppercase tracking-wider hover:bg-accent/30 transition-colors"
            >
              <Award className="w-4 h-4" />
              <span>BBB A+ Rated Since 1986</span>
            </a>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-shadow">
              Residential AC & Heating Experts Since 1986
            </h1>
            <p className="text-xl text-white/90 max-w-lg leading-relaxed">
              {businessInfo.name} provides honest, flat-rate pricing with no hidden charges. 
              Serving Friendswood, Pearland, Clear Lake & Alvin.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href={`tel:${businessInfo.phone}`}
                className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider py-4 px-8 text-lg rounded-lg shadow-xl shadow-accent/20 flex items-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href={`mailto:${businessInfo.email}?subject=Quote Request from Website`}
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold uppercase tracking-wider py-4 px-8 text-lg rounded-lg transition-colors"
              >
                Get a Quote
              </a>
            </div>
            <div className="pt-4 flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-accent" /> License {businessInfo.license}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-accent" /> Insured
              </span>
            </div>
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
          <div className="bg-primary rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 relative z-10">
              Proudly Serving Your Community
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto relative z-10">
              Based in Friendswood, we provide expert HVAC services to homes throughout the greater Houston area.
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
                  {location.isPrimary && <span className="text-xs">(HQ)</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden py-16 px-4 bg-gray-50">
        <div className="max-w-md mx-auto">
          <LeadForm />
        </div>
      </section>
    </>
  );
}
