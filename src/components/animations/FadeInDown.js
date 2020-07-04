import React from "react";
import PropTypes from "prop-types";

function FadeInDown(props) {
  const { children, visible, delay } = props;

  return (
    <div
      className={`fade-in-down ${visible ? "is-visible" : ""} ${
        delay > 0 ? "delay-" + delay : ""
      }`}
    >
      {children}
    </div>
  );
}

FadeInDown.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  delay: PropTypes.number,
};

FadeInDown.defaultProps = {
  children: [],
  visible: false,
  delay: 0,
};

export default FadeInDown;
