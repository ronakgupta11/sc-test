/** @type {import('next').NextConfig} */
const nextConfig = {
  env : {
    NEXT_PUBLIC_WC_PROJECT_ID:"3d4df573423308d09acc9c00bff0cc58",
    SSUER_PRIVATE_KEY: "0x692e8c5ed07c77c4551c3f9bcd7bb9c3ae5a82520797e6ec30edfdc26446fb15",
DEK_PRIVATE_KEY:"0x673912ae55330c1167cd99ced0ff42c55b15da41b658c4ea835d7d89cd32cad3"
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
    };
    return config;
  },
};

module.exports = nextConfig;
