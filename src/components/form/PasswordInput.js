import React from "react";
import PropTypes from "prop-types";

function PasswordInput(props) {
  const { id, label, placeholder, disabled } = props;

  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type="password"
        placeholder={placeholder}
        className="transition duration-200 ease-in-out appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        disabled={disabled}
      />
    </div>
  );
}

PasswordInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

PasswordInput.defaultProps = {
  id: "text-input",
  label: "Text Input",
  placeholder: "Enter text",
  disabled: false,
};

export default PasswordInput;
