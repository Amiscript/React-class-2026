import React from 'react'
import { useState } from 'react'
import Button from '../utils.jsx/Button'

//usestate- state is a way to store and manage data in a component. It allows you to create dynamic and interactive user interfaces by updating the component's state and re-rendering it when the state changes. The useState hook is a built-in function in React that allows you to add state to functional components. It returns an array with two elements: the current state value and a function to update that state value. You can use the useState hook to manage various types of data, such as strings, numbers, arrays, objects, etc., and it helps you create responsive and interactive applications. 


  

function HookUsestate() {

  // const count = 0
  // function setada() {
  //   console.log("setada function called")

  
  // }
 const [age, setAge] = useState(17)

  return (
    <div>
    {age===18 ? <Button /> : <h1>Age is not 18</h1>}

    </div>
  )
}

export default HookUsestate