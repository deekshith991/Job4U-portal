const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  account: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("Users", UserSchema);
