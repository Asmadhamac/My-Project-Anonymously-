const mongoose = require("mongoose");

const replySchema = mongoose.Schema({
  comment: {
    type: String,
    require: true,
  },
});

const replyModel = mongoose.model("Reply", replySchema);

module.exports = replyModel;
