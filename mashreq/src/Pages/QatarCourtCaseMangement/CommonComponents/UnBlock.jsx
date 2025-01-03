import { Box, Grid, MenuItem } from '@mui/material'
import React from 'react'
import CustomTextfield from '../../../Components/CustomTextField/CustomTextfield'
import { RoutedpageStyle } from '../../../GlobalStyles/ParentComponentStyle/RoutedpageStyle'
import CustomTextArea from '../../../Components/CustomTextArea/CustomTextArea'
import { CommonStyle } from './CommonStyle'
import CustomDropDown from '../../../Components/CustomDropDown/CustomDropDown'
import { grumaker } from './Block'

export default function UnBlock({isGruMaker}) {
  return (
    <Box>
    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
        <Box>
            <CustomTextfield  isdisable={true} placeholder={"Request Type"} label={"Request Type"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Request Id"} label={"Request Id"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>


    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
        <Box>
            <CustomTextfield isdisable={true} placeholder={"Name"} label={"Name"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>
{
    isGruMaker?<Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
    <Box><CustomDropDown placeholder={"Status"} label={"Status"} isFullwidth={true} children={grumaker?.map((item,index)=>{
        return(
            <MenuItem id={item.id} value={item.id}>{item.reason}</MenuItem>
        )
    })} ></CustomDropDown></Box></Grid>

    : <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
    <Box>
         <CustomTextfield isdisable={true} placeholder={"Status"} label={"Status"} isFullwidth={true}></CustomTextfield>
     </Box>
     </Grid>
}
      

    </Grid>

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
        {
            isGruMaker? <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
            <Box>
                 <CustomTextfield  placeholder={"Qcb Ulk Tag20 Message"} label={"Qcb Ulk Tag20 Message"} isFullwidth={true}></CustomTextfield>
             </Box>
            </Grid>: <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Qcb Ulk Tag20 Message"} label={"Qcb Ulk Tag20 Message"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>
        }
      

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Bank Block Reply"} label={"Bank Block Reply"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>
 
    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Date,Currency,Amount"} label={"Date,Currency,Amount"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

{
    isGruMaker? <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
    <Box>
         <CustomTextfield  placeholder={"Error Text"} label={"Error Text"} isFullwidth={true}></CustomTextfield>
     </Box>
     </Grid>: <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Error Text"} label={"Error Text"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>
}
      

    </Grid>


    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Id Type"} label={"Id Type"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Id Value"} label={"Id Value"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"IBAN Number"} label={"IBAN Number"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

    </Grid>



    <Grid container style={RoutedpageStyle.gridContainerStyle} sx={CommonStyle.MessageAndReplayMessageContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextArea isdisable={true} placeholder={"Message"} minRows={5} maxRows={6} ></CustomTextArea>
        </Box>
       </Grid>
{
    isGruMaker?
    <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
    <Box>
    <CustomTextArea  placeholder={"Reply Message"} minRows={5} maxRows={6} ></CustomTextArea>
     </Box>
     </Grid>
: <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
<Box>
<CustomTextArea isdisable={true} placeholder={"Reply Message"} minRows={5} maxRows={6} ></CustomTextArea>
 </Box>
 </Grid>

}
      
    </Grid>

</Box>
  )
}
