import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react'
import CustomToolTip from '../../CustomTooltip/CustomToolTips';
import LockResetIcon from '@mui/icons-material/LockReset';

export const Operators=[
    {id:1,value:"contains",input:"contains"},
    {id:2,value:"equals",input:"equals"},
    {id:3,value:"starts with",input:"startswith"},
    {id:4,value:"ends with",input:"endswith"},
    {id:5,value:"is any of",input:"isanyof"},
  ]
  
  


export default function FilteredItem({headCells}) {
  return (
    <></>
    // <Card elevation={0} sx={{width:"700px",borderRadius:0,margin:"5px"}}>
    // <Box sx={{justifyContent:"space-between",display:"flex",alignItems:"center"}}>
    //   <Typography variant='body1' color="primary">Filter Panel <span><Box sx={{width:"30px",height:"4px",backgroundColor:"red"}}></Box></span></Typography>
    
    //   <CustomToolTip title="Reset All Field">
    //   <LockResetIcon sx={{cursor:"pointer"}} onClick={()=>{settextFieledValue("");setcolumns("");setoperators("")}} fontSize='large' color='primary'/>
    //   </CustomToolTip>
    // </Box>
     
    //     <Grid container >
    //       <Grid item xs={4}>
    //         <Box sx={{minWidth:"200px",margin:"10px"}}>
    //         <FormControl variant="standard" fullWidth>
    //         <InputLabel size='small' id="demo-simple-select-standard-label">Columns</InputLabel>
    //         <Select
    //          size='small'
    //           labelId="demo-simple-select-standard-label"
    //           id="demo-simple-select-standard"
    //           value={columns}
    //           onChange={(e)=>{setcolumns(e.target.value)}}
    //           label="Columns"
    //         >
            
    //          {
    //           headCells?.map((item,index)=>{
    
    //             return(
    //               <MenuItem value={item?.id} id={item?.id} >{item?.label}</MenuItem>
    //             )
    //           })
    //          }
    //         </Select>
    //       </FormControl>
             
    //         </Box>
    //       </Grid>
    
    
    //       <Grid item xs={4}>
    //         <Box sx={{minWidth:"200px",margin:"10px"}}>
    //         <FormControl variant="standard" fullWidth>
    //         <InputLabel size='small' id="demo-simple-select-standard-label">Operators</InputLabel>
    //         <Select
    //          size='small'
    //           labelId="demo-simple-select-standard-label"
    //           id="demo-simple-select-standard"
    //           value={operators}
    //           onChange={(e)=>{setoperators(e.target.value)}}
    //           label="Operators"
    //         >
            
    //          {
    //           Operators?.map((item,index)=>{
    
    //             return(
    //               <MenuItem value={item?.input} id={item?.id} >{item?.value}</MenuItem>
    //             )
    //           })
    //          }
    //         </Select>
    //       </FormControl>
             
    //         </Box>
    //       </Grid>
    
    //       <Grid item xs={4}>
    //         <Box sx={{minWidth:"200px",margin:"10px"}}>
    //         <TextField variant='standard' size='small' label="Filter value" placeholder="Filter value" value={textFieledValue} onChange={(e)=>{settextFieledValue(e.target.value)}}></TextField>
             
    //         </Box>
    //       </Grid>
    
       
    //     </Grid>
      
    //     </Card>
    
  )
}
