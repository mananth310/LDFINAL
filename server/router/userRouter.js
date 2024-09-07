const express=require('express');
const { userLogin, addNewUser, getUserData, getStaffData } = require('../controllers/userController');
const router=express.Router();
router.route("/adminLogin").post(userLogin);
router.route("/addNewUser").post(addNewUser);
router.route("/getUsers").get(getUserData);
router.route("/getStaffCouseBase").post(getStaffData);
module.exports=router;