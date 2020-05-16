import React from "react";
import PageTitle from "../common/PageTitle";
import Container from "../common/Container";
import TextInput from "../form/TextInput";
import Button from "../form/Button";
import SelectInput from "../form/SelectInput";
import NumberInput from "../form/NumberInput";

function Survey2020() {
  const submit = () => {
    console.log("Button is clicked");
  };

  const change = () => {
    console.log("CHANGED");
  };

  return (
    <div>
      <PageTitle>Deliver Pix Survey</PageTitle>
      <Container>
        <form
          className="bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          onChange={change}
        >
          <div className="mb-8">
            <p className="mb-3 font-bold text-gray-700">
              Thank you for taking an interest in deliver pix!
            </p>
            <p className="text-sm mb-3 text-gray-700">
              We aim to provide a new and exciting way to deliver your photos to
              your clients and are currently performing some market research so
              that we can tailor the experience to all photographers and content
              providers as best we can.
            </p>
            <p className="text-sm text-gray-700">
              The answers provided on this form will be very helpful, but they
              are all optional, if you wish to leave any empty, that's
              absolutely fine. Before we are ready to launch we will be running
              a closed beta period where you can try our product out for free
              for a limited time. You can register your interested in being
              included in our beta test for selecting the option below.
            </p>
          </div>
          <div className="mb-4">
            <NumberInput
              id="currently-pay"
              label="What are you currently paying per month for your photo delivery solution?"
              placeholder="Enter value"
            ></NumberInput>
          </div>
          <div className="mb-4">
            <SelectInput
              id="beta-interest"
              label="Would you be interested in taking part in a closed beta for DeliverPix?"
              options={[{ value: "" }, { value: "Yes" }, { value: "No" }]}
            ></SelectInput>
          </div>
          <div className="mb-4">
            <SelectInput
              id="deliverpix-contact"
              label="Would you like to be contacted by DeliverPix about future releases and updates?"
              options={[{ value: "" }, { value: "Yes" }, { value: "No" }]}
            ></SelectInput>
          </div>
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <TextInput
                id="firstName"
                label="First Name"
                placeholder="First Name"
              ></TextInput>
            </div>
            <div>
              <TextInput
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
              ></TextInput>
            </div>
          </div>
          <div className="mb-4">
            <TextInput
              id="emailAddress"
              label="Email Address"
              placeholder="user@example.com"
            ></TextInput>
          </div>
          <div className="mb-4">
            <Button id="submit" onClick={submit}>
              Complete Survey
            </Button>
          </div>
          <div
            class="bg-teal-100 border-l-4 border-teal-500 rounded text-teal-900 px-4 py-2 shadow-md"
            role="alert"
          >
            <div class="flex">
              <div class="py-1">
                <svg
                  class="fill-current h-6 w-6 text-teal-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p class="font-bold">Your Data and Privacy</p>
                <p class="text-sm">
                  We will not pass your contact details to any third parties.
                  Your details will be held only for the options you've
                  specified above.
                </p>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Survey2020;
