import React from 'react'
import {useState} from 'react'

function Compliment() {
    const [compliment, setCompliment] = useState("");
   
   const compliments = [
    "You are amazing!",
    "You have a great sense of humor!",
    "You are a great listener!",
    "You have a beautiful smile!",
    "You are very talented!",
    "You are a great friend!",
    "You have a kind heart!",
    "You are very creative!",
    "You have a positive attitude!",
    "You are a great problem solver!"
   ]  

   function generateCompliment() { 
    const newCompliment = Math.floor(Math.random() * compliments.length);
    setCompliment(compliments[newCompliment]);
    }
  return (
    <div>
        <button onClick={generateCompliment}>Generate Compliment</button>
        <p>{compliment}</p>

    </div>
  )
}

export default Compliment