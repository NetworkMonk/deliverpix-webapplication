import React from "react";
import PropTypes from "prop-types";
import SubTitle from "../../components/common/SubTitle";
import NumberInput from "../../components/form/NumberInput";

function SurveyCurrent(props) {
  const { formValues, setFormValues } = props;

  return (
    <div>
      <div className="mb-4 mt-10">
        <SubTitle>Your current photo delivery service</SubTitle>
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
