import React from "react";
import Sidebar from "../components/sidebar";
import Nav from "../components/navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Shopping</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div>
        <Nav />
      </div>
      <main>{children}</main>
      <Sidebar />
    </div>
  );
};

export default Layout;
