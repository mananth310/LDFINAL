const  express=require('express');
const { createNewCourse, getCourseData } = require('../controllers/courseController');
const router=express.Router();
router.route('/newCourse').post(createNewCourse);
router.route('/getCourse').get(getCourseData);
module.exports=router;