const express=require('express');
const { createAssignment, getAssignment, getAssignmentStudent, submitAssignmenmt, markAwarded } = require('../controllers/assignmentController');
const router=express.Router();
router.route("/newAssignment").post(createAssignment);
router.route("/getAssignment").post(getAssignment)
router.route("/getAllotedAssignment").post(getAssignmentStudent)
router.route("/SubmitAssigmentData").post(submitAssignmenmt)
router.route("/MarkAward").post(markAwarded)
module.exports=router;