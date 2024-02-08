/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === 'production') {
  console.warn = function () {};
}

const nextConfig = {};

export default nextConfig;
