import { z } from 'zod';
import { services, locations, businessInfo } from './schema';

export const api = {
  services: {
    list: {
      method: 'GET' as const,
      path: '/api/services',
      responses: {
        200: z.array(z.custom<typeof services.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/services/:slug',
      responses: {
        200: z.custom<typeof services.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
  locations: {
    list: {
      method: 'GET' as const,
      path: '/api/locations',
      responses: {
        200: z.array(z.custom<typeof locations.$inferSelect>()),
      },
    },
    get: {
      method: 'GET' as const,
      path: '/api/locations/:slug',
      responses: {
        200: z.custom<typeof locations.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
  businessInfo: {
    get: {
      method: 'GET' as const,
      path: '/api/business-info',
      responses: {
        200: z.custom<typeof businessInfo.$inferSelect>(),
        404: z.object({ message: z.string() }),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
