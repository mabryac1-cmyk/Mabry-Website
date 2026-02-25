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
      { source: '/sienna-heating-repair', destination: '/services/heating-repair/sienna', permanent: true },
      { source: '/service-areas', destination: '/areas/alvin', permanent: true },
      { source: '/missouri-city-heating-repair', destination: '/services/heating-repair/sienna', permanent: true },
      { source: '/ac-service-alvin', destination: '/services/ac-repair/alvin', permanent: true },
      { source: '/furnace-repair-pearland-tx', destination: '/services/heating-repair/pearland', permanent: true },
      { source: '/rosharon-heating-repair', destination: '/services/heating-repair/rosharon', permanent: true },
      { source: '/webster-ac-repair', destination: '/services/ac-repair', permanent: true },
      { source: '/kemah-heating-repair', destination: '/services/heating-repair', permanent: true },
      { source: '/dickinson-heating-repair', destination: '/services/heating-repair', permanent: true },
      { source: '/webster-heating-repair', destination: '/services/heating-repair', permanent: true },
      { source: '/deer-park-heating-repair', destination: '/services/heating-repair/deer-park', permanent: true },
      { source: '/league-city-ac-repair', destination: '/services/ac-repair/league-city', permanent: true },
      { source: '/seabrook-ac-repair', destination: '/services/ac-repair', permanent: true },
      { source: '/work', destination: '/', permanent: true },
      { source: '/offers', destination: '/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/ac-repair', destination: '/services/ac-repair', permanent: true },
      { source: '/friendswood-ac-repair', destination: '/services/ac-repair/friendswood', permanent: true },
      { source: '/alvin-heating-repair', destination: '/services/heating-repair/alvin', permanent: true },
      { source: '/services-2', destination: '/services/ac-repair', permanent: true },
      { source: '/services', destination: '/services/ac-repair', permanent: true },
      { source: '/promotions', destination: '/', permanent: true },
      { source: '/services-1', destination: '/services/ac-repair', permanent: true },
      { source: '/ac-repair-alvin-tx', destination: '/areas/alvin', permanent: true },
      { source: '/alvin-tx-ac-repair', destination: '/areas/alvin', permanent: true },
      { source: '/friendswood-hvac-services', destination: '/areas/friendswood', permanent: true },
      { source: '/pearland-ac-repair', destination: '/areas/pearland', permanent: true },
      { source: '/pearland-ac-heating-repair', destination: '/areas/pearland', permanent: true },
      { source: '/deer-park-ac-repair', destination: '/areas/deer-park', permanent: true },
      { source: '/friendswood-heating-repair', destination: '/services/heating-repair/friendswood', permanent: true },
      { source: '/heater-repair', destination: '/services/heating-repair', permanent: true },
      { source: '/sugar-land-ac-repair', destination: '/services/ac-repair', permanent: true },
      { source: '/manvel-heating-repair', destination: '/services/heating-repair/manvel', permanent: true },
      { source: '/cart', destination: '/', permanent: true },
      { source: '/reffers', destination: '/', permanent: true },
    ];
  },
}

export default nextConfig
