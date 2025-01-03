import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({id,label,variant,placeholder,value,onChange}) {
  return (
   
      <TextField id={id} label={label} variant={variant}
      placeholder={placeholder} value={value}
      onChange={onChange}
      />
    
   
  );
}