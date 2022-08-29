const post = require("../Models/postModel");
const reply = require("../Models/replyModel");
const bcrypt = require("bcrypt");

exports.create = async (req, res) => {
  try {
    const found = await post.findOne({ name: req.body.name });
    if (found) {
      return res.status(400).json({ message: "name already taken" });
    }
    await post.create(req.body);
    res.status(200).json({ message: "Name accepted!" });
  } catch (e) {
    res.status(400).json({ message: "Error" });
  }
};

exports.getOne = async (req, res) => {
  try {
    const post = await post.findById(req.params.id);
    res.status(200).json({ message: "Found", post });
  } catch (e) {
    res.status(400).json({ message: "Error" });
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
