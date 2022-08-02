const express=require("express");
const cors = require("cors");
const jwt =require("jsonwebtoken");
const signupmongo=require("./src/model/signup");
const adminmongo =require("./src/model/admin");
// const { request } = require("express");
const app = new express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT || 4001;


app.post("/signup",(req,res)=>{
     res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers: Content-Type, application/json");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
    console.log(req.body);

    var signups = {
        name:req.body.item.name,
        user:req.body.item.user,
        email:req.body.item.email,
        password:req.body.item.password,
      
    }
   var post = new signupmongo(signups)
//    user.save();

    
post.save(function (err) {
    if (!err) {
      res.json({status:true}).status(200);
      
    }
    else{
        console.log("error");
    }
  });
});


    app.post("/login",(req,res)=>{
      
      res.header("Access-Control-Allow-Origin","*");
      res.header("Access-Control-Allow-Headers: Content-Type, application/json");
      res.header("Access-Control-Allow-Headers: Content-Type, Authorization");
      res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    
      let logindata= {
              email:req.body.data.email,
              password:req.body.data.password
             }
  signupmongo.findOne({
        "email":logindata.email
        },
function(err,user){
if(logindata.password==user.password){
if(user.user=="student"){
  res.json({student:true}).status(200);
}
else{
  res.json({trainer:true}).status(200); 
}
 }
 else{
  res.status(401).send("invalid authorization");
 }
  })

});


  //  let logindata = req.body;
  //      console.log(logindata.data.email);
  //      adminmail= logindata.data.email;
  //      adminpword= logindata.data.password;
  //      console.log(adminemail);

  //      adminmongo.findOne({"adminemail":adminmail , "password":adminpword}).then((data)=>{
  //        console.log(data)})});


      // adminmongo.findOne({
      // //   if(adminpword==="password" &&adminmail=== "adminemail"){
      //     let payload = {subject:uname+pword};
      //     let token = jwt.sign(payload , "secretkey")
      //     res.send({status: true , token})}
      //     else{

      
  app.post("/addBlogCategory",(req,res)=>{
   res.header("Access-Control-Allow-Origin","*");
   res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
   console.log(req.body);
   console.log("NOt required");})   
      
         
    
      
      
  
app.listen(PORT,()=>{
    console.log("server is running");
});