import React, { useState } from "react";
import "../ProductAppStyle/productform.css";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import EditPricing from "./EditPricing";
import EditProductInfo from "./EditProductInfo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EditProduct() {
  const data = useLocation();
  const navigate = useNavigate();
  const product = data.state;
  const [editFormData, setEditFormData] = useState(product);

  const undoEditProduct = () => {
    navigate("/productlist");
  };
  const handleEditProduct = async () => {
    try {
      const result = await axios.put(
        "http://localhost:8083/products/editproduct",
        {
          editFormData,
        }
      );
      if (result.status == 200) {
        navigate("/productlist");
      }
    } catch (e) {
      alert(e.response.msg);
    }
  };

  const deleteProduct = async () => {
    try {
      const result = await axios.delete(
        "http://localhost:8083/products/deleteproduct",

        { data: editFormData }
      );
      if (result.status == 200) {
        navigate("/productlist");
      }
    } catch (e) {
      e;
      if (e.response.status == 403) {
        alert("Error deleting product value");
      } else {
        alert(e.response.statusText);
      }
    }
  };

  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Edit Product</h2>
      <div className="product-form">
        <Box
          sx={{
            width: "100%",
            height: "auto",
            background: "#fff",
            margin: "0 auto",
            borderRadius: "20px",
          }}
        >
          <br></br>
          <EditProductInfo item={product} setEditFormData={setEditFormData} />
          <EditPricing item={product} setEditFormData={setEditFormData} />
          <button onClick={handleEditProduct}>Save</button>
          <button onClick={undoEditProduct}>Discard</button>
          <button onClick={deleteProduct}>Delete</button>
        </Box>
      </div>
    </div>
  );
}
