import React from "react";
import Avatar from "@mui/material/Avatar";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./header.css";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import UserCard from "../UserCard/UserCard";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const { setSearchItem, enableSidenav, setEnableSidenav } = props;

  const navigate = useNavigate();

  const handleAccount = () => {
    navigate("/orderlist");
  };
  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSidenav = () => {
    setEnableSidenav(!enableSidenav);
  };

  return (
    <div>
      <nav className="head-container">
        <div className="head">
          <div className="enablemenu" onClick={handleSidenav}>
            {enableSidenav ? <CloseRoundedIcon />:<MenuRoundedIcon /> }
          </div>
          <h1>DashBoard</h1>
        </div>
        <input
          className="search-input"
          type="text"
          placeholder="Search for anything...."
          onChange={handleSearch}
        />
        <div className="search-Icon">
          <SearchOutlinedIcon style={{ fontSize: "30px" }} />
        </div>
        <div className="usernavIcon" onClick={handleAccount}>
          <Avatar style={{ marginLeft: "5px" }}></Avatar>
        </div>
        <UserCard />
      </nav>
    </div>
  );
}
