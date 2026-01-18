/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/heater-repair',
        destination: '/services/heating-repair',
        permanent: true,
      },
      {
        source: '/ac-repair',
        destination: '/services/ac-repair',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/offers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/promotions',
        destination: '/',
        permanent: true,
      },
      {
        source: '/friendswood-ac-repair',
        destination: '/services/ac-repair/friendswood',
        permanent: true,
      },
      {
        source: '/alvin-heating-repair',
        destination: '/services/heating-repair/alvin',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services-1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services-2',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
