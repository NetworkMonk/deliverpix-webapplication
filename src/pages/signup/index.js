import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StandardHead from "../../components/seo/StandardHead";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Container from "../../components/common/Container";
import PageTitle from "../../components/common/PageTitle";
import SubTitle from "../../components/common/SubTitle";
import TextInput from "../../components/form/TextInput";
import PasswordInput from "../../components/form/PasswordInput";
import Error from "../../components/form/Error";
import Alert from "../../components/common/Alert";
import Button from "../../components/form/Button";
import { Request } from "../../app/api/API";

export default function Signup() {
  const [formValues, setFormValues] = useState({});
  const [formResult, setFormResult] = useState("");

  const recaptchaRef = React.createRef();
  const formEnabled = formResult === "" ? true : false;

  const submit = () => {
    setFormResult("submitting");

    // Make sure recaptcha is valid and submit form
    recaptchaRef.current.execute().then(function (token) {
      if (!token) {
        setFormResult("error");
        return;
      }

      const postValues = { ...formValues, recaptcha: token };

      console.log(postValues);

      Request({
        path: process.env.NEXT_PUBLIC_AUTH_SERVICE + "new",
        method: "post",
        data: postValues,
        success: function (code) {
          if (code === 200) {
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
    <div className="page-container">
      <StandardHead />
      <Nav />
      <Container>
        <PageTitle>Sign Up</PageTitle>
        <SubTitle>
          Complete the form below to register for an account with deliverpix.
        </SubTitle>
        <form className="bg-gray-100 shadow-lg border border-gray-400 rounded mt-8 px-4 md:px-8 pt-6 pb-8 mb-4">
          <div className="md:max-w-2xl md:mx-auto">
            <div className="mb-4">
              <TextInput
                id="username"
                label="Email Address / Username"
                placeholder="user@example.com"
                value={formValues.username ? formValues.username : ""}
                disabled={!formEnabled}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    username: e.target.value,
                  })
                }
              ></TextInput>
              {formValues.validationErrors &&
                formValues.validationErrors.username && (
                  <Error color="red">
                    {formValues.validationErrors.username}
                  </Error>
                )}
            </div>
            <div className="mb-4">
              <TextInput
                id="firstName"
                label="First Name"
                placeholder="First Name"
                value={formValues.firstName ? formValues.firstName : ""}
                disabled={!formEnabled}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    firstName: e.target.value,
                  })
                }
              ></TextInput>
              {formValues.validationErrors &&
                formValues.validationErrors.firstName && (
                  <Error color="red">
                    {formValues.validationErrors.firstName}
                  </Error>
                )}
            </div>
            <div className="mb-4">
              <TextInput
                id="lastName"
                label="Last Name"
                placeholder="Last Name"
                value={formValues.lastName ? formValues.lastName : ""}
                disabled={!formEnabled}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    lastName: e.target.value,
                  })
                }
              ></TextInput>
              {formValues.validationErrors &&
                formValues.validationErrors.lastName && (
                  <Error color="red">
                    {formValues.validationErrors.lastName}
                  </Error>
                )}
            </div>
            <div className="mb-4">
              <PasswordInput
                id="password"
                label="Password"
                placeholder="Password"
                value={formValues.password ? formValues.password : ""}
                disabled={!formEnabled}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    password: e.target.value,
                  })
                }
              ></PasswordInput>
            </div>
            <div className="mb-4">
              <PasswordInput
                id="password2"
                label="Retype Password"
                placeholder="Password"
                value={formValues.password2 ? formValues.password2 : ""}
                disabled={!formEnabled}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    password2: e.target.value,
                  })
                }
              ></PasswordInput>
              {formValues.validationErrors &&
                formValues.validationErrors.password && (
                  <Error color="red">
                    {formValues.validationErrors.password}
                  </Error>
                )}
            </div>
            <div className="mb-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey="6LetzvkUAAAAAOY162bGI5DmYhOBaGU9BN9HmSUo"
              />
              {(formResult === "" || formResult === "error") && (
                <Button id="submit" onClick={submit}>
                  Sign Up
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
          </div>
        </form>
      </Container>
      <Footer />
    </div>
  );
}