import React from "react";
import { useState } from "react";
import Sidenav from "../Sidenav/Sidenav";
import Header from "../Header/Header";
import "./layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [searchItem, setSearchItem] = useState(null);
  return (
    <div className="content">
      <Header searchItem={searchItem} setSearchItem={setSearchItem} />
      <div className="main-layout">
        <Sidenav />
        <div className="outlet-layout" >
          <Outlet context={{ searchItem: searchItem }} />
        </div>
      </div>
    </div>
  );
}
