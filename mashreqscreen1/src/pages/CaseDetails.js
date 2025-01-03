import React from 'react'
import {Grid, Box,Typography } from '@mui/material'
import CustomAccordion from '../components/Customaccordion/Customaccordion'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import '../assets/styles/Mashreqscreen.css';

const CaseDetails = () => {
    const customStyles={
        textAlign:'left',
        // textDecoration:'underline',
        //  textDecorationColor:'#ff6f00',
        //  textDecorationThickness:'4px',
            fontFamily:'sans-serif'
      }
  return (
    <div className='div1' >
    
    <div className='div2'>
      <Typography style={customStyles}><strong>Case Details</strong></Typography>
      <Box  sx={{width:'30px',borderBottom:"4px solid #ff6f00"}} ></Box>
        <br></br>
        <Box sx={{gap:2,display:"flex",flexDirection:'row'}}>
       <Typography style={{borderRadius:'15px',backgroundColor:'#ff6f00',color:'white',fontSize:'14px'}} >Cases</Typography>
       <Typography style={{fontSize:'13px'}}>Case ID: #N/A || Request Type:Block</Typography>
        </Box>
        <Box   >
          <Typography style={{textAlign:'left',fontSize:'14px',fontWeight:'13px'}}>Case Created Date : N/A</Typography>
        </Box>
        <br></br>
        <Box >
          <Typography style={{width:'110px',borderRadius:'2px',textAlign:'left',backgroundColor:'#e0e0e0'}}>Deadline : N/A</Typography>
        </Box>
      </div>
        

        <CustomAccordion  icon={<AccountTreeOutlinedIcon/>} title={"Case Timeline"}  children={"This is a Case Timeline Accordion"} />
    </div>
  )
}

export default CaseDetails
