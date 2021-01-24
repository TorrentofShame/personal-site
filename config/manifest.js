const path = require("path");
const helpers = require("./helpers");

module.exports = {
  short_name: "SW Portfolio",
  name: "Simon Weizman Portfolio",
  start_url: "/",
  display: "standalone",
  theme_color: "#282D32",
  background_color: "#FFFFFF",
  icons: [
    {
      src: helpers.root("public/favicon.ico"),
      sizes: [48],
      type: "image/x-icon",
      destination: path.join("icons")
    },
    {
      src: helpers.root("public/android-chrome-192x192.png"),
      sizes: [192],
      type: "image/png",
      destination: path.join("icons", "android")
    },
    {
      src: helpers.root("public/android-chrome-512x512.png"),
      sizes: [512],
      type: "image/png",
      destination: path.join("icons", "android")
    },
    {
      src: helpers.root("public/maskable_icon192.png"),
      type: "image/png",
      sizes: [192],
      purpose: "any maskable",
      destination: path.join("icons")
    }
  ]
};
