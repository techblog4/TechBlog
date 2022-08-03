const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://TechBlog:akjs1234@techblogcluster.iqvwdiy.mongodb.net/techBlog");
const schema =mongoose.Schema;
const adminschema = new schema({
    email:String,
    password:String,
    
});
var adminmongo =mongoose.model("admins",adminschema);
module.exports=adminmongo;



