import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext({});

export const Provider = (props) => {
  const { username: defaultUsername, children } = props;

  const [session, setSession] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [username, setUsername] = useState(defaultUsername);

  const userContext = {
    session,
    setSession,
    csrfToken,
    setCsrfToken,
    username,
    setUsername,
  };

  return <Context.Provider value={userContext}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

Provider.propTypes = {
  username: PropTypes.string,
  children: PropTypes.any,
};
