import React, { useEffect } from "react";
import "../ProductAppStyle/productform.css";
import { useLocation } from "react-router-dom";

export default function EditProduct() {
  const data = useLocation();

  const product = data.state;
  useEffect(() => {
    console.log("data", product);
  });
  return (
    <div>
      <h2>Edit Product</h2>
      <div className="product-form">
        {/* {Object.keys(product).map((elem, index) => {
          
          return <>{elem}:{product[elem]}</>
        })} */}
      </div>
    </div>
  );
}
