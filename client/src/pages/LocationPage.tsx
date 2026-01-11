import { useRoute, Link } from "wouter";
import { useLocation as useLocationHook, useServices, useBusinessInfo } from "@/hooks/use-hvac";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuoteForm } from "@/components/QuoteForm";
import { MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function LocationPage() {
  const [match, params] = useRoute("/areas/:slug");
  const slug = params?.slug || "";
  
  const { data: location, isLoading } = useLocationHook(slug);
  const { data: services } = useServices();
  const { data: info } = useBusinessInfo();

  if (isLoading) {
    return <div className="min-h-screen flex justify-center items-center"><Loader2 className="w-12 h-12 animate-spin text-accent" /></div>;
  }

  if (!location) {
    return <div className="text-center py-20">Location not found</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title={`HVAC Services in ${location.name}, ${location.state}`}
        description={`Top-rated AC repair and heating installation in ${location.name}. Fast, reliable, and affordable HVAC solutions for ${location.name} residents.`}
        canonicalUrl={`${window.location.origin}/areas/${slug}`}
      />
      <SchemaOrg businessInfo={info} location={location} />
      
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="font-semibold tracking-wide uppercase text-sm">Serving {location.name}, {location.state}</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-display font-bold uppercase mb-6 text-shadow">
              Heating & Cooling in <span className="text-accent">{location.name}</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Your local experts for reliable, high-efficiency HVAC solutions.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-primary mb-6">
                Local HVAC Experts in {location.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Residents of {location.name} know that the weather can be unpredictable. 
                Whether it's the scorching summer heat or a sudden winter freeze, you need an HVAC system you can rely on. 
                At ApexAir, we are dedicated to keeping homes and businesses in {location.zipCodes.join(", ")} comfortable year-round.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {services?.map((service) => (
                  <Link key={service.id} href={`/service-area/${service.slug}/${location.slug}`} className="group">
                    <div className="bg-white p-6 rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all">
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {service.name} in {location.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Professional {service.name.toLowerCase()} services specifically for {location.name} homes.
                      </p>
                      <div className="flex items-center text-accent text-sm font-bold uppercase tracking-wide">
                        View Local Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="bg-muted/30 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-primary mb-4">Areas We Serve Near {location.name}</h3>
                <p className="text-muted-foreground">
                  We proudly serve zip codes: {location.zipCodes.join(", ")}.
                </p>
              </div>
            </div>

            <div>
              <QuoteForm />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
