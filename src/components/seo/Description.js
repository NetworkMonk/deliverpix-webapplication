import React from "react";
import PropTypes from "prop-types";

function Description(props) {
  const { content } = props;

  return <meta name="description" content={content} />;
}

Description.propTypes = {
  content: PropTypes.string,
};

Description.defaultProps = {
  content:
    "deliverpix is an online photo delivery platform for photography professionals.",
};

export default Description;
