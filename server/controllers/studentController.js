const studentModel=require('../model/student');
exports.createStudentData= async (req,res,next)=>{
    console.log(req.body)
    await studentModel.create(req.body)
    .then(students=>res.json(students))
    .catch(err=>res.json(err))
}
exports.loginCheck= async (req,res,next)=>{
    const {email,cno}=req.body;
    await studentModel.findOne({email:email})
    .then(user=>{
        if(user.cno==cno)
        {
            res.json({
                status:"Success",
                user:user
            });
        }
        else
            {
                res.json("incorrect password");
            }
    })
    .catch(err=>console.log(err))    
}
exports.getStudentdata= async(req,res,next)=>{
    await studentModel.find()
    .then(students=>res.json(students))
    .catch(err=>console.log(err))
}
exports.getStudentDataCourseWise = async (req,res,next)=>{
    const {e}=req.body;
    await studentModel.find({course:e,batch:"NA"})
    .then(students=>res.json(students))
    .catch(err=>console.log(err))
}
exports.getStudentDataBatchWise=async (req,res,next)=>{
    const {elem}=req.body;
    await studentModel.find({
        batch:elem
    })
    .then(students=>res.json(students))
    .catch(err=>console.log(err)) 
}