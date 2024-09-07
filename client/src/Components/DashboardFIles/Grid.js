import React from 'react'
import { FaCertificate, FaGopuram, FaUsers } from 'react-icons/fa'
import { GiStumpRegrowth, GiTeacher } from 'react-icons/gi';
export const Grid = () => {
  return (
    <div className='flex flex-col gap-4 w-full md:flex-row'>
        <BoxWrapper>
            <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                <FaUsers className='text-2xl text-white' />
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total No.of Student</span>
                <div className='flex items-center justify-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>10000</strong>
                </div>

            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-500'>
                <FaCertificate className='text-2xl text-amber-400'/>
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>No.of Certified</span>
                <div className='flex items-center justify-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>9000</strong>
                </div>

            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-100'>
                <GiStumpRegrowth className='text-3xl text-green-700'/>
                
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Current Strength </span>
                <div className='flex items-center justify-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>1000</strong>
                </div>

            </div>
        </BoxWrapper>
        <BoxWrapper>
        <div className='rounded-full h-12 w-12 flex items-center justify-center bg-pink-100'>
                <GiTeacher className='text-3xl text-green-700'/>
                
            </div>
            <div className='pl-4'>
                <span className='text-sm text-gray-500 font-light'>Total No.of Educator</span>
                <div className='flex items-center justify-center'>
                    <strong className='text-xl text-gray-700 font-semibold'>50</strong>
                </div>

            </div>
        </BoxWrapper>
    </div>
  )
}

const BoxWrapper = ({children}) =>{
    return (
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center border-l-4 border-l-[purple]'>{children}</div>
    )
}