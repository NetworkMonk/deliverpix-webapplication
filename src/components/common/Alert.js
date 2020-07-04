import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Alert(props) {
  const { children, color, title, icon } = props;

  const colors = {
    red: {
      bg: "bg-red-100",
      border: "border-red-600",
      text: "text-red-900",
      icon: "text-red-600",
    },
    blue: {
      bg: "bg-blue-100",
      border: "border-blue-600",
      text: "text-blue-900",
      icon: "text-blue-600",
    },
    green: {
      bg: "bg-green-100",
      border: "border-green-600",
      text: "text-green-900",
      icon: "text-green-600",
    },
    purple: {
      bg: "bg-purple-100",
      border: "border-purple-600",
      text: "text-purple-900",
      icon: "text-purple-600",
    },
    orange: {
      bg: "bg-orange-100",
      border: "border-orange-600",
      text: "text-orange-900",
      icon: "text-orange-600",
    },
    teal: {
      bg: "bg-teal-100",
      border: "border-teal-600",
      text: "text-teal-900",
      icon: "text-teal-600",
    },
    indigo: {
      bg: "bg-indigo-100",
      border: "border-indigo-600",
      text: "text-indigo-900",
      icon: "text-indigo-600",
    },
    pink: {
      bg: "bg-pink-100",
      border: "border-pink-600",
      text: "text-pink-900",
      icon: "text-pink-600",
    },
    gray: {
      bg: "bg-gray-100",
      border: "border-gray-600",
      text: "text-gray-900",
      icon: "text-gray-600",
    },
  };

  const colorSelected = colors[color] ? colors[color] : colors["blue"];

  return (
    <div
      className={
        colorSelected.bg +
        " border-l-4 " +
        colorSelected.border +
        " rounded " +
        colorSelected.text +
        " px-4 py-2 shadow-md"
      }
      role="alert"
    >
      <div className="flex">
        {icon && (
          <div className={"py-1 " + colorSelected.icon}>
            <FontAwesomeIcon
              icon={icon}
              size="2x"
              fixedWidth
              className="mr-3"
            />
          </div>
        )}
        <div>
          {title !== "" && <p className="font-bold">{title}</p>}
          {children}
        </div>
      </div>
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};

Alert.defaultProps = {
  children: undefined,
  color: "teal",
  title: "",
  icon: "",
};

export default Alert;
