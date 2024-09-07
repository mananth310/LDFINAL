import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Datatable from 'react-data-table-component'
const preurl='http://localhost:8000/api/a1'
export const ViewStudyPlan = () => {
const [batch,setBatch]=useState([])
const [batchStudy,setBatchStudy]=useState()
const [studyDate,setStudyDate]=useState()
const [studyPlan,setStudyPlan]=useState()
const [savedPlans,setSavedPlans]=useState()
const columns= [
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

useEffect(()=>{
    getSavedPlan()
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
  const getSavedPlan=()=>{
        const elem=localStorage.getItem("batch")
      axios.post(preurl+"/getPlans",{elem})
      .then((res)=>setSavedPlans(res.data))
      .catch(err=>console.log(err))
  }
  return (
    <div className='p-4'>
      <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-4' >
        <h3>Study Plan</h3>
      </div>
      <div className='w-full'>
      <div className='w-1/2 justify-center items-center'>
        <Datatable 
            columns={columns}
            data={savedPlans}
            fixedHeader
            pagination
        >

        </Datatable>
      </div>
      </div>
    </div>
    
  )
}
