import React, { useState } from "react";
import "../ProductAppStyle/productform.css";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import EditPricing from "./EditPricing";
import EditProductInfo from "./EditProductInfo";

export default function EditProduct() {
  const data = useLocation();

  const product = data.state;
  const [editFormData, setEditFormData] = useState(product);

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
          <button
            onClick={() => {
              console.log(editFormData);
            }}
          >
            Save
          </button>
        </Box>
      </div>
    </div>
  );
}
