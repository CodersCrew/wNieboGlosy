/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['drive.google.com', 'img.youtube.com', 'i.ibb.co']
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://wnieboglosy.com/:path*',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
