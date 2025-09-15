/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ensures Next.js exports static HTML
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }, // required for next export
};

export default nextConfig;
