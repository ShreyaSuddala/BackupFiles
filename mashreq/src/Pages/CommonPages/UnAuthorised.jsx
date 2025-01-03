import { useTheme } from '@emotion/react'
import { Box, Typography } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { RoutedpageStyle } from '../../GlobalStyles/ParentComponentStyle/RoutedpageStyle'
import unauthorised from "../../Assets/unauthorised.jpg"
import CustomButton from '../../Components/CustomButton/CustomButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Footer from './Footer'

export default function UnAuthorised() {

  const navigate=useNavigate()
  const location=useLocation()

const handleclick=(e)=>{
  navigate(-1)
}
const themeColor=useTheme()
  return (
    <Box sx={RoutedpageStyle.fisrstBoxStyle}>
    <Box sx={RoutedpageStyle.secondboxStyle}>
      <Box sx={{height:"79%",width:"100%",background:`linear-gradient(20deg,rgba(0,0,0,0.1) 0,${themeColor?.palette?.primary?.main}),url(${unauthorised}) center fixed `,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>

<Box sx={{marginLeft:"10%"}}>
<Typography variant='h6' sx={{color:"#FFF"}}>We apologize, but you are not authorized to view this. Please click the button below to return to the previous page.</Typography>
</Box>
        
        <Box sx={{display:"flex",justifyContent:"center",height:"200px",width:"200px",alignItems:"center"}}>
          <Box>
          <CustomButton startIcon={<ArrowBackIcon/>} onClick={handleclick} title={"Go Back"}></CustomButton>

          </Box>
        </Box>

      </Box>

<Footer></Footer>
    </Box>
    
   </Box>
  )
}
