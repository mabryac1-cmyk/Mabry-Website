/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: false,
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
      {
        source: '/work',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/dickinson-heating-repair',
        destination: '/services/heating-repair',
        permanent: true,
      },
      {
        source: '/webster-heating-repair',
        destination: '/services/heating-repair',
        permanent: true,
      },
      {
        source: '/deer-park-heating-repair',
        destination: '/services/heating-repair',
        permanent: true,
      },
      {
        source: '/league-city-ac-repair',
        destination: '/services/ac-repair',
        permanent: true,
      },
      {
        source: '/seabrook-ac-repair',
        destination: '/services/ac-repair',
        permanent: true,
      },
      {
        source: '/sugar-land-ac-repair',
        destination: '/services/ac-repair',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
