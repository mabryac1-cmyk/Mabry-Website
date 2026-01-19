"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { businessInfo, services, locations } from "@/lib/data";
import logoImage from "@/attached_assets/mabrys-ac-heating-alvin-tx-logo_1768859481677.png";
import bbbBadge from "@/attached_assets/BBB_copy_1768861233663.png";
import googleBadge from "@/attached_assets/Google_1768861239793.png";

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
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image 
                src={logoImage} 
                alt="Mabry's Air Conditioning & Heating, Inc." 
                width={400}
                height={120}
                className="h-[96px] w-auto"
                priority
              />
            </Link>
            <div className="hidden sm:flex items-center gap-4">
              <a 
                href="https://www.bbb.org/us/tx/friendswood/profile/air-conditioning-contractor/mabrys-air-conditioning-heating-inc-0915-50000805"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="BBB Accredited Business - A+ Rating"
              >
                <Image 
                  src={bbbBadge} 
                  alt="BBB Accredited Business - A+ Rating" 
                  width={140}
                  height={54}
                  className="h-[44px] w-auto"
                />
              </a>
              <a 
                href="https://www.google.com/maps/place/Mabry's+Air+Conditioning+%26+Heating"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                title="Google 5-Star Reviews"
              >
                <Image 
                  src={googleBadge} 
                  alt="Google 5-Star Reviews" 
                  width={100}
                  height={50}
                  className="h-[40px] w-auto"
                />
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
            <Link 
              href="/contact"
              className="bg-accent hover:bg-accent/90 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
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
            <Link 
              href="/contact"
              className="block w-full text-center bg-accent text-white font-bold py-3 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
