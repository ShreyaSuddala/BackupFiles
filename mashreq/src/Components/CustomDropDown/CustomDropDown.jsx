import { FormControl, InputLabel, Select } from '@mui/material'
import React from 'react'




const ITEM_HEIGHT=48
const ITEM_PADDING_TOP=1

export default function CustomDropDown({label,children,value,onchange,isFullwidth,placeholder,minWidth}) {

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        minWidth:minWidth?minWidth:"260px",
      },
    },
  };
  
  return (
    <FormControl sx={{minWidth:minWidth?minWidth:"250px",margin:"4px"}} size='small' fullWidth={isFullwidth}>
    <InputLabel size='small'
   sx={{"&.MuiInputLabel-sizeSmall": { top:"2vh",marginLeft:-1.8,fontSize:14,left:0,padding:0}}}
    id="demo-select-small-label">{label}</InputLabel>
    <Select
   
    placeholder={placeholder}
    variant='standard'
    fullWidth={isFullwidth}
    sx={{height:"33px",width:"100%"}}
    MenuProps={MenuProps}
     labelId="demo-select-small-label"
     id="demo-select-small"
      value={value}
      onChange={onchange}
      label={label}  
      >
        {children}
   
    </Select>
  </FormControl>
  )
}