import * as EmailValidator from "email-validator";

// Example form data
//
// contactClosedBeta: "Yes"
// contactFutureUpdates: "Yes"
// currentValue: "123"
// emailAddress: "jamesplant@gmail.com"
// featureClientOrderPrints: "9"
// featureClientSocialSharing: "10"
// featureClientWebPrintDownloads: "8"
// featureFreeTier: "6"
// featureTrialPeriod: "7"
// firstName: "James"
// lastName: "Plant"
// termsAgreed: true

function Validate(formValues) {
  const contactVisible =
    (formValues.contactFutureUpdates &&
      formValues.contactFutureUpdates === "Yes") ||
    (formValues.contactClosedBeta && formValues.contactClosedBeta === "Yes")
      ? true
      : false;

  let errors = {};

  if (!formValues.contactFutureUpdates) {
    errors.contactFutureUpdates = true;
  }

  if (!formValues.contactClosedBeta) {
    errors.contactClosedBeta = true;
  }

  if (!formValues.termsAgreed) {
    errors.termsAgreed = true;
  }

  if (!contactVisible) {
    return errors;
  }

  if (!formValues.firstName) {
    errors.firstName = true;
  }

  if (!formValues.lastName) {
    errors.lastName = true;
  }

  if (
    !formValues.emailAddress ||
    !EmailValidator.validate(formValues.emailAddress)
  ) {
    errors.emailAddress = true;
  }

  return errors;
}

export default Validate;
