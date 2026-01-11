import { useQuery } from "@tanstack/react-query";
import { api, buildUrl } from "@shared/routes";
import type { Service, Location, BusinessInfo } from "@shared/schema";

// Services
export function useServices() {
  return useQuery({
    queryKey: [api.services.list.path],
    queryFn: async () => {
      const res = await fetch(api.services.list.path);
      if (!res.ok) throw new Error("Failed to fetch services");
      return api.services.list.responses[200].parse(await res.json());
    },
  });
}

export function useService(slug: string) {
  return useQuery({
    queryKey: [api.services.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.services.get.path, { slug });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch service");
      return api.services.get.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}

// Locations
export function useLocations() {
  return useQuery({
    queryKey: [api.locations.list.path],
    queryFn: async () => {
      const res = await fetch(api.locations.list.path);
      if (!res.ok) throw new Error("Failed to fetch locations");
      return api.locations.list.responses[200].parse(await res.json());
    },
  });
}

export function useLocation(slug: string) {
  return useQuery({
    queryKey: [api.locations.get.path, slug],
    queryFn: async () => {
      const url = buildUrl(api.locations.get.path, { slug });
      const res = await fetch(url);
      if (res.status === 404) return null;
      if (!res.ok) throw new Error("Failed to fetch location");
      return api.locations.get.responses[200].parse(await res.json());
    },
    enabled: !!slug,
  });
}

// Business Info
export function useBusinessInfo() {
  return useQuery({
    queryKey: [api.businessInfo.get.path],
    queryFn: async () => {
      const res = await fetch(api.businessInfo.get.path);
      if (!res.ok) throw new Error("Failed to fetch business info");
      return api.businessInfo.get.responses[200].parse(await res.json());
    },
  });
}
