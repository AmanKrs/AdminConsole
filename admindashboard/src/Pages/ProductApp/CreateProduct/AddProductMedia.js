import { Box } from "@mui/material";
import React from "react";
import "../ProductAppStyle/productform.css";

export default function AddProductMedia() {
  return (
    <div className="product-form">
      <h3>Product Pricing</h3>
      <Box className="p-media-box">
        <input type="file" className="p-media-upload" />
        <h4>selectFile or Drag in box </h4>
      </Box>
    </div>
  );
}
