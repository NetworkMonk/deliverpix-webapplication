import React from "react";
import PropTypes from "prop-types";

function SelectInput(props) {
  const { id, label, placeholder, disabled, options } = props;

  const optionsOutput = options.map(function (option) {
    const { label, value } = option ? option : {};

    return (
      <option value={value} key={value}>
        {label ? label : value}
      </option>
    );
  });

  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <select
        id={id}
        type="text"
        placeholder={placeholder}
        className="transition duration-200 ease-in-out appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        disabled={disabled}
      >
        {optionsOutput}
      </select>
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectInput.defaultProps = {
  id: "text-input",
  label: "Text Input",
  placeholder: "Enter text",
  disabled: false,
  options: [],
};

export default SelectInput;
