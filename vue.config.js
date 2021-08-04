const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@comp": path.resolve(__dirname, "src/components"),
        "@assets": path.resolve(__dirname, "src/assets"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/mixins.scss";`,
      },
    },
  },
};
