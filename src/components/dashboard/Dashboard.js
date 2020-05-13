import React from "react";
import PageTitle from "../common/PageTitle";
import SubTitle from "../common/SubTitle";
import Username from "../common/Username";
import CollectionList from "./CollectionList";
import Container from "../common/Container";
import LinkButton from "../common/LinkButton";

function Dashboard() {
  return (
    <Container>
      <PageTitle>DeliverPix</PageTitle>
      <Container>
        <SubTitle>My Collections</SubTitle>
        <div className="pt-4">
          <LinkButton path="/create-collection/">
            Create New Collection
          </LinkButton>
        </div>
        <CollectionList></CollectionList>
      </Container>
      <Container>
        <SubTitle>Insights</SubTitle>
        <p>
          <Username></Username>
        </p>
      </Container>
    </Container>
  );
}

export default Dashboard;
