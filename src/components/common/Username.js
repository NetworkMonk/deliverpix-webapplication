import React, { useContext } from "react";
import { AppContext } from "../../context";

function Username() {
  const context = useContext(AppContext);
  const noUsername = "Not logged in";

  return (
    <span>
      {context.username}
      {!context.username && noUsername}
    </span>
  );
}

export default Username;
