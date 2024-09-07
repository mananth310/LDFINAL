import React from 'react'
import { FaLinkedin, FaFacebookSquare , FaTwitterSquare, FaYoutube, FaInstagramSquare } from "react-icons/fa";
export const Contact = () => {
  return (
    <section className='py-5 bg-green-100 text-pink-500 items-center justify-center' id="Contact">
        <div className='relative z-40'>
            <div className='absolute inset-0 flex items-center'>
            <div className='border border-y-purple-300 w-9/12 mx-auto'></div>
            </div>
            <div className='flex justify-center relative'>
            <div className='font-cinzel text-primary text-2xl bg-white px-5 font-bold rounded-full border  border-y-purple-300 '>Contact Details</div>
            </div>
        </div>
        <div className='w-5/6 px-10 py-5 mx-auto grid md:grid-cols-3 gap-10 z-0 items-center justify-center'>
        <div className='project-list'><h1 className='text-center font-bold underline mb-3'>Contact</h1>
          <h1 className=' text-2xl text-[purple]'>Learning Master</h1>
        
        <p className='text-justify'>
          Namakkal - 637 505<br/>
          www.LearningMaster.com
          info@LearningMaster.com
          </p></div>
        
        <div className='project-list'>
          <img src='./webAssets/book.png'/>
      </div>
      <div className='project-list'><h1 className='text-center font-bold underline mb-3'>Social Media</h1>
        <div className='flex items-center justify-center gap-4'>
        <a className='py-2' href='#'><FaFacebookSquare  className='text-2xl'/></a>
        <a className='py-2' href='#'><FaTwitterSquare  className='text-2xl'/></a>
        <a className='py-2' href='#'><FaYoutube  className='text-2xl'/></a>
        <a className='py-2' href='#'><FaLinkedin className='text-2xl'/></a>
        <a className='py-2' href='#'><FaInstagramSquare className='text-2xl'/></a>
        </div>
      </div>
            
        </div>
    </section>
  )
}
