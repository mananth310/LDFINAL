const courseModel=require('../model/CourseModel');
exports.createNewCourse= async (req,res,next)=>{
    // console.log(req.body)
    const {courseName,courseDisc}=req.body;
    await courseModel.create({
        courseName:courseName,
        description:courseDisc,
        created_by:"ananth",
        created_at:Date.now()
    })
    .then(Courses=>res.json(Courses))
    .catch(err=>res.json(err))
}
exports.getCourseData= async (req,res,next)=>{
    await courseModel.find()
    .then(course => {
        res.json({
            course
        });
    }).catch(err=>console.log(err))
}