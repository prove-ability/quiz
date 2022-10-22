/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://prove-ability.github.io/quiz"
      : "",
  env: {
    pathPrefix: "https://prove-ability.github.io/quiz",
  },
  // exportPathMap: async function () {
  //   return {
  //     "/": { page: "/" },
  //     "quizs/default": { page: "/quizs/[type]", query: { type: "default" } },
  //   };
  // },
};

module.exports = nextConfig;
