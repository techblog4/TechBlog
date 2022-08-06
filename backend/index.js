const express=require("express");
const cors = require("cors");
const jwt =require("jsonwebtoken");
const signupmongo=require("./src/model/signup");
const adminmongo =require("./src/model/admin");
const homemongo =require("./src/model/home");
const usermongo=require("./src/model/usermongo");
const app = new express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT || 4001;



app.get("/home",(req,res)=>{
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    
  homemongo.find()
  .then((data)=>{
     res.send(data)
    });
    
  });

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
    signupmongo.findOne({
      "email":signups.email
      },
      function(err,user){  
        if(!user){
              var post = new signupmongo(signups)
              post.save(function (err) {
              if (!err) {
                res.json({status:true}).status(200);
                
              }
              else{
                  console.log("error");
              }
             }); }
            else
            {
              res.json({userexist:true}).status(406);
            }
   
 });});


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
if(user) {
  if(logindata.password==user.password){
if(user.user=="student"){
   let payload = {subject:logindata.email+logindata.password}
   let token =jwt.sign(payload,'secretkey')
     res.status(200).send({student:true,token});
  
}
else if(user.user=="trainer"){
   let payload = {subject:logindata.email+logindata.password}
   let token =jwt.sign(payload,'secretkey')
   res.status(200).send({trainer:true,token});
  
}
else if(user.user=="admin"){
     let payload = {subject:logindata.email+logindata.password}
     let token =jwt.sign(payload,'secretkey')
     res.status(200).send({admin:true,token});
  
}
}
 else{
  res.json({unathorised:true}).status(401);
 }
}
  else{
    res.json({unathorised:true}).status(401);
  }
});
});
  
  

app.post("/addpost", (req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

    console.log(req.body)

   var posts ={

        title:req.body.data.title,
        file:req.body.data.file,
        authorname:req.body.data.authorname,
        description:req.body.data.description,
       
}
    var posters = new usermongo(posts);
    posters.save();

});




      
  app.post("/addBlogCategory",(req,res)=>{
   res.header("Access-Control-Allow-Origin","*");
   res.header('Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS');
   console.log(req.body);
   console.log("NOt required");});   
      
         
    
      
      
  
app.listen(PORT,()=>{
    console.log("server is running");
});