const Validator = (req, res, next) => {
  const {Email, userId, password } = req.body;

  if (userId == null || password == null) {
    res.status(402).send({ msg: "Username or password is can't empty" });
  } else {
    next();
   
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // if (Email.match(mailformat)) {
    //   next();
    // } else {
    //   res.status(400).send({ msg: "username is invalid format" });
    // }
  }
};


module.exports = Validator;