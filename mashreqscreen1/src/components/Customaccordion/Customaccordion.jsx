import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';


export default function CustomAccordion({title,children,icon}) {
  const isMobile = window.innerWidth<600;
  
  return (
    <div>
      <Accordion elevation={0} style={{border:'1px solid #e0e0e0',
      width:isMobile?"350px":"400px",
      marginLeft:'20px',
      
      height:'auto',marginRight:'20px'}}>
        <AccordionSummary
          expandIcon={<ChevronRightIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
          
          sx={{display:'flex',alignItems:'center'}}
          >
            {icon}
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {children}
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}