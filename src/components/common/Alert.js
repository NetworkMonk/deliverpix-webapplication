import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function Alert(props) {
  const { children, color, title, icon } = props;

  return (
    <div
      className={
        "bg-" +
        color +
        "-100 border-l-4 border-" +
        color +
        "-500 rounded text-" +
        color +
        "-900 px-4 py-2 shadow-md"
      }
      role="alert"
    >
      <div className="flex">
        <div className={"py-1 text-" + color + "-600"}>
          <FontAwesomeIcon icon={icon} size="2x" fixedWidth className="mr-3" />
        </div>
        <div>
          <p className="font-bold">{title}</p>
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
  children: {},
  color: "teal",
  title: "Alert",
  icon: "info",
};

export default Alert;
