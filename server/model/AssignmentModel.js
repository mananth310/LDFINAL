const mongoose=require('mongoose')
const assignmentSchema=new mongoose.Schema({
    batch:Number,
    title:String,
    details:String,
    ldos:Date,
    maxMark:Number,
    status:{
        type:String,
        default:"Pending"
    },
    assignmentLink:String,
    markUpdain:Number,
    studentId:String
})
const assignmentModel=mongoose.model("assignment", assignmentSchema)
module.exports=assignmentModel;