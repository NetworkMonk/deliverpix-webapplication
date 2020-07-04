import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

function StandardHead(props) {
  const { title, description } = props;

  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#44337a" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo192.png" />
      <link rel="manifest" href="/manifest.json" />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}

StandardHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

StandardHead.defaultProps = {
  title: "deliverpix",
  description:
    "deliverpix is an online photo delivery platform for photography professionals.",
};

export default StandardHead;
