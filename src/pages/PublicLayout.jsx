import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";

const PublicLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default PublicLayout;