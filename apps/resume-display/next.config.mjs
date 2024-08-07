import bundleAnalyzer from '@next/bundle-analyzer';
// import path from 'path';
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true' // 当环境变量ANALYZE为true时开启
});

const nextConfig = {
  // 关闭严格模式
  reactStrictMode: false,
  sassOptions: {
    additionalData: '@import "@/styles/index.scss";'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https', // 图片资源的协议
        hostname: 'bkimg.cdn.bcebos.com' // 图片资源的域名
      }
    ]
  }
  // basePath: process.env.NODE_ENV === 'production' ? '/display' : ''
  // webpack: config => {
  //   config.resolve.alias['@'] = path.resolve(__dirname, 'src');
  //   return config;
  // },
  // pageExtensions: ['js', 'jsx', 'ts', 'tsx']
};

export default withBundleAnalyzer(nextConfig);
