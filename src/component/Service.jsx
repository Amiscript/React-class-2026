import React from 'react'
import image from "../assets/5.jpg"
import picture from "../assets/3.jpg"

 function Service() {
  return (
    <div className='columns-3 gap-4'>
      <h1 className='break-after-column'>This is Service Page</h1>
      <img src={image} alt="Service Image" srcset="" className='aspect-3/2  object-cover' break-after-column />
      <img src={picture} alt="Bedroom Image" className='aspect-square  object-cover' />
    </div>
  )
}

export default Service