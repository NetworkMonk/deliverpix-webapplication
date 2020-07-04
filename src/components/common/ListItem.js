import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ListItem(props) {
  const { children } = props;

  return (
    <li className="p-3 text-gray-700">
      <FontAwesomeIcon icon="circle" fixedWidth className="mr-3" />
      {children}
    </li>
  );
}

ListItem.propTypes = {
  children: PropTypes.any,
};

ListItem.defaultProps = {
  children: "",
};

export default ListItem;
