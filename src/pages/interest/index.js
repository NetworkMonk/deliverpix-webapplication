import React from "react";
import StandardHead from "../../components/seo/StandardHead";
import Nav from "../../components/nav/Nav";
import Footer from "../../components/footer/Footer";
import Survey2020 from "../../components/survey2020/Survey2020";

export default function Interest() {
  return (
    <div className="page-container">
      <StandardHead />
      <Nav />
      <Survey2020 />
      <Footer />
    </div>
  );
}
