import React from "react";
import PageTitle from "../common/PageTitle";

function Collection(props) {
  const { author, collection } = props?.match?.params;
  console.log(author, collection);

  return (
    <div>
      <PageTitle>Collection Here</PageTitle>
    </div>
  );
}

export default Collection;
