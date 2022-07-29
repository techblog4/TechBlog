const express = require("express");
const router = express.Router();
const {
  createBlog,
  getBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  approveBlog,
} = require("../controllers/blogController");

router.post("/", createBlog);
router.get("/all", getBlogs);
router.get("/:id", getBlog);
router.patch("/approve/:id", approveBlog);
router.patch("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
