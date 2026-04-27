import React from 'react'
import image from "../assets/5.jpg"

export default function Navbar() {
  return (
    <div className=' text-black  flex items-center justify-between  shadow-lg'>
<div className='h-20 w-20'> <img src={image} alt="" srcset="" /></div>
  <ul className='flex justify-between items-center  gap-4 pr-60'>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
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
