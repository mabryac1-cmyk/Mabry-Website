import { Link } from "wouter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";
import { SeoHead } from "@/components/SeoHead";
import { SchemaOrg } from "@/components/SchemaOrg";
import { useServices, useLocations, useBusinessInfo } from "@/hooks/use-hvac";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, ArrowRight, MapPin, Thermometer } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: services } = useServices();
  const { data: locations } = useLocations();
  const { data: info } = useBusinessInfo();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title="Best HVAC Services" 
        description="Top-rated HVAC repair, installation, and maintenance services. Available 24/7 for emergency AC and heating needs."
        canonicalUrl={window.location.origin}
      />
      <SchemaOrg businessInfo={info} locations={locations} />
      
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary overflow-hidden">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
            {/* Unsplash: Modern HVAC system or clean interior air vent */}
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80" 
              alt="HVAC Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent font-semibold text-sm uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>#1 Rated HVAC Service</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-display uppercase font-bold leading-tight text-shadow">
                Comfort You Can <span className="text-accent">Trust</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-lg leading-relaxed">
                Expert AC repair, heating installation, and air quality solutions. 
                We bring perfect climate control to your home, 24/7.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider h-14 px-8 text-lg shadow-xl shadow-accent/20">
                  Schedule Service
                </Button>
                <Button variant="outline" className="border-2 border-white text-primary bg-white/90 hover:bg-white font-bold uppercase tracking-wider h-14 px-8 text-lg">
                  View Areas
                </Button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="absolute -inset-4 bg-accent/20 rounded-xl transform rotate-3 blur-lg"></div>
              <QuoteForm className="relative" />
            </motion.div>
          </div>
          
          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-background clip-diagonal"></div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-background py-16 -mt-8 relative z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Clock, title: "24/7 Emergency", desc: "Always available when you need us most" },
                { icon: Shield, title: "Licensed & Insured", desc: "Fully certified technicians for peace of mind" },
                { icon: Award, title: "Satisfaction Guarantee", desc: "We don't stop until the job is done right" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-lg border border-border flex items-start gap-4 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <item.icon className="w-6 h-6" />
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

        {/* Services Section */}
        <section className="py-20 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-primary">Our Expert Services</h2>
              <div className="w-24 h-1 bg-accent mx-auto"></div>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive heating and cooling solutions tailored to your home's needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services?.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`} className="group">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-border h-full flex flex-col">
                    <div className="h-48 bg-primary/10 relative overflow-hidden">
                       {/* Placeholder for service image - using color block for now, could be dynamic */}
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                         <Thermometer className="w-16 h-16 text-white/20" />
                       </div>
                    </div>
                    <div className="p-8 flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
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

        {/* Service Areas Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8 relative z-10">Proudly Serving Your Community</h2>
              
              <div className="flex flex-wrap justify-center gap-4 relative z-10">
                {locations?.map((location) => (
                  <Link 
                    key={location.id} 
                    href={`/areas/${location.slug}`}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full hover:bg-white hover:text-primary transition-all font-semibold flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Quote Form (Visible only on small screens) */}
        <section className="lg:hidden py-16 px-4 bg-muted/30">
          <div className="max-w-md mx-auto">
            <QuoteForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
