/* eslint-disable no-var */
const webpack = require("webpack");

/* Plugins */
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const WorkboxPlugin = require("workbox-webpack-plugin");

const helpers = require("./helpers");
const manifest = require("./manifest");

const packageJson = require("../package.json");
const vendorDependencies = Object.keys(packageJson["dependencies"]);

const NODE_ENV = process.env.NODE_ENV;

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
        test: /\.(jpe?g|png|ico|webp)$/i,
        type: "asset/resource",
        generator: {
          filename: "[name].[hash][ext][query]",
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ],
  },
  resolve: {
    extensions: [ ".jsx", ".js", ".scss" ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx"],
      files: ["src"],
      emitError: true,
      emitWarning: true
    }),
    new HtmlWebpackPlugin({
      favicon: helpers.root("public/favicon.png"),
      template: helpers.root("public/index.html")
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      inject: true,
      ios: true,
      ...manifest
    })
  ]
};
