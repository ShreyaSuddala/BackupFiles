import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';

export const Severity={
    "success":"success",
    "error":"error",
    "warning":"warning",
    "info":"info",
}



export default function CustomSnackBar({open,onClose,severity,message}) {

  return (
     
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
         {message}
        </Alert>
      </Snackbar>
  );
}