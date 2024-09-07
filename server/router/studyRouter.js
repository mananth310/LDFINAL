const express=require('express');
const { creatNewStudyPlan, getStudyPlans } = require('../controllers/studyController');
const router=express.Router();
router.route("/addStudyPlan").post(creatNewStudyPlan)
router.route("/getPlans").post(getStudyPlans)
module.exports=router;