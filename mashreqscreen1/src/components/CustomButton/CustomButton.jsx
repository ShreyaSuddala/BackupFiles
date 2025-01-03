import { Button } from '@mui/material'
import React from 'react'


export default function CustomButton({title,color,isFullwidth,onClick,startIcon,endIcon}) {
  return (
    <Button endIcon={endIcon} type="submit"  startIcon={startIcon} onClick={onClick} size='small'
    
     variant='contained'
     style={{
      backgroundColor: "#ff6f00",
     
    }}
   
     sx={{minWidth:"70px"}}
      color={color?color:"primary"} fullWidth={isFullwidth} 
      
      >{title}</Button>
  )
}
 