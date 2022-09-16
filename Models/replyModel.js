const mongoose = require("mongoose");

const replySchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  comment: {
    type: String,
    require: true,
  },
  post: {
    type: mongoose.Types.ObjectId,
    ref: "Post",
  },
});

const replyModel = mongoose.model("Reply", replySchema);

module.exports = replyModel;
