import React from "react";
import { useState } from "react";
import Sidenav from "../Sidenav/Sidenav";
import Header from "../Header/Header";
import "./layout.css";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [searchItem, setSearchItem] = useState(null);
  const [enableSidenav, setEnableSidenav] = useState(false);
  return (
    <div className="content">
      <Header
        searchItem={searchItem}
        setSearchItem={setSearchItem}
        enableSidenav={enableSidenav}
        setEnableSidenav={setEnableSidenav}
      />
      <div className="main-layout">
        <div className={enableSidenav ? "side-enable": "side-content"} >
          <Sidenav />
        </div>
        <div className="outlet-layout">
          <Outlet context={{ searchItem: searchItem }} />
        </div>
      </div>
    </div>
  );
}
