import { db } from "./db";
import {
  services, locations, businessInfo,
  type Service, type InsertService,
  type Location, type InsertLocation,
  type BusinessInfo, type InsertBusinessInfo
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  // Services
  getServices(): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Locations
  getLocations(): Promise<Location[]>;
  getLocationBySlug(slug: string): Promise<Location | undefined>;
  createLocation(location: InsertLocation): Promise<Location>;

  // Business Info
  getBusinessInfo(): Promise<BusinessInfo | undefined>;
  createBusinessInfo(info: InsertBusinessInfo): Promise<BusinessInfo>;
}

export class DatabaseStorage implements IStorage {
  // Services
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    const [service] = await db.select().from(services).where(eq(services.slug, slug));
    return service;
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(insertService).returning();
    return service;
  }

  // Locations
  async getLocations(): Promise<Location[]> {
    return await db.select().from(locations);
  }

  async getLocationBySlug(slug: string): Promise<Location | undefined> {
    const [location] = await db.select().from(locations).where(eq(locations.slug, slug));
    return location;
  }

  async createLocation(insertLocation: InsertLocation): Promise<Location> {
    const [location] = await db.insert(locations).values(insertLocation).returning();
    return location;
  }

  // Business Info
  async getBusinessInfo(): Promise<BusinessInfo | undefined> {
    // Assuming we use 'main' as the key for the primary business info
    const [info] = await db.select().from(businessInfo).where(eq(businessInfo.key, 'main'));
    return info;
  }

  async createBusinessInfo(insertInfo: InsertBusinessInfo): Promise<BusinessInfo> {
    // Upsert logic for business info if key exists
    const [info] = await db.insert(businessInfo)
      .values(insertInfo)
      .onConflictDoUpdate({
        target: businessInfo.key,
        set: insertInfo
      })
      .returning();
    return info;
  }
}

export const storage = new DatabaseStorage();
