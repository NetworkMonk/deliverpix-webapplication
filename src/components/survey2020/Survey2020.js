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
import Request from "../../app/api/API";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Alert from "../../components/common/Alert";

const recaptchaRef = React.createRef();

function Survey2020() {
  const [formValues, setFormValues] = useState({});
  const [formResult, setFormResult] = useState("");

  const submit = () => {
    setFormResult("submitting");

    var validationErrors = Validate(formValues);
    if (Object.keys(validationErrors).length > 0) {
      setFormValues({
        ...formValues,
        validationErrors: validationErrors,
      });

      return;
    }

    // Make sure recaptcha is valid and submit form
    recaptchaRef.current.execute().then(function (token) {
      if (!token) {
        return;
      }

      const postValues = { ...formValues, recaptcha: token };

      Request({
        path: process.env.BETA_SERVICE,
        method: "post",
        data: postValues,
        success: function (result) {
          if (result.status === "Success") {
            setFormResult("success");
            return;
          }
          setFormResult("error");
        },
        error: function () {
          setFormResult("error");
        },
      });

      setFormValues({
        ...formValues,
        validationErrors: {},
      });
    });
  };

  return (
    <div>
      <Container>
        <PageTitle>Deliver Pix Survey</PageTitle>
        <form className="bg-gray-100 shadow-lg rounded mt-8 px-4 md:px-8 pt-6 pb-8 mb-4">
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
            {(formResult === "" || formResult === "error") && (
              <Button id="submit" onClick={submit}>
                Complete Survey
              </Button>
            )}
            {formResult === "submitting" && (
              <Button id="submit-processing" disabled={true}>
                <FontAwesomeIcon
                  icon="circle-notch"
                  fixedWidth
                  className="mr-3"
                  spin
                />
                Submitting
              </Button>
            )}
            {formResult === "success" && (
              <div className="my-3">
                <Alert color="green">
                  Your data has been submitted, thank you for showing an
                  interest in deliverpix.com!
                </Alert>
              </div>
            )}
            {formResult === "error" && (
              <div className="my-3">
                <Alert color="red">
                  There was an error submitting your data, please try again.
                </Alert>
              </div>
            )}
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Survey2020;
