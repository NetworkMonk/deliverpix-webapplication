import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

function List(props) {
  const { items } = props;

  return (
    <ul>
      {items.map(function (item, index) {
        return <ListItem key={index}>{item}</ListItem>;
      })}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
};

List.defaultProps = {
  items: [],
};

export default List;
