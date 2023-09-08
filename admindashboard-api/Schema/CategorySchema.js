const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  profit: {
    type: Number,
    require: true,
  },
  SalesAmt: {
    type: Number,
    require: true,
  },
  TotalRev: {
    type: Number,
    require: true,
  },
  discountPercent: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
  },
});

const FashionData = mongoose.model("FashionData", catSchema);
const ElectronicData = mongoose.model("ElectronicData", catSchema);
const HomeData = mongoose.model("HomeData", catSchema);

module.exports = { FashionData, ElectronicData, HomeData };
