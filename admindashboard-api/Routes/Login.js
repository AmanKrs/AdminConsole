const express = require("express");
const router = express.Router();
const Validator = require("../Middleware/Validator");
const ValidatorSignup = require("../Middleware/validateSignup");
const jwt = require("jsonwebtoken");
// const data = require("../database");
const mongoose = require("mongoose");
const Users = require("../Schema/UserSchema");

router.post("/signup", ValidatorSignup, async (req, res) => {
  // const { Email, userId, password } = req.body; key should matche the schema key

  const user = new Users(req.body);

  const addUser = await user.save();

  if (addUser) {
    res.status(200).send({ msg: "User Register Successfully" });
  } else {
    res.status(403).send({ msg: "Unable to Register User " });
  }

  res.end();
  // const finduser = await Users.find({})

  // if(finduser){
  //    ("user match", finduser)
  // }
});

router.post("/login-api", Validator, async (req, res) => {

  const { userId, password } = req.body;

  const userOne = await Users.findOne({ userId: req.body.userId });

  if (userOne) {
   
    const userData = {
      uid: userOne._id,
      userId: userOne.userId,
      firstName: userOne.firstName,
      lastName: userOne.lastName,
      email: userOne.email,
    };


    if (password == userOne.password) {
      const token = jwt.sign(userData, "secret");
      res.status(200).send({ token: token });
    } else {
      res.status(401).send({ msg: "password is incorrect" });
    }
  } else {
    res.status(403).send({ msg: "Please register user doesn't exist" });
  }
  res.end();
});

module.exports = router;
