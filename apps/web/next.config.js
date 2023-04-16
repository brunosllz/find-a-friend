/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    optimizeCss: true,
  },
  images: {
    domains: ['www.github.com', 'localhost'],
  },
}

module.exports = nextConfig
