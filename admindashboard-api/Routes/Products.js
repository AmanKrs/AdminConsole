const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const RouteGuard = require("../Middleware/RouteGuard");
const multer = require("multer");
const maxSize = 1048576;
const mongoose = require("mongoose");

const ProductList = require("../Schema/ProductListSchema");

//DiskStorage to store uploadedfile in the system

const storage = multer.diskStorage({
  destination: function (req, file, cllbck) {
    cllbck(null, "../admindashboard/public/assets/productuploads");
  },
  filename: function (req, file, cllbck) {
    const ext = file.mimetype.split("/")[1];
    const uniqueSuffix =
      Date.now().toString().substring(0, 10) +
      "_" +
      Math.round(Math.random() * 1000) +
      `.${ext}`;
    cllbck(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype.split("/")[1] === "jpeg" ||
    file.mimetype.split("/")[1] === "pdf"
  ) {
    cb(null, true);
  } else {
    cb(new Error("File is not of supported format"), false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: maxSize },
}).single("myFile");

router.post("/addmedia", RouteGuard, (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log("error1", err);
      if (err.errno) {
        res.status(404).send("invalid folder path");
        if (err.errno == -2) {
          console.log("error1");
          res.status(404).send("invalid folder path");
        }
      } else {
        console.log("error1");
        if (err.code == -1) {
          res.status(406).send("Invalid file type");
        }
      }
    } else {
      console.log(req.file);
      res
        .status(200)
        .send({ msg: "upload successfull", path: req.file.path.substring(25) });
    }
  });
});

router.post("/getproductlist", async (req, res) => {
  const isvalid = jwt.verify(req.headers.authorization, "secret");

  const productOne = await ProductList.find({ uid: isvalid.uid });
  console.log("firstproduct", productOne);
  res.send(productOne);
});

router.post("/addproduct", async (req, res) => {
  const isvalid = jwt.verify(req.headers.authorization, "secret");

  console.log("route guard activated", req.body.productData);
  console.log("hello " + isvalid.uid);
  const {
    Name,
    quantity,
    Size,
    Category,
    Description,
    price,
    imageUrl,
    sku,
    tag,
    currency,
  } = req.body.productData;

  const products = {
    uid: isvalid.uid,
    id: Math.ceil(Math.random() * 1000),
    title: Name,
    description: Description,
    category: Category,
    price: price,
    image: imageUrl,
    quantity: quantity,
    properties: {
      SKU: sku,
      size: Size,
      tag: tag,
      currency: currency,
    },
  };

  const addNewProduct = new ProductList(products);

  const productAdded = await addNewProduct.save();

  if (productAdded) {
    res.status(200).send({ msg: "productadded" });
  } else {
    res.status(403).send({ msg: "Error product not added" });
  }
});

router.post("/editproduct", async (req, res) => {
  const isvalid = jwt.verify(req.headers.authorization, "secret");

  const {
    id,
    title,
    quantity,
    description,
    category,
    price,
    sku,
    size,
    tag,
    currency,
  } = req.body.editFormData;

  // console.log(req.body.editFormData)
  const updatedProduct = await ProductList.findOneAndUpdate(
    { id: id },
    {
      title: title,
      quantity: quantity,
      description: description,
      category: category,
      price: price,
      "properties.SKU": sku,
      "properties.size": size,
      "properties.tag": tag,
      "properties.currency": currency,
    }
  );
  console.log("firstproduct", updatedProduct);

  if (updatedProduct) {
    res.status(200).send({ msg: "productedited" });
  } else {
    res.status(403).send({ msg: "Error editing product value" });
  }
});

module.exports = router;
