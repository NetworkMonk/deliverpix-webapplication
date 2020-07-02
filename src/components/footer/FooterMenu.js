import React from "react";
import PropTypes from "prop-types";

function FooterMenu(props) {
  const {} = props;

  return (
    <div className="md:flex-1 p-3">
      <h5 className="text-lg font-bold mb-3">Features</h5>
      <p className="my-2">Management</p>
      <p className="my-2">Delivery</p>
      <p className="my-2">Social Intergration</p>
      <p className="my-2">Print Services</p>
    </div>
  );
}

FooterMenu.propTypes = {};

FooterMenu.defaultProps = {};

export default FooterMenu;
