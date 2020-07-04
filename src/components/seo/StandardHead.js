import React from "react";
import Head from "next/head";
import Title from "./Title";
import Description from "./Description";

function StandardHead() {
  return (
    <Head>
      <Title />
      <Description />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#44337a" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}

export default StandardHead;
