const reply = require("../Models/replyModel");
const post = require("../Models/replyModel");
const bcrypt = require("bcrypt");

exports.comment = async (req, res) => {
  try {
    console.log(req.body);
    const comment = await reply.create(req.body);
    res.status(200).json({ message: "comment placed" });
  } catch (e) {
    res.status(200).json({ message: "Error" });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await reply.find({ post: req.params.id });

    res.status(200).json({ message: "done", comments });
  } catch (e) {
    console.log(e);
  }
};
