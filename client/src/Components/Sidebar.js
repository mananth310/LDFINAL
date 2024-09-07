import React, { useState } from 'react'
import classNames from 'classnames'
import { FaStudiovinari } from "react-icons/fa"
import { ADMIN_NAVIGATION, EDUCATOR_NAVIGATION, STUDENT_NAVIGATION } from '../lib/consts/navigation'
import { Link, useLocation } from 'react-router-dom'



const linkclass='flex item-center gap-2 font-light px-3 py-2 hover:bg-yellow-700 hover:no-underline active:bg-[white] active:text-[purple] rounded-sm'
export const Sidebar = () => {
  return (
    <div className='hidden md:block h-full '>
        <div className='flex flex-col bg-[purple] text-white  h-full w-52 p-3  '>
            <div className='flex gap-2 pb-3'><FaStudiovinari className='text-2xl text-green-300'/> <span>Learning Master</span></div>
            <div className='flex-1 py-8 flex flex-col gap-0.5 text-sm border-t border-gray-400'>
                {ADMIN_NAVIGATION.map((item)=>(
                    localStorage.getItem("stype")===item.stype ? <SidebarLink key={item.key} item={item} /> :""                            
                ))}
            </div>
            <div className=' border-t border-gray-400'>
                <label>Developed by</label>
                <h1>ANANTH MURUGESAN</h1>
            </div>
        </div>
    </div>
  )
}

function SidebarLink({item}){
    const {pathname}=useLocation();
    return (
        <Link to={item.path} className={classNames(pathname=== item.path ? "bg-[white] text-[purple]":"", linkclass)}>
            <span className='text-xl'>{item.icon}</span>{item.lable}
        </Link>
    )
} 