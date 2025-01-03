import React from 'react'
import '../assets/styles/homepage.css'
import { Link } from 'react-router-dom'
import DoubleArrowRoundedIcon from '@mui/icons-material/DoubleArrowRounded';



const Homepage = () => {
    
  return (
   <div className='homepage-container'>
    <div className='left'>
      <p className='heading'>Dear Diary!!</p>
      <p className='sub-heading'>Cherishing today's highlights</p>
      <div className='login-link'>
      <DoubleArrowRoundedIcon sx={"color:goldenrod"}></DoubleArrowRoundedIcon>
      <Link className='signIn-link' to="/login">Click here to log in and explore</Link>
      </div>
    </div>
    <div className='right'>

    </div>
   </div>
  )
}

export default Homepage
