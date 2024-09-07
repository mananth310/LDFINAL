const userModel=require('../model/user');
exports.userLogin= async(req,res,next)=>{
    const {username,pass}=req.body;
    await userModel.findOne({email:username})
    .then(users=>{
        if(users.cno==pass)
            {
                res.json({
                    status:"Success",
                    user:users
                });
            }
            else
                {
                    res.json("incorrect password");
                }
        }
    ).catch(err=>console.log(err))
}
exports.addNewUser= async(req,res,next)=>{
    console.log(req.body)
    const {
        facultyName,
        designation,
        email,
        doj,
        cno
    }=req.body
    await userModel.create({
        name:facultyName,
        design:designation,
        email:email,
        doj:doj,
        cno:cno,
        created_by:"ANANTH",
        created_at:Date.now(),
        status:0,
        stype:"Staff"
    })
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
}
exports.getUserData=async(req,res,next)=>{
    await userModel.find()
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
}
exports.getStaffData= async(req,res,next)=>{
    const {e}=req.body
    await userModel.find({course:e})
    .then(users=>res.json(users))
    .catch(err=>console.log(err))
}
















