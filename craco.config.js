const path = require("path");
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin,
      Option: {
        LessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primiary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
};
