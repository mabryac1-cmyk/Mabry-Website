import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/LeadForm";
import { FAQSection } from "@/components/FAQSection";
import { services, getServiceBySlug, businessInfo, locations } from "@/lib/data";
import { ArrowLeft, Phone, CheckCircle, MapPin } from "lucide-react";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.name} | ${businessInfo.name} | Alvin TX`,
    description: `${service.description} Serving Alvin, Friendswood, Pearland & Clear Lake. License ${businessInfo.license}. Call ${businessInfo.phone}.`,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-white/90 max-w-2xl">{service.description}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a 
              href={`tel:${businessInfo.phone}`}
              className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-6 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {businessInfo.phone}
            </a>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>License {businessInfo.license}</span>
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
                dangerouslySetInnerHTML={{ __html: service.content }}
              />
              
              {service.faqs && service.faqs.length > 0 && (
                <FAQSection faqs={service.faqs} title={`${service.name} FAQs`} schemaId={`faq-schema-${service.slug}`} />
              )}

              <div className="mt-12 bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Service Areas</h3>
                <p className="text-muted-foreground mb-6">
                  We provide {service.name.toLowerCase()} services throughout the greater Houston area:
                </p>
                <div className="flex flex-wrap gap-3">
                  {locations.map((location) => (
                    <Link 
                      key={location.slug}
                      href={`/areas/${location.slug}`}
                      className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border hover:border-accent hover:text-accent transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      {location.name}, {location.state}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <LeadForm preselectedService={service.slug} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
