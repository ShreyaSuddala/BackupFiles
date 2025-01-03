import { Box } from '@mui/material'
import React from 'react'
import { RoutedpageStyle } from '../../GlobalStyles/ParentComponentStyle/RoutedpageStyle'
import notfound from "../../Assets/notfound.png"
import { useLocation, useNavigate } from 'react-router-dom'
import { useTheme } from '@emotion/react'
import CustomButton from '../../Components/CustomButton/CustomButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from './Footer'

export default function NotFound() {
  const navigate=useNavigate()
  const location=useLocation()

const handleclick=(e)=>{
  navigate(-1)
}
const themeColor=useTheme()


  return (
   <Box sx={RoutedpageStyle.fisrstBoxStyle}>
    <Box sx={RoutedpageStyle.secondboxStyle}>
      <Box sx={{height:"79%",width:"100%",background:`linear-gradient(20deg,rgba(0,0,0,0.1) 0,${themeColor?.palette?.primary?.main}),url(${notfound}) center`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

        
        <Box sx={{display:"flex",justifyContent:"center",height:"200px",width:"200px",alignItems:"center"}}>
          <Box>
          <CustomButton startIcon={<ArrowBackIcon/>} onClick={handleclick} title={"Go Back"}></CustomButton>

          </Box>
        </Box>

      </Box>

<Footer/>
    </Box>
    
   </Box>
  )
}
