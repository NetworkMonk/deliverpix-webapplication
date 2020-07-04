import React from "react";
import PropTypes from "prop-types";
import SubTitle from "../../components/common/SubTitle";
import NumberInput from "../../components/form/NumberInput";
import SelectInput from "../../components/form/SelectInput";

function SurveyCurrent(props) {
  const { formValues, setFormValues } = props;

  const currentOptions = [
    { value: "" },
    { value: "Abode / Lightroom" },
    { value: "Dropbox" },
    { value: "Google Drive" },
    { value: "Instaproofs" },
    { value: "Pixieset" },
    { value: "Printed Copies Only" },
    { value: "USB Thumb Drives / CDs /DVDs" },
    { value: "Other" },
  ];

  return (
    <div>
      <div className="mb-4 mt-10">
        <SubTitle>Your current photo delivery service</SubTitle>
      </div>
      <div className="mb-4">
        <NumberInput
          id="current-pay"
          label="What are you currently paying per month for your photo delivery solution on average?"
          placeholder="Enter value"
          value={formValues.currentValue ? formValues.currentValue : ""}
          onChange={(e) =>
            setFormValues({ ...formValues, currentValue: e.target.value })
          }
        ></NumberInput>
      </div>
      <div className="mb-4">
        <SelectInput
          id="current-provider"
          label="What current solution / provider do you use?"
          value={formValues.currentProvider ? formValues.currentProvider : ""}
          onChange={(e) =>
            setFormValues({ ...formValues, currentProvider: e.target.value })
          }
          options={currentOptions}
        ></SelectInput>
      </div>
    </div>
  );
}

SurveyCurrent.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
};

SurveyCurrent.defaultProps = {
  formValues: {},
  setFormValues: () => {},
};

export default SurveyCurrent;
