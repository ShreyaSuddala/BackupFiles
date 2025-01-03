import React from 'react'
import '../assets/styles/login.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

// import { TextField } from '@mui/material'
// import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
const LoginPage = () => {
  const navigate = useNavigate();

function handleSignup(){
  navigate('/registration')
}

  return (
    <div className='login-container'>
      <div className='r-left'>
        <p className='r-heading'>Login to Your Account</p>
        <p>Login using social networks</p>
        <div className='fafa-icons'>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-google-plus-g"></i>
        </div>
        <div className='or'>
          <hr></hr><span>Or</span><hr></hr> 
        </div>
        <div className='enter-details'>
      <input className='textfields' placeholder='Email/mobile'/>
      <input className='textfields' placeholder='password' type='password'/>
      <Button sx={{width:'100px',color:'#e57373',borderColor:'#e57373'}} variant="outlined">Login</Button> 
        </div>
      
       
      </div>
      <div className='r-right'>
      <p className='l-heading'>New Here?</p>
      <p className='l-subheading'>Sign up and begin capturing your most memorable moments.</p>
      <Button sx={{width:'100px',color:'#fff',borderColor:'white'}} 
      variant='outlined'
      onClick={handleSignup}
      
      >
        Sign up
        </Button>
      </div>


    </div>
  )
}

export default LoginPage
