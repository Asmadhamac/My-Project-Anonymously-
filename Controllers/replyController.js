const reply = require("../Models/replyModel");
const post = require("../Models/replyModel");
const bcrypt = require("bcrypt");

exports.comment = async (req, res) => {
  try {
    const comment = await reply.findById(req.params.id);
    res.status(200).json({ message: "comment placed" });
  } catch (e) {
    res.status(200).json({ message: "Error" });
  }
};
