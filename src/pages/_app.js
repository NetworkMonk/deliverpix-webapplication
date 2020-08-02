import React from "react";
import "../tailwind.css";
import "../components/animations/animations.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import IconLibrary from "../app/icon-library/IconLibrary";
import { Provider } from "react-redux";
import { useStore } from "../app/store/Store";
import Session from "../components/sessions/Session";

config.autoAddCss = false;

IconLibrary();

// class MyApp extends App {
//   render() {
//     const store = useStore(pageProps.initialReduxState)

//     const { Component, pageProps } = this.props;
//     return <Component {...pageProps} />;
//   }
// }

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Session>
        <Component {...pageProps} />
      </Session>
    </Provider>
  );
}
