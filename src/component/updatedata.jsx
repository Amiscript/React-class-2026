import React from 'react'
import { useState, useEffect } from 'react'

//put the code for updating the data here

function UpdateData() {
    const [update, setUpdate] = useState({title: 'Ada', body: 'Chima'});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
          
        })

     

    },[])

      const changedData = (data) => {
            setUpdate(data)
            console.log(data)
        }

  return (
    <div>
     <button onClick={changedData}>Update Post</button>
    </div>
  )
}

export default UpdateData