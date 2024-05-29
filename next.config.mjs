/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'animated-guanaco-590.convex.cloud',
        },
      ],
    },
  };
  
  export default nextConfig;
