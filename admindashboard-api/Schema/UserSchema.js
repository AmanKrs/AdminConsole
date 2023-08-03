var mongoose = require("mongoose");

const schema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

const Users = mongoose.model("User", schema);

module.exports = Users;
