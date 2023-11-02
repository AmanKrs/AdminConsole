import { Box } from "@mui/material";
import React, { useState } from "react";
import "../ProductAppStyle/productform.css";

export default function AddProductMedia(props) {
  const { mediaData, setMediaData } = props;
  const [mediaSize, setMediaSize] = useState(false);
  const [mediaDetail, setMediaDetail] = useState();

  const handleChange = (e) => {
    var fileData = new FormData();
  
    fileData.append("myFile", e.target.files[0]);
    setMediaData(fileData);
    if (e.target.files[0].size > 10485760) {
      setMediaSize(true);
    }

    setMediaDetail(e.target.files[0].name);
  };
  return (
    <div className="product-form">
      <h3>Product Pricing</h3>
      <Box className="p-media-box">
        <input type="file" className="p-media-upload" onChange={handleChange} />
        {mediaDetail}
        <h4>selectFile or Drag in box </h4>
        {mediaSize ? <p>File is too large</p> : ""}
      </Box>
    </div>
  );
}
