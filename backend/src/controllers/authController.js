const User = require("../models/userModel");
const Admin = require("../models/adminModel");

const checkCred = async (req, res) => {
  try {
    const user = await User.find({ email: req.body.email });
    const admin = await Admin.find({ adminEmail: req.body.adminEmail });
    if(admin[0].adminPassword == req.body.adminPassword)
    {
      res.status(200).json({ authStatus: true });
    }
    else if (user[0].password == req.body.password)
    {
      // const user = await User.find({ email: req.body.email });
      // res.status(200).json({ authStatus: true });
      if(user[0].userType == "student")
      {
        res.status(200).json({ authStatus: true });
      }
      else
      {
        res.status(200).json({ authStatus: true });
      }
    }
    else
    { 
      throw err;
    }
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

const getName = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(200).json({ fullName: user[0].fullName });
  } catch (err) {
    res.status(403);
  }
};

module.exports = {
  checkCred,
  signUp,
  getName,
};
