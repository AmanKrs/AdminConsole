import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { decodeToken } from "react-jwt";

import "./header.css";

export default function Header(props) {
  const { searchItem, setSearchItem } = props;
  const [userInfo, setUserInfo] = useState({});

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = decodeToken(token);
    setUserInfo(data);
  }, []);

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
          <Avatar style={{ marginLeft: "5px" }}></Avatar>
          <div className="usernav-details">
            <p>
              {userInfo.firstName} {userInfo.lastName}
            </p>
            <p>{userInfo.email}</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
