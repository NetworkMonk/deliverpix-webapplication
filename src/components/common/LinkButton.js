import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkButton(props) {
  const { children, color, path } = props;

  return (
    <Link to={path}>
      <button
        className={
          "transition duration-200 ease-in-out bg-" +
          color +
          "-500 hover:bg-" +
          color +
          "-600 text-white font-bold py-2 px-4 rounded"
        }
      >
        {children ? children : ""}
      </button>
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  path: PropTypes.string,
};

LinkButton.defaultProps = {
  children: {},
  color: "blue",
  path: "/",
};

export default LinkButton;
