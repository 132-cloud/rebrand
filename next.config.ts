import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nymbus.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      // Legacy routes from Jekyll redirect_from
      { source: "/smartecosystem/smartcore/", destination: "/", permanent: true },
      { source: "/smartecosystem/smartlaunch/", destination: "/", permanent: true },
      { source: "/smartecosystem/smartloans/", destination: "/", permanent: true },
      { source: "/smartecosystem/", destination: "/", permanent: true },
      { source: "/smartservices/", destination: "/", permanent: true },
      { source: "/resources/", destination: "/", permanent: true },
      { source: "/banking-technology-2/", destination: "/", permanent: true },
      { source: "/digital-banking-predictions-for-2019/", destination: "/", permanent: true },
      { source: "/what-millennials-want-in-a-bank/", destination: "/", permanent: true },
      { source: "/products/", destination: "/solutions/", permanent: true },
      { source: "/solutions-and-products/", destination: "/solutions/", permanent: true },
    ];
  },
};

export default nextConfig;
