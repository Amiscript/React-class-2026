import React from 'react'
import { useState, useEffect } from 'react';



export default function fetchdata() {
const [data, setData] = useState(null);


useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/posts').then((info)=>info.json())
    .then((result)=>setData(result))

}, [])

  return (
    <div>
        {data.map((post)=>{
            return (
                <div key={post.id}>
                    <h1
                    >{post.title}</h1>
                    <p>{post.body}</p>
                    <p>{post.userId}</p>
                </div>
            )
        })}
    </div>
  )
}

 

















// import  { useState, useEffect } from 'react';

// const FetchData = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);



//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Fetch Data</h2>
//       <ul>
//         {data?.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FetchData;