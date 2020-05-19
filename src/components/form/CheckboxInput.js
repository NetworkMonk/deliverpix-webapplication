import React from "react";
import PropTypes from "prop-types";

function CheckboxInput(props) {
  const { id, label, disabled, checked, onChange } = props;

  return (
    <div>
      <label className="block rounded border p-3 cursor-pointer bg-gray-100">
        <input
          id={id}
          type="checkbox"
          className="mr-2 leading-tight"
          disabled={disabled}
          onChange={onChange ? onChange : ""}
          checked={checked}
        />
        {label && <span className="text-sm">{label}</span>}
      </label>
    </div>
  );
}

CheckboxInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.any,
};

CheckboxInput.defaultProps = {
  id: "checkbox-input",
  label: "",
  disabled: false,
  checked: false,
  onChange: () => {},
};

export default CheckboxInput;
