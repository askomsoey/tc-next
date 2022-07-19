/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com']
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Important: return the modified config
  //   return config
  // },
}

module.exports = nextConfig
