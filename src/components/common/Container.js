import React from "react";

function Container(props) {
  const { children } = props ? props : {};

  return (
    <div className="max-w-6xl mx-auto py-3">{children ? children : ""}</div>
  );
}

export default Container;
