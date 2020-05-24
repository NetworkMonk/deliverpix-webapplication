import React from "react";
import PropTypes from "prop-types";
import SubTitle from "../../components/common/SubTitle";
import TextInput from "../../components/form/TextInput";

function SurveyContactDetails(props) {
  const { formValues, setFormValues } = props;

  const contactVisible =
    (formValues.contactFutureUpdates &&
      formValues.contactFutureUpdates === "Yes") ||
    (formValues.contactClosedBeta && formValues.contactClosedBeta === "Yes")
      ? true
      : false;

  return (
    <div>
      {contactVisible && (
        <div>
          <div className="mb-4 mt-10">
            <SubTitle>Your details</SubTitle>
          </div>
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
        </div>
      )}
    </div>
  );
}

SurveyContactDetails.propTypes = {
  formValues: PropTypes.object.isRequired,
  setFormValues: PropTypes.func.isRequired,
};

SurveyContactDetails.defaultProps = {
  formValues: {},
  setFormValues: () => {},
};

export default SurveyContactDetails;
