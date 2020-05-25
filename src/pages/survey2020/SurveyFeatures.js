import React from "react";
import PropTypes from "prop-types";
import SubTitle from "../../components/common/SubTitle";
import SelectInput from "../../components/form/SelectInput";

function SurveyFeatures(props) {
  const { formValues, setFormValues } = props;

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

  return (
    <div>
      <div className="mb-4 mt-10">
        <SubTitle>
          How important are the following features to you when assessing a photo
          delivery service?
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
          id="feature-client-payments"
          label="Ability to manage client payments for services directly through the delivery service"
          options={featureOptions}
          value={
            formValues.featureClientPayments
              ? formValues.featureClientPayments
              : ""
          }
          onChange={(e) =>
            setFormValues({
              ...formValues,
              featureClientPayments: e.target.value,
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
            formValues.featureTrialPeriod ? formValues.featureTrialPeriod : ""
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
          value={formValues.featureFreeTier ? formValues.featureFreeTier : ""}
          onChange={(e) =>
            setFormValues({
              ...formValues,
              featureFreeTier: e.target.value,
            })
          }
        ></SelectInput>
      </div>
    </div>
  );
}

SurveyFeatures.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
};

SurveyFeatures.defaultProps = {
  formValues: {},
  setFormValues: () => {},
};

export default SurveyFeatures;
