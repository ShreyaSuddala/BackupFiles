import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@emotion/react';

export default function CustomAccordion({title,children,expanded,onChange,panel}) {

const themeColor=useTheme()

  return (
   
      <Accordion elevation={0} expanded={expanded===panel} sx={{color:themeColor?.palette?.primary?.main}} onChange={onChange(panel)}>
        <AccordionSummary
      //  sx={{backgroundColor:themeColor?.palette?.primary?.main}}
          expandIcon={<ExpandMoreIcon color='primary' />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
         {children}
        </AccordionDetails>
      </Accordion>
     
  );
}