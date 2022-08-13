const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  title: {
    type: String,
    require: true,
  },

  content: {
    type: String,
    require: true,
  },
});

const postModel = mongoose.model("Post", postSchema);

module.exports = postModel;
