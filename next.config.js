/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Statik dışa aktarmayı etkinleştirir
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: false, // Sunucu eylemlerini devre dışı bırakın
  },
};

module.exports = nextConfig;
