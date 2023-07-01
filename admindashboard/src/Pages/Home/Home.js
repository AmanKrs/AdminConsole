import { Box } from "@mui/material";
import React from "react";
import "./home.css";
import AreaChartComp from "../../Component/Charts/AreaChartComp";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import BoltIcon from "@mui/icons-material/Bolt";

export default function Home() {
  var date = new Date();
  date = date.toString().substring(0, 15);

  const [alignment, setAlignment] = React.useState("web");

  const [age, setAge] = React.useState("");

  const handleMonth = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <Box className="dash-head">
        <div className="dash-head-item">
          Total Revenue
          <p className="value">₹157083.00</p>
          <p className="date">{date}</p>
        </div>
        <div className="dash-head-item">
          Total Revenue
          <p className="value">₹1000.0</p>
          <p className="date">{date}</p>
        </div>
        <div className="dash-head-item">
          Total Revenue
          <p className="value">₹1000.00</p>
          <p className="date">{date}</p>
        </div>
        <div className="dash-head-item last-item">
          Total Revenue
          <p className="value">₹1000.00</p>
          <p className="date">{date}</p>
        </div>
      </Box>
      <div className="dash-content">
        <Box className="dash-content-main">
          <div className="chart-head">
            <p>Area chart</p>
            <p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                size="small"
                onChange={handleMonth}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </p>
          </div>
          <AreaChartComp data={data} />
        </Box>
        <Box className="dash-content-side">
          <h3 style={{ paddingLeft: "10px" }}>My items</h3>
          <Box sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <BoltIcon />
                <span>Electronic</span>
              </div>
              <span>500</span>
            </div>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <BoltIcon />
                <span>Electronic</span>
              </div>
              <span>500</span>
            </div>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <BoltIcon />
                <span>Electronic</span>
              </div>
              <span>500</span>
            </div>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <BoltIcon />
                <span>Electronic</span>
              </div>
              <span>500</span>
            </div>
          </Box>
        </Box>
      </div>
      <div className="dash-content">
        <Box className="dash-content-main">
          <div className="chart-head">
            <p>Area chart</p>
            <p>
              {" "}
              <ToggleButtonGroup
                size="small"
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value="web">Day</ToggleButton>
                <ToggleButton value="android">Week</ToggleButton>
                <ToggleButton value="ios">Month</ToggleButton>
              </ToggleButtonGroup>
            </p>
          </div>
          <AreaChartComp data={data} />
        </Box>
        <Box className="dash-content-side">
          <h3 style={{ paddingLeft: "10px" }}>My Discount</h3>
          <Box sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <BoltIcon />
                <span>Electronic</span>
              </div>
              <span>50%</span>
            </div>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <BoltIcon />
                <span>Electronic</span>
              </div>
              <span>50%</span>
            </div>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <BoltIcon />
                <span>Electronic</span>
              </div>
              <span>50%</span>
            </div>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
              }}
            >
              <div style={{ display: "flex" }}>
                <BoltIcon />
                <span>Electronic</span>
              </div>
              <span>50%</span>
            </div>
          </Box>
        </Box>
      </div>
    </div>
  );
}
