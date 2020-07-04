import React from "react";
import PropTypes from "prop-types";

function SocialLink(props) {
  const {} = props;

  return (
    <p className="inline-block p-3 text-white transition duration-200 hover:text-purple-500 cursor-pointer">
      <FontAwesomeIcon icon={["fab", "instagram"]} fixedWidth size="lg" />
    </p>
  );
}

SocialLink.propTypes = {};

SocialLink.defaultProps = {};

export default SocialLink;
