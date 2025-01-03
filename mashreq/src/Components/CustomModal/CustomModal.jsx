import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



export default function CustomModal({open,onClose,children}) {

  return (
  
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{display:"flex",justifyContent:"center",alignItems:"center",overflow:"auto"}}
      >
        {children}
      </Modal>
  );
}