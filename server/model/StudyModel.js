const mongoose=require('mongoose');
const studySchema=mongoose.Schema({
    batch:Number,
    date:Date,
    plan:String
})
const studyModel=mongoose.model("studyPlan",studySchema);
module.exports=studyModel;