const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://TechBlog:akjs1234@techblogcluster.iqvwdiy.mongodb.net/techBlog");
const schema =mongoose.Schema;
const userschema = new schema({
    title:String,
    file:String,
    authorname:String,
    description:String,
    date1:String,
    isVerified:String,
    userEmail:String
    
});
var usermongo =mongoose.model("useradd",userschema);
module.exports=usermongo;



