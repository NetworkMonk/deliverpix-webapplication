import React from "react";

function ContainerWide(props) {
  const { children } = props ? props : {};

  return (
    <div className="mx-auto py-3 px-2 md:px-4">{children ? children : ""}</div>
  );
}

export default ContainerWide;
