import React from "react";
import PropTypes from "prop-types";
import CallToAction01 from "../../components/calltoaction/CallToAction";
import List from "../../components/common/List";
import FeatureList from "../../components/home/FeatureList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home(props) {
  const {} = props;

  return (
    <div>
      <CallToAction01
        title="Deliver your photography projects"
        description={[
          "One product to handle delivering your projects to a client, billing and print orders.",
        ]}
        buttonLabel="Register your interest"
        buttonPath="/interest"
        image="home-background-01.jpg"
        imageCredit={{
          provider: "unsplash",
          author: "Trevor Brown",
          link: "https://unsplash.com/@trevormbrown7",
        }}
        slanted={true}
        primaryColor="purple-700"
        textColor="gray-700"
        backgroundColor="gray-200"
      />
      <div className="py-12 bg-white">
        <div className="max-w-screen-xl md:py-12 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h3 className="mt- text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              A single solution for your photography business
            </h3>
            <p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
              What features are we looking to include in the final product?
            </p>
          </div>

          <div className="mt-10">
            <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
              <li>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <FontAwesomeIcon icon="project-diagram" fixedWidth />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h5 className="text-lg leading-6 font-medium text-gray-900">
                      Project Management
                    </h5>
                    <p className="mt-2 text-base leading-6 text-gray-500">
                      Manage your clients, book jobs in your calendar. Send
                      quotes, invoices and take payments, all built in.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-10 md:mt-0">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                      <FontAwesomeIcon icon="user" fixedWidth />
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
                      <FontAwesomeIcon icon="comment" fixedWidth />
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
                      <FontAwesomeIcon icon="images" fixedWidth />
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
      <FeatureList
        title="Project Management"
        description="Our aim is that you would never need to log into another platform to manage your client projects, with the following features included in all subscription tiers."
        list={[
          "Create quotes and send directly to clients",
          "Client can confirm / decline or query the quote directly from their email",
          "Generate an invoice from a quote once work has been completed",
          "Once payment has been recieved, image collection can be automatically unlocked",
        ]}
        image={{
          image: "/img/andre-furtado-JtV6zyOZSrA-unsplash.jpg",
          provider: "unsplash",
          author: "Andre Furtado",
          link: "https://unsplash.com/@andre_furtado",
        }}
      />
      <FeatureList
        title="Client Access & Social Media"
        description="We want your clients to be able to do everything they want with your images directly from our platform."
        list={[
          "Customers can share a web optimised directly to social media from their phone",
          "Allow customers to order prints and hard copies directly from your shared collection",
          "Clients can leave messages or mark images for your attention",
          "Customers can create share invitations for thier friends and family, and post directly to thier social media platform",
        ]}
        image={{
          image: "/img/john-schnobrich-2FPjlAyMQTA-unsplash.jpg",
          provider: "unsplash",
          author: "John Schnobrich",
          link: "https://unsplash.com/@johnschno",
        }}
      />
    </div>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
