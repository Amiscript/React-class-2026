import React from 'react'
import image from "../assets/5.jpg"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {
    const navigate = useNavigate()
  return (
    <div className=' text-black  flex items-center justify-between  shadow-lg'>
<div className='h-20 w-20'> <img src={image} alt="" srcset="" /></div>
  <ul className='flex justify-between items-center  gap-4 pr-60'>
      {/* <li><a href="/">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="/Service">Services</a></li> */}
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Service">Services</Link></li>
      <Link to="/"><li>Home</li></Link>
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
