import React from "react";
import Box from "@mui/material/Box";

export default function OrderSummary() {
  return (
    <div>
      <h2 style={{ color: "#6e39cb" }}>Order Summary </h2>
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

          <button
            onClick={() => {
              console.log("odersummary");
            }}
          >
            Save
          </button>
        </Box>
      </div>
    </div>
  );
}
