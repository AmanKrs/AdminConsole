import React from "react";
import "../ProductAppStyle/productform.css";

export default function EditProductInfo(props) {
  const { item, setEditFormData } = props;

  const handleEditFormdata = (e) => {
    setEditFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="product-form edit-infoform">
      <h3>Product Information</h3>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Name</label>
          <input
            className="p-input-text"
            type="text"
            name="title"
            defaultValue={item.title}
            onChange={handleEditFormdata}
          ></input>
        </div>
        <div>
          <label className="p-form-label">Quantity</label>
          <input
            className="p-input-text"
            name="quantity"
            type="text"
            defaultValue={item.quantity}
            onChange={handleEditFormdata}
          ></input>
        </div>
      </div>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Sizes</label>
          <select
            className="p-select-text"
            name="size"
            onChange={handleEditFormdata}
          >
            <option>{item.properties.size}</option>

            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div>
          <div>
            <label className="p-form-label">Category</label>
            <select
              className="p-select-text"
              name="category"
              onChange={handleEditFormdata}
            >
              <option>{item.category}</option>
              <option>Electronics</option>
              <option>Home Appliances </option>
              <option>Men's clothing</option>
              <option>Women's clothing</option>
              <option>Kids Wear</option>
              <option>Jewelery</option>
              <option>Mobiles</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Description</label>
          <input
            className="p-input-text"
            name="description"
            type="text"
            defaultValue={item.description}
            onChange={handleEditFormdata}
          ></input>
        </div>
      </div>
    </div>
  );
}
