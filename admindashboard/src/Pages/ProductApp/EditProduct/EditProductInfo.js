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
            name="p-name"
            defaultValue={item.title}
            onChange={handleEditFormdata}
          ></input>
        </div>
        <div>
          <label className="p-form-label">Weight</label>
          <input
            className="p-input-text"
            name="p-weight"
            type="text"
            defaultValue={item.rating.count}
            onChange={handleEditFormdata}
          ></input>
        </div>
      </div>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Sizes</label>
          <select
            className="p-select-text"
            name="p-size"
            onChange={handleEditFormdata}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <div>
            <label className="p-form-label">Weight</label>
            <input
              className="p-input-text"
              name="p-weight"
              type="text"
              defaultValue={item.category}
              onChange={handleEditFormdata}
            ></input>
          </div>
        </div>
      </div>
      <div className="p-form-inputs">
        <div>
          <label className="p-form-label">Description</label>
          <input
            className="p-input-text"
            name="p-description"
            type="text"
            defaultValue={item.description}
            onChange={handleEditFormdata}
          ></input>
        </div>
      </div>
    </div>
  );
}
