const path = require("path");

module.exports = {
	configureWebpack: {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
				"@comp": path.resolve(__dirname, "src/components"),

				"@assets": path.resolve(__dirname, "src/assets")
			}
		}
	},
	publicPath: "./",
	css: {
		loaderOptions: {
			sass: {
				prependData: `@import "@/scss/mixins.scss";`
			}
		}
	}
};
