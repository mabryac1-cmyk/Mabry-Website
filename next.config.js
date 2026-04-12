/** @type {import('next').NextConfig} */
const nextConfig = {
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
      // ── Core page renames ──
      { source: '/work',              destination: '/',                              permanent: true },
      { source: '/home',              destination: '/',                              permanent: true },
      { source: '/cart',              destination: '/',                              permanent: true },
      { source: '/reffers',           destination: '/',                              permanent: true },
      { source: '/offers',            destination: '/promotions',                    permanent: true },
      { source: '/services',          destination: '/services/ac-repair',            permanent: true },
      { source: '/services-1',        destination: '/services/ac-repair',            permanent: true },
      { source: '/services-2',        destination: '/services/ac-repair',            permanent: true },
      { source: '/service-areas',     destination: '/',                              permanent: true },
      { source: '/heating-service-areas', destination: '/services/heating-repair',  permanent: true },
      { source: '/heater-repair',     destination: '/services/heating-repair',       permanent: true },
      { source: '/ac-repair',         destination: '/services/ac-repair',            permanent: true },

      // ── Alvin ──
      { source: '/ac-repair-alvin-tx',        destination: '/services/ac-repair/alvin',       permanent: true },
      { source: '/alvin-tx-ac-repair',        destination: '/services/ac-repair/alvin',       permanent: true },
      { source: '/ac-service-alvin',          destination: '/services/ac-repair/alvin',       permanent: true },
      { source: '/alvin-ac-repair',           destination: '/services/ac-repair/alvin',       permanent: true },
      { source: '/alvin-heating-repair',      destination: '/services/heating-repair/alvin',  permanent: true },

      // ── Friendswood ──
      { source: '/friendswood-ac-repair',       destination: '/services/ac-repair/friendswood',      permanent: true },
      { source: '/friendswood-heating-repair',  destination: '/services/heating-repair/friendswood', permanent: true },
      { source: '/friendswood-hvac-services',   destination: '/areas/friendswood',                   permanent: true },

      // ── Pearland ──
      { source: '/pearland-ac-repair',          destination: '/services/ac-repair/pearland',      permanent: true },
      { source: '/pearland-heating-repair',     destination: '/services/heating-repair/pearland', permanent: true },
      { source: '/pearland-ac-heating-repair',  destination: '/areas/pearland',                   permanent: true },
      { source: '/furnace-repair-pearland-tx',  destination: '/services/heating-repair/pearland', permanent: true },

      // ── League City / Seabrook / Webster / Kemah / Dickinson (Bay Area zone) ──
      { source: '/league-city-ac-repair',    destination: '/services/ac-repair/league-city',      permanent: true },
      { source: '/league-city-heating-repair', destination: '/services/heating-repair/league-city', permanent: true },
      { source: '/seabrook-ac-repair',       destination: '/services/ac-repair/clear-lake',        permanent: true },
      { source: '/seabrook-heating-repair',  destination: '/services/heating-repair/clear-lake',   permanent: true },
      { source: '/webster-ac-repair',        destination: '/services/ac-repair/league-city',        permanent: true },
      { source: '/webster-heating-repair',   destination: '/services/heating-repair/league-city',   permanent: true },
      { source: '/kemah-ac-repair',          destination: '/services/ac-repair/league-city',        permanent: true },
      { source: '/kemah-heating-repair',     destination: '/services/heating-repair/league-city',   permanent: true },
      { source: '/dickinson-ac-repair',      destination: '/services/ac-repair/league-city',        permanent: true },
      { source: '/dickinson-heating-repair', destination: '/services/heating-repair/league-city',   permanent: true },

      // ── Deer Park ──
      { source: '/deer-park-ac-repair',      destination: '/services/ac-repair/deer-park',      permanent: true },
      { source: '/deer-park-heating-repair', destination: '/services/heating-repair/deer-park', permanent: true },

      // ── Sienna / Missouri City ──
      { source: '/sienna-ac-repair',           destination: '/services/ac-repair/sienna',       permanent: true },
      { source: '/sienna-heating-repair',      destination: '/services/heating-repair/sienna',  permanent: true },
      { source: '/missouri-city-ac-repair',    destination: '/services/ac-repair/sienna',       permanent: true },
      { source: '/missouri-city-heating-repair', destination: '/services/heating-repair/sienna', permanent: true },

      // ── Sugar Land ──
      { source: '/sugar-land-ac-repair',      destination: '/services/ac-repair/sugar-land',      permanent: true },
      { source: '/sugar-land-heating-repair', destination: '/services/heating-repair/sugar-land', permanent: true },

      // ── Rosharon / Manvel / Angleton ──
      { source: '/rosharon-heating-repair', destination: '/services/heating-repair/rosharon', permanent: true },
      { source: '/rosharon-ac-repair',      destination: '/services/ac-repair/rosharon',      permanent: true },
      { source: '/manvel-heating-repair',   destination: '/services/heating-repair/manvel',   permanent: true },
      { source: '/manvel-ac-repair',        destination: '/services/ac-repair/manvel',        permanent: true },
      { source: '/angleton-ac-repair',      destination: '/services/ac-repair/angleton',      permanent: true },
      { source: '/angleton-heating-repair', destination: '/services/heating-repair/angleton', permanent: true },

      // ── Clear Lake / Pasadena ──
      { source: '/clear-lake-ac-repair',      destination: '/services/ac-repair/clear-lake',      permanent: true },
      { source: '/clear-lake-heating-repair', destination: '/services/heating-repair/clear-lake', permanent: true },
      { source: '/pasadena-ac-repair',        destination: '/services/ac-repair/pasadena',        permanent: true },
      { source: '/pasadena-heating-repair',   destination: '/services/heating-repair/pasadena',   permanent: true },
    ];
  },
}

export default nextConfig
