import React from "react";
import PropTypes from "prop-types";

function Home(props) {
  const {} = props;

  return (
    <div>
      <div className="relative bg-gray-200 overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-200 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-200 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-purple-700 sm:text-5xl sm:leading-none md:text-6xl">
                  Deliver your photography projects
                </h2>
                <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0">
                  One product to handle delivering your projects to a client,
                  billing and print orders.
                </p>
                <div className="mt-10">
                  <button className="rounded p-4 bg-purple-700 text-white hover:bg-purple-600 transition duration-200">
                    Register Your Interest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/img/home-background-01.jpg"
            alt=""
          />
          <p className="absolute right-0 bottom-0 opacity-60 text-sm text-white p-2">
            <a
              href="https://unsplash.com/@trevormbrown7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="inline-block mr-2"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="20 21 96 96"
              >
                <g fillRule="evenodd">
                  <path
                    fill="#fff"
                    d="M50 21h36v27H50zM20 63h30.087v27.24h36.079V63H116v54H20z"
                  />
                </g>
              </svg>
              Photo by Trevor Brown - Unsplash
            </a>
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl md:py-12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h3 className="mt- text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              A single solution for your photography business
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              What feature are we looking to include in the final product?
            </p>
          </div>

          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Project Management
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Manage you clients and clients, book jobs in your
                      calendar. Send quotes, invoices and take payments, all
                      built in.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Client Access
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Send invites to your projects directly to clients. They
                      can preview contents until unlocked.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Social Intergration
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Share images directly to social media services, with image
                      optimisation performed automatically.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Print Services
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Customers can order prints directly from your collections.
                      You decide your own margin.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
