import React from "react";

function PageTitle(props) {
  const { children } = props ? props : {};

  return (
    <h1 className="text-3xl font-light">
      {children ? children : "Page Title"}
    </h1>
  );
}

export default PageTitle;
