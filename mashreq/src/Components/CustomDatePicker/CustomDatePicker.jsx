import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CustomTextfield from '../CustomTextField/CustomTextfield';

export default function CustomDatePicker({label,value,onChange}) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <DatePicker
        format='DD/MM/YYYY'
        defaultValue={dayjs()}
          label={label}
          value={value}
          onChange={onChange}
          slotProps={{ textField: { size: 'small' ,variant:"standard"} }}
        />
    </LocalizationProvider>
  );
}