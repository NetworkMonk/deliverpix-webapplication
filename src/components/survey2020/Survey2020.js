import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PageTitle from "../common/PageTitle";
import Container from "../common/Container";
import TextInput from "../form/TextInput";
import Button from "../form/Button";
import SelectInput from "../form/SelectInput";
import NumberInput from "../form/NumberInput";
import Alert from "../common/Alert";
import SubTitle from "../common/SubTitle";
import CheckboxInput from "../form/CheckboxInput";

const recaptchaRef = React.createRef();

function Survey2020() {
  const [formValues, setFormValues] = useState({});

  const featureOptions = [
    { value: "", label: "" },
    { value: 10, label: "10 (extremely important)" },
    { value: 9, label: "9" },
    { value: 8, label: "8" },
    { value: 7, label: "7" },
    { value: 6, label: "6" },
    { value: 5, label: "5 (somewhat important)" },
    { value: 4, label: "4" },
    { value: 3, label: "3" },
    { value: 2, label: "2" },
    { value: 1, label: "1" },
    { value: 0, label: "0 (not important at all)" },
  ];

  const submit = () => {
    recaptchaRef.current.execute().then(function (token) {
      if (!token) {
        return;
      }
      console.log(token);
    });
    console.log(formValues);
  };

  return (
    <div>
      <PageTitle>Deliver Pix Survey</PageTitle>
      <Container>
        <form className="bg-gray-100 shadow-lg rounded px-4 md:px-8 pt-6 pb-8 mb-4">
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
              value={formValues.currentValue ? formValues.currentValue : ""}
              onChange={(e) =>
                setFormValues({ ...formValues, currentValue: e.target.value })
              }
            ></NumberInput>
          </div>
          <div>
            <div className="mb-4 mt-8">
              <SubTitle>
                How important are the following features to you when assessing a
                photo delivery service?
              </SubTitle>
            </div>
            <div className="mb-4">
              <SelectInput
                id="feature-client-social-sharing"
                label="Clients ability to share directly to social media"
                options={featureOptions}
                value={
                  formValues.featureClientSocialSharing
                    ? formValues.featureClientSocialSharing
                    : ""
                }
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    featureClientSocialSharing: e.target.value,
                  })
                }
              ></SelectInput>
            </div>
            <div className="mb-4">
              <SelectInput
                id="feature-client-direct-order"
                label="Clients ability to order prints directly"
                options={featureOptions}
                value={
                  formValues.featureClientOrderPrints
                    ? formValues.featureClientOrderPrints
                    : ""
                }
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    featureClientOrderPrints: e.target.value,
                  })
                }
              ></SelectInput>
            </div>
            <div className="mb-4">
              <SelectInput
                id="feature-client-web-print-downloads"
                label="Ability to choose to download either social media web optimized, or original quality photos"
                options={featureOptions}
                value={
                  formValues.featureClientWebPrintDownloads
                    ? formValues.featureClientWebPrintDownloads
                    : ""
                }
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    featureClientWebPrintDownloads: e.target.value,
                  })
                }
              ></SelectInput>
            </div>
            <div className="mb-4">
              <SelectInput
                id="feature-trial-period"
                label="A trial period where you can try all features for a limited time"
                options={featureOptions}
                value={
                  formValues.featureTrialPeriod
                    ? formValues.featureTrialPeriod
                    : ""
                }
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    featureTrialPeriod: e.target.value,
                  })
                }
              ></SelectInput>
            </div>
            <div className="mb-4">
              <SelectInput
                id="feature-free-tier"
                label="A free subscription tier where you get limited access to features"
                options={featureOptions}
                value={
                  formValues.featureFreeTier ? formValues.featureFreeTier : ""
                }
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    featureFreeTier: e.target.value,
                  })
                }
              ></SelectInput>
            </div>
          </div>
          <div className="mb-4">
            <SelectInput
              id="beta-interest"
              label="Would you be interested in taking part in a closed beta for DeliverPix?"
              options={[{ value: "" }, { value: "Yes" }, { value: "No" }]}
              value={
                formValues.contactClosedBeta ? formValues.contactClosedBeta : ""
              }
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  contactClosedBeta: e.target.value,
                })
              }
            ></SelectInput>
          </div>
          <div className="mb-4">
            <SelectInput
              id="deliverpix-contact"
              label="Would you like to be contacted by DeliverPix about future releases and updates?"
              options={[{ value: "" }, { value: "Yes" }, { value: "No" }]}
              value={
                formValues.contactFutureUpdates
                  ? formValues.contactFutureUpdates
                  : ""
              }
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  contactFutureUpdates: e.target.value,
                })
              }
            ></SelectInput>
          </div>
          {((formValues.contactFutureUpdates &&
            formValues.contactFutureUpdates === "Yes") ||
            (formValues.contactClosedBeta &&
              formValues.contactClosedBeta === "Yes")) && (
            <div>
              <div className="mb-4">
                <TextInput
                  id="emailAddress"
                  label="Email Address"
                  placeholder="user@example.com"
                  value={formValues.emailAddress ? formValues.emailAddress : ""}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      emailAddress: e.target.value,
                    })
                  }
                ></TextInput>
              </div>
              <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <TextInput
                    id="firstName"
                    label="First Name"
                    placeholder="First Name"
                    value={formValues.firstName ? formValues.firstName : ""}
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        firstName: e.target.value,
                      })
                    }
                  ></TextInput>
                </div>
                <div>
                  <TextInput
                    id="lastName"
                    label="Last Name"
                    placeholder="Last Name"
                    value={formValues.lastName ? formValues.lastName : ""}
                    onChange={(e) =>
                      setFormValues({ ...formValues, lastName: e.target.value })
                    }
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
            <div className="mt-4">
              <CheckboxInput
                id="termsAgreed"
                label="I agree to these terms and conditions"
                checked={formValues.termsAgreed}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    termsAgreed: e.target.checked,
                  })
                }
              ></CheckboxInput>
            </div>
          </div>
          <div className="mb-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="6LetzvkUAAAAAOY162bGI5DmYhOBaGU9BN9HmSUo"
            />
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
