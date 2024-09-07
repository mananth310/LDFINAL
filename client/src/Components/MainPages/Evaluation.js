import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import Accordion from './Accordion';
import { AssignEvaluation } from './AssignEvaluation';
export const Evaluation = () => {
  const  [selectedBatch,setSelectedBatch]=useState()
  const [studentData,setStudentData]=useState()
  const [studentDataArr,setStudentDataArr]=useState([])
  const [studentRow,setStudentRow]=useState()
  const preurl='https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1'
  const getStudent=(elem)=>{
    axios.post(preurl+"/getStudentsforAssignment",{elem})
    .then((res)=>{setStudentData(res.data)
      setStudentDataArr(res.data)
    })
    .catch(err=>console.log
      (err))
  }
  const [batch,setBatch]=useState([])
  useEffect(()=>{
    getBatch()
  },[])
  const handleSelector=(state)=>{
    setStudentRow(state.selectedRows);
    console.log(state.selectedRows);
  }
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
  const getBatch=()=>{
    const sid=localStorage.getItem("id");
    console.log(sid);
    axios.post(preurl+"/getBatchStaffWise",{sid})
    .then((res)=>setBatch(res.data))
    .catch(err=>console.log(err))
  }
  return (
    <div className='p-4'>
    <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-3' >
      <h3>Assignments Evaluation</h3>
    </div>
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
                <div className='w-full'>

                      {
                        studentDataArr.map((row)=>(

                          <Accordion title={row.name} answer={
                              <div className='bg-slate-300'>
                                <AssignEvaluation id={row._id}/>
                                </div>
                          }/>
                        ))
                      }
              
                  </div>


    </div>
  )
}
