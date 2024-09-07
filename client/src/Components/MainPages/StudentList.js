import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Datatable from 'react-data-table-component'
const preurl='https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1'
export const StudentList = () => {
  
  const [student,setStudent]=useState([]);
  const columns=[
    {
      name:"Student Name",
      selector:row=>row.name,
      sortable:true
    },
    {
      name:"Email ID",
      selector:row=>row.email,
      sortable:true
    },
    {
      name:"Contact No",
      selector:row=>row.cno,
      sortable:true
    },
    {
      name:"Course",
      selector:row=>row.course,
      sortable:true
    },
    {
      name:"Status",
      selector:row=>row.status === 0 ? "Incomplete":"Completed",
      sortable:true
    },
    {
      name:"Batch",
      selector:row=>row.batch !=="NA"?row.batch:"Batch Not Assigned",
      sortable:true
    }

    

  ]
  useEffect(()=>{
    studentData();
  },[])
  const studentData=()=>{
    axios.get(preurl+'/getStudentData')
    .then((res)=>setStudent(res.data))
    .catch((err)=>console.log(err))
  }
const handleFilter=(e)=>{
  const newData=student.filter(row =>{
    return row.name.toLowerCase().includes(e.target.value.toLowerCase());
  })
  setStudent(newData)
}
  return (
    <div className='p-4'>
      <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full' >
        <h3>Student Name List</h3>
      </div>
      <div className='mt-4'>
        <div className='text-end p-3'><input type="text" className='inputField' placeholder='Search....' onChange={handleFilter}/></div>
        <Datatable 
          columns={columns}
          data={student}
          selectableRows
          fixedHeader
          pagination
        >

        </Datatable>
      </div>

    </div>
  )
}
