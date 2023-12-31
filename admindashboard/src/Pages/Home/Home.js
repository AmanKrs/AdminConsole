import { Box } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import "./home.css";
import AreaChartComp from "../../Component/Charts/AreaChartComp";
import BarChartComp from "../../Component/Charts/BarChartComp";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import BoltIcon from "@mui/icons-material/Bolt";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import GetSalesDetails from "../../Redux/GetSalesCals/action";
import Loading from "../../Component/Loading/Loading";

export default function Home() {
  var date = new Date();
  date = date.toString().substring(0, 15);
  // const [data1, setData1] = useState([]);
  // const [data2, setData2] = useState([]);
  // const [data3, setData3] = useState([]);
  // const [revcount, setRevCount] = useState();
  const [myitems, setMyItems] = useState([]);
  const [myDiscount, setMyDiscount] = useState([]);

  const [alignment, setAlignment] = useState("");
  const [age, setAge] = useState("");
  const [revFash, setRevFash] = useState(0);
  const [revHome, setRevHome] = useState(0);
  const [revElec, setRevElec] = useState(0);
  let TotalRevArr = [];
  let revFashArr = [];
  let revHomeArr = [];
  let revElecArr = [];

  const dispatch = useDispatch();

  const totalRevValue = () => {
    setRevFash(() => {
      let sumFash = 0;
      revFashArr.reduce((acc, curr) => {
        sumFash = acc + curr;
        return sumFash;
      }, 0);
      return setRevFash(sumFash);
    });
    setRevHome(() => {
      let sumHome = 0;
      revHomeArr.reduce((acc, curr) => {
        sumHome = acc + curr;
        return sumHome;
      }, 0);
      return setRevHome(sumHome);
    });
    setRevElec(() => {
      let sumElec = 0;
      revElecArr.reduce((acc, curr) => {
        sumElec = acc + curr;
        return sumElec;
      }, 0);
      return setRevElec(sumElec);
    });

    let sum = 0;
    TotalRevArr.reduce((acc, curr) => {
      sum = acc + curr;
      return sum;
    }, 0);
    return sum;
  };

  const handleMonth = (event) => {
    setAge(event.target.value);
  };
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const data1 = useSelector((state) => state.salesData.data1);
  const data2 = useSelector((state) => state.salesData.data2);
  const data3 = useSelector((state) => state.salesData.data3);
  const revcount = useSelector((state) => state.salesData.revCount);
  const isLoading = useSelector((state) => state.salesData.loading);

  const getcatSales = () => {
    dispatch(GetSalesDetails());
  };

  // below functions uses before redux
  // const getcatSales = async () => {
  //   const result = await axios.get("https://adminbackend-kcks.onrender.com/category/sales");
  //   console.log(result.data);
  //   setData1(result.data.getFashion);
  //   setData2(result.data.getElectronics);
  //   setData3(result.data.getHome);
  //   setRevCount(result.data);
  // };

  const getTotalRev = (revcountarr) => {
    for (let key in revcountarr) {
      if (revcountarr.hasOwnProperty(key)) {
        for (let i = 0; i < revcountarr[key].length; i++) {
          TotalRevArr.push(revcountarr[key][i].TotalRev);
        }
      }

      if (key == "getFashion") {
        for (let i = 0; i < revcountarr[key].length; i++) {
          revFashArr.push(revcountarr[key][i].TotalRev);
        }
      }
      if (key == "getElectronics") {
        for (let i = 0; i < revcountarr[key].length; i++) {
          revElecArr.push(revcountarr[key][i].TotalRev);
        }
      }
      if (key == "getHome") {
        for (let i = 0; i < revcountarr[key].length; i++) {
          revHomeArr.push(revcountarr[key][i].TotalRev);
        }
      }
    }
    return totalRevValue();
  };

  const finalSale = useMemo(() => {
    return getTotalRev(revcount);
  }, [revcount]);

  useEffect(() => {
    getcatSales();
  }, []);

  useEffect(() => {
    if (age == 10) {
      setMyItems(data1);
    } else if (age == 20) {
      setMyItems(data2);
    } else {
      setMyItems(data3);
    }
  }, [age]);

  useEffect(() => {
    setMyItems(data3);
    setMyDiscount(data3);
  }, [data3]);

  useEffect(() => {
    if (alignment == 10) {
      setMyDiscount(data1);
    } else if (alignment == 20) {
      setMyDiscount(data2);
    } else {
      setMyDiscount(data3);
    }
  }, [alignment]);

  return (
    <div>
      <Box className="dash-head">
        <div className="dash-head-item">
          <p className="revtitle">Total Revenue</p>
          <p className="value">₹{finalSale}</p>
          <p className="date">{date}</p>
        </div>
        <div className="dash-head-item">
          <p className="revtitle">Fashion</p>
          <p className="value">₹{revFash}</p>
          <p className="date">{date}</p>
        </div>
        <div className="dash-head-item">
          <p className="revtitle">Home</p>
          <p className="value">₹{revHome}</p>
          <p className="date">{date}</p>
        </div>
        <div className="dash-head-item last-item">
          <p className="revtitle">Electronics</p>
          <p className="value">₹{revElec}</p>
          <p className="date">{date}</p>
        </div>
      </Box>
      <div className="dash-content">
        <div className="dash-content-main">
          <div className="chart-head">
            <p>Area chart</p>
            <section>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                size="small"
                onChange={handleMonth}
              >
                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Electronics</MenuItem>
                <MenuItem value={30}>Home Appliances</MenuItem>
              </Select>
            </section>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <BarChartComp
              data={age == 10 ? data1 : age == 20 ? data2 : data3}
            />
          )}
        </div>
        <div className="dash-content-side">
          <h3 style={{ paddingLeft: "10px" }}>My items</h3>
          <div sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
                fontWeight: "500",
              }}
            >
              <span>Name</span>
              <span>Quantity</span>
            </div>
          </div>

          {myitems?.map((elem, idx) => {
            return (
              <div sx={{ marginTop: "5px" }} key={idx}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <BoltIcon />
                    <span>{elem.name}</span>
                  </div>
                  <span>{elem.inStock}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dash-content">
        <div className="dash-content-main">
          <div className="chart-head">
            <p>Area chart</p>
            <section>
              <ToggleButtonGroup
                size="small"
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
              >
                <ToggleButton value={10}>Fashion</ToggleButton>
                <ToggleButton value={20}>Electronic</ToggleButton>
                <ToggleButton value={30}>Home Appliances</ToggleButton>
              </ToggleButtonGroup>
            </section>
          </div>

          <AreaChartComp
            data={alignment == 10 ? data1 : alignment == 20 ? data2 : data3}
          />
        </div>
        <div className="dash-content-side">
          <h3 style={{ paddingLeft: "10px" }}>My Discount</h3>
          <div sx={{ marginTop: "10px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "0 10px",
                fontWeight: "500",
              }}
            >
              <span>Name</span>

              <span>Discount %</span>
            </div>
          </div>
          {myDiscount.map((elem, idx) => {
            return (
              <div sx={{ marginTop: "5px" }} key={idx}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 10px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <BoltIcon />
                    <span>{elem.name}</span>
                  </div>
                  <span>{elem.discountPercent}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
