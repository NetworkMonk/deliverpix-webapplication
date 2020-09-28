import React from "react";
import PropTypes from "prop-types";
import Button from "../../form/Button";
import Badge from "../../common/Badge";

function CollectionListItem(props) {
  const { title, author, path, photos, cover, isNew } = props;

  console.log(cover);

  return (
    <div className="w-full xs:w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <div className="bg-gray-200 rounded overflow-hidden shadow-md p-0 h-full">
        {cover !== "" && (
          <div
            className="min-w-full h-32 md:h-64 relative"
            style={{
              backgroundImage: 'url("' + cover + '")',
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div className="p-4">
              {isNew && <Badge color="blue">New</Badge>}
            </div>
          </div>
        )}
        <div className="p-4">
          <div className="mb-2">
            {isNew && cover === "" && <Badge color="blue">New</Badge>}
            <span className="font-bold text-xl">{title ? title : "Title"}</span>
          </div>
          <p className="text-gray-700 text-sm font-light">
            {author ? author : "Author"}
          </p>
          <p className="text-xl font-light my-3">
            {photos + " Photo" + (photos === 1 ? "" : "s")}
          </p>
          <Button color="blue" path={path ? path : ""}>
            Open
          </Button>
        </div>
      </div>
    </div>
  );
}

CollectionListItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  path: PropTypes.string,
  photos: PropTypes.number,
  cover: PropTypes.string,
  isNew: PropTypes.bool,
};

CollectionListItem.defaultProps = {
  title: "Collection",
  author: "DeliverPix",
  path: "",
  photos: 0,
  cover: "",
  isNew: false,
};

export default CollectionListItem;
