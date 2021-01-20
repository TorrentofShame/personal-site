const webpack = require("webpack");
const { merge } = require("webpack-merge");

const helpers = require("./helpers");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    filename: "[name].bundle.js",
    publicPath: "",
    path: helpers.root("dist")
  },
  devServer: {
    contentBase: helpers.root("dist"),
    port: 5000,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
});
