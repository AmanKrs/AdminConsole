const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const RouteGuard = require("../Middleware/RouteGuard");

const {
  FashionData,
  ElectronicData,
  HomeData,
} = require("../Schema/CategorySchema");

router.post("/sale", async (req, res) => {
  const homecat = new FashionData(req.body);

  const addHome = await homecat.save();

  if (addHome) {
    res.status(200).send({ msg: "User Register Successfully" });
  } else {
    res.status(403).send({ msg: "Unable to Register User " });
  }

  res.end();
});

router.get("/sales",RouteGuard, async (req, res) => {
  

  const getFashion = await FashionData.find({uid: req.uid});
  const getHome = await HomeData.find({uid: req.uid});
  const getElectronics = await ElectronicData.find({uid: req.uid});

  if (getFashion) {
    res.status(200).send({getFashion:getFashion, getHome:getHome, getElectronics:getElectronics });
  } else {
    res.status(403).send({ msg: "Unable to Find data " });
  }

  res.end();
});

module.exports = router;
