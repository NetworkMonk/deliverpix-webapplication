import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  const { content } = props;

  return <title>{content}</title>;
}

Title.propTypes = {
  content: PropTypes.string,
};

Title.defaultProps = {
  content: "deliverpix",
};

export default Title;
