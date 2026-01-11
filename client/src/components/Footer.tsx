import { Link } from "wouter";
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone } from "lucide-react";
import { useBusinessInfo, useServices, useLocations } from "@/hooks/use-hvac";

export function Footer() {
  const { data: info } = useBusinessInfo();
  const { data: services } = useServices();
  const { data: locations } = useLocations();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">ApexAir</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Your trusted local partner for high-performance HVAC solutions. 
                Providing comfort and quality air to homes and businesses since 2010.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              {services?.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-primary-foreground/70 hover:text-white hover:pl-2 transition-all block text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-3">
              {locations?.slice(0, 5).map((loc) => (
                <li key={loc.id}>
                  <Link 
                    href={`/areas/${loc.slug}`}
                    className="text-primary-foreground/70 hover:text-white hover:pl-2 transition-all block text-sm"
                  >
                    {loc.name}, {loc.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-6 uppercase tracking-wider">Contact Info</h4>
            {info && (
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-primary-foreground/70 text-sm">
                    {info.street}<br />
                    {info.city}, {info.state} {info.zip}
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <a href={`tel:${info.phone}`} className="text-primary-foreground/70 text-sm hover:text-white">
                    {info.phone}
                  </a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href={`mailto:${info.email}`} className="text-primary-foreground/70 text-sm hover:text-white">
                    {info.email}
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} ApexAir HVAC Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
