const User = require("../models/userModel");

const checkCred = (req, res) => {
  const userEmail = req.body.email;
  const userPass = req.body.password;
  console.log(userEmail, userPass);
  res.status(200).json({ message: "Logged In" });
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
