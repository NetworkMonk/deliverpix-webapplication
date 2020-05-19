import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Nav() {
  const iconStyle = {
    width: "2rem",
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          style={iconStyle}
          className="mr-3"
        >
          <defs>
            <style>
              {
                ".cls-1{fill:#fff;}.cls-2{mask:url(#mask);}.cls-3{filter:url(#luminosity-invert-noclip);}"
              }
            </style>
            <filter
              id="luminosity-invert-noclip"
              x="9.44"
              y="10.43"
              width="977.77"
              height="986.07"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feColorMatrix
                values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"
                result="invert"
              />
              <feFlood floodColor="#fff" result="bg" />
              <feBlend in="invert" in2="bg" />
            </filter>
            <mask
              id="mask"
              x="9.44"
              y="10.43"
              width="977.77"
              height="986.07"
              maskUnits="userSpaceOnUse"
            >
              <g className="cls-3">
                <path
                  shapeRendering="crisp"
                  className="cls-1"
                  d="M173.87,782.61a7,7,0,0,1-6.7-5.48L47.07,167.44a6.9,6.9,0,0,1,5.35-8L618,48.05a6.85,6.85,0,0,1,8,5.36L746,663.1a6.89,6.89,0,0,1-5.35,8L175.15,782.48A6.25,6.25,0,0,1,173.87,782.61Z"
                />
                <path
                  className="cls-1"
                  d="M595.09,90.78,703.31,640.22,198,739.75,89.8,190.31,595.09,90.78m24.15-80.35a44.23,44.23,0,0,0-8.52.83L45.18,122.66a44.42,44.42,0,0,0-34.9,52L130.37,784.37a44.48,44.48,0,0,0,43.5,35.74,43.65,43.65,0,0,0,8.53-.84l565.53-111.4a44.41,44.41,0,0,0,34.9-52L662.74,46.16a44.47,44.47,0,0,0-43.5-35.73Z"
                />
              </g>
            </mask>
          </defs>
          <title>Artboard 1</title>
          <g className="cls-2">
            <path
              className="cls-1"
              d="M399,284.85l508.92,78.92L822.05,917.15,313.13,838.23,399,284.85M373.33,205.5A44.47,44.47,0,0,0,329.54,243L234.31,857.08a44.43,44.43,0,0,0,37,50.56L840.9,996a43.17,43.17,0,0,0,6.77.53A44.47,44.47,0,0,0,891.46,959l95.23-614.07a44.43,44.43,0,0,0-37-50.56L380.1,206a43.17,43.17,0,0,0-6.77-.53Z"
            />
            <rect
              className="cls-1"
              x="465"
              y="501.65"
              width="216.58"
              height="646"
              transform="translate(-329.48 1264.79) rotate(-81.18)"
            />
          </g>
          <path
            className="cls-1"
            d="M604.56,102.23,722,649.78l-503.56,108L101,210.22l503.55-108M628.1,21.48a44.32,44.32,0,0,0-9.24,1L55.27,143.32a44.43,44.43,0,0,0-34,52.6l130.3,607.6a44.32,44.32,0,0,0,52.6,34L767.73,716.68a44.43,44.43,0,0,0,34-52.6L671.46,56.49a44.47,44.47,0,0,0-43.36-35Z"
          />
          <rect
            className="cls-1"
            x="133.59"
            y="543.9"
            width="646"
            height="216.58"
            transform="translate(-126.6 110.24) rotate(-12.1)"
          />
        </svg>
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
