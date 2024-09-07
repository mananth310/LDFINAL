import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { Login } from '../Login'
export const AssignEvaluation = ({id}) => {
  const [open, setOpen]=useState(false)
  const [link, setLink]=useState()
  const [assignment,setAssignment]=useState()
  const [subAssign,setSubAssign]=useState()
  const [subAssignId,setSubAssignId]=useState()
  const preurl='https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1'
  const getAssignmentInfo=()=>{
    const studentId=id
    axios.post(preurl+"/getAllotedAssignment",{studentId})
    .then((res)=>setAssignment(res.data))
    .catch(err=>console.log(err))
  }
  useEffect(()=>{
    getAssignmentInfo();
  },[])
  const assingmentSubmit=(elem)=>{
    setSubAssignId(elem);
    
  }
  const columns=[
    {
      name:"Title",
      selector:row=>row.title
    },
    {
      name:"Detail",
      selector:row=>row.details
    },
    {
      name:"Last Date / Mark",
      selector:row=>new Date(row.ldos).toLocaleDateString()+" / "+row.maxMark
    },
    {
        name:"Link",
        selector:row=>row.assignmentLink ? <a href={row.assignmentLink} target='_blank'>{row.assignmentLink}</a> : "Not Submit Yet"
        },
        {
            name:"Grade",
            selector:row=>row.markUpdain ? row.markUpdain :"-" 
          },
      {
        name:"Action",
        selector:row=>row.markUpdain ? "Graded" : 
          <button type='button' className='btn-success' onClick={()=>{
            assingmentSubmit(row._id)
            setOpen(true)
          }}>Submit</button>
        }
    
  ]
  const SubmitAssignmentData=()=>{
      axios.post(preurl+"/MarkAward",{link,subAssignId})
      .then((res)=>{
        if(res.statusText==="OK"){
          alert("Assignment Submited Successfully")
        }else{
          alert("Assignment not Submited")
        }
      })
      getAssignmentInfo();
      setOpen(false)
      setLink("")
  }

  return (
    <div className='p-4'>
        <DataTable
            columns={columns}
            data={assignment}
            fixedHeader
            pagination
        >
          </DataTable>
      <Login open={open} onClose={()=>setOpen(false)}> 
      <div className='bg-white p-2 rounded w-96'>
        <h4 class='w-full font-bold text-2xl text-center text-red-500 pb-4'>Mark Entry</h4>
            <lable>
              Mark
            </lable>
            <input type='text' className='inputForm' onChange={(e)=>setLink(e.target.value)} />
            <br/>
            <div className='w-full text-center'>
            <button className='bg-sky-500 text-white py-1 px-3 rounded-lg mx-5' type='submit' onClick={SubmitAssignmentData}>Award</button>
            </div>
            </div>
      </Login>
    </div>
  )
}
