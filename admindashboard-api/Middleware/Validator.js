const Validator = (req, res, next) => {
  const {userId, password } = req.body;

  if (userId == null || password == null) {
    res.status(402).send({ msg: "Username or password is can't empty" });
  } else {
    next();
  }
};


module.exports = Validator;