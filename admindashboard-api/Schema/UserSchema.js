var mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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

const Users = mongoose.model("User", userSchema);

module.exports = Users;
