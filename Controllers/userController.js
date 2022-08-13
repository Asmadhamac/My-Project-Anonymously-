const userModel = require("../Models/userModel");
const bcrypt = require("bcrypt");

exports.signUp = async (req, res) => {
  const { nickName, password } = require.body;
  const newUser = await userModel.create({
    nickName,
    password,
  });
  if (newUser.nickName === found) {
    return;
  }
  try {
    const found = await userModel.findOne({
      nickName: req.body.nickName,
    });
    if (found) {
      return res.status(400).json({ message: "anonymous Name already take" });
    }
    if (req.body.password !== req.password) {
      return res.status(400).json({ message: "password not matching" });
    }
  } catch (e) {
    res.status(200).json({ message: "Error" });
  }
};
