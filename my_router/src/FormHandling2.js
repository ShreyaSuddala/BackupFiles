import React, { useState } from 'react'
import './FormHandling.css'

function FormHandling2() {
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const[Error,SetFormerror]
=useState("")

    const changeHandler=(e)=>{
        const{name,value}=e.target
        setFormData({...formData, [name]:value})
    }
    const{username,password,email,confirmpassword}=formData;
  
    const handleSubmit=(e)=>{
        if(username === ''){
            SetFormerror('username must be required')
        }
       else if(username.length<5){
            alert(`username must be atleast 5 characters`)
        }
        
        else if(password!==confirmpassword){
            alert(`passwords does not match`)
        }
        else{
            setFormData('')
        }
        e.preventDefault();
        console.log(formData)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
        <input type='text' name='username' placeholder='Username' value={username} onChange={changeHandler}/><br/>
    {Error} <br/>
        <input type='email' name='email' placeholder='email' value={email} onChange={changeHandler}/><br/>
        <br/>
        <input type='password' name='password' placeholder='Password' value={password} onChange={changeHandler}/><br/>
        <br/>
        <input type='password' name='confirmpassword' placeholder='ConfirmPassword' value={confirmpassword} onChange={changeHandler}/><br/>
        <br/>
        <button type='submit'>submit</button>
     
        </form>
    </div>
  )
}

export default FormHandling2
