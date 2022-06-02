/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com', 'media-exp1.licdn.com', 'bit.ly', 'i.scdn.co'],
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

module.exports = nextConfig
