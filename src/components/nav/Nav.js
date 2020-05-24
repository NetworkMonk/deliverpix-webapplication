import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../common/Logo";

function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Logo size="1.9" />
        <span className="font-semibold text-xl tracking-tight">
          deliver pix
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-md lg:flex-grow">
          <Link
            to={`/`}
            className="block mt-4 lg:inline-block lg:mt-0 transition duration-200 text-purple-300 hover:text-white mr-4"
            activeclassname="text-underline"
          >
            Home
          </Link>
          <Link
            to={`/`}
            className="block mt-4 lg:inline-block lg:mt-0 transition duration-200 text-purple-300 hover:text-white mr-4"
            activeclassname="text-underline"
          >
            Dashboard
          </Link>
          <Link
            to={`/blog/`}
            className="block mt-4 lg:inline-block lg:mt-0 transition duration-200 text-purple-300 hover:text-white mr-4"
            activeclassname="text-underline"
          >
            Blog
          </Link>
        </div>
        <div>
          <Link
            to={`/signin/`}
            className="transition duration-200 text-purple-300 hover:text-white"
          >
            <FontAwesomeIcon icon="coffee" fixedWidth className="mr-3" />
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
