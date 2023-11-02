const express = require("express");
const router = express.Router();
const RouteGuard = require("../Middleware/RouteGuard");
const multer = require("multer");
const maxSize = 1048576;

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
      if (err.errno) {
        res.status(404).send("invalid folder path");
        if (err.errno == -2) {
          res.status(404).send("invalid folder path");
        }
      } else {
        if (err.code == -1) {
          res.status(406).send("Invalid file type");
        }
      }
    } else {
      res
        .status(200)
        .send({ msg: "upload successfull", path: req.file.path.substring(25) });
    }
  });
});

router.post("/getproductlist", RouteGuard, async (req, res) => {
  const productOne = await ProductList.find({ uid: req.uid });

  res.send(productOne);
});

router.post("/addproduct", RouteGuard, async (req, res) => {
  // const isvalid = jwt.verify(req.headers.authorization, "secret");
  //  ("hello " + isvalid.uid);
  // commented beacuse middleware implemented


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
    uid: req.uid,
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

router.put("/editproduct", RouteGuard, async (req, res) => {
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
  

  if (updatedProduct) {
    res.status(200).send({ msg: "productedited" });
  } else {
    res.status(403).send({ msg: "Error editing product value" });
  }
});

router.delete("/deleteproduct", RouteGuard, async (req, res) => {
  const { id } = req.body;

  if (req.body.id) {
    const delProduct = await ProductList.deleteOne({ uid: req.uid, id: id });

    if (delProduct.deletedCount) {
      res.status(200).send({ msg: "product Deleted" });
    } else {
      res.status(403).send({ msg: "Error deleting product value" });
    }
  } else {
    res.status(500).send({ msg: "Network ERROR" });
  }
});

module.exports = router;
