import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Layout = (props) => {
  return (
    <div className="">
      <Header />
      {props.component}
      <Footer />
    </div>
  );
};

export default Layout;
