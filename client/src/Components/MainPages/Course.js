import axios from 'axios';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
const crslist="flex w-full h-32 mb-3 p-3 item-center ";
export const Course = () => {
  const [courseName, setCourseName]=useState("");
  const [courseDisc, setCourseDisc]=useState("");
  const [courseData,setCourseData]=useState([]);
  const preurl='https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1'
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(preurl+'/newCourse',
        {courseName,courseDisc})
    .then(result=>{console.log(result);})          
    .catch(err=>console.log(err))
    alert(`Registerd Successfully`);
    setCourseName("")
    setCourseDisc("")
    getCourseList();
  }
 useEffect(()=>{
  getCourseList();
 },[])
  const getCourseList=()=>{
    axios.get(preurl+'/getCourse')
    .then((res)=>setCourseData(res.data.course))
    
  }

  return (
    <>
    <div className='p-4'>
    <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-3' >
        <h3>Course Details</h3>
      </div>
        <form onSubmit={handleSubmit} className='text-sm'>

          <div className='flex flex-col md:flex-row'>
            <div className='w-1/3 px-5'>
            <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-3' >
              <h3>Add New Course</h3>
            </div>
              <span>
                Course Name
              </span>
              <input className='inputForm' type='text' value={courseName} onChange={(e)=>setCourseName(e.target.value)}/>
            
              <span>
                Course Discription
              </span>
              <textarea className='inputForm'  type='text' value={courseDisc} onChange={(e)=>setCourseDisc(e.target.value)}/>
             <div className='w-full text-center'>
                <button className='btn-prim text-center' >Save</button>
              </div>
            </div>
            <div className=' px-5 md:border-l-2 w-full overflow-scroll '>
            <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-3' >
              <h3>Course List</h3>
            </div>
              {
                // console.log(courseData)
                courseData.map((courseInfo)=>(
                  
                  <div className={classNames(courseInfo.registerStatus===0 ? "bg-green-300":"bg-red-500"," overflow-hidden" ,crslist)}>
                    
                    <div>
                      <strong>{courseInfo.courseName}</strong>
                      <p>{courseInfo.description}</p>
                      </div>
                    
                    

                  </div>
                  
                ))
              }



            </div>
            
          </div>
        </form>
    </div>
    
    </>
  )
}
