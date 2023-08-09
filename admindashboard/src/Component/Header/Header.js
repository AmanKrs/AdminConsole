import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { decodeToken } from "react-jwt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const { searchItem, setSearchItem } = props;
  const [userInfo, setUserInfo] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
    console.log(searchItem);
  };

  const handleMoreOption = (e) => {
    console.log("first more");
    setAnchorEl(e.currentTarget);
  };
  const handleCloseOption = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/";
    navigate("/register");
  };

  const handleAccount = () => {
    console.log("Account");
    navigate("/orderlist");
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = decodeToken(token);
    setUserInfo(data);
    console.log("userinfo", data);
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
          <MoreVertIcon
            className="moreOption"
            onClick={handleMoreOption}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          ></MoreVertIcon>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseOption}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleAccount}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </nav>
    </div>
  );
}
