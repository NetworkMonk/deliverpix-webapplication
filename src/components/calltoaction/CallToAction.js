import React from "react";
import PropTypes from "prop-types";
import Unsplash from "../../components/logos/Unsplash";

function CallToAction01(props) {
  const {
    buttonLabel,
    buttonPath,
    title,
    description,
    image,
    imageCredit,
    slanted,
    primaryColor,
    textColor,
    backgroundColor,
    buttonColor,
    slantedColor,
  } = props;

  return (
    <div className={"relative " + backgroundColor + " overflow-hidden"}>
      <div className="max-w-screen-xl mx-auto">
        <div
          className={
            "relative z-10 pb-8 " +
            backgroundColor +
            " sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
          }
        >
          {slanted && (
            <svg
              className={
                "hidden lg:block absolute right-0 inset-y-0 h-full w-48 " +
                slantedColor +
                " transform translate-x-1/2"
              }
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          )}

          <div className="relative pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="sm:text-center lg:text-left">
              {title && (
                <h2
                  className={
                    "text-4xl tracking-tight leading-10 font-extrabold " +
                    primaryColor +
                    " sm:text-5xl sm:leading-none md:text-6xl"
                  }
                >
                  {title}
                </h2>
              )}

              {description.length > 0 &&
                description.map(function (desc, index) {
                  return (
                    <p
                      className={
                        "mt-3 text-base " +
                        textColor +
                        " sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0"
                      }
                      key={index}
                    >
                      {desc}
                    </p>
                  );
                })}

              {buttonPath !== "" && (
                <div className="mt-10">
                  <a href={buttonPath}>
                    <button
                      className={
                        "rounded-lg p-4 " +
                        buttonColor +
                        " text-white transition duration-200 border-solid border-4 border-gray-200 hover:border-purple-400 focus:outline-none"
                      }
                    >
                      {buttonLabel || "CLICK HERE"}
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={"/img/" + image}
          alt=""
        />
        {imageCredit.provider !== "" && (
          <p className="absolute right-0 bottom-0 opacity-60 text-sm text-white p-2">
            <a
              href={imageCredit.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {imageCredit.provider === "unsplash" && <Unsplash />}
              Photo by {imageCredit.author} - {imageCredit.provider}
            </a>
          </p>
        )}
      </div>
    </div>
  );
}

CallToAction01.propTypes = {
  buttonLabel: PropTypes.string,
  buttonPath: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.array,
  image: PropTypes.string,
  imageCredit: PropTypes.object,
  slanted: PropTypes.bool,
  primaryColor: PropTypes.string,
  textColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  buttonColor: PropTypes.string,
  slantedColor: PropTypes.string,
};

CallToAction01.defaultProps = {
  buttonLabel: "",
  buttonPath: "",
  title: "",
  description: [],
  image: "",
  imageCredit: {},
  slanted: true,
  primaryColor: "text-purple-700",
  textColor: "text-gray-700",
  backgroundColor: "bg-gray-200",
  buttonColor: "bg-purple-700",
  slantedColor: "text-gray-200",
};

export default CallToAction01;
