
import React from 'react'
import Button from '../utils.jsx/Button'
import image from "../assets/5.jpg"

export default function Home() {
  return (
    <div className='flex flex-row gap-4 p-4 '>
      {/* section one */}
      <section>
        <img src={image} alt="Home Image" srcset="" className='w-full h-full object-cover ' />

      </section>

{/* section two */}
      <section>
  <h1 className='text-6xl font-bold'>
   Free Responsive Wristwatch Landing <span className='text-amber-500'> Page Template</span>
  </h1>
  <p className='text-base mb-6'>Free responsive wristwatch landing page template built with Vite, React, Tailwind CSS v4, and Framer Motion. Includes hero, navbar, product grids, features, newsletter, footer, and animations. Perfect for students and businesses.!</p>

  <span className='mt-6 '>
    <ul className='bg-gray-50 p-4 shadow-md rounded-xl'>
      <li>Source code and assets</li>
      <li>README with setup & deploy guides</li>
      <li>Lifetime updates to this template</li>
       <div className='mt-4'>
    <button className='p-6 bg-blue-600 text-white rounded-xl mr-4'>free download</button> <button className='p-6 bg-white text-black-300 rounded-xl'>live demo</button>
     <p>Updated 27/04/2026</p>
   </div>
    </ul>
  </span>
  
  
      </section>

    </div>
  )
}
