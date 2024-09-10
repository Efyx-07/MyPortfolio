/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'grgtyqlr4sczwkju.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
