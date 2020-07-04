import React from "react";

function SubTitle(props) {
  const { children } = props ? props : {};

  return (
    <h2 className="text-lg font-light m-0">
      {children ? children : "SubTitle"}
    </h2>
  );
}

export default SubTitle;
