/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "portfolio-rho-swart.vercel.app",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "img.godotassetlibrary.com",
      },
      {
        protocol: "https",
        hostname: "rapidcloudify.com",
      },
      {
        protocol: "https",
        hostname: "www.python.org",
      },
      {
        protocol: "https",
        hostname: "www.oracle.com",
      },
      {
        protocol: "https",
        hostname: "angular.io",
      },
    ],
  },
};

export default nextConfig;
