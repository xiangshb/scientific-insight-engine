/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // GitHub Pages需要
  },
  // GitHub Pages 部署配置
  output: 'export', // 必须为export
  trailingSlash: true,
  // 基础路径配置
  basePath: process.env.NODE_ENV === 'production' ? '/scientific-insight-engine' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/scientific-insight-engine' : '',
}

export default nextConfig