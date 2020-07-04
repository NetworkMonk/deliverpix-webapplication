import React from "react";
import PageTitle from "../common/PageTitle";
import Container from "../common/Container";
import TextInput from "../form/TextInput";
import PasswordInput from "../form/PasswordInput";
import Button from "../form/Button";

function SignIn() {
  const submit = () => {};

  return (
    <div>
      <PageTitle>Sign In</PageTitle>
      <Container>
        <form className="bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <TextInput
              id="username"
              label="Username"
              placeholder="user@example.com"
            ></TextInput>
          </div>
          <div className="mb-4">
            <PasswordInput
              id="password"
              label="Password"
              placeholder="Password"
            ></PasswordInput>
          </div>
          <div>
            <Button id="submit" onClick={submit}>
              Sign In
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default SignIn;
