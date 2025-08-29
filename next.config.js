/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router is now stable in Next.js 14
  experimental: {
    // Remove appDir as it's no longer needed in Next.js 14
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig 