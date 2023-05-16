import React, { useContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: {
  children: React.ReactNode,
}) => {
 

  return (
    <div>
      <Header />
         
          {children}
          <Footer />
    </div>
  );
};

export default React.memo(Layout);
