const ValidatorSignup = (req, res, next) => {
  const { userId, firstName, lastName, email, city, password } = req.body;

  if (
    userId == null ||
    firstName == null ||
    lastName == null ||
    email == null ||
    city == null ||
    password == null
  ) {
    res.status(402).send({ msg: "Plese enter details, it is can't be empty" });
  } else {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailformat)) {
      next();
    } else {
      res.status(408).send({ msg: "email is invalid format" });
    }
  }
};

module.exports = ValidatorSignup;
