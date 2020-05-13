import React from "react";
import PropTypes from "prop-types";

function Badge(props) {
  const { children, color } = props;

  return (
    <span
      className={
        "inline-block align-top rounded-full bg-" +
        color +
        "-600 uppercase px-2 py-1 text-xs font-bold mr-1 text-" +
        color +
        "-100"
      }
    >
      {children ? children : ""}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
};

Badge.defaultProps = {
  children: {},
  color: "blue",
};

export default Badge;
