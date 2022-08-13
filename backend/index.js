const express=require("express");
const cors = require("cors");
const jwt =require("jsonwebtoken");
const multer = require('multer');
const signupmongo=require("./src/model/signup");
const adminmongo =require("./src/model/admin");
const blogcategorymongo = require("./src/model/addBlogCategory");
const { request } = require("express");
const homemongo =require("./src/model/home");
const usermongo=require("./src/model/usermongo");
const app = new express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT || 4001;



// Middleware Fuction to verify Token send from FrontEnd
function verifyToken(req,res,next){

  if(!req.headers.authorization){
     return res.status(401).send("Unauthorized Access")
  }
  let token = req.headers.authorization.split(' ')[1];
 
 console.log(token);
 if(token == "null"){
     return res.status(401).send("Unauthorized Access")
 }

 let payload= jwt.verify(token , "secretkey")
 console.log(payload);
 if(!payload){
     return res.status(401).send("Unauthorized Access")
 }
 req.userId = payload.subject
      next()
 };


app.get("/home",(req,res)=>{
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    
  usermongo.find()
  .then((data)=>{
     res.send(data)
    });
    
  });

  app.get("/homecarosel",(req,res)=>{
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
   let studentEmail = {subject:logindata.email};
   let studentToken = jwt.sign(studentEmail.subject,'secretkey');
   const decoded1 = jwt.verify(studentToken, "secretkey");
     res.status(200).send({student:true,token,decoded1});
  
}
else if(user.user=="trainer"){
   let payload = {subject:logindata.email+logindata.password}
   let token =jwt.sign(payload,'secretkey')
   let payloadEmail = {subject:logindata.email};
   let emailToken = jwt.sign(payloadEmail.subject,'secretkey');
   const decoded = jwt.verify(emailToken, "secretkey");
   res.status(200).send({trainer:true,token,decoded});
  
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
  
  

app.post("/addpost", verifyToken,(req,res)=>{

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  
    

    const d = new Date();
    var date=d.toDateString();
    var posts ={
        
        title:req.body.data.title,
        file:req.body.data.file,
        description:req.body.data.description,
        isVerified:'0',
        date1:date,
        email:req.body.data.currentEmail,
        // userName:req.body.data.currentUser
        // file: 'http://localhost:4001/uploads/'+ req.data.file.filename,
       
    }
  
 
    var posters = new usermongo(posts);
    posters.save();

});


app.post("/addblogcategory",verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin","*");
 res.header("Access-Control-Allow-Headers: Content-Type, application/json");
 res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
 console.log(req.body);
 var blogCategory = {
     blogCategory:req.body.item.blogCategory
 }
var blogCategoryDB = new blogcategorymongo(blogCategory)
blogCategoryDB.save(function (err) {
 if (!err) {
   res.json({status:true}).status(200);
   
 }
 else{
     console.log("error");
 }
});
});


app.get("/getAllBlogs",verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
  
  
  usermongo.find().then((data)=>{
     res.send(data);
    });
    
  });
app.get("/getNotApprovedBlogs",verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
  usermongo.find({$and:[{isVerified:"0"}]}).then((data)=>{
     res.send(data);
    });
    
  });

app.post("/getBlogById",verifyToken,(req,res)=>{
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
  usermongo.findById(req.body.data).then((data)=>{
     res.send(data);
    });
  });

app.post("/approveBlog",(req,res)=>{
  res.header("Access-Control-Allow-Origin","*"); 
  res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
  usermongo.findByIdAndUpdate({"_id":req.body.data},
  {$set:{"isVerified":"1"}}).then((data)=>{
     res.send(data);
    });
  });

  // app.post("/getUserName",(req,res)=>{
    
  app.post("/getUserName",verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin","*"); 
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    email1=req.body.data.currentEmail;
    
    

    signupmongo.find({$and:[{email:email1}]}).then((data)=>{
    
      
       res.send(data);
       
      });
      
    });
  app.post("/currentUserBlogs",verifyToken,(req,res)=>{
    res.header("Access-Control-Allow-Origin","*"); 
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
      email1=req.body.data.currentEmail;
      console.log(email1);
  
    usermongo.find({$and:[{email:email1}]}).then((data)=>{
      console.log(data);
       res.send(data); 
      });
    });

    app.get('/:id',  (req, res) => {
  
      const id = req.params.id;
     
        usermongo.findOne({"_id":id})
        .then((posts)=>{
            res.send(posts);
        });
    });

    
  app.put('/update',verifyToken,(req,res)=>{
    console.log(req.body)
    id=req.body._id,
    
    title = req.body.title,
    file = req.body.file,
    
    description = req.body.description
   
    
   usermongo.findByIdAndUpdate({"_id":id},
                                {$set:{
                                "title":title,
                                "file":file,
                                "description":description
                                }})
   .then(function(){
       res.send();
   })
 })

 app.delete('/remove/:id',verifyToken,(req,res)=>{
   
  id = req.params.id;
  usermongo.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('success')
      res.send();
  })
});
app.get('/:_id',(req,res)=>
{
  const id = req.params.id;
     
  usermongo.findOne({"_id":_id},
                    {$set:{
                   "title":title,
                   "file":file,
                  "description":description
    }})
    .then((posts)=>{
      res.send(posts);
  });
})

app.listen(PORT,()=>{
    console.log("server is running");
});