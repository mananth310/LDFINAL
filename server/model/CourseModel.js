const mongoose=require('mongoose')
const courseSchema=new mongoose.Schema({
    courseName:String,
    description:String,
    registerStatus:{
        type:Number,
        default:0
    },
    created_by:String,
    created_at:Date,
    updated_by:{
        type:String,
        default:null
    },
    updated_at:{
        type:Date,
        default:null
    }
})
 const courseModel=mongoose.model("course",courseSchema);
 module.exports=courseModel;