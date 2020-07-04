import React from "react";
import PropTypes from "prop-types";

function Badge(props) {
  const { children, color } = props;

  const colors = {
    red: { bg: "bg-red-600", text: "text-red-100" },
    blue: { bg: "bg-blue-600", text: "text-blue-100" },
    green: { bg: "bg-green-600", text: "text-green-100" },
    purple: { bg: "bg-purple-600", text: "text-purple-100" },
    orange: { bg: "bg-orange-600", text: "text-orange-100" },
    teal: { bg: "bg-teal-600", text: "text-teal-100" },
    indigo: { bg: "bg-indigo-600", text: "text-indigo-100" },
    pink: { bg: "bg-pink-600", text: "text-pink-100" },
    gray: { bg: "bg-gray-600", text: "text-gray-100" },
  };

  const selectedCol = colors[color] ? colors[color] : colors["blue"];

  return (
    <span
      className={
        "inline-block align-top rounded-full " +
        selectedCol.bg +
        " uppercase px-2 py-1 text-xs font-bold mr-1 " +
        selectedCol.text
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
