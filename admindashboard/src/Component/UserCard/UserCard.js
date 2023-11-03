import React, { useEffect,useState } from "react";
import Avatar from "@mui/material/Avatar";
import { decodeToken } from "react-jwt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../Header/header.css";
import { useNavigate } from "react-router-dom";

export default function UserCard() {
  const [userInfo, setUserInfo] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const navigate = useNavigate();

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
    navigate("/orderlist");
    setAnchorEl(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = decodeToken(token);
    setUserInfo(data);
  }, []);
  return (
    
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
   
  );
}
