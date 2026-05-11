 
 import React from 'react'
 import ManageSearchIcon from '@mui/icons-material/ManageSearch';
 
 function Grid() {
   return (
    <div className="bg-amber-950">
        <section>
        <h1 className='text-4xl font-bold text-center mt-10'>Grid Layout</h1>
        <h3 className='text-lg text-center mt-4'>A simple grid layout example</h3>
        </section>
     <div className="grid grid-cols-3 gap-4 text-black m-10">
     
      <div className="w-100 h-50 bg-amber-50">
       <ManageSearchIcon className="bg-amber-500 w-12 " />
       <section>
        <h1>Smart Analytics</h1>
        <p>Gain valuable insights with our advanced analytics, helping you make data-driven decisions.</p>
       </section>

      </div>
      <div  className="w-100 h-50 bg-amber-50">2</div>
      <div className="w-100 h-50 bg-amber-50">3</div>
    <div className="w-100 h-50 bg-amber-50">4</div>
    <div className="w-100 h-50 bg-amber-50">5</div>
        <div className="w-100 h-50 bg-amber-50">6</div>
     </div>
     </div>
   )
 }
 
 export default Grid