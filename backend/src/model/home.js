const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://TechBlog:akjs1234@techblogcluster.iqvwdiy.mongodb.net/techBlog");
const schema =mongoose.Schema;
const homeschema = new schema({
    imageurl1:String,
    imageurl2:String,
    imageurl3:String
});
var homemongo =mongoose.model("homes",homeschema);
module.exports=homemongo;