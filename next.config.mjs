/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tpasc.ca",
      },
    ],
  },
};

export default nextConfig;
