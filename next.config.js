/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  exportPathMap: function () {
    return {
      "/dashboard": { page: "/dashboard/Dashboard" },
      "/quests": { page: "/quests/Quests" },
      "/resources": { page: "/resources/Resources" },
    };
  },
};

module.exports = nextConfig;
