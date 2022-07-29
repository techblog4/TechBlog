const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorID: {
    type: String,
    required: true,
  },
  blogBody: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  categoryList: {
    type: Array,
    default: ["other"],
  },
});

module.exports = mongoose.model("Blog", blogSchema);
