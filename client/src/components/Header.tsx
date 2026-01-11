import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Thermometer } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useBusinessInfo } from "@/hooks/use-hvac";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { data: info } = useBusinessInfo();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services/ac-repair", label: "AC Repair" },
    { href: "/services/heating-installation", label: "Heating" },
    { href: "/areas/conroe-tx", label: "Service Areas" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-primary/10">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm font-medium">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Available 24/7 for Emergency Service</span>
          {info && (
            <a href={`tel:${info.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span>{info.phone}</span>
            </a>
          )}
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <Thermometer className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl leading-none text-primary uppercase tracking-wide">
                Apex<span className="text-accent">Air</span>
              </span>
              <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                HVAC Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors hover:text-accent ${
                  location === link.href ? "text-accent" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider shadow-lg shadow-accent/20">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="block text-lg font-bold uppercase text-foreground/80 hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="w-full bg-accent hover:bg-accent/90 text-white font-bold uppercase">
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
