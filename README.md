# techblog-api

An RESTful API for a blog web application, created using ExpressJS, MongoDB &amp; NodeJS

## to start the server

```
npm install
npm run dev
```

## api endpoints

```
/api/blog
    / - POST, create blog
        body { title, authorName, authorID, blogBody }
    /all - GET, all blogs
    /:id - GET, blog of id
    /:id - DELETE, delete blog with id
    /:id - PATCH, update blog with id - NOT WORKING
    /approve/:id - PATCH, approve and add categories to a blog with id - NOT_WORKING

/api/auth
    /login - POST - NOT_WORKING
    /signup - POST, to create newUser
        body { fullName, email, password, userType }
        status code : 201 - Succesfully Created
        status code : 403 - Failed to create
```

## Mongo DB Schemas

### Blog Model

```
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
```

### User Model

```
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
```
