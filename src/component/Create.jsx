
import React from 'react'
import { useState, useEffect } from 'react'

function Create() {

 const formdata= { 
    id: 101,
    title: '',
    body: '',
    userId: 1,
 }

    const [newdata, setNewdata] = useState(formdata)

    useEffect(() => {
                        fetch('https://jsonplaceholder.typicode.com/posts', {

                       //method by default is GET but we want to create a new post so we will use POST method
                            method: 'POST',
                     //we need to specify the headers and body of the request to create a new post 
                            headers: {
                                'Content-Type': 'application/json'
                            },
                       //we need to specify the body of the request to create a new post

                            body: JSON.stringify({ newdata
                                // title: newdata.title,
                                // body: newdata.body,
                                // userId: newdata.userId
                            })


                        })


}, [])


  return (
    <div>
        <form OnSubmit={(event)=> {
            event.preventDefault()
            console.log(newdata)
        }}>
            <input type="text" placeholder='Title' value={newdata.title} onChange={(e)=> setNewdata({...newdata, title: e.target.value})} className='border p-2 w-full mb-4' />
            <textarea placeholder='Body' value={newdata.body} onChange={(e)=> setNewdata({...newdata, body: e.target.value})} className='border p-2 w-full mb-4' />
                <input type="number" placeholder='User ID' value={newdata.userId} onChange={(e)=> setNewdata({...newdata, userId: e.target.value})} className='border p-2 w-full mb-4' />
                <input type="number" placeholder='ID' value={newdata.id} onChange={(e)=> setNewdata({...newdata, id: e.target.value})} className='border p-2 w-full mb-4' />
            <button type='submit' className='bg-blue-500 text-white p-2'>Create Post</button>   
        </form>

    </div>
  )
}

export default Create