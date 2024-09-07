import React from 'react'

export const About = () => {
  return (
    <section className='bg-green-100 py-5' id="About">
        <div className='relative z-40 '>
            <div className='absolute inset-0 flex items-center'>
            <div className='border border-y-purple-300 w-9/12 mx-auto'></div>
            </div>
            <div className='flex justify-center relative'>
            <div className='font-cinzel text-primary text-2xl bg-white px-5 font-bold rounded-full border  border-y-purple-300 '>About</div>
            </div>
        </div>
      <div className='flex p-10 text-blue-900'>
        <div className='w-1/3'>
          <img src='./webAssets/v1.png'/>
        </div>
        <div className='w-3/4 px-10'>
        <h3 className=' text-xl underline text-red-700'>About Us</h3>
        <p className='text-justify'>Welcome to Laerning Master, where excellence in education meets innovation and dedication. Established in 2024, we are a premier training institute committed to empowering individuals with the knowledge and skills they need to excel in today’s dynamic world.</p>
        <h3 className=' text-xl underline text-red-700 mt-5'>Our Mission</h3>
        <p className='text-justify'>At Laerning Master, our mission is to provide high-quality, industry-relevant training programs that foster personal and professional growth. We are dedicated to equipping our students with the competencies and confidence to thrive in their careers and make a positive impact in their communities.
        </p>
        <h3 className=' text-xl underline text-red-700 mt-5'>Our Vision</h3>
        <p className='text-justify'>
        We envision a future where every learner has access to exceptional training opportunities that drive success and innovation. We strive to be a leading institute recognized for our commitment to excellence, our expert faculty, and our transformative educational experiences.</p>
      </div>
      </div>
    </section>
  )
}
