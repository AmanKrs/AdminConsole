import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import Header from "../Header/Header";
import "./layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="main-layout">
        <Sidenav />
        <div className="outlet-layout" >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
