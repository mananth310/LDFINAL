import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Educator = () => {
  const [facultyName,setFacultyName]=useState("");
  const [designation,setDesignation]=useState("");
  const [email,setEmail]=useState("");
  const [doj,setDoj]=useState("");
  const [cno,setCno]=useState("");
  const [faculty,setFaculty]=useState([]);
  const preurl='https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1'
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(preurl+'/addNewUser',
      { facultyName,
        designation,
        email,
        doj,
        cno
      })
  .then(result=>{console.log(result);})          
  .catch(err=>console.log(err))
  alert(`Registerd Successfully`);
  setFacultyName("")
  setDesignation("")
  setEmail("")
  setDoj("")
  setCno("")
  getUsers()
}
useEffect(()=>{
  getUsers()
},[])
const getUsers=()=>{
  axios.get(preurl+"/getUsers")
  .then((res)=>setFaculty(res.data))
}
  return (
    <>
      <div className='p-4'>
      <div className='w-full bg-lime-500 p-1 pl-5 text-white rounded-tr-full rounded-bl-full mb-4' >
        <h3>Faculty List</h3>
      </div>
       <div className='w-full'>
        <div className='flex flex-col md:flex-row gap-3 items-center'>
          <div>
            <span>Faculty  Name</span>
            <input type='text' className='inputForm' value={facultyName} onChange={(e)=>setFacultyName(e.target.value)} />
          </div>
          <div>
            <span>Designation</span>
            <input type='text' className='inputForm' value={designation} onChange={(e)=>setDesignation(e.target.value)} />
          </div>
          <div>
            <span>Email ID</span>
            <input type='text' className='inputForm' value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div>
            <span>Date of Joining</span>
            <input type='date' className='inputForm' value={doj} onChange={(e)=>setDoj(e.target.value)} />
          </div>
          <div>
            <span>Contact No.</span>
            <input type='text' className='inputForm'  value={cno} onChange={(e)=>setCno(e.target.value)}  />
          </div>
          <div>
            <button className='btn-success' type='button' onClick={handleSubmit}>Save</button>
          </div>
        </div>
        
       </div>
        <div className='mt-4 w-full' >
          <table className='table w-full'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Faculty Name</th>
                <th>Designation</th>
                <th>Contact No</th>
                <th>Email ID</th>
                <th>Date of Joining</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                faculty.map((row)=>(
                  <tr>
                    <td>#{row.id}</td>
                    <td>{row.name}</td>
                    <td>{row.design}</td>
                    <td>{row.cno}</td>
                    <td>{row.email}</td>
                    <td>{new Date(row.doj).toLocaleDateString()}</td>
                    <td>{row.status === 0 ? "Active":"Inactive"}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
