const Validator = (req, res, next) => {
  const { userId, passwd } = req.body;

  if (userId == null || passwd == null) {
    res.status(402).send({ msg: "Username or password is can't empty" });
  } else {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (userId.match(mailformat)) {
      next();
    } else {
      res.status(400).send({ msg: "username is invalid format" });
    }
  }
};


module.exports = Validator;