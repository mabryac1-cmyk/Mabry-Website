"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown, Thermometer } from "lucide-react";
import { businessInfo, services, locations } from "@/lib/data";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:inline">Residential HVAC Experts Since 1986 | License {businessInfo.license}</span>
          <span className="sm:hidden">License {businessInfo.license}</span>
          <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors font-semibold">
            <Phone className="w-4 h-4" />
            <span>{businessInfo.phone}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <Link href="/" className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white hover:scale-105 transition-transform">
              <Thermometer className="w-7 h-7" />
            </Link>
            <div className="flex flex-col">
              <Link href="/" className="font-bold text-lg leading-tight text-primary hover:text-accent transition-colors">
                Mabry's Air Conditioning & Heating, Inc.
              </Link>
              <a 
                href="https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805/addressId/92394"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-accent transition-colors"
              >
                BBB A+ Rated
              </a>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold hover:text-accent transition-colors">
              Home
            </Link>
            
            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors py-2">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border py-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group" onMouseEnter={() => setAreasOpen(true)} onMouseLeave={() => setAreasOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-semibold hover:text-accent transition-colors py-2">
                Service Areas <ChevronDown className="w-4 h-4" />
              </button>
              {areasOpen && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg border py-2">
                  {locations.map((location) => (
                    <Link
                      key={location.slug}
                      href={`/areas/${location.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                    >
                      {location.name}, {location.state}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-sm font-semibold hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/reviews" className="text-sm font-semibold hover:text-accent transition-colors">
              Reviews
            </Link>
            <a 
              href={`mailto:${businessInfo.email}?subject=Quote Request from Website`}
              className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Get a Quote
            </a>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} data-testid="button-mobile-menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <Link href="/" className="block text-lg font-semibold" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <div className="space-y-2">
              <p className="text-sm font-bold text-muted-foreground uppercase">Services</p>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="block pl-4 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold text-muted-foreground uppercase">Service Areas</p>
              {locations.map((location) => (
                <Link
                  key={location.slug}
                  href={`/areas/${location.slug}`}
                  className="block pl-4 py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {location.name}, {location.state}
                </Link>
              ))}
            </div>
            <Link href="/about" className="block text-lg font-semibold" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/reviews" className="block text-lg font-semibold" onClick={() => setIsOpen(false)}>
              Reviews
            </Link>
            <a 
              href={`mailto:${businessInfo.email}?subject=Quote Request from Website`}
              className="block w-full text-center bg-accent text-white font-bold py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
