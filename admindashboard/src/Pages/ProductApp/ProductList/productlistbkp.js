import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../ProductAppStyle/productform.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Loading from "../../../Component/Loading/Loading";

export default function ProductList() {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemPerPage] = useState(5);
  const [displayProduct, setDisplayProduct] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();
  const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
    setDisplayProduct(result.data.slice(currentIndex, itemsPerPage));
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  const totalProductItem = product.length;
  let noOfPage = 5;

  useEffect(() => {
    
    setDisplayProduct(product.slice(currentIndex, currentIndex + itemsPerPage));
    console.log(displayProduct);
  }, [currentIndex]);

  console.log(product);

  const handlePage = () => {
    var endIndex = currentIndex + itemsPerPage;
    console.log("next", currentIndex, endIndex);
    // setDisplayProduct(product.slice(currentIndex, endIndex));
    setCurrentIndex(endIndex);
  };

  const handlePagePrev = () => {
    var endIndex = currentIndex - itemsPerPage;
    console.log("prev", currentIndex, endIndex);
    //setDisplayProduct(product.slice(endIndex, currentIndex));
    setCurrentIndex(endIndex);
  };

  const navigateEdit = (item) => {
    navigate("/edit-product", { state: item });
  };

  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Product List</h2>
      {loading ? (
        <Loading />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Product</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell align="center">Price</TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {displayProduct?.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <img
                        src={row.image}
                        className="product-list-img"
                        alt="product"
                      ></img>
                      {row.title}
                    </TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="center">{row.rating.count}</TableCell>
                    <TableCell align="center">${row.price}</TableCell>
                    <TableCell align="center">
                      <BorderColorIcon
                        className="edit-p-list"
                        onClick={() => {
                          navigateEdit(row);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            {product.length == 0 && (
              <>
                <Loading />
              </>
            )}
          </TableContainer>
        </>
      )}
      <div>
        {/* {" "}
        <span
          onClick={() => {
            setDisplayProduct(product.slice(0, 10));
          }}
        >
          1
        </span>
        <span
          onClick={() => {
            setDisplayProduct(product.slice(10, 20));
          }}
        >
          2
        </span> */}
        <button onClick={handlePagePrev}>Prev</button>
        <button onClick={handlePage}>Next</button>

        <button>3</button>
      </div>
    </div>
  );
}
