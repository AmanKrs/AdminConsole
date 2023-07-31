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
import "../ProductAppStyle/productform.css";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Loading from "../../../Component/Loading/Loading";

export default function ProductList() {
  const { searchItem } = useOutletContext();
  const [fullData, setData] = useState();
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const navigate = useNavigate();

  const getProducts = async () => {
    const result = await axios.get(
      "http://localhost:8082/products/getproductlist"
    );
    setProducts(result.data);
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  });

  console.log(product);
  console.log("productlist search", searchItem);
  let pageNo = Math.ceil(product.length / itemsPerPage);
  let endIndex = currentIndex * itemsPerPage;
  const displayProduct = product.slice(
    (currentIndex - 1) * itemsPerPage,
    endIndex
  );
  const arr = Array.from({ length: pageNo }, (_, i) => i + 1);

  const navigateEdit = (item) => {
    navigate("/edit-product", { state: item });
  };

  const handlePageNxt = () => {
    console.log(pageNo);
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
              console.log("intial", elem);
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
