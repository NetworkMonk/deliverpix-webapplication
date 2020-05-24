import React from "react";
import PropTypes from "prop-types";

function Error(props) {
  const { children } = props;

  return (
    <div className={"bg-red-100 rounded my-2"} role="alert">
      <div className="py-1 px-2 text-red-900 text-sm font-bold">{children}</div>
    </div>
  );
}

Error.propTypes = {
  children: PropTypes.any,
};

Error.defaultProps = {
  children: undefined,
};

export default Error;
