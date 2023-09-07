import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <Header loginState={props.loginState} />
      <Outlet loginState={props.loginState} />
      <Footer />
    </>
  );
}
