var mongoose = require("mongoose");

const schema = mongoose.Schema({

  Username: {
    type: String,
    required: true
  },

  Password:{
    type: String,
    required: true
  }
})

const Users = mongoose.model("useinfo", schema)

module.exports = Users