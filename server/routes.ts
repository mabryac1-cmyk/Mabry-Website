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
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    console.log("Seeding services...");
    await storage.createService({
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
    });
    await storage.createService({
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
    });
    await storage.createService({
      name: "Duct Cleaning",
      slug: "duct-cleaning",
      description: "Improve your indoor air quality with thorough duct cleaning.",
      fullContent: `
        <h2>Thorough Duct Cleaning</h2>
        <p>Breathe easier with our comprehensive air duct cleaning services. We remove dust, pollen, and allergens from your HVAC system.</p>
      `
    });
  }

  const existingLocations = await storage.getLocations();
  if (existingLocations.length === 0) {
    console.log("Seeding locations...");
    await storage.createLocation({
      name: "Conroe",
      slug: "conroe-tx",
      state: "TX",
      zipCodes: ["77301", "77302", "77303", "77304", "77384", "77385"],
      latitude: "30.3119",
      longitude: "-95.4560"
    });
    await storage.createLocation({
      name: "The Woodlands",
      slug: "the-woodlands-tx",
      state: "TX",
      zipCodes: ["77380", "77381", "77382", "77389"],
      latitude: "30.1658",
      longitude: "-95.4613"
    });
    await storage.createLocation({
      name: "Spring",
      slug: "spring-tx",
      state: "TX",
      zipCodes: ["77373", "77379", "77388", "77386"],
      latitude: "30.0799",
      longitude: "-95.4172"
    });
  }

  const info = await storage.getBusinessInfo();
  if (!info) {
    console.log("Seeding business info...");
    await storage.createBusinessInfo({
      key: "main",
      name: "Elite HVAC Solutions",
      phone: "(555) 123-4567",
      email: "service@elitehvac.com",
      street: "123 Cool Breeze Ln",
      city: "Conroe",
      state: "TX",
      zip: "77301",
      geoLat: "30.3119",
      geoLng: "-95.4560"
    });
  }
}
