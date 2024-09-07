import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
export const Navbar = () => {
  return (
    <>
    <div className='flex flex-row w-screen h-screen'>

    <Sidebar/>
    
    <div className='flex-1'>
        <Header />
        <div className='h-screen overflow-scroll'>{<Outlet/>}</div>
    </div>
    </div>
    
      </>
  )
}
