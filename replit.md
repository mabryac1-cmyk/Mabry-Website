# Mabry's Air Conditioning & Heating Website

## Overview

This is a local business website for Mabry's Air Conditioning & Heating, Inc., a residential HVAC contractor headquartered in Alvin, Texas (2110 S Gordon, Alvin, TX 77511). The site is designed for strong local SEO, emphasizing trust signals (BBB A+ rating, established 1986, Texas license TACLB12058E) and converting visitors into leads through phone calls and service request forms.

The website serves homeowners in Alvin (primary), Friendswood (SAB), Pearland, and Clear Lake, TX with services including AC repair, heating repair & maintenance, and AC installation. Alvin is the main physical location optimized for GBP; Friendswood is a Service Area Business (SAB) location.

## User Preferences

Preferred communication style: Simple, everyday language.

**GitHub Backup**: Remind user to push to GitHub after significant website changes. Repository: `mabryac1-cmyk/Mabry-Website`

## System Architecture

### Frontend Architecture
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom theme colors (primary navy #1e3a5f, accent orange #e97730)
- **UI Components**: Radix UI primitives for accessible, unstyled components
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React

### Routing Structure
- Static pages: Home, About, Contact, Reviews
- Dynamic routes: `/services/[slug]` for service pages
- Dynamic routes: `/areas/[slug]` for location/city pages  
- Nested dynamic routes: `/services/[slug]/[city]` for service+city SEO landing pages

### Data Management
- Business data, services, and locations defined in `lib/data.ts` as static TypeScript objects
- Lead form submissions stored in PostgreSQL via Drizzle ORM
- Schema defined in `lib/schema.ts` using Drizzle with Zod validation

### SEO Strategy
- JSON-LD structured data via `SchemaOrg` component (HVACBusiness schema)
- Dynamic metadata generation for all pages
- City-specific and service-specific landing pages for local search optimization

### Build & Development
- Development: `tsx server/index.ts` spawns Next.js dev server on port 5000
- Production build: Next.js standalone output with custom start script in `dist/index.cjs`
- Database migrations: Drizzle Kit push (`db:push` script)

## External Dependencies

### Database
- **PostgreSQL**: Primary data store for lead submissions
- **Drizzle ORM**: Type-safe database client with schema in `lib/schema.ts`
- Connection via `DATABASE_URL` environment variable

### Third-Party Services
- **Better Business Bureau (BBB)**: Links to BBB profile for trust verification
- **Unsplash**: Remote images for hero backgrounds and visual content

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string