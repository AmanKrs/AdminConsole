const mongoose = require("mongoose");

const ProductListSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  properties: {
    SKU: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
  },
});

const ProductList = mongoose.model("ProductList", ProductListSchema);

module.exports = ProductList;
