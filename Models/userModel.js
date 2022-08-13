const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  nickName: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
