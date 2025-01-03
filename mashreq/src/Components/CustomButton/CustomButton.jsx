import { Button } from '@mui/material'
import React from 'react'


export default function CustomButton({title,color,isFullwidth,onClick,startIcon,endIcon}) {
  return (
    <Button endIcon={endIcon} type="submit"  startIcon={startIcon} onClick={onClick} size='small'
     variant='contained'
      color={color?color:"primary"} fullWidth={isFullwidth} sx={{minWidth:"70px"}}
      
      >{title}</Button>
  )
}
