/* eslint-disable no-var */
const { merge } = require("webpack-merge");
const WorkboxPlugin = require("workbox-webpack-plugin");

/* Plugins */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const helpers = require("./helpers");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/",
    path: helpers.root("dist")
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com/,
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "google-fonts-webfonts"
          }
        }
      ]
    })
  ],
  optimization: {
    minimizer: [
      "...",
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true }
            }
          ]
        }
      })
    ]
  }
});
