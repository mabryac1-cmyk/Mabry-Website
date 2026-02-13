import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { businessInfo, businessHours, services, locations } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">{businessInfo.name}</h3>
            <p className="text-white/80 mb-4">
              Residential HVAC experts serving the greater Houston area since {businessInfo.established}. 
              Honest, flat-rate pricing with no hidden charges.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="font-semibold">License:</span> {businessInfo.license}
              </p>
              <a 
                href="https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805/addressId/92394"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <span className="font-semibold">BBB Rating:</span> {businessInfo.bbbRating}
              </a>
            </div>
            <p className="mt-4 text-xs text-white/50 leading-relaxed">
              Regulated by the Texas Department of Licensing and Regulation, P.O. Box 12157, Austin, Texas 78711, 1-800-803-9202, 512-463-6599,{" "}
              <a href="https://www.tdlr.texas.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/70 transition-colors">www.tdlr.texas.gov</a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/services/${service.slug}`}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link 
                    href={`/areas/${location.slug}`}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {location.name}, {location.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-sm uppercase tracking-wider mb-3 text-white/90">Alvin Office & Shop</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      {businessInfo.address.street}<br />
                      {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
                    </span>
                  </li>
                  <li>
                    <a href="tel:281-331-5248" className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm">
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>281-331-5248</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{businessHours.displayShort}</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-sm uppercase tracking-wider mb-3 text-white/90">Friendswood Service Area</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>Serving Friendswood, TX 77546</span>
                  </li>
                  <li>
                    <a href="tel:281-482-8400" className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm">
                      <Phone className="w-4 h-4 shrink-0" />
                      <span>281-482-8400</span>
                    </a>
                  </li>
                  <li className="flex items-center gap-2 text-white/80 text-sm">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{businessHours.displayShort}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{businessInfo.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/reviews" className="hover:text-white transition-colors">Reviews</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
