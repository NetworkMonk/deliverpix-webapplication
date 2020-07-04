import React from "react";
import PropTypes from "prop-types";

function FadeInLeft(props) {
  const { children, visible, delay } = props;

  return (
    <div
      className={`fade-in-left ${visible ? "is-visible" : ""} ${
        delay > 0 ? "delay-" + delay : ""
      }`}
    >
      {children}
    </div>
  );
}

FadeInLeft.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  delay: PropTypes.number,
};

FadeInLeft.defaultProps = {
  children: [],
  visible: false,
  delay: 0,
};

export default FadeInLeft;
