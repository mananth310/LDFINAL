const studyModel=require('../model/StudyModel');
exports.creatNewStudyPlan= async(req,res,next)=>{
    const {batchStudy, studyDate, studyPlan} =req.body;
    await studyModel.create({
        batch:batchStudy,
        date:studyDate,
        plan:studyPlan
    })
    .then((plan)=>res.json(plan))
    .catch(err=>console.log(err))
}
exports.getStudyPlans= async (req,res,next)=>{
    const {elem}=req.body;
    studyModel.find({
        batch:elem
    }).then(plan=>res.json(plan)).catch(err=>console.log(err))
}