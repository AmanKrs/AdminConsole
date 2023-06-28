import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import Content from "../Content/Content";
import Header from "../Header/Header";
import "./layout.css";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="main-layout">
        <Sidenav />
        <Content />
      </div>
    </div>
  );
}
