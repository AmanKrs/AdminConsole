const express = require("express");
const router = express.Router();

const login = require("./Routes/Login");
const products = require("./Routes/Products");
const categoryCharts = require("./Routes/CategoryCharts");
router.use("/login", login);
router.use("/products", products);
router.use("/category", categoryCharts);

module.exports = router;
