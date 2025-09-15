/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // required for next export
  },
  // no basePath or assetPrefix needed when deploying to root
};

export default nextConfig;
