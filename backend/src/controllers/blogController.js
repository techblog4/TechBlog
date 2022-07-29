const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create({
      title: req.body.title,
      authorName: req.body.authorName,
      authorID: req.body.authorID,
      blogBody: req.body.blogBody,
    });
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).send("Cannot create the blog");
  }
};

const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ _id: req.params.id });
    res.status(200).json(blog);
  } catch {
    res.status(400);
    res.send({ error: "blog doesn't exist!" });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch {
    res.status(400);
    res.send({ error: "Unable to get all blogs!" });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await blog.findOne({ _id: req.params.id });

    if (req.body.title) blog.title = req.body.title;

    if (req.body.blogBody) blog.blogBody = req.body.blogBody;

    await blog.save();
    res.send(blog);
  } catch {
    res.status(404);
    res.send({ error: "Blog doesn't exist!" });
  }
};

const deleteBlog = async (req, res) => {
  try {
    await Blog.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(400);
    res.send({ error: "Blog doesn't exist!" });
  }
};

const approveBlog = async (req, res) => {
  try {
    const blog = await blog.findOne({ _id: req.params.id });
    console.log(blog);
    blog.isApproved = true;

    // if (req.body.categoryList) blog.categoryList = req.body.categoryList;

    await blog.save();
    res.send(blog);
  } catch {
    res.status(400);
    res.send({ error: "Blog failed to approve!" });
  }
};

module.exports = {
  createBlog,
  getBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
  approveBlog,
};
