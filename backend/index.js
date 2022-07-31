const express=require("express");
const cors = require("cors");
const jwt =require("jsonwebtoken");
const signupmongo=require("./src/model/signup");
const blogCategoryMongo=require("./src/model/addBlogCategory");
const app = new express();
const PORT = process.env.PORT || 4001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/register",(req,res)=>{
     res.header("Access-Control-Allow-Origin","*");
    // res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);

    var signups = {
        name:req.body.item.name,
        user:req.body.item.user,
        email:req.body.item.email,
        password:req.body.item.password,
        confirmpassword:req.body.item.confirmpassword
    }
   var post = new signupmongo(signups)
//    user.save();

    
post.save(function (err) {
    if (!err) {
      res.redirect('/');
    }
    else{
        console.log("data entered");
    }
  });
})
app.post("/addBlogCategory",(req,res)=>{
     res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
    res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
    console.log(req.body);
    console.log("NOt required");

    var addBlogCategory = {
        blogCategory:req.body.item.blogCategory
    }
   var blogCategoryDB = new blogCategoryMongo(addBlogCategory)   
   blogCategoryDB.save(function (err) {
    if (!err) {
      res.redirect('/');
    }
    else{
        console.log("data entered");
    }
  });
})



app.listen(PORT,()=>{
    console.log("server is running");
});