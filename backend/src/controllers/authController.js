const User = require("../models/userModel");

const checkCred = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    if (user[0].password == req.body.password)
      res.status(200).json({ authStatus: true });
    else throw err;
  } catch (err) {
    res.status(403).json({ authStatus: false });
  }
};

const signUp = async (req, res) => {
  try {
    const newUser = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
    });
    res.status(201).send(newUser);
  } catch (err) {
    res.status(403).send("Cannot Create an User");
  }
};

module.exports = {
  checkCred,
  signUp,
};
