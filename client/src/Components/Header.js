import React from 'react'
import { Link } from 'react-router-dom'
import { MdAddAlert, MdChat, MdLogout, MdSearch } from "react-icons/md";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
export const Header = () => {

  const logout=()=> {
    localStorage.clear();
    window.location.href = '/';
    }
  return (
    <div className='bg-[purple] w-full h-10 px-4 flex justify-between items-center '>
        <div className='relative'>
          <MdSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3'/>
        <input placeholder='search....' className='text-sm focus:outline-none active:outline-none h-8 pl-11 w-[24rem] border border-gray-300 rounded-sm px-4'/>
        </div>
        <div className='text-white flex items-center gap-2 mr-2'>   
        Hello   <strong>{localStorage.getItem("uname")}</strong>    
        <Popover className="relative items-center">
      {({ open }) => (
        <>
          <PopoverButton className="flex items-center hover:text-yellow-200 focus:outline-none active:bg-white active:text-[purple]">
          <MdChat fontSize={20}/>
          </PopoverButton> 
          <PopoverPanel anchor="bottom" className="absolute right-0 z-10 mt-2.5 w-80">
            <div className='bg-amber-400 rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5'>
              <strong >New Messages</strong>
            </div>
            
          </PopoverPanel>
        </>
      )}
    </Popover>
    
      



            <MdLogout fontSize={20} href="#" onClick={logout}/>

          {/* <Link to="/Navbar" className='px-4 flex gap-3'>Hello<p className='text-yellow-300'>{localStorage.getItem("id")}</p></Link>
          <Link to="/logout" className='flex items-center'> <MdLogout fontSize={18}/> Logout </Link> */}
        </div>
    </div>
  )
}
