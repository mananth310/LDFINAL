import React from 'react'
const facutyData=[
    {
        id:1,
        name:"ANANTH M",
        desig:"Programmer",
        photo:"/staff/1.jpeg"
    },
    {
        id:2,
        name:"ANANTH M",
        desig:"Programmer",
        photo:"/staff/3.jpeg"
    },
    {
        id:3,
        name:"ANANTH M",
        desig:"Programmer",
        photo:"/staff/3.jpeg"
    },
    {
        id:4,
        name:"ANANTH M",
        desig:"Programmer",
        photo:"/staff/4.jpeg"
    },
    {
        id:5,
        name:"ANANTH M",
        desig:"Programmer",
        photo:"/staff/5.jpeg"
    }
]
export const Faculty = () => {
  return (
    <div className='mt-5 w-[22rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col '>
        <strong className='text-gray-700 font-medium'>Faculty Details</strong>
        <div className='w-full mt-3 flex-1 text-xs '>
            {
                facutyData.map((staff)=>(
                    <div className=''>
                        <div className='items-center justify-center'>

                        </div>                          
                        <div className='items-center justify-center'>
                            <strong>{staff.name}</strong>
                            <span>{staff.desig}</span>
                            <span>{staff.cno}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
