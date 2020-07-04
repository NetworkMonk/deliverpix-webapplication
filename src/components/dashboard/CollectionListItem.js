import React from "react";
import PropTypes from "prop-types";
import LinkButton from "../common/LinkButton";
import Badge from "../common/Badge";

function CollectionListItem(props) {
  const { title, author, path, photos, isNew } = props;

  return (
    <div className="w-full xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-gray-200 rounded overflow-hidden shadow-md p-4 h-full">
        <div className="mb-2">
          {isNew && <Badge color="blue">New</Badge>}
          <span className="font-bold text-xl">{title ? title : "Title"}</span>
        </div>
        <p className="text-gray-700 text-sm font-light">
          {author ? author : "Author"}
        </p>
        <p className="text-xl font-light my-3">
          {photos + " Photo" + (photos === 1 ? "" : "s")}
        </p>
        <LinkButton color="blue" path={path ? path : ""}>
          Open
        </LinkButton>
      </div>
    </div>
  );
}

CollectionListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  path: PropTypes.string,
  photos: PropTypes.number,
  isNew: PropTypes.bool,
};

CollectionListItem.defaultProps = {
  title: "Collection",
  author: "DeliverPix",
  path: "",
  photos: 0,
  isNew: false,
};

export default CollectionListItem;
