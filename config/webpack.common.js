/* eslint-disable no-var */
const webpack = require("webpack");

/* Plugins */
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");

const helpers = require("./helpers");
const manifest = require("./manifest");

const packageJson = require("../package.json");
const vendorDependencies = Object.keys(packageJson["dependencies"]);

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV !== "dev";

const babelLoader = {
  loader: "babel-loader",
  options: {
    cacheDirectory: true,
    presets: [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  }
};

module.exports = {
  entry: {
    main: helpers.root("src/index.jsx"),
    vendor: vendorDependencies
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          babelLoader
        ]
      },
      {
        test: /\.(svg|png|jpe?g|gif|ico|webp)$/i,
        use: {
          loader: "file-loader",
          options: {
            name: isProd ? "[name]-[contenthash].[ext]" : "[name].[ext]",
            outputPath: "assets"
          }
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      }
    ],
  },
  resolve: {
    extensions: [ ".jsx", ".js" ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      files: ["src"],
      emitError: true,
      emitWarning: true
    }),
    new HtmlWebpackPlugin({
      //title: "Simon Weizman"
      template: helpers.root("public/index.html")
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      ...manifest
    }),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};
