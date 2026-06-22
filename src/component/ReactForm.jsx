import React from 'react'
// import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
// import Button from '@mui/material/Button';


// npm install react-hook-form

// regex - 

function Createuser() {

  const  Formdata = {
     name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",  
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            }
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",  
            bs: ""
        }
  }

const {register, handleSubmit, formState:{errors, isLoading}, reset} = useForm({ defaultValues: {
       Formdata}})
    

    // const [data, setData] = useState({ Formdata })
  



    const submituser = (data) => {
        console.log(data)
        isLoading()

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(json => {
            console.log('Success', json);
            alert('User Successfully Created');
            reset() 
            
        })
        .catch(error => {
            console.error('Error:', error);
       
        })
    };

   
    return (
        <div className='text-black'>
            <form onSubmit={handleSubmit(submituser)}>
                <h5>Creating User Info</h5>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        {...register("name", {required:true, message:"Please Provide Name"})}
                        disabled={isLoading}
                       
                    />
                    <span>{errors.name && <p>{errors.name.message}</p>}</span>
                </div>

                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                     {...register('username', {min:{value:10, message:"min value  should be 10"}, max:{value:25}})}
                       
                 disabled={isLoading}
                    />
                    {errors.username ? <p>{errors.username.message}</p>:<p>User not found</p>}
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        name='email'
                        {...register('email')}
                       disabled={isLoading}
                    />
                     <span>{errors.email && <p>{errors.email.message}</p>}</span>
                </div>

                <div>
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="text"
            
                        {...register('phone')}
                        disabled={isLoading}
                     
                    />
                </div>

                <div>
                    <label htmlFor="website">Website</label>
                    <input 
                        type="text"
                    
                        {...register('website')}
                        disabled={isLoading}
                        
                    />
                </div>

                <h4>Address</h4>
                <div>
                    <label htmlFor="address.street">Street</label>
                    <input 
                        type="text"
                     
                          {...register('address.street')}
                        disabled={isLoading}
                      
                        
                    />
                </div>

                <div>
                    <label htmlFor="address.suite">Suite</label>
                    <input 
                        type="text"
                      
                          {...register('address.suite')}
                    
                     
                     
                    />
                </div>

                <div>
                    <label htmlFor="address.city">City</label>
                    <input 
                        type="text"
                    
                          {...register('address.city')}
                          disabled={isLoading}
                      
                       
                    />
                </div>

                <div>
                    <label htmlFor="address.zipcode">Zipcode</label>
                    <input 
                        type="text"
                     
                          {...register('address.zipcode')}
                      
                        disabled={isLoading}
                    />
                </div>

                <div>
                    <label htmlFor="address.geo.lat">Latitude</label>
                    <input 
                        type="text"
                       
                          {...register('address.geo.lat')}
                          disabled={isLoading}
                       
                        
                    />
                </div>

                <div>
                    <label htmlFor="address.geo.lng">Longitude</label>
                    <input 
                        type="text"
                      
                          {...register('address.geo.lng')}
                          disabled={isLoading}
                      
                        
                    />
                </div>

                <h4>Company</h4>
                <div>
                    <label htmlFor="company.name">Company Name</label>
                    <input 
                        type="text"
                       
                          {...register('company.name')}
                          disabled={isLoading}
                       
                      
                    />
                </div>

                <div>
                    <label htmlFor="company.catchPhrase">Catch Phrase</label>
                    <input 
                        type="text"
                        
                          {...register('company.catchPhrase')}
                          disabled={isLoading}
                       
                       
                    />
                </div>

                <div>
                    <label htmlFor="company.bs">BS</label>
                    <input 
                        type="text"
                      
                        {...register('company.bs')}
                        disabled={isLoading}
                       
                    />
                </div>

                <button type="submit" disabled={isLoading}>
                {isLoading ? "Loading...":"User created"}
                   
                </button>

              
            </form>
        </div>
    )
}

export default Createuser