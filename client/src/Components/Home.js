import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import { HeroSection } from './HeroSection'
import { Login } from './Login'
import { AdminLog } from './AdminLog'
import { Enroll } from './Enroll'
import axios from 'axios';
import { About } from './About'
import { Course } from './Course'
import { Contact } from './Contact'

export const Home = () => {
    const [open, setOpen]=useState(false)
    const [adminOpen, setAdminOpen]=useState(false)
    const [entOpen, setEntOpen]=useState(false)
    const [username,setUsername]=useState("");
    const [pass,setPass]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [cno,setCno]=useState("");
    const [dob,setDob]=useState("");
    const [course,setCourse]=useState("");
    const onChange = (event) => {
        const value = event.target.value;
        setCourse(value);
    };
    const login=()=>{
        setEntOpen(false)
        setOpen(true)
    }
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        
        e.preventDefault()
            axios.post(`https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1/student`,
                {name,email,cno,dob,course})
            .then(result=>{console.log(result);login()})          
            .catch(err=>console.log(err))
            alert(`Registerd Successfully`);
    }
    const handleSubmitAdminLogin=(e)=>{
        e.preventDefault()
            
            axios.post(`https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1/adminLogin`,
                {username,pass})
            .then(result=>{
                localStorage.clear();
                console.log(result.data.user.name);
               
            if(result.data.status==="Success")
            {
                localStorage.setItem("id",result.data.user._id);
                localStorage.setItem("uname",result.data.user.name);
                localStorage.setItem("stype",result.data.user.stype);
            alert(`Login Successfully`);

            navigate("/Navbar")
            }
            else
            {
            alert(`Login failed`);

            navigate("/")
            }
        
        })
            .catch(err=>console.log(err))
    }
    const handleSubmitLogin=(e)=>{
        e.preventDefault()
            axios.post(`https://ldfinal-ananths-projects-6f9d6b58.vercel.app/api/a1/login`,
                {email,cno})
            .then(result=>{
                localStorage.clear();
                console.log(result.data.user.name);
               
            if(result.data.status==="Success")
            {
                localStorage.setItem("id",result.data.user._id);
                localStorage.setItem("uname",result.data.user.name);
                localStorage.setItem("stype","STUDENT");
                localStorage.setItem("batch",result.data.user.batch);
                alert(`Login Successfully`);

            navigate("/Navbar")
            }
            else
            {
            alert(`Login failed`);

            navigate("/")
            }
        
        })
            .catch(err=>console.log(err))
    }
  return (
    <>
    <section id="Home">
        <div className=' fixed w-full p-2 bg-[purple] flex text-white justify-between items-center z-50' >
            <div className=''>
                <h1 className=' font-bold px-3'>Laerning Master</h1>
            </div>
            <div className='block md:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-3 items-center'>
                    <li className='menu'><a href='#Home'>Home</a></li>
                    <li className='menu'><a href='#About'>About</a></li>
                    <li className='menu'><a href='#Course'>Courses</a></li>
                    <li className='menu'><a href='#Contact'>Contact</a></li>
                    <li ><a className='btn-prim' href='#' onClick={()=>setAdminOpen(true)}>Admin Login</a></li>
                    <li><a  className='btn-success' href="#" onClick={()=>setOpen(true)}>Student Login</a></li>
                    <li><a  className='btn-prim' href="#" onClick={()=>setEntOpen(true)}>Student Registration</a></li>
                </ul>
            </div>
        </div>
    </section>
    <Login open={open} onClose={()=>setOpen(false)}>
    <div className='bg-white p-2 rounded w-96'>
      <h4 class='w-full font-bold text-2xl text-center text-red-500 pb-4'>Student Login</h4>
      <form onSubmit={handleSubmitLogin}>
            <lable>
              Username
            </lable>
            <input type='text' name='email' id='email' className='inputForm' onChange={(e)=>setEmail(e.target.value)} />
            <lable>
              Password
            </lable>
            <input type='password' name='cno' id='cno' className='inputForm' onChange={(e)=>setCno(e.target.value)}/>
            <br/>
            <button className='bg-sky-500 text-white py-1 px-3 rounded-lg mx-5' type='submit'>Login</button> 
            <button className='bg-red-500 text-white py-1 px-3 rounded-lg mb-5'>Clear</button> <br/></form>
            <a className='text-green-600' href='#' onClick={()=>{setEntOpen(true); setOpen(false) } } >New Registration</a>
      </div>
    </Login>
    <AdminLog adminOpen={adminOpen} onClose={()=>setAdminOpen(false)}>
    <div className='bg-white p-2 rounded w-96'>
      <h4 class='w-full font-bold text-2xl text-center text-red-500 pb-4'>Admin Login</h4>
      <form onSubmit={handleSubmitAdminLogin}>
            <lable>
              Username
            </lable>
            <input type='text' name='username' id='username' className='inputForm' value={username} onChange={(e)=>setUsername(e.target.value)} />
            <lable>
              Password
            </lable>
            <input type='password' name='pass' id='pass' className='inputForm' value={pass} onChange={(e)=>setPass(e.target.value)}/>
            <br/>
            <button className='bg-sky-500 text-white py-1 px-3 rounded-lg mx-5' type='submit'>Login</button> 
            <button className='bg-red-500 text-white py-1 px-3 rounded-lg mb-5'>Clear</button> <br/></form>
      </div>
    </AdminLog>

    <Enroll entOpen={entOpen} onClose={()=>setEntOpen(false)}>
        <div className='bg-white p-2 rounded w-96'>
            <h4 class='w-full font-bold text-2xl text-center text-red-500 pb-4'>New Register</h4>
            <form onSubmit={handleSubmit}>
                <lable>
                Name of the Candidate
                </lable>
                <input type='text' name='studentName' id='studentName' className='inputForm' onChange={(e)=>setName(e.target.value)} />
                <lable>
                Email ID
                </lable>
                <input type='text' name='email' id='email' className='inputForm' onChange={(e)=>setEmail(e.target.value)}/>
                <lable>
                Contact No
                </lable>
                <input type='text' name='cno' id='cno' className='inputForm' onChange={(e)=>setCno(e.target.value)} />
                <lable>
                Date of Birth
                </lable>
                <input type='date' name='dob' id='dob' className='inputForm' onChange={(e)=>setDob(e.target.value)} />
                <lable>
                Select Your Course
                </lable>
                <select name='course' id='course' className='inputForm' onChange={onChange} >
                <option value="MERN">MERN</option>
                <option value="MEAN">MEAN</option>
                <option value="MEVN">MEVN</option>
                </select>
            <br/>
                <button className='bg-sky-500 text-white py-1 px-3 rounded-lg mr-5' type='submit'>Register</button> 
                <button className='bg-red-500 text-white py-1 px-3 rounded-lg mb-5'>Clear</button> <br/></form>
                <span className='text-blue-600' >if you already registered <a className='text-green-600' href='#' onClick={()=>{setEntOpen(false); setOpen(true) } } >click here</a> to login</span>
        </div>
    </Enroll>




    <HeroSection />
    <About/>
    <Course />
    <Contact />
    </>
  )

}
