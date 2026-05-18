import React from 'react'
import image from "../assets/5.jpg"
import { Link } from 'react-router-dom'
import Drawer from '../Materials/Drawer'



export default function Navbar() {
  
  
  return (
    <div className=' text-white  flex items-center justify-between  shadow-lg fixed top-0 left-0 right-0 z-20 bg-amber-950'>
<div className='h-20 w-20'> <img src={image} alt="" /></div>
  <ul className='flex justify-between items-center  gap-4 pr-60'>
      {/* <li><a href="/">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Service">Services</a></li> */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Service">Services</Link></li>
      <li><Link to="/Todo">Todo</Link></li>
      <Link to="/"><li>Home</li></Link>
       <Drawer />
      <button onClick={() => navigate('/')} className='bg-amber-500 text-white rounded-2xl p-2'>Get Started</button>
    </ul>

        {/* <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">MyApp</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </nav> */}

    </div>
  )
}
