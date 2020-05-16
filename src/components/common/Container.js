import React from "react";

function Container(props) {
  const { children } = props ? props : {};

  return (
    <div className="container mx-auto py-3 px-2 md:px-4">
      {children ? children : ""}
    </div>
  );
}

export default Container;
