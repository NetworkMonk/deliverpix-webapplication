import React, { useEffect, useMountEffect } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CorsRequest as Request } from "../../app/api/API";

function Session(props) {
  const { children } = props;

  const dispatch = useDispatch();
  let refreshInterval = false;

  const refreshToken = () => {
    // Check if we have a refresh token and authenticate
    const currentTime = Math.round(new Date().getTime() / 1000);
    const refreshEarly = 1000 * 30;

    Request({
      path: process.env.NEXT_PUBLIC_AUTH_SERVICE + "auth/refresh",
      method: "post",
      success: function (code, result) {
        if (code !== 200) {
          dispatch({
            type: "USERAUTH",
            payload: {},
          });
          return;
        }

        // Refresh token before it expires
        if (refreshInterval !== false) {
          clearInterval(refreshInterval);
          refreshInterval = false;
        }
        if (result.expires) {
          refreshInterval = setInterval(() => {
            refreshToken();
          }, (result.expires - currentTime) * 1000 - refreshEarly);
        }

        dispatch({
          type: "USERAUTH",
          payload: {
            accessToken: result.accessToken,
            tokenType: result.tokenType,
            username: result.username,
            firstName: result.firstName,
            lastName: result.lastName,
            expires: result.expires,
          },
        });
      },
      error: function () {},
    });
  };

  useEffect(() => {
    // Check if we have a refresh token and authenticate
    refreshToken();
  }, []);

  return <div>{children}</div>;
}

Session.propTypes = {
  children: PropTypes.any,
};

Session.defaultProps = {
  children: [],
};

export default Session;
