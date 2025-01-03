import { InputAdornment, TextField } from '@mui/material'
import React from 'react'

export default function CustomTextfield({placeholder,value,onchange,type,label,isFullwidth,endIcon ,isdisable,isRequired,minWidth}) {

  return (
    <TextField  size='small'  label={label} sx={{minWidth:minWidth?minWidth:"250px",margin:"4px"}} placeholder={placeholder} 
    value={value} type={type?type:"text"} onChange={onchange}
    fullWidth={isFullwidth}
    disabled={isdisable}
    required={isRequired}
    InputProps={{style: { fontSize: '13px',height: 30,alignItems:"center"},endAdornment: (
      <InputAdornment  position="start" >
       {endIcon}
      </InputAdornment>
    ),
   }}
    InputLabelProps={{ sx: {fontSize: "14px", fontWeight:"bold",top: "-0.7vh", "&.MuiInputLabel-shrink": { top: 0 } } }}
    variant='standard'
    ></TextField>
  )
}