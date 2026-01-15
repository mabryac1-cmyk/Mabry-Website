import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { services, locations, getServiceBySlug, getLocationBySlug, businessInfo } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, MapPin, Wrench } from "lucide-react";

export async function generateStaticParams() {
  const params: { slug: string; city: string }[] = [];
  
  for (const service of services) {
    for (const location of locations) {
      params.push({
        slug: service.slug,
        city: location.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; city: string }> }): Promise<Metadata> {
  const { slug, city } = await params;
  const service = getServiceBySlug(slug);
  const location = getLocationBySlug(city);
  
  if (!service || !location) {
    return { title: "Page Not Found" };
  }

  const title = `${service.name} in ${location.name}, ${location.state} | ${businessInfo.name}`;
  const description = `${service.description} Serving ${location.name}, ${location.state}. License ${businessInfo.license}. BBB ${businessInfo.bbbRating} Rated. Call ${businessInfo.phone} for service.`;

  return {
    title,
    description,
    keywords: [
      `${service.name.toLowerCase()} ${location.name} ${location.state}`,
      `HVAC ${location.name}`,
      `air conditioning ${location.name}`,
      ...service.keywords.map(k => `${k} ${location.name}`),
    ],
  };
}

export default async function ServiceCityPage({ params }: { params: Promise<{ slug: string; city: string }> }) {
  const { slug, city } = await params;
  const service = getServiceBySlug(slug);
  const location = getLocationBySlug(city);

  if (!service || !location) {
    notFound();
  }

  const otherLocations = locations.filter(l => l.slug !== location.slug);

  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-white/60">/</span>
            <Link href={`/services/${service.slug}`} className="text-white/80 hover:text-white transition-colors">
              {service.name}
            </Link>
            <span className="text-white/60">/</span>
            <span className="text-white">{location.name}</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {service.name} in {location.name}, {location.state}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {service.description} Trusted by homeowners in {location.name} since {businessInfo.established}.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={`tel:${businessInfo.phone}`}
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {businessInfo.phone}
            </a>
            <div className="flex items-center gap-4 text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                License {businessInfo.license}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                Serving {location.zipCodes.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none mb-8">
                <h2>{service.name} Services for {location.name} Homeowners</h2>
                <p>
                  Looking for reliable {service.name.toLowerCase()} in {location.name}, {location.state}? 
                  {businessInfo.name} has been the trusted choice for residential HVAC services since {businessInfo.established}. 
                  We specialize in keeping {location.name} homes comfortable year-round with honest, flat-rate pricing.
                </p>
              </div>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: service.content }}
              />

              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Why {location.name} Homeowners Choose Us</h3>
                <ul className="space-y-3">
                  {businessInfo.valueProps.map((prop, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{prop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Need {service.name} in {location.name}?</h4>
                <p className="text-muted-foreground mb-4">
                  Call us now or fill out the form. Flat-rate pricing with no hidden charges.
                </p>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {businessInfo.phone}
                </a>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold text-primary mb-4">Also Serving Nearby Areas</h3>
                <div className="flex flex-wrap gap-3">
                  {otherLocations.map((loc) => (
                    <Link 
                      key={loc.slug}
                      href={`/services/${service.slug}/${loc.slug}`}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border hover:border-accent hover:text-accent transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      {service.name} in {loc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm preselectedService={service.slug} preselectedCity={location.name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
