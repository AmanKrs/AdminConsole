import React from "react";
import Avatar from "@mui/material/Avatar";

import "./header.css";

export default function Header(props) {
  const { searchItem, setSearchItem } = props;

  const handleSearch = (e)=>{
    setSearchItem(e.target.value)
    console.log(searchItem)
  }
  console.log(searchItem)
  
  return (
    <div>
      <nav className="head-container">
        <div className="head">
          <h1>DashBoard</h1>
          <input
            className="search-input"
            type="text"
            placeholder="Search for anything...."
            onChange={handleSearch}
          />
        </div>
        <div className="usernav">
          <Avatar></Avatar>
          <div className="usernav-details">
            <p>UserName</p>
            <p>Email@xc.com</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
