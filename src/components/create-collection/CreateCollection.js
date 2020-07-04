import React from "react";
import PageTitle from "../common/PageTitle";
import Container from "../common/Container";
import TextInput from "../form/TextInput";
import Button from "../form/Button";

function CreateCollection() {
  return (
    <div>
      <PageTitle>Create New Collection</PageTitle>
      <Container>
        <form className="bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <TextInput
              id="name"
              label="Collection Name"
              placeholder="New Collection"
            ></TextInput>
          </div>
          <div className="flex items-center justify-between">
            <Button id="submit">Create</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default CreateCollection;
