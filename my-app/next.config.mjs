/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/OmarsPortfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/OmarsPortfolio/' : '',
    trailingSlash: true,
  };
  
  export default nextConfig;
  