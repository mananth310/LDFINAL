import React from 'react'
const newStudentData=[
    {
        id:1,
        name:"ANANTH M",
        email:"mananth310@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    },  
    {
        id:2,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    }, 
    {
        id:3,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    },
    {
        id:4,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    },
    {
        id:5,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    },
    {
        id:6,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    },    
    {
        id:7,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    },
    {
        id:8,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    },
    {
        id:9,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    },
    {
        id:10,
        name:"Bhawin Yudheesh",
        email:"Bhawin@gmail.com",
        cno:"9715246737",
        dob:"2024-08-01",
        course:"MEAN"
    }

]
export const NewStudent = () => {
  return (
    <div className='mt-5 h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-gray-700 font-medium'>New Student List</strong>
        <div className='w-full mt-3 flex-1 text-xs overflow-scroll'>
            <table className='w-full'>
                <thead >
                        <tr>
                            <th>S.No</th>
                            <th>Student Name</th>
                            <th>Email ID</th>
                            <th>Contact No</th>
                            <th>Course</th>
                            <th>Batch Status</th>
                        </tr>
                </thead>
                <tbody>
                    {  
                        newStudentData.map((student)=>(
                            
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.cno}</td>
                                <td>{student.course}</td>
                                <td>Batch Not Assigned</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    </div>
  )
}
