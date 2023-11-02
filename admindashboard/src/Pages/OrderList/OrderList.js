import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";
import "../ProductApp/ProductAppStyle/productform.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Loading from "../../Component/Loading/Loading";

const orders = [
  {
    Customer: "David",
    Product: "BKLGO Hoodie",
    ID: "F10",
    Status: "delivered",
    Revenue: "Paid",
    Date: "22-Oct-2023",
  },
  {
    Customer: "Jack",
    Product: "Jeans",
    ID: "FJ1",
    Status: "In transit",
    Revenue: "Paid",
    Date: "22-Jan-2023",
  },
  {
    Customer: "Steve",
    Product: "Washing Machine",
    ID: "HA10",
    Status: "cancel",
    Revenue: "Cancelled",
    Date: "22-Feb-2023",
  },
  {
    Customer: "Laim",
    Product: "Sofa",
    ID: "FN21",
    Status: "returned",
    Revenue: "Refunded",
    Date: "22-Mar-2023",
  },
];

export default function OrderList() {
  const { searchItem } = useOutletContext();
  const [fullData, setData] = useState();
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const navigate = useNavigate();

  const getProducts = () => {
    // const result = await axios.get("http://localhost:8084/getdata");
    setProducts(orders);

    setData(orders);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  });


  let pageNo = Math.ceil(product.length / itemsPerPage);
  let endIndex = currentIndex * itemsPerPage;
  var displayProduct = product.slice(
    (currentIndex - 1) * itemsPerPage,
    endIndex
  );
  const arr = Array.from({ length: pageNo }, (_, i) => i + 1);

  const navigateOrderSummary = (item) => {
    navigate("/order-summary", { state: item });
  };

  const handlePageNxt = () => {
   
    if (currentIndex < pageNo) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePagePrev = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    if (searchItem == "") {
      setProducts(fullData);
    } else {
      setCurrentIndex(1);
      setProducts(
        displayProduct.filter((elem) => {
          for (let key in elem) {
            if (elem[key].toString().toLowerCase().includes(searchItem)) {
              return elem;
            }
          }
        })
      );

      // setProducts(
      //   displayItems.filter((elem) => {
      //     return elem.title.toString().toLowerCase().includes(searchItem);
      //   })
      // );
    }
  }, [searchItem]);

  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Order List</h2>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Customer</TableCell>
                  <TableCell align="left">Product</TableCell>
                  <TableCell align="left">ID</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Revenue</TableCell>
                  <TableCell align="left">Date</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {displayProduct?.map((row) => (
                  <TableRow
                    key={row.ID}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    onClick={() => {
                      navigateOrderSummary(row);
                    }}
                  >
                    <TableCell component="th" scope="row">
                      
                      {row.Customer}
                    </TableCell>
                    <TableCell align="left">{row.Product}</TableCell>
                    <TableCell align="left">{row.ID}</TableCell>
                    <TableCell align="left">{row.Status}</TableCell>
                    <TableCell align="left">
                      <span
                        className="round-dot"
                        style={{
                          background:
                            row.Revenue == "Paid"
                              ? "green"
                              : row.Revenue == "Refunded"
                              ? "blue"
                              : "red",
                        }}
                      ></span>
                      {row.Revenue}
                    </TableCell>
                    <TableCell align="left">{row.Date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {product.length == 0 && searchItem !== null && (
              <>
                <h1>Not Found</h1>
              </>
            )}
            {product.length == 0 && searchItem == null && (
              <>
                <Loading />
              </>
            )}
          </TableContainer>
        </>
      )}
      <div className="pagination">
        <div>
          <select onChange={(e) => setItemsPerPage(e.target.value)}>
            <option value={5}></option>
            <option value={2}>2</option>
            <option value={4}>4</option>
            <option value={6}>6</option>
          </select>
          <em>Set No. Of Items Per Page</em>
        </div>
        <div>
          <button onClick={handlePagePrev}>Prev</button>
          {arr.map((elem) => {
            return (
              <>
                <span
                  onClick={() => {
                    setCurrentIndex(elem);
                  }}
                >
                  <button>{elem}</button>&nbsp;
                </span>
              </>
            );
          })}
          <button onClick={handlePageNxt}>Next</button>
        </div>
      </div>
    </div>
  );
}
