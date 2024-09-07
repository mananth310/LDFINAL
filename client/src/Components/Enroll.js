import React from 'react'
export const Enroll = ({entOpen, onClose, children}) => {
  return (
    <div  className={`fixed inset-0 flex justify-center items-center z-50 ${entOpen ? "visible bg-black/20" : "invisible"} `}>
    
    
    <div onClick={(e)=>e.stopPropagation()} className={`bg-white rounded-xl shadow p-6 transition-all ${entOpen ? " scale-100 opacity-100":"scale-125 opacity-0" }`}>
        <button className='absolute top-2 right-2 p-1 rounded-lg text-blue-600 hover:text-red-600' onClick={onClose}>X</button>
        {children}
    </div>
    </div>
  )
}
