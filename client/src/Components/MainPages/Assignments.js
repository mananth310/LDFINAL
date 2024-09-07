import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import Accordion from './Accordion';
const preurl='https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1'
export const Assignments = () => {
  const [batch,setBatch]=useState([])
  useEffect(()=>{
    getBatch()
  },[])
  const getBatch=()=>{
    const sid=localStorage.getItem("id");
    console.log(sid);
    axios.post(preurl+"/getBatchStaffWise",{sid})
    .then((res)=>setBatch(res.data))
    .catch(err=>console.log(err))
  }

  const [selectedBatch,setSelectedBatch]=useState("")
  const [Title,setTitle]=useState("")
  const [details,setDetails]=useState("")
  const [dos,setDos]=useState("")
  const [maxMark,setMaxMark]=useState("")
  const [studentData,setStudentData]=useState()
  const [studentDataArr,setStudentDataArr]=useState([])
  const [studentRow,setStudentRow]=useState()
  const [assignment,setAssigment]=useState()
  const [assignmentRow,setAssignmentRow]=useState()
  const getStudent=(elem)=>{
    axios.post(preurl+"/getStudentsforAssignment",{elem})
    .then((res)=>{setStudentData(res.data)
      setStudentDataArr(res.data)
    })
    .catch(err=>console.log
      (err))
  }
  const createAssignment=()=>{
    axios.post(preurl+"/newAssignment", {selectedBatch,Title,details,dos,maxMark,studentRow})
    .then((res)=>{
      if(res.statusText==="OK"){
        alert("Assignment Saved sucessfully")
     }else{
         alert("Assignment Not Saved ")
     }
    })
  }
  const getAssignment=(elem)=>{
      axios.post(preurl+"/getAssignment",{elem})
      .then((res)=>console.log(res.data))
      .catch(err=>console.log(err))
  }
  const assignmentColumns=[
    {
      name:"Assignments",
      selector:row=>row.title
    }
  ]
  const columns=[
    {
      name:"Student Name",
      selector:row=>row.name
    },
    {
      name:"Email ID",
      selector:row=>row.email
    },{
      name:"Contact No",
      selector:row=>row.cno
    }
  ]
  const handleSelector=(state)=>{
    setStudentRow(state.selectedRows);
    console.log(state.selectedRows);
  }
  const handleAssignSelector=(state)=>{
    setAssignmentRow(state.selectedRows);
    console.log(state.selectedRows);
  }

  return (
    <div className='p-4'>
        <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-3' >
          <h3>Assignments</h3>
        </div>

      
      <div className='flex'>
            <div className='w-1/3 border-r-4 p-2'>
                <div>
                <span>Batch</span>
                <select className='inputForm' value={selectedBatch} onChange={(e)=>{
                  setSelectedBatch(e.target.value);
                  getStudent(e.target.value)
                  }}>
                    <option value="">Select Batch</option>
                    {
                      batch.map((row)=>(
                        <option>{row.id}</option>
                      ))
                    }
                </select>
                </div>
                <div>
                <span>Assignment Title</span>
                <input type="text"  className='inputForm' value={Title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                <span>Assignment Details</span>
                <textarea type="text" className='inputForm' value={details} onChange={(e)=>setDetails(e.target.value)} />
                </div>
                <div>
                <span>Last Date of Submit</span>
                <input type="date" className='inputForm' value={dos} onChange={(e)=>setDos(e.target.value)} />
                </div>
                <div>
                <span>Max.Mark</span>
                <input type="text" className='inputForm' value={maxMark} onChange={(e)=>setMaxMark(e.target.value)}/>
                </div>
                <div className='w-full p-3 text-center'>
                <button className='btn-success ' onClick={createAssignment}>
                  Save
                </button>
                </div>
            </div>
            <div className='w-full'>
              <DataTable 
              columns={columns}
              data={studentData}
              selectableRows
              fixedHeader 
              onSelectedRowsChange={handleSelector}             
              >

              </DataTable>

            </div>
            <div>
            </div>
      </div>
      
      
    </div>
  )
}
