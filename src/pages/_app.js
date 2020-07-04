import React from "react";
import IconLibrary from "../app/icon-library/IconLibrary";
import "../tailwind.generated.css";

IconLibrary();

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
