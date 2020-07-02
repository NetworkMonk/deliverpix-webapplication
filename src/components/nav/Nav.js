import React from "react";
import Logo from "../common/Logo";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-900 text-white p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <Logo size="1.9" />
        </Link>
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            deliverpix
          </span>
        </Link>
      </div>
      <div className="block lg:hidden"></div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow"></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Nav;
