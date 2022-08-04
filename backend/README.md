# techblog-api

An RESTful API for a blog web application, created using ExpressJS, MongoDB &amp; NodeJS

## create a .env file

```
PORT = 5000
MONGODB_URI = mongodb+srv://techblog:api4tech@maincluster.rgcxgy4.mongodb.net/?retryWrites=true&w=majority
```

## to start the server

```
npm install
npm run dev
```

## API endpoints for blog

| http method | api endpoint          | desc                     |
| ----------- | --------------------- | ------------------------ |
| POST        | /api/blog/            | creates a blog           |
| GET         | /api/blog/add         | gets all blog            |
| GET         | /api/blog/:id         | gets a blog with that id |
| DELETE      | /api/blog/:id         | deletes blog with id     |
| PATCH       | /api/blog/:id         | updates a blog with id   |
| PATCH       | /api/blog/approve/:id | approve & add categories |

## API endpoints for auth

| http method | api endpoint     | desc                                    |
| ----------- | ---------------- | --------------------------------------- |
| POST        | /api/auth/login  | logins & returns a boolean (authStatus) |
| POST        | /api/auth/signup | creates a new user                      |
| GET         | /api/auth/:id    | gets users FullName                     |

```
/api/blog
    / - POST, create blog
        body { title, authorName, authorID, blogBody }
    /all - GET, all blogs
    /:id - GET, blog of id
    /:id - DELETE, delete blog with id
    /:id - PATCH, update blog with id (only title & blogBody can be updated)
    /approve/:id - PATCH, approve and add categories to a blog with id (hiting the endpoint itself approves, categories can be added too.
                      eg:  {
                           categoryList[0] : science,
                           categoryList[1]: nuclear
                           }

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
