import React from 'react'
import image from "../assets/5.jpg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Modal() {
  return (
    <div>
         <main className="flex relative ml-96">

 <div className=" bg-blue-600 w-20 h-20 rounded-full z-30 absolute top-2 left-4 ">
   <img src={image} alt=""  className=" w-20 h-20 object-fill rounded-full"/>
  </div>

    <div className=" bg-yellow-500 w-20 h-20 rounded-full z-40 absolute top-2 left-20 ">
    <img src={image} alt=""  className=" w-20 h-20 object-fill rounded-full"/>
  </div>
    <div className=" bg-green-500 w-20 h-20 rounded-full z-30 absolute top-2 left-35 ">
    <img src={image} alt=""  className=" w-20 h-20 object-fill rounded-full"/>
  </div>

      </main>

      <section className="mt-50 ml-50 relative mb-30">
        <div>
          <img src={image} alt=""  className=" w-200 h-150"  />
        </div>
        <button className="absolute top-140 left-0 right-200 bg-amber-600 text-white">Get Started</button>
        <ArrowForwardIcon className="h-6 w-6 bg-red-500" />
      </section>
  
    </div>
  )
}
