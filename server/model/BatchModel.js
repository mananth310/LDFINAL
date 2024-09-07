const mongoose=require('mongoose');
const batchSchema=new mongoose.Schema({
    id:{
        type:Number,
        unique:true
    },
    course:String,
    staff:String,
    classTime:String
})
const batchModel=mongoose.model("batch",batchSchema);
module.exports=batchModel;