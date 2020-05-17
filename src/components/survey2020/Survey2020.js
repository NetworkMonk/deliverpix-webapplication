import React, { useState } from "react";
import PageTitle from "../common/PageTitle";
import Container from "../common/Container";
import TextInput from "../form/TextInput";
import Button from "../form/Button";
import SelectInput from "../form/SelectInput";
import NumberInput from "../form/NumberInput";
import Alert from "../common/Alert";

function Survey2020() {
  const [currentValue, setCurrentValue] = useState("");
  const [contactClosedBeta, setContactClosedBeta] = useState("");
  const [contactFutureUpdates, setContactFutureUpdate] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = () => {
    var formValues = {
      currentValue,
      contactClosedBeta,
      contactFutureUpdates,
      emailAddress,
      firstName,
      lastName,
    };
    console.log(formValues);
  };

  return (
    <div>
      <PageTitle>Deliver Pix Survey</PageTitle>
      <Container>
        <form className="bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
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
              value={currentValue}
              onChange={(e) => setCurrentValue(e.target.value)}
            ></NumberInput>
          </div>
          <div className="mb-4">
            <SelectInput
              id="beta-interest"
              label="Would you be interested in taking part in a closed beta for DeliverPix?"
              options={[{ value: "" }, { value: "Yes" }, { value: "No" }]}
              value={contactClosedBeta}
              onChange={(e) => setContactClosedBeta(e.target.value)}
            ></SelectInput>
          </div>
          <div className="mb-4">
            <SelectInput
              id="deliverpix-contact"
              label="Would you like to be contacted by DeliverPix about future releases and updates?"
              options={[{ value: "" }, { value: "Yes" }, { value: "No" }]}
              value={contactFutureUpdates}
              onChange={(e) => setContactFutureUpdate(e.target.value)}
            ></SelectInput>
          </div>
          {(contactFutureUpdates === "Yes" || contactClosedBeta === "Yes") && (
            <div>
              <div className="mb-4">
                <TextInput
                  id="emailAddress"
                  label="Email Address"
                  placeholder="user@example.com"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                ></TextInput>
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <TextInput
                    id="firstName"
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  ></TextInput>
                </div>
                <div>
                  <TextInput
                    id="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  ></TextInput>
                </div>
              </div>
            </div>
          )}
          <div className="my-6">
            <Alert title="Your Data and Privacy" icon="info" color="blue">
              <p className="text-sm my-1">
                Data entered on this form is only used for research purposes.
              </p>
              <p className="text-sm my-1">
                We will not pass your contact details to any third parties. Your
                details will be held only for the options you've specified
                above.
              </p>
              <p className="text-sm my-1">
                You can request to have your details removed at any time by
                emailing us at{" "}
                <a href="mailto:forgetme@deliverpix.com">
                  forgetme@deliverpix.com
                </a>{" "}
                and you will be removed from our mailing list and will not be
                contacted to be a part of the beta period.
              </p>
            </Alert>
          </div>
          <div className="mb-4">
            <Button id="submit" onClick={submit}>
              Complete Survey
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Survey2020;
