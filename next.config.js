/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const dns = require("dns");

dns.setDefaultResultOrder("ipv4first")

module.exports = nextConfig
