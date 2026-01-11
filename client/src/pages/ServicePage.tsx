import { useRoute, Link } from "wouter";
import { useService, useLocations, useBusinessInfo } from "@/hooks/use-hvac";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function ServicePage() {
  const [match, params] = useRoute("/services/:slug");
  const slug = params?.slug || "";
  
  const { data: service, isLoading } = useService(slug);
  const { data: locations } = useLocations();
  const { data: info } = useBusinessInfo();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-12 h-12 animate-spin text-accent" />
      </div>
    );
  }

  if (!service) {
    return <div className="text-center py-20">Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title={service.name}
        description={`Professional ${service.name} services. ${service.description}`}
        canonicalUrl={`${window.location.origin}/services/${slug}`}
      />
      <SchemaOrg businessInfo={info} service={service} />
      
      <Header />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/80 z-10"></div>
          {/* Unsplash: Abstract technical background or blue prints */}
          <img 
            src="https://images.unsplash.com/photo-1504384308090-c54be3855833?auto=format&fit=crop&q=80" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 z-0"
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <h1 className="text-5xl lg:text-6xl font-display font-bold uppercase mb-6 text-shadow">
              {service.name}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <div className="prose prose-lg prose-headings:font-display prose-headings:text-primary prose-a:text-accent max-w-none">
                <div dangerouslySetInnerHTML={{ __html: service.fullContent || service.description }} />
              </div>

              {/* Local SEO Links */}
              <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">Available In Your Area</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {locations?.map((loc) => (
                    <Link 
                      key={loc.id}
                      href={`/service-area/${service.slug}/${loc.slug}`}
                      className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors p-2 rounded-lg hover:bg-white hover:shadow-sm"
                    >
                      <ArrowRight className="w-4 h-4 text-accent" />
                      <span className="font-medium">{service.name} in {loc.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <QuoteForm />
              
              <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold mb-4">Emergency Service?</h3>
                  <p className="mb-6 opacity-90">Our technicians are ready 24/7 to help restore your comfort.</p>
                  {info && (
                    <a 
                      href={`tel:${info.phone}`} 
                      className="inline-flex items-center gap-2 text-2xl font-bold text-accent hover:text-white transition-colors"
                    >
                      <Phone className="w-6 h-6" />
                      {info.phone}
                    </a>
                  )}
                </div>
              </div>

              <div className="bg-white border border-border p-8 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-primary mb-4 uppercase">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    "Licensed & Insured",
                    "Upfront Pricing",
                    "100% Satisfaction Guarantee",
                    "Experienced Technicians",
                    "Locally Owned & Operated"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
