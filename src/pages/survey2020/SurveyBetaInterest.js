import React from "react";
import PropTypes from "prop-types";
import SubTitle from "../../components/common/SubTitle";
import SelectInput from "../../components/form/SelectInput";

function SurveyBetaInterest(props) {
  const { formValues, setFormValues } = props;

  return (
    <div>
      <div className="mb-4 mt-10">
        <SubTitle>Register for trial interest</SubTitle>
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
    </div>
  );
}

SurveyBetaInterest.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
};

SurveyBetaInterest.defaultProps = {
  formValues: {},
  setFormValues: () => {},
};

export default SurveyBetaInterest;
