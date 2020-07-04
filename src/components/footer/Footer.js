import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterMenu from "./FooterMenu";

function Footer(props) {
  const {} = props;

  return (
    <div className="bg-purple-900 text-white py-3 md:py-6 lg:py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="md:flex flex-1"></div>
        </div>
        <hr className="mx-10 my-4 bg-purple-800 text-black" />
        <div className="md:flex px-3">
          <div>
            <p className="py-4 text-gray-200 text-sm text-center md:text-left">
              &copy; 2020 deliverpix. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right md:flex-1"></div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
