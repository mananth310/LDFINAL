const express=require('express');
const app=express();
const dotenv=require('dotenv');
const path=require('path');
const cors = require('cors');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname,'config','config.env')});
const student=require('./router/student');
const user=require('./router/userRouter');
const course=require('./router/CourseRouter');
const batch=require("./router/batchRouter");
const study=require("./router/studyRouter");
const assignment=require('./router/AssignmentRouter')
connectDatabase();
app.use(express.json());
app.use(cors());
app.use('/api/a1/',student);
app.use('/api/a1/',user);
app.use('/api/a1/',course);
app.use('/api/a1/',batch);
app.use('/api/a1/',study);
app.use('/api/a1/',assignment);
app.listen(process.env.PORT, ()=>{
    console.log(`port listening ${process.env.PORT} on ${process.env.NODE_ENV}`);
})