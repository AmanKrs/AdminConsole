const express = require("express");
const router = express.Router();
const Validator = require("../Middleware/Validator");
const jwt = require("jsonwebtoken");
// const data = require("../database");
const mongoose = require("mongoose");
const Users = require("../Schema/UserSchema");

router.post("/signup", async (req, res) => {
  // const { Email, userId, password } = req.body; key should matche the schema key

  const user = new Users(req.body);

  const addUser = await user.save();

  if (addUser) {
    console.log("useradded");
  } else {
    console.log("error adding user");
  }
  res.end();
  // const finduser = await Users.find({})

  // if(finduser){
  //   console.log("user match", finduser)
  // }
});

router.post("/login-api", Validator, async (req, res) => {
  console.log(req.body);
  const { userId, password } = req.body;

  const userOne = await Users.findOne({ userId: req.body.userId });

  if (userOne) {
    console.log("user match one", userOne);
    userData = {
      userId: userOne.userId,
      firstName: userOne.firstName,
      lastName: userOne.lastName,
      email: userOne.email,
      city: userOne.city,
    };

    console.log("userData", userData);
    // const userInfrom = userOne

    // const {password , ...userData} = userInfrom;

    if (password == userOne.password) {
      const token = jwt.sign(userData, "secret");
      console.log(token);
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
