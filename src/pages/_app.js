import React from "react";
import App from "next/app";
import "../tailwind.css";
import "../components/animations/animations.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import IconLibrary from "../app/icon-library/IconLibrary";
config.autoAddCss = false;

IconLibrary();

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
