import React from "react";
import PageTitle from "../common/PageTitle";
import Container from "../common/Container";

function CreateCollection() {
  return (
    <div>
      <PageTitle>Create New Collection</PageTitle>
      <Container>
        <form className="bg-gray-100 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Collection Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="New Collection"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create
            </button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default CreateCollection;
