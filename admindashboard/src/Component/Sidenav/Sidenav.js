import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./sidenav.css";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UserCard from "../UserCard/UserCard";

export default function Sidenav() {
  const [isExpanded, setExpanded] = useState(false);
  const [isExpanded2, setExpanded2] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
    setExpanded2(false);
  };

  const handleExpand2 = () => {
    setExpanded2(!isExpanded2);
    setExpanded(false);
  };
  return (
    <div>
      <ul className="nav-item">
        <li className="nav-item-li">
          <div className="nav-item-span" onClick={handleExpand}>
            <div className="navIcon">
              <HomeIcon style={{ width: "30px", height: "20px" }} />
              <span className="navtitle">Home</span>
            </div>

            <ExpandMoreIcon
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                width: "20px",
                height: "20px",
              }}
            />
          </div>
          <ul
            className={isExpanded ? "nav-sub-items action" : "nav-sub-items "}
          >
            <NavLink
              to="/"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#6e39cb" : "#9766eb",
                };
              }}
            >
              <li className="item">Dashboard</li>
            </NavLink>

            <NavLink
              to="/orderlist"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#6e39cb" : "#9766eb",
                };
              }}
            >
              <li className="item">Order List</li>
            </NavLink>
          </ul>
        </li>
      </ul>
      <ul className="nav-item">
        <li className="nav-item-li">
          <div className="nav-item-span" onClick={handleExpand2}>
            <div className="navIcon">
              <HomeIcon style={{ width: "30px", height: "20px" }} />
              <span className="navtitle">Product</span>
            </div>
            <ExpandMoreIcon
              style={{
                transform: isExpanded2 ? "rotate(180deg)" : "rotate(0deg)",
                width: "20px",
                height: "20px",
              }}
            />
          </div>
          <ul
            className={isExpanded2 ? "nav-sub-items action" : "nav-sub-items "}
          >
            <NavLink
              to="/addproduct"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#6e39cb" : "#9766eb",
                };
              }}
            >
              <li className="item">Add Product</li>
            </NavLink>

            <NavLink
              to="/productlist"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "#6e39cb" : "#9766eb",
                };
              }}
            >
              <li className="item">Product List</li>
            </NavLink>
          </ul>
        </li>
      </ul>
      
      <footer className="usersideinfo">
        <UserCard />
      </footer>
    </div>
  );
}
