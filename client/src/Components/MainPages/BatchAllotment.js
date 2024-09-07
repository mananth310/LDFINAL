import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Datatable from 'react-data-table-component'

const classScheduel = [
  {
    id:1,
    Days:"MON,WED,FRI",
    Time:"8:00 PM to 9:00 PM"
  },
  {
    id:2,
    Days:"MON,WED,FRI",
    Time:"6:00 PM to 7:00 PM"
  },
  {
    id:3,
    Days:"TUE,THU,SAT",
    Time:"8:00 PM to 9:00 PM"
  },
  {
    id:4,
    Days:"TUE,THU,SAT",
    Time:"6:00 PM to 7:00 PM"
  }
]


export const BatchAllotment = () => {
  const [course,setCouese]=useState([]);
  const [student,setStudent]=useState([]);
  const [staff,setStaff]=useState([]);
  const [selectedCourse,setSelectedCouese]=useState();
  const [studentRow,setStudentRow]=useState()
  const [selectedStaff,setSelectedStaff]=useState();
  const [classTime,setClassTime]=useState();
  const [batchId,setBatchId]=useState();
 const preurl='http://localhost:8000/api/a1'

  const createBatch=()=>{
    axios.post(preurl+"/addNewBatch",      
      {selectedCourse,selectedStaff,classTime,studentRow,batchId}
    ).then((res)=>console.log(res))
    .catch(err=>console.log(err))
    getBatchNo()
    alert("Batch Updated Sucessfully")
  }


  useEffect(()=>{
    getCourseData()
    getBatchNo()
  },[])
  const getBatchNo=()=>{
    axios.get(preurl+"/getLastBatchId")
    .then((res)=>{
      res.data.map((row)=>(
        setBatchId(row.id+1)
      ))
    })
    .catch(err=>console.log(err))
    
  }
  const handleSelector=(state)=>{
    setStudentRow(state.selectedRows);
    console.log(state.selectedRows);
  }
  const getCourseData=()=>{
    axios.get(preurl+'/getCourse')
    .then((res)=>setCouese(res.data.course))
  }

  const handleSelectFaculty=(e)=>{
    setSelectedCouese(e)
    axios.post(preurl+"/getStaffCouseBase",{e})
    .then((res)=>setStaff(res.data))
    .catch((err)=>console.log(err))
    axios.post(preurl+"/getStudenCouseBase",{e})
    .then((res)=>setStudent(res.data))
    .catch((err)=>console.log(err))

  }

  const columns=[
    {
       name:"Student Name",
       selector:row=>row.name
    },
    {
      name:"Email ID",
      selector:row=>row.email
   },
   {
    name:"Contact No",
    selector:row=>row.cno
    },
    {
     name:"Course",
     selector:row=>row.course
    }
  ]

  return (
    <div className='p-4'>
      <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-3' >
              <h3>Batch Allotment</h3>
            </div>


    <div className='flex'>
      <div className='w-1/4'>
        <div>
        <span>
          Course
        </span>
        <select className='inputForm'  onChange={(e)=>handleSelectFaculty(e.target.value)}> 
        <option value="">Select Course</option>
          { 
          // console.log(course)
            course.map((row,i)=>(
              // console.log(row)
               <option key={i}>{row.courseName}</option>
            ))
          }
        </select>
        </div>
        <div>
        <span>
          Faculty
        </span>
        <select className='inputForm' onChange={(e)=>setSelectedStaff(e.target.value)}>
        <option value="">Select Faculty</option>
          { 
          // console.log(staff.data)
          staff.map((row,i)=>(
              //  console.log(row)
                <option key={i}>{row.name+" "+row.design}</option>
            ))
          }
        </select>
        </div>
        <div>
        <span>
          Class Time
        </span>
        <select className='inputForm' onChange={(e)=>setClassTime(e.target.value)} >
        <option value="">Select Time</option>
          { 
          // console.log(course)
          classScheduel.map((row,i)=>(
              // console.log(row)
               <option key={i}>{row.Days+" "+row.Time}</option>
            ))
          }
        </select>
        </div>
        <div className='w-full text-center'>
          <button type='button' className='btn-success' onClick={createBatch}>Allot</button>
        </div>
      </div>
      <div className=' overflow-scroll w-full'> 
          <Datatable 
            columns={columns}
            data={student}
            fixedHeader
            selectableRows
            onSelectedRowsChange={handleSelector}
          >

          </Datatable>
      </div>
    </div>

    </div>
  )
}
