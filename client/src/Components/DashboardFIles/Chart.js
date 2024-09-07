import { Legend } from '@headlessui/react';
import React from 'react'
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
const data=[
    {
        name:"Jan",
        reg:20
    },
    {
        name:"Feb",
        reg:50
    },
    {
        name:"Mar",
        reg:80
    },
    {
        name:"Apr",
        reg:60
    },
    {
        name:"May",
        reg:70
    },
    {
        name:"Jun",
        reg:20
    },
    {
        name:"Jul",
        reg:90
    },
    {
        name:"Sep",
        reg:110
    },
    {
        name:"Oct",
        reg:10
    },
    {
        name:"Nov",
        reg:130
    },
    {
        name:"Dec",
        reg:90
    }
]
export const Chart = () => {

  return (
    <div className='mt-5 h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-gray-700 font-medium'>Student Admission</strong>
        <div className='w-full mt-3 flex-1 text-xs'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={500} height={300} data={data} margin={{
                    top:20,
                    right:10,
                    left:-10,
                    bottom:0
                }}>
                    <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip />
                    <Legend/>
                    <Bar dataKey='reg' fill='#0ea5e9'/>

                </BarChart>

            </ResponsiveContainer>
        </div>
    </div>
  )
}
