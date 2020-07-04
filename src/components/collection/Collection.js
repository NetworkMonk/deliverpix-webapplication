import React from "react";
import PageTitle from "../common/PageTitle";

function Collection(props) {
  const { author, collection } =
    props && props.match && props.match.params ? props.match.params : {};

  return (
    <div>
      <PageTitle>Collection Here</PageTitle>
    </div>
  );
}

export default Collection;
