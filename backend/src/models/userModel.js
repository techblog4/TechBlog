const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userType: {
    type: String,
    enum: ["student", "trainee", "admin"],
    default: "student",
  },
  blogList: {
    type: Array,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);
