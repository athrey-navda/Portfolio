/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/api/*": ["./public/data/gameCount.json"],
    },
  },
};

export default nextConfig;
