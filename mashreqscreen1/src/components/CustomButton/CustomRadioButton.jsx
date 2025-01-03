import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CustomRadioButton({radio,radioTitle,onChange,onClick}) {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">{radioTitle}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
    
      >
        {
            radio.map((rad,i)=>(
                <FormControlLabel  
                key={i} 
                value={rad.value}
                control={<Radio/>}
                label={rad.label}
                onClick={onClick}
                onChange={onChange}
                
                >
                
                </FormControlLabel>
            ))
        }
       
        {/* <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        /> */}
      </RadioGroup>
    </FormControl>
  );
}