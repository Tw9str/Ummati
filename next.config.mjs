/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pagedone.io',
      },
    ],
  },
};

export default nextConfig;
