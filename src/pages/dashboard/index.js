import React from "react";
import StandardHead from "../../components/seo/StandardHead";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import PageTitle from "../../components/common/PageTitle";
import ContainerWide from "../../components/common/ContainerWide";
import Button from "../../components/form/Button";
import { useDispatch } from "react-redux";
import getUserState from "../../app/store/GetUser";
import { CorsRequest as Request } from "../../app/api/API";
import SubTitle from "../../components/common/SubTitle";
import CollectionList from "../../components/dashboard/collections/CollectionList";

export default function Interest() {
  const { userState } = getUserState();
  const dispatch = useDispatch();

  var signOut = () => {
    // Attempt to delete the refresh cookie from the server
    Request({
      path: process.env.NEXT_PUBLIC_AUTH_SERVICE + "auth/refresh",
      method: "delete",
      success: function (code) {
        if (code === 200) {
          // Set userstate as an empty object
          dispatch({
            type: "USERAUTH",
            payload: {},
          });
        }
      },
      error: function () {},
    });
  };

  return (
    <div className="page-container">
      <StandardHead />
      <Nav />
      <ContainerWide>
        <PageTitle>My Dashboard</PageTitle>
        <SubTitle>My Collections</SubTitle>
        <CollectionList></CollectionList>
        <div className="p-4">
          <Button path="/dashboard/create-collection/">
            Create New Collection
          </Button>
        </div>
        <Button onClick={signOut}>Sign Out</Button>
      </ContainerWide>
      <Footer />
    </div>
  );
}
