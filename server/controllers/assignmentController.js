const assignmentModel=require('../model/AssignmentModel');
exports.createAssignment=async(req,res,next)=>{
    const {selectedBatch,Title,details,dos,maxMark,studentRow}=req.body;
    studentRow.map(async(row)=>(
        await assignmentModel.create({
            batch:selectedBatch,
            title:Title,
            details:details,
            ldos:dos,
            maxMark:maxMark,
            studentId:row._id
        }).then(assig=>res.json(assig))
        .catch(err=>console.log(err))
    ))
}
exports.getAssignment=async(req,res,next)=>{
    const {elem}=req.body;
    await assignmentModel.aggregate([
        {$match:{batch:elem}},{$group:{_id:"$title"}}
    ]).then((res)=>console.log(res))
    .catch(err=>console.log(err))
}
exports.getAssignmentStudent=async(req,res,next)=>{
    const {studentId}=req.body;
    await assignmentModel.find({studentId:studentId}).then((assig)=>res.json(assig))
    .catch(err=>console.log(err))
}
exports.submitAssignmenmt=async(req,res,next)=>{
    const {link,subAssignId}=req.body;
    await assignmentModel.updateOne({_id:subAssignId},{$set:{assignmentLink:link}})
    .then((assig)=>res.json(assig))
    .catch(err=>console.log(err))
}
exports.markAwarded=async(req,res,next)=>{
    const {link,subAssignId}=req.body;
    await assignmentModel.updateOne({_id:subAssignId},{$set:{markUpdain:link}})
    .then((assig)=>res.json(assig))
    .catch(err=>console.log(err))
}