import React from "react";
import "../ProductAppStyle/productform.css";

export default function ProductPricing(props) {
  const { productData, setProductData } = props;

  const handleProductFormdata = (e) => {
    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <div className="product-form">
      <h3>Product Pricing</h3>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Price</label>
          <input
            className="p-input-text"
            name="price"
            type="number"
            onChange={handleProductFormdata}
          ></input>
        </div>
        <div>
          <label className="p-form-label">Currency</label>
          <select
            className="p-select-text"
            onChange={handleProductFormdata}
            name="currency"
          >
            <option></option>
            <option>Rupee</option>
            <option>USD</option>
            <option>Dinar</option>
          </select>
        </div>
      </div>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">SKU</label>
          <input
            className="p-input-text"
            type="text"
            name="sku"
            onChange={handleProductFormdata}
          ></input>
        </div>
        <div>
          <label className="p-form-label">Tag</label>
          <input
            className="p-input-text"
            type="text"
            name="tag"
            onChange={handleProductFormdata}
          ></input>
        </div>
      </div>
    </div>
  );
}
