/** @type {import('next').NextConfig} */

process.env.NEXT_PUBLIC_VAR_FROM_NEXT_CONFIG="Hello for next.config.js!"
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
