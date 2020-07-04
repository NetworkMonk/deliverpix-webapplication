import React from "react";
import PropTypes from "prop-types";

function FadeInUp(props) {
  const { children, visible, delay } = props;

  return (
    <div
      className={`fade-in-up ${visible ? "is-visible" : ""} ${
        delay > 0 ? "delay-" + delay : ""
      }`}
    >
      {children}
    </div>
  );
}

FadeInUp.propTypes = {
  children: PropTypes.any,
  visible: PropTypes.bool,
  delay: PropTypes.number,
};

FadeInUp.defaultProps = {
  children: [],
  visible: false,
  delay: 0,
};

export default FadeInUp;
