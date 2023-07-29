import React from "react";
import "../ProductAppStyle/productform.css";

export default function ProductForm(props) {
  const { productData, setProductData } = props;

  const handleProductFormdata = (e) => {
    setProductData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(productData);
  return (
    <div className="product-form">
      <h3>Product Information</h3>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Name</label>
          <input
            className="p-input-text"
            type="text"
            name="Name"
            onChange={handleProductFormdata}
          ></input>
        </div>
        <div>
          <label className="p-form-label">Weight</label>
          <input
            className="p-input-text"
            name="Weight"
            type="text"
            onChange={handleProductFormdata}
          ></input>
        </div>
      </div>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Sizes</label>
          <select
            className="p-select-text"
            name="Size"
            onChange={handleProductFormdata}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label className="p-form-label">Category</label>
          <select
            className="p-select-text"
            name="Category"
            onChange={handleProductFormdata}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Description</label>
          <input
            className="p-input-text"
            name="Description"
            type="text"
            placeholder="  Some initial details"
            onChange={handleProductFormdata}
          ></input>
        </div>
      </div>
    </div>
  );
}
