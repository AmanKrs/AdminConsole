import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./sidenav.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Sidenav() {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="side-content">
      <ul className="nav-item">
        <li>
          <span onClick={handleExpand}>
            <HomeIcon />
            <span style={{ font: "caption" }}>Home</span>
            <ExpandMoreIcon />
          </span>
          <ul
            className={isExpanded ? "nav-sub-items action" : "nav-sub-items "}
          >
            <li>Dashboard</li>
            <li>Analays</li>
          </ul>
        </li>
      </ul>
      {/* <Accordion  sx={{ width: "80%", ml: "30px", borderRadius: "20px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={handleExpand}
          
          sx={{ backgroundColor: "#b288fa", borderRadius: "20px" }}
        >
          <span className="accrdnspan">
            <HomeIcon />
            <span style={{ font: "caption" }}>Home</span>
          </span>
        </AccordionSummary>
        <AccordionDetails
          sx={{ width: "80%", ml: "20px", borderRadius: "20px" }}
        >
          <ul
            className={isExpanded ? "nav-sub-items action" : "nav-sub-items "}
          >
            <li style={{ backgroundColor: "#b288fa" }}>Dashboard</li>
            <li>Analays</li>
          </ul>
        </AccordionDetails>
      </Accordion> */}
    </div>
  );
}
