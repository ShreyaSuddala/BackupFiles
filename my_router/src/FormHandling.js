import React, { useState } from 'react'
import'./FormHandling.css'
function FormHandling() {
    const[formData,setFormData]=useState({
        username:'',
        password:''
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData({...formData ,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const{username,password}=formData;
        alert(`username enteered is:${username}  and password is:${password}`)
        console.log('Entered Username -',username ,'and Password is-',password)
        
    }
      return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange}/><br/>
        <input type='password' name='password' placeholder='Password' value={formData.password }onChange={handleChange}/><br/>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default FormHandling
