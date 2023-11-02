const jwt = require("jsonwebtoken");

const RouteGuard = (req, res, next) => {
  try {
    const isvalid = jwt.verify(req.headers.authorization, "secret");

    if (isvalid) {
      ("router pass");
      req.uid = isvalid.uid;
      next();
    } else {
      res.status(403).send("unauthorize");
    }
  } catch (e) {
    console.log("router", e);
    res.status(500).send("something went wrong");
  }
};


module.exports = RouteGuard;
