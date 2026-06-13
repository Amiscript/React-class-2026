
import React from 'react'
import { useState, useEffect } from 'react'

function Create() {

 const formdata= { 
    title: '',
    body: '',
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
            console.log("Form submitted")
        }}>
            <input type="text" placeholder='Title' value={newdata.title} onChange={(e)=> setNewdata({...newdata, title: e.target.value})}  />
            <input type="text" placeholder='Body' value={newdata.body} onChange={(e)=> setNewdata({...newdata, body: e.target.value})}  />
            <button type='submit'>Create Post</button>   
        </form>

    </div>
  )
}

export default Create