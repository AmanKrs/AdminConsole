import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./sidenav.css";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <div className="side-content">
      <ul className="nav-item">
        <li>
          <span onClick={handleExpand}>
            <HomeIcon />
            <span style={{ font: "caption" }}>Home</span>
            <div
              style={{
                transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <ExpandMoreIcon />
            </div>
          </span>
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
              <li>Dashboard</li>
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
              <li>Order List</li>
            </NavLink>
          </ul>
        </li>
      </ul>
      <ul className="nav-item">
        <li>
          <span onClick={handleExpand2}>
            <HomeIcon />
            <span style={{ font: "caption" }}>E-Commerce</span>
            <div
              style={{
                transform: isExpanded2 ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <ExpandMoreIcon />
            </div>
          </span>
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
              <li>Add Product</li>
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
              <li>Product List</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
}
