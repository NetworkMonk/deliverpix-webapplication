import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

function NumberInput(props) {
  const { id, label, placeholder, disabled, value, onChange } = props;

  return (
    <div>
      <Label id={id}>{label}</Label>
      <input
        id={id}
        type="number"
        placeholder={placeholder}
        className="transition duration-200 ease-in-out appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        disabled={disabled}
        value={value ? value : ""}
        onChange={onChange ? onChange : ""}
      />
    </div>
  );
}

NumberInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.any,
};

NumberInput.defaultProps = {
  id: "text-input",
  label: "Text Input",
  placeholder: "Enter number",
  disabled: false,
  value: "",
  onChange: () => {},
};

export default NumberInput;
