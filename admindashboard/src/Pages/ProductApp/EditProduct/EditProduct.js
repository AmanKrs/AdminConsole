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

  const handleEditProduct = async () => {
    try {
      const result = await axios.post(
        "http://localhost:8082/products/editproduct",
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
        </Box>
      </div>
    </div>
  );
}
