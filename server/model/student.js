const mongoose =require("mongoose");
const StudentSchema=new mongoose.Schema({
    name:String,
    email:String,
    cno:String,
    dob:Date,
    course:String,
    status:{
        type:Number,
        default:0
    },
    batch:{
        type:String,
        default:"NA"
    }
});
const StudentModel=mongoose.model("student",StudentSchema)
module.exports=StudentModel