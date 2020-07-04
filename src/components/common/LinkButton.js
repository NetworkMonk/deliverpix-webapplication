import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkButton(props) {
  const { children, color, path } = props;

  const colors = {
    red: { bg: "bg-red-500", hover: "hover:bg-red-600" },
    blue: { bg: "bg-blue-500", hover: "hover:bg-blue-600" },
    green: { bg: "bg-green-500", hover: "hover:bg-green-600" },
    purple: { bg: "bg-purple-500", hover: "hover:bg-purple-600" },
    orange: { bg: "bg-orange-500", hover: "hover:bg-orange-600" },
    teal: { bg: "bg-teal-500", hover: "hover:bg-teal-600" },
    indigo: { bg: "bg-indigo-500", hover: "hover:bg-indigo-600" },
    pink: { bg: "bg-pink-500", hover: "hover:bg-pink-600" },
    gray: { bg: "bg-gray-500", hover: "hover:bg-gray-600" },
  };

  const selectedCol = colors[color] ? colors[color] : colors["blue"];

  return (
    <Link to={path}>
      <button
        className={
          "transition duration-200 ease-in-out " +
          selectedCol.bg +
          " " +
          selectedCol.hover +
          " text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
