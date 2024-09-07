const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:String,
    design:String,
    doj:Date,
    email:String,
    cno:String,
    created_by:String,
    created_at:Date,
    status:{
        type:Number,
        default:0
    },
    stype:String,
    updated_by:{
        type:String,
        default:null
    },
    updated_at:{
        type:Date,
        default:Date.now()
    }
})
const userModel=mongoose.model("user",userSchema);
module.exports=userModel;