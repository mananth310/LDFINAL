const batchModel=require('../model/BatchModel');
const studentModel=require('../model/student');
exports.createBatch= async(req,res,next)=>{
        const {selectedCourse,selectedStaff,classTime,batchId}=req.body;
        await batchModel.create({
            id:batchId,
            course:selectedCourse,
            staff:selectedStaff,
            classTime:classTime
        })
        .then(()=>{
            const {studentRow,batchId}=req.body;
            studentRow.map(async(row)=>(
                await studentModel.updateOne({"_id":row._id},{$set:{"batch":batchId}})
                .then((res)=>DataTransfer.json())
                .catch((err)=>console.log(err))
            ))            
        })
        .catch((err)=>console.log(err))
}
exports.getBatchNo=async(req,res,next)=>{
    await batchModel.find().sort({id:-1}).limit(1)
    .then(batch=>res.json(batch))
    .catch(err=>console.log(err))
}
exports.getBatchStaffWise=async(req,res,next)=>{
    const  {sid}=req.body;
    await batchModel.find({
        staff:sid
    })
    .then(batch=>res.json(batch))
    .catch(err=>console.log(err))
}