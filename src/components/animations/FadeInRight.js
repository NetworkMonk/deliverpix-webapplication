import React from "react";
import PropTypes from "prop-types";

function FadeInRight(props) {
  const { children, visible, delay } = props;

  return (
    <div
      className={`fade-in-right ${visible ? "is-visible" : ""} ${
        delay > 0 ? "delay-" + delay : ""
      }`}
    >
      {children}
    </div>
  );
}

FadeInRight.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  delay: PropTypes.number,
};

FadeInRight.defaultProps = {
  children: [],
  visible: false,
  delay: 0,
};

export default FadeInRight;
