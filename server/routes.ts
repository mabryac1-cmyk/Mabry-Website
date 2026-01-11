import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Services API
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.services.get.path, async (req, res) => {
    const service = await storage.getServiceBySlug(req.params.slug);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  // Locations API
  app.get(api.locations.list.path, async (req, res) => {
    const locations = await storage.getLocations();
    res.json(locations);
  });

  app.get(api.locations.get.path, async (req, res) => {
    const location = await storage.getLocationBySlug(req.params.slug);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json(location);
  });

  // Business Info API
  app.get(api.businessInfo.get.path, async (req, res) => {
    const info = await storage.getBusinessInfo();
    if (!info) {
      return res.status(404).json({ message: "Business info not found" });
    }
    res.json(info);
  });

  // Seed Data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const services = [
    {
      name: "AC Repair",
      slug: "ac-repair",
      description: "Fast and reliable air conditioning repair services.",
      fullContent: `
        <h2>Expert AC Repair Services</h2>
        <p>When your air conditioner breaks down, you need fast, reliable service. Our team of certified technicians is here to help you get your cool back.</p>
        <ul>
          <li>24/7 Emergency Service</li>
          <li>Licensed and Insured Technicians</li>
          <li>Upfront Pricing</li>
        </ul>
        <p>We service all major brands and models.</p>
      `
    },
    {
      name: "Furnace Installation",
      slug: "furnace-installation",
      description: "Professional furnace installation and replacement.",
      fullContent: `
        <h2>Professional Furnace Installation</h2>
        <p>Upgrade your home's heating system with a high-efficiency furnace. We provide expert installation services to ensure your home stays warm all winter long.</p>
        <ul>
          <li>Energy Efficient Models</li>
          <li>Professional Sizing and Installation</li>
          <li>Warranty Protection</li>
        </ul>
      `
    },
    {
      name: "Duct Cleaning",
      slug: "duct-cleaning",
      description: "Improve your indoor air quality with thorough duct cleaning.",
      fullContent: `
        <h2>Thorough Duct Cleaning</h2>
        <p>Breathe easier with our comprehensive air duct cleaning services. We remove dust, pollen, and allergens from your HVAC system.</p>
      `
    }
  ];

  for (const service of services) {
    const existing = await storage.getServiceBySlug(service.slug);
    if (!existing) {
      await storage.createService(service);
    }
  }

  const locations = [
    {
      name: "Friendswood",
      slug: "friendswood-tx",
      state: "TX",
      zipCodes: ["77546"],
      latitude: "29.5294",
      longitude: "-95.2010"
    },
    {
      name: "Pearland",
      slug: "pearland-tx",
      state: "TX",
      zipCodes: ["77581", "77584", "77588"],
      latitude: "29.5636",
      longitude: "-95.2860"
    },
    {
      name: "Alvin",
      slug: "alvin-tx",
      state: "TX",
      zipCodes: ["77511", "77512"],
      latitude: "29.4238",
      longitude: "-95.2449"
    },
    {
      name: "Clear Lake",
      slug: "clear-lake-tx",
      state: "TX",
      zipCodes: ["77058", "77059", "77062"],
      latitude: "29.5647",
      longitude: "-95.1189"
    }
  ];

  for (const loc of locations) {
    const existing = await storage.getLocationBySlug(loc.slug);
    if (!existing) {
      await storage.createLocation(loc);
    }
  }

  // Always update business info to the latest requested
  const infoData = {
    key: "main",
    name: "Elite HVAC Solutions",
    phone: "(555) 123-4567",
    email: "service@elitehvac.com",
    street: "123 Main St",
    city: "Friendswood",
    state: "TX",
    zip: "77546",
    geoLat: "29.5294",
    geoLng: "-95.2010"
  };

  await storage.createBusinessInfo(infoData);
}
