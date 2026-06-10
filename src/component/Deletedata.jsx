import React from 'react'
import { useEffect } from 'react'



function Deletedata() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE'
        })
    }, [])

    const deleteData = () => {
        console.log('Data deleted')
    }
  return (
    <div>
        <button onClick={deleteData}>Delete Post</button>

</div>
  )
}

export default Deletedata


