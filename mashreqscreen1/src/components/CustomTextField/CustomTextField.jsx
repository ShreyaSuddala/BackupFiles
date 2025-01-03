import React from 'react'
import TextField from '@mui/material/TextField';
const CustomTextField = ({id,label,placeholder,value,component,isFullwidth,minWidth}) => {

  return (
    
        <TextField
        // sx={{minWidth:minWidth?minWidth:"100%"}}
        size='small'
        style={{fontFamily:'sans-serif'}}
          fullWidth
          id={id}
          label={label}
          placeholder={placeholder}
          value={value}
        />
  
  )
}

export default CustomTextField
