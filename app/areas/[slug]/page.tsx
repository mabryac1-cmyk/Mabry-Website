import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { locations, getLocationBySlug, businessInfo, services } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, Wrench } from "lucide-react";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  
  if (!location) {
    return { title: "Location Not Found" };
  }

  return {
    title: `${location.headline} | ${businessInfo.name}`,
    description: `${location.description} License ${businessInfo.license}. BBB A+ Rated. Call ${location.phone} for service.`,
    alternates: {
      canonical: `/areas/${slug}`,
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{location.headline}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{location.description}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={`tel:${location.phone}`}
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {location.phone}
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Serving {location.zipCodes.join(", ")}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: location.content }}
              />
              
              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Services in {location.name}</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Link 
                      key={service.slug}
                      href={`/services/${service.slug}/${slug}`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border hover:border-accent hover:shadow-md transition-all group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-colors">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {service.name} in {location.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-accent/10 rounded-xl border border-accent/20">
                <h4 className="font-bold text-primary mb-2">Ready to Schedule Service in {location.name}?</h4>
                <p className="text-muted-foreground mb-4">
                  Call us now or fill out the form to request service. We offer flat-rate pricing with no hidden charges.
                </p>
                <a 
                  href={`tel:${location.phone}`}
                  className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call {location.phone}
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm preselectedCity={location.name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
