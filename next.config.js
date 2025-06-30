/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { withNetlify } = require('@netlify/next');

module.exports = withNetlify(nextConfig);