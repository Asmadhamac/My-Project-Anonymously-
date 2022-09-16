const post = require("../Models/postModel");
const reply = require("../Models/replyModel");
const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
  try {
    await post.create(req.body);
    res.status(200).json({ message: "Posted successful!" });
  } catch (e) {
    res.status(400).json({ message: "Error" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const posts = await post.findById(req.params.id);
    res.status(200).json({ message: "Found", posts });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const posts = await post.find({});
    res.status(200).json({ found: posts.length, posts });
  } catch (e) {
    res.status(400).json({ message: "Error" });
  }
};
