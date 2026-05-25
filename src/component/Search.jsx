import React from 'react'
import { useState } from 'react';


// read and understand how pagination works and implement it in your project

const  NameList = [
    'John',
    'Jane',
    'Doe',
    'Smith',
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Heidi',
    'Ivan',
    'Judy',
    'Karl',];

function Search() {
    const [namedata, seNameData] = useState(NameList);
    const[searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
     
    };

    const GetSearchData = namedata.filter((name) => {
        return name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div className='text-center mt-10'>
        <input type="text" placeholder="Search..." onChange={handleSearch} />
        {GetSearchData.map((name, index) => {
            return <h1 key={index}>{name}</h1>
        })}
        

    </div>
  )
}

export default Search