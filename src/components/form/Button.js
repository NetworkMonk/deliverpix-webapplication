import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  const { id, disabled, onClick, children, color } = props;

  return (
    <button
      className={
        "transition duration-200 ease-in-out bg-" +
        color +
        "-500 hover:bg-" +
        color +
        "-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      }
      id={id}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.any,
  color: PropTypes.string,
};

Button.defaultProps = {
  id: "text-input",
  disabled: false,
  onClick: () => {},
  children: {},
  color: "blue",
};

export default Button;
