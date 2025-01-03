import React from 'react'
import CustomTable from '../../components/CustomTable/CustomTable'
import CustomTextField from '../../components/CustomTextField/CustomTextField'
import CustomButton from '../../components/CustomButton/CustomButton'
import {Grid, Paper,} from '@mui/material';
import '../../assets/styles/OverviewTabs.css'

import CustomTextArea from '../../components/CustomTextArea/CustomTextArea';
const OverView = () => {
    
  const columns =[
    "CASE REFERENCE NO","CIF ID","TITLE OF REQUEST","BUSINESS SEGMENT","REQUESTOR UNIT","ACTIVITY LEVEL","INITIATOR ID",
    "STATUS","AGEING","CASE CREATED DATE","DESCRIPTION","JOB ASSIGNMENT","PRODUCT NAME","SHARTAH DECISION","CATEGORY OF ASSIGNMENT",
    "PREVIOUS ASSIGNMENT ID /REQUEST NUMBER"
   ]
 
   const tfields=[
 
   
     {
       id:"1",
       label:"Request type",
       placeholder:'Block'
     },
     {
       id:"2",
       label:"Request Unique Id",
       placeholder:'Request Unique Id'
     },
     {
       id:"3",
       label:"Name",
       placeholder:'Name'
     },
     
     {
       id:"4",
       label:"Reason Code",
       placeholder:'Reasob Code'
     },
     {
       id:"5",
       label:"Case Reference Number",
       placeholder:'Case'
     },
     {
       id:"6",
       label:"Decision Reference Number",
       placeholder:'Block'
     },
     {
       id:"7",
       label:"Date Currency Amount",
       placeholder:'Block'
     },
     {
       id:"8",
       label:"Request Priority",
       placeholder:'Block'
     },
     {
       id:"9",
       label:"Id Type",
       placeholder:'Block'
     },
     {
       id:"10",
       label:"Id Value",
       placeholder:'Block'
     },
     {
       id:"11",
       label:"Date,CurrencyAmount*",
       placeholder:'Block'
     },
     {
       id:"12",
       label:"IBAN Number*",
       placeholder:'Block'
     }
   
   ]


  return (
    <div>
      <div className='customtable' >

      <CustomTable marginLeft="20px" marginRight="20px" tableColumn={columns} />
      </div>
        <Paper style={{ border: "1px solid #e0e0e0", marginTop: "20px", marginLeft: "20px", marginRight:'20px', padding: "10px"}}>
        <Grid container spacing={4} justify="center" alignItems="center">
        {
       tfields.map((textfield,index) => (
        <Grid item key={index} xs={12} sm={12} md={3} lg={3} xl={3}>
        <CustomTextField  id={textfield.id} label={textfield.label} placeholder={textfield.placeholder}
         value={textfield.value}  />
        </Grid>
        ))}
         <Grid item xs="auto"   container justifyContent='flex-end'>
            <Grid container justifyContent="flex-end">
              <CustomButton title={"ADD"} />
            </Grid>
          </Grid>
        </Grid>
        <br></br>
            <Grid style={{display:'flex', flexDirection:'row',gap:20}} >
            <CustomTextArea  placeholder={"Message"} minRows={7} maxRows={7} />
            <CustomTextArea  placeholder={"Reply Message"}  minRows={7} maxRows={7}  />
          
            </Grid>
           
        </Paper>
     

    
    
    
    
      
    </div>
        
  )
}

export default OverView
