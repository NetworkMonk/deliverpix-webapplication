import React from "react";
import PropTypes from "prop-types";
import List from "../../components/common/List";
import Unsplash from "../../components/logos/Unsplash";

function FeatureList(props) {
  const { title, description, list, image } = props;

  return (
    <div className="my-12 py-12 bg-gray-300">
      <div className="max-w-screen-xl md:py-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex">
          {image.image !== "" && (
            <div>
              <div
                className="min-w-full h-64 md:min-w-auto md:h-auto md:min-h-full md:w-64 relative"
                style={{
                  backgroundImage: 'url("' + image.image + '")',
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                {image.author !== "" && (
                  <p
                    className="absolute right-0 left-0 bottom-0 opacity-60 text-sm text-white text-right p-2"
                    style={{
                      backgroundColor: "rgba( 0, 0, 0, 0.5 )",
                      boxShadow: "0px 0px 0px rgba( 0, 0, 0, 0.5 )",
                    }}
                  >
                    <a
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {image.provider === "unsplash" && <Unsplash />}
                      Photo by {image.author} - {image.provider}
                    </a>
                  </p>
                )}
              </div>
            </div>
          )}
          <div className="md:flex-1 px-4 pt-10 md:pt-0">
            {title !== "" && (
              <h1 className="text-4xl font-hairline mb-4">{title}</h1>
            )}
            {description !== "" && (
              <p className="text-sm my-4 text-gray-800">{description}</p>
            )}
            {list.length > 0 && <List items={list} />}
          </div>
        </div>
      </div>
    </div>
  );
}

FeatureList.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.array,
  image: PropTypes.shape({
    image: PropTypes.string,
    provider: PropTypes.string,
    author: PropTypes.string,
    link: PropTypes.string,
  }),
};

FeatureList.defaultProps = {
  title: "",
  description: "",
  list: [],
  image: {
    image: "",
    provider: "",
    author: "",
    link: "",
  },
};

export default FeatureList;
