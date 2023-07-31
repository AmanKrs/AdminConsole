const express = require("express");
const router = express.Router();
const Validator = require("../Middleware/Validator");
const jwt = require("jsonwebtoken");
const data = require("../database");

router.post("/login-api", Validator, (req, res) => {
  console.log(req.body);
  const { userId, passwd } = req.body;
  console.log(passwd);

  const userData = data.userInfo;
  console.log(userData);

  if (userId == data.user.username) {
    if (passwd == data.user.password) {
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
