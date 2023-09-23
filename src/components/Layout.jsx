import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ loginState, cartItems }) {
  return (
    <>
      <Header loginState={loginState} cartItems={cartItems} />
      <Outlet loginState={loginState} />
      <Footer />
    </>
  );
}
