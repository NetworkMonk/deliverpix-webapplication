import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

function SelectInput(props) {
  const { id, label, placeholder, disabled, options, value, onChange } = props;

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
      {label !== "" && <Label id={id}>{label}</Label>}
      <div className="relative">
        <select
          id={id}
          type="text"
          placeholder={placeholder}
          className="transition duration-200 ease-in-out appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          disabled={disabled}
          value={value ? value : ""}
          onChange={onChange ? onChange : ""}
        >
          {optionsOutput}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

SelectInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.any,
};

SelectInput.defaultProps = {
  id: "text-input",
  label: "",
  placeholder: "Enter text",
  disabled: false,
  options: [],
  value: "",
  onChange: {},
};

export default SelectInput;
