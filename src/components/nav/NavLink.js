import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NavLink(props) {
  const { path, label } = props;

  return (
    <Link
      to={path}
      className="block mt-4 lg:inline-block lg:mt-0 transition duration-200 text-purple-200 hover:text-purple-500 mr-4"
      activeclassname="text-underline"
    >
      {label}
    </Link>
  );
}

NavLink.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

NavLink.defaultProps = {
  path: "",
  label: "",
};

export default NavLink;
