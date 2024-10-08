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
    ],
  },
};

export default nextConfig;
