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
            type="number"
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
            defaultValue={item.properties.SKU}
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
            <option>{item.properties.currency}</option>
            <option>Rupee</option>
            <option>USD</option>
            <option>Dinar</option>
          </select>
        </div>
        <div>
          <label className="p-form-label">Tag</label>
          <input
            className="p-input-text"
            name="tag"
            type="text"
            defaultValue={item.properties.tag}
            onChange={handleEditPricedata}
          ></input>
        </div>
      </div>
    </div>
  );
}
