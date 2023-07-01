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

  const navigate = useNavigate();
  const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");

    setProducts(result.data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(product);

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
                {product.map((row) => (
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
          </TableContainer>
        </>
      )}
    </div>
  );
}
