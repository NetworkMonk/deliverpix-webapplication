import React from "react";
import PropTypes from "prop-types";

function NavExtLink(props) {
  const { path, label } = props;

  return (
    <a
      href={path}
      className="block mt-4 lg:inline-block lg:mt-0 transition duration-200 text-purple-200 hover:text-purple-500 mr-4"
      activeclassname="text-underline"
    >
      {label}
    </a>
  );
}

NavExtLink.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
};

NavExtLink.defaultProps = {
  path: "",
  label: "",
};

export default NavExtLink;
