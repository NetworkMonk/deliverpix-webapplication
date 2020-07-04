import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

function AnimationTrigger(props) {
  const { children, visibleFunc } = props;
  const domRef = useRef();

  const [isTriggered, setIsTriggered] = useState(false);

  const visibleState = (visible) => {
    if (isTriggered || !visible) {
      return;
    }
    setIsTriggered(true);
    visibleFunc(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visibleState(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return <div ref={domRef}>{children}</div>;
}

AnimationTrigger.propTypes = {
  children: PropTypes.any,
  visibleFunc: PropTypes.func,
};

AnimationTrigger.defaultProps = {
  children: [],
  visibleFunc: () => {},
};

export default AnimationTrigger;
