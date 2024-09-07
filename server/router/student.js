const express=require('express');
const { createStudentData, loginCheck, getStudentdata, getStudentDataCourseWise, getStudentDataBatchWise} = require('../controllers/studentController');
const router=express.Router();
router.route('/student').post(createStudentData);
router.route('/login').post(loginCheck);
router.route('/getStudentData').get(getStudentdata);
router.route('/getStudenCouseBase').post(getStudentDataCourseWise)
router.route('/getStudentsforAssignment').post(getStudentDataBatchWise)
module.exports=router;