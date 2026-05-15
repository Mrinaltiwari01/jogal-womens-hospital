/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.instagram.com',
      },
    ],
    unoptimized: true
  },
  output: 'export'
}

module.exports = nextConfig