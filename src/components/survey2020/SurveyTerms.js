import React from "react";
import PropTypes from "prop-types";
import Error from "../../components/form/Error";
import Alert from "../../components/common/Alert";
import CheckboxInput from "../../components/form/CheckboxInput";

function SurveyTerms(props) {
  const { formValues, setFormValues } = props;

  return (
    <div className="my-6">
      <Alert title="Your Data and Privacy" icon="info" color="blue">
        <p className="text-sm my-1">
          Data entered on this form is only used for research purposes.
        </p>
        <p className="text-sm my-1">
          We will not pass your contact details to any third parties. Your
          details will be held only for the options you&apos;ve specified above.
        </p>
        <p className="text-sm my-1">
          You can request to have your details removed at any time by emailing
          us at{" "}
          <a href="mailto:forgetme@deliverpix.com">forgetme@deliverpix.com</a>{" "}
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
        {formValues.validationErrors &&
          formValues.validationErrors.termsAgreed && (
            <Error color="red">
              You must agree to these terms and conditions
            </Error>
          )}
      </div>
    </div>
  );
}

SurveyTerms.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
};

SurveyTerms.defaultProps = {
  formValues: {},
  setFormValues: () => {},
};

export default SurveyTerms;
