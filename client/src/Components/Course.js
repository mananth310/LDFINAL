import React from 'react'

export const Course = () => {
  return (
    <section className='py-5 bg-green-100 text-blue-800' id="Course">
        <div className='relative z-40'>
            <div className='absolute inset-0 flex items-center'>
            <div className='border border-y-purple-300 w-9/12 mx-auto'></div>
            </div>
            <div className='flex justify-center relative'>
            <div className='font-cinzel text-primary text-2xl bg-white px-5 font-bold rounded-full border  border-y-purple-300 '>Course</div>
            </div>
        </div>
        <div className='w-5/6 px-10 py-5 mx-auto grid md:grid-cols-3 gap-10 z-0'>
        <div className='project-list'><img className='mb-5' src="./webAssets/Mern.png"/><h1 className='text-center font-bold underline mb-3'>MERN Stack</h1><p className='text-justify'>The MERN stack is a collection of JavaScript-based technologies that are used together to develop web applications. The stack consists of MongoDB, Express, React, and Node. js. MongoDB is a highly scalable document database that makes it easy to store and retrieve data in JSON documents</p></div>
        <div className='project-list'><img className='mb-5' src="./webAssets/Mean.png"/><h1 className='text-center font-bold underline mb-3'>MEAN Stack</h1><p className='text-justify'>The MEAN stack is a JavaScript-based framework for developing scalable web applications. The term MEAN is an acronym for MongoDB, Express, Angular, and Node — the four key technologies that make up the layers of the technology stack.</p></div>
        <div className='project-list'><img className='mb-5' src="./webAssets/Mevn.jpeg"/><h1 className='text-center font-bold underline mb-3'>MEVN Stack</h1><p className='text-justify'>The MEVN stack is again a web stack just like MERN and MEAN though it is relatively new as the front-end technology used in it which is Vue.JS. That is the only difference in MEAN, MERN, MEVN that the front-end technology used in each of these stacks is different.</p></div>
            
        </div>
    </section>
  )
}
