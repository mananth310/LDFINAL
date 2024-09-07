import React from 'react'

export const HeroSection = () => {
  return (
    <div className='relative w-full h-[100vh] pt-10 '>
        <video src='./webAssets/vi1.mp4' autoPlay muted loop className='h-full w-full object-cover ' ></video>
        <div className='absolute h-full w-full top-0 left-0 heroSec'></div>
        <div className='absolute h-full w-full top-0 left-0 flex herodiv'>
        <h1 className='my-auto mx-5 font-Merienda text-2xl text-white'>Hello Learners...<br/>
        Welcome to <span className='text-lime-300 text-4xl'>Learning Master </span>Learning center<br/>
        </h1>
      </div>
    </div>
  )
}
