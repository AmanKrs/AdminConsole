import React from "react";
import "../ProductAppStyle/productform.css";

export default function EditPricing(props) {
  const { item, setEditFormData } = props;

  const handleEditPricedata = (e) => {
    setEditFormData((prev) => ({
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
            type="text"
            name="price"
            defaultValue={item.price}
            onChange={handleEditPricedata}
          ></input>
        </div>
        <div>
          <label className="p-form-label">SKU</label>
          <input
            className="p-input-text"
            name="sku"
            type="text"
            defaultValue={item.rating.rate}
            onChange={handleEditPricedata}
          ></input>
        </div>
      </div>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Currency</label>
          <select
            className="p-select-text"
            name="currency"
            onChange={handleEditPricedata}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label className="p-form-label">Tag</label>
          <select
            className="p-select-text"
            name="tag"
            onChange={handleEditPricedata}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    </div>
  );
}
