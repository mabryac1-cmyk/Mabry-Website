import { pgTable, text, serial, integer, jsonb, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(), // e.g., 'ac-repair'
  description: text("description").notNull(),
  fullContent: text("full_content").notNull(), // Long form content for the page
});

export const locations = pgTable("locations", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(), // e.g., 'Conroe'
  slug: text("slug").notNull().unique(), // e.g., 'conroe-tx'
  state: text("state").notNull().default('TX'),
  zipCodes: text("zip_codes").array().notNull(), // For Schema areaServed
  latitude: text("latitude"),
  longitude: text("longitude"),
});

export const businessInfo = pgTable("business_info", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(), // e.g., 'main'
  name: text("name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  street: text("street").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zip: text("zip").notNull(),
  geoLat: text("geo_lat"),
  geoLng: text("geo_lng"),
});

// Zod Schemas
export const insertServiceSchema = createInsertSchema(services);
export const insertLocationSchema = createInsertSchema(locations);
export const insertBusinessInfoSchema = createInsertSchema(businessInfo);

export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Location = typeof locations.$inferSelect;
export type InsertLocation = z.infer<typeof insertLocationSchema>;
export type BusinessInfo = typeof businessInfo.$inferSelect;
export type InsertBusinessInfo = z.infer<typeof insertBusinessInfoSchema>;
