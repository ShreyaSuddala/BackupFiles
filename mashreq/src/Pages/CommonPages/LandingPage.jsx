import { Box, Card, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { RoutedpageStyle } from '../../GlobalStyles/ParentComponentStyle/RoutedpageStyle'
import ccms from "../../Assets/ccms.jpg"
import fcr from "../../Assets/fcr.png"
import qccms from "../../Assets/qccms.jpg"
import { useTheme } from '@emotion/react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import unauth from "../../Assets/unauth.jpg"
import CustomToolTip from '../../Components/CustomTooltip/CustomToolTips'


const landItem=[
  {
    "id":"1",
    "image":qccms,
    "Label":"QCCMS",
    "url":"/qccms-homepage",
    "tooltipTitle":"Click on me to view the homepage of Qccms."
  },
  {
    "id":"2",
    "image":ccms,
    "Label":"CCMS",
    "url":"",
    "tooltipTitle":"Click on me to view the homepage of Ccms."
  },
  {
    "id":"3",
    "image":fcr,
    "Label":"FCR",
    "url":"",
    "tooltipTitle":"Click on me to view the homepage of Fcr."
  }
]

function changeImage(index){
  document.getElementById("imageId").src=landItem[index]?.image
}

export default function LandingPage() {



  const themeColor=useTheme()

const navigate=useNavigate()

  return (
    <Box sx={RoutedpageStyle.fisrstBoxStyle}>
    <Box sx={RoutedpageStyle.secondboxStyle}>



<Box sx={{display:"flex",height:"79%",background:`linear-gradient(20deg,rgba(0,0,0,0.1) 0,${themeColor?.palette?.primary?.main}),url(${unauth})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
<Box sx={{mt:2,ml:2,display:"flex",height:"100%",width:"100%"}}>
     {

landItem?.map((item,index)=>{

  return(
    <CustomToolTip title={item?.tooltipTitle}>
    <Card  onClick={(e)=>{navigate(item.url)}} id={item.id} sx={{cursor:"pointer",mr:2,display:"flex",justifyContent:"center",alignItems:"center",height:"100px",width:"200px",background:`linear-gradient(20deg,rgba(0,0,0,0.1) 0,${themeColor?.palette?.primary?.main}),url(${item.image})`,backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
     <Box sx={{width:"80%",display:"flex",justifyContent:"center",alignItems:"center"}}>
     <Typography variant='h6' sx={{color:themeColor?.palette?.white?.main}} >{item.Label}</Typography>
     </Box>

    </Card>
    </CustomToolTip>
  )
})

     }
     </Box>

</Box>



<Footer></Footer>
    </Box>
    </Box>
  )
}
