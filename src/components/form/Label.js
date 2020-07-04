import React from "react";
import PropTypes from "prop-types";

function Label(props) {
  const { id, children } = props;
  return (
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
      {children}
    </label>
  );
}

Label.propTypes = {
  id: PropTypes.string,
  children: PropTypes.any,
};

Label.defaultProps = {
  id: "",
  children: {},
};

export default Label;
