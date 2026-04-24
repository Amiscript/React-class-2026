import React from 'react'

// export default function About(props) {
//   return (
//     <div>
//         <h1>This is {props.name} Page is now showing {props.age} and also {props.gender} </h1>
//     </div>
//   )
// }

export default function About({name, age}) {
  return (
    <div>
        <h1>This is About Page {name} and {age} </h1>
    </div>
  )
}