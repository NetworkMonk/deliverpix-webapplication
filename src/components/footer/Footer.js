import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  const {} = props;

  return (
    <div className="bg-purple-900 text-white py-3 md:py-6 lg:py-12">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex">
          <div className="md:flex flex-1">
            <div className="md:flex-1 p-3">
              <h5 className="text-lg font-bold mb-3">Features</h5>
              <p className="my-2">Management</p>
              <p className="my-2">Delivery</p>
              <p className="my-2">Social Intergration</p>
              <p className="my-2">Print Services</p>
            </div>
            <div className="md:flex-1 p-3">
              <h5 className="text-lg mb-3 font-bold">Support</h5>
              <p className="my-2">Pricing</p>
              <p className="my-2">Documentation</p>
              <p className="my-2">Guides</p>
              <p className="my-2">F.A.Q.</p>
              <p className="my-2">Contact Us</p>
            </div>
          </div>
          <div className="md:flex flex-1">
            <div className="md:flex-1 p-3">
              <h5 className="text-lg mb-3 font-bold">Company</h5>
              <p className="my-2">About</p>
              <p className="my-2">Blog</p>
              <p className="my-2">Press</p>
            </div>
            <div className="md:flex-1 p-3">
              <h5 className="text-lg mb-3 font-bold">Legal</h5>
              <p className="my-2">Privacy</p>
              <p className="my-2">Terms</p>
              <p className="my-2">Cookies</p>
            </div>
          </div>
        </div>
        <hr className="mx-10 my-4 bg-purple-800 text-black" />
        <div className="md:flex px-3">
          <div>
            <p className="py-4 text-gray-200 text-sm text-center md:text-left">
              &copy; 2020 deliverpix ltd. All rights reserved.
            </p>
          </div>
          <div className="text-center md:text-right md:flex-1">
            <p className="inline-block p-3 text-white transition duration-200 hover:text-purple-500 cursor-pointer">
              <FontAwesomeIcon
                icon={["fab", "facebook"]}
                fixedWidth
                size="lg"
              />
            </p>
            <p className="inline-block p-3 text-white transition duration-200 hover:text-purple-500 cursor-pointer">
              <FontAwesomeIcon
                icon={["fab", "instagram"]}
                fixedWidth
                size="lg"
              />
            </p>
            <p className="inline-block p-3 text-white transition duration-200 hover:text-purple-500 cursor-pointer">
              <FontAwesomeIcon icon={["fab", "twitter"]} fixedWidth size="lg" />
            </p>
            <p className="inline-block p-3 text-white transition duration-200 hover:text-purple-500 cursor-pointer">
              <FontAwesomeIcon icon={["fab", "github"]} fixedWidth size="lg" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
