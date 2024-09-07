import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Datatable from 'react-data-table-component'
const preurl='http://localhost:8000/api/a1'
export const StudyPlan = () => {
const [batch,setBatch]=useState([])
const [batchStudy,setBatchStudy]=useState()
const [studyDate,setStudyDate]=useState()
const [studyPlan,setStudyPlan]=useState()
const [savedPlans,setSavedPlans]=useState()
const columns= [
  {
    name:"Batch",
    selector:row=>row.batch,
    sortable:true
  },
  {
    name:"Date",
    selector:row=>new Date(row.date).toLocaleDateString(),
    sortable:true
  },{
    name:"Study Plan",
    selector:row=>row.plan,
    sortable:true
  }
]
  const getBatch=()=>{
    const sid=localStorage.getItem("id");
    console.log(sid);
    axios.post(preurl+"/getBatchStaffWise",{sid})
    .then((res)=>setBatch(res.data))
    .catch(err=>console.log(err))
  }
useEffect(()=>{
  getBatch()
},[])
const handleSubmit=()=>{
  axios.post(preurl+"/addStudyPlan",{
    batchStudy,
    studyDate,
    studyPlan
  })
  .then((res)=>{
    if(res.statusText==="OK"){
      alert("Study Plan Saved Successfully")
      
    }else{
      alert("Study Plan not Saved ")
    }
  })
      setBatchStudy("")
      setStudyDate("")
      setStudyPlan("")
}
  const getSavedPlan=(elem)=>{
      axios.post(preurl+"/getPlans",{elem})
      .then((res)=>setSavedPlans(res.data))
      .catch(err=>console.log(err))
  }
  return (
    <div className='p-4'>
      <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-4' >
        <h3>Study Plan</h3>
      </div>
      {
        localStorage.getItem('stype')==="Staff" ?
        <>
        <div className='flex w-full gap-3 items-center'>
          <div className='w-1/3'>
            <span>Batch</span>
            <select className='inputForm' value={batchStudy} onChange={(e)=>{
              setBatchStudy(e.target.value)
              getSavedPlan(e.target.value)
              }
              }>
                <option value="">Select Batch</option>
                {
                  // console.log(batch)
                  batch.map((row)=>(
                    <option>{row.id}</option>
                  ))
                }
            </select>
            <span>Date</span>
            <input type='date' value={studyDate} className='inputForm' onChange={(e)=>setStudyDate(e.target.value)} />
            </div>
            <div className='w-full'>
            <span>Study Plan</span>
            <textarea type='text' value={studyPlan}  className='inputForm'  onChange={(e)=>setStudyPlan(e.target.value)} />
            </div>
            <div className='items-center'>
              <button className='btn-success' onClick={handleSubmit}>Save</button>
            </div>
        </div>
        </>
        :
        ""
      }
      <div className='w-full'>
        <Datatable 
            columns={columns}
            data={savedPlans}
            fixedHeader
            pagination
        >

        </Datatable>
      </div>
    </div>
    
  )
}
