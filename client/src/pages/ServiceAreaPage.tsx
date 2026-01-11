import { useRoute } from "wouter";
import { useService, useLocation as useLocationHook, useBusinessInfo } from "@/hooks/use-hvac";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SeoHead } from "@/components/SeoHead";
import { SchemaOrg } from "@/components/SchemaOrg";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";
import { Star, Check, Phone } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function ServiceAreaPage() {
  const [match, params] = useRoute("/service-area/:serviceSlug/:locationSlug");
  const serviceSlug = params?.serviceSlug || "";
  const locationSlug = params?.locationSlug || "";

  const { data: service, isLoading: sLoading } = useService(serviceSlug);
  const { data: location, isLoading: lLoading } = useLocationHook(locationSlug);
  const { data: info } = useBusinessInfo();

  if (sLoading || lLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-12 h-12 animate-spin text-accent" /></div>;
  }

  if (!service || !location) {
    return <div className="text-center py-20">Page not found</div>;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SeoHead 
        title={`Best ${service.name} in ${location.name}, ${location.state}`}
        description={`Top-rated ${service.name} in ${location.name}. Fast, affordable, and reliable service for ${location.zipCodes[0]} residents. Call now for a free quote!`}
        canonicalUrl={`${window.location.origin}/service-area/${serviceSlug}/${locationSlug}`}
      />
      <SchemaOrg businessInfo={info} service={service} location={location} />
      
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary py-20 relative overflow-hidden">
          {/* Abstract pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-4xl lg:text-6xl font-display font-bold uppercase leading-tight text-shadow">
                {service.name} in <span className="text-accent">{location.name}</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Looking for reliable {service.name.toLowerCase()} services in {location.name}, {location.state}? 
                ApexAir is your trusted local choice for fast, professional HVAC solutions.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider h-14 px-8 text-lg shadow-xl">
                  Get {location.name} Quote
                </Button>
                {info && (
                  <a 
                    href={`tel:${info.phone}`}
                    className="flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold uppercase tracking-wider h-14 px-8 text-lg rounded-md transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {info.phone}
                  </a>
                )}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <QuoteForm className="shadow-2xl" />
            </div>
          </div>
        </section>

        {/* Dynamic SEO Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-bold text-primary mb-4">
                    Why {location.name} Residents Trust ApexAir for {service.name}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Living in {location.name} means dealing with specific climate challenges. 
                    Our team understands the unique needs of homes in the {location.zipCodes[0]} area. 
                    We provide tailored {service.name.toLowerCase()} services that ensure your comfort no matter the season.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 mt-8">
                    {[
                      `Local experts in ${location.name}`,
                      "Fast response times",
                      "Upfront, transparent pricing",
                      "Licensed & insured technicians"
                    ].map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-border">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                          <Check className="w-5 h-5" />
                        </div>
                        <span className="font-medium text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="prose prose-lg prose-headings:font-display prose-headings:text-primary max-w-none">
                   {/* In a real app, you'd mix service.fullContent with location.name dynamically using a string replace or a template engine */}
                   <h3>Premium {service.name} Services</h3>
                   <p>
                     When it comes to {service.name.toLowerCase()}, quality matters. We use the latest diagnostic tools 
                     and high-quality parts to ensure your system runs efficiently. Don't let HVAC issues disrupt your 
                     life in {location.name}.
                   </p>
                   <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
                </div>
              </div>

              {/* Sidebar Content */}
              <div className="space-y-8">
                <div className="lg:hidden">
                  <QuoteForm />
                </div>

                <div className="bg-primary/5 border border-primary/10 p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-primary mb-4">Customer Reviews</h3>
                  <div className="flex gap-1 text-accent mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                  <p className="italic text-muted-foreground mb-4">
                    "The technician arrived on time and fixed our AC unit quickly. Best service in {location.name}!"
                  </p>
                  <p className="font-bold text-primary">- Sarah M., {location.name}</p>
                </div>

                <div className="bg-white border border-border p-6 rounded-2xl">
                   <h3 className="text-lg font-bold text-primary mb-3">Serving {location.name} Neighborhoods</h3>
                   <p className="text-sm text-muted-foreground">
                     We cover all of {location.name}, including zip codes: {location.zipCodes.join(", ")}.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
