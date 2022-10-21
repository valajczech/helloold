const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(otf|pdf)$/,
      use: ["file-loader"],
    });

    return config;
  },
};
