import React,{useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { login } from './config/Services/userservice/userservice';
import { useNavigate } from 'react-router-dom';



function Login(){
    const [data,setData]=useState({
        username:'',
        password:''

    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setData({...data,[name]:value})
    }

    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)

        login(data).then((res)=>{
          console.log(res);

         if(res.message="success"){
          navigate("/review")
          localStorage.setItem("token",res.token)
         }
         
         
        }).catch((err)=>{
          console.log(err);
        })

    }

    return(
        <div>
            <h3>LOGIN PAGE</h3><br/>
            <FormControl sx={{width:200,
    '@media (max-width: 250px)': {
      width: '50px',
    },
    '@media (max-width: 200px)': {
      width: '40px', 
    },
    '@media (max-width:450px)':{
       width:'125px',
    },
    '@media (max-width:750px)':{
      width:'150px',
    }}}>
        <TextField id="user-name" 
        label="Username" 
        variant="outlined"
        name='username'
        value={data.username}
        onChange={handleChange}
      
        /><br/>
        </FormControl><br/>
        <FormControl sx={{width:200,
    '@media (max-width: 250px)': {
      width: '50px',
    },
    '@media (max-width: 200px)': {
      width: '40px', 
    },
    '@media (max-width:450px)':{
       width:'125px',
    },
    '@media (max-width:750px)':{
      width:'150px',
    }}}>
        <TextField id="password" 
        label="password" 
        variant="outlined"
        name='password'
        type='password'
        value={data.password}
        onChange={handleChange}
      
        /><br/>
        </FormControl><br/>
        <Button type="submit" sx={{ minWidth: 50 }} variant="contained" onClick={handleSubmit}>Login</Button>
       
       
       
       
        </div>
    )
}
export default Login;
