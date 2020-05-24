import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PageTitle from "../../components/common/PageTitle";
import Container from "../../components/common/Container";
import Button from "../../components/form/Button";
import SurveyDescription from "./SurveyDescription";
import SurveyCurrent from "./SurveyCurrent";
import SurveyFeatures from "./SurveyFeatures";
import SurveyBetaInterest from "./SurveyBetaInterest";
import SurveyContactDetails from "./SurveyContactDetails";
import SurveyTerms from "./SurveyTerms";
import Validate from "./Validate";

const recaptchaRef = React.createRef();

function Survey2020() {
  const [formValues, setFormValues] = useState({});

  const submit = () => {
    console.log(formValues);
    var validationErrors = Validate(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setFormValues({
        ...formValues,
        validationErrors: validationErrors,
      });

      console.log(validationErrors);
      return;
    }

    // Make sure recaptch is valid and submit form
    recaptchaRef.current.execute().then(function (token) {
      if (!token) {
        return;
      }
      console.log(token);
      setFormValues({
        ...formValues,
        validationErrors: {},
      });
    });
  };

  return (
    <div>
      <PageTitle>Deliver Pix Survey</PageTitle>
      <Container>
        <form className="bg-gray-100 shadow-lg rounded px-4 md:px-8 pt-6 pb-8 mb-4">
          <SurveyDescription />
          <SurveyCurrent
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <SurveyFeatures
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <SurveyBetaInterest
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <SurveyContactDetails
            formValues={formValues}
            setFormValues={setFormValues}
          />
          <SurveyTerms formValues={formValues} setFormValues={setFormValues} />
          <div className="mb-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              size="invisible"
              sitekey="6LetzvkUAAAAAOY162bGI5DmYhOBaGU9BN9HmSUo"
            />
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
