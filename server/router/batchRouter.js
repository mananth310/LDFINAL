const express=require('express');
const { createBatch, getBatchNo, getBatchStaffWise } = require('../controllers/BatchController');
const router=express.Router();
router.route("/addNewBatch").post(createBatch);
router.route("/getLastBatchId").get(getBatchNo);
router.route("/getBatchStaffWise").post(getBatchStaffWise)
module.exports=router;