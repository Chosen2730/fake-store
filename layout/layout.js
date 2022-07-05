import React from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Sidebar />
    </div>
  );
};

export default Layout;
