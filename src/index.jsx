/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import smoothScrollPolyfill from "smoothscroll-polyfill";

import App from "./App";
import "_styles/index.scss";

const isProd = process.env.NODE_ENV !== "dev";
//const render = isProd ? ReactDOM.hydrate : ReactDOM.render;
const render = ReactDOM.render;

smoothScrollPolyfill.polyfill();

/* Render the App */
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

/* Register Service Worker */
if (isProd && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
