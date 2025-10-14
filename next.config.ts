/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wordpress.mainics.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'strapi-core.mainics.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pngimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    qualities: [16, 32, 48, 64, 75, 90, 100],
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },
  ...(process.env.NODE_ENV === 'development' && {
    turbopack: {
      root: process.cwd()
    }
  })
}

module.exports = nextConfig