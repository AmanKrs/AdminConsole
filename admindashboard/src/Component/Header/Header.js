import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { decodeToken } from "react-jwt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./header.css";
import { useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export default function Header(props) {
  const { setSearchItem, enableSidenav, setEnableSidenav } = props;
  const [userInfo, setUserInfo] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  const handleMoreOption = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseOption = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/register");
    window.location.reload(true);
  };

  const handleAccount = () => {
    console.log("userInfo", userInfo);
    navigate("/orderlist");
    setAnchorEl(null);
  };

  const handleSidenav = () => {
    console.log(enableSidenav);
    setEnableSidenav(!enableSidenav);
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
          <div className="enablemenu" onClick={handleSidenav}>
            <MenuRoundedIcon />
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
        <div className="usernavIcon">
          <Avatar style={{ marginLeft: "5px" }}></Avatar>
        </div>
        <div className="usernav">
          <Avatar style={{ marginLeft: "5px" }} className="useravtar"></Avatar>
          <div className="usernav-details">
            <p>
              {userInfo.firstName}&nbsp;{userInfo.lastName}
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
