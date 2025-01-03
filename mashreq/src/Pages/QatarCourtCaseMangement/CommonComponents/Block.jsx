import { Box, Grid, MenuItem } from '@mui/material'
import React from 'react'
import { RoutedpageStyle } from '../../../GlobalStyles/ParentComponentStyle/RoutedpageStyle'
import CustomTextfield from '../../../Components/CustomTextField/CustomTextfield'
import CustomTextArea from '../../../Components/CustomTextArea/CustomTextArea'
import { CommonStyle } from './CommonStyle'
import CustomDropDown from '../../../Components/CustomDropDown/CustomDropDown'

 export const grumaker=[
    {id:1,reason:"A001"},
    {id:2,reason:"A002"},
    {id:3,reason:"A003"},
    {id:4,reason:"A004"},
    {id:5,reason:"A005"},
    {id:6,reason:"A006"},
    {id:7,reason:"A007"},
    {id:8,reason:"A008"},
]

export default function Block({isGruMaker}) {



  return (
<Box>
    <Grid rid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
        <Box >
            <CustomTextfield value={"dcdvbscvdn"} isdisable={true} placeholder={"Request Type"} label={"Request Type"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Request Unique Id"} label={"Request Unique Id"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>


    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
        <Box>
            <CustomTextfield isdisable={true} placeholder={"Name"} label={"Name"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       
       {
        isGruMaker? <Box>
        <CustomDropDown placeholder={"Reason Code"} label={"Reason Code"} isFullwidth={true} children={grumaker?.map((item,index)=>{
            return(
                <MenuItem id={item.id} value={item.id}>{item.reason}</MenuItem>
            )
        })} ></CustomDropDown>
    </Box>: <Box>
            <CustomTextfield isdisable={true} placeholder={"Reason Code"} label={"Reason Code"} isFullwidth={true}></CustomTextfield>
        </Box>
       }
       
      
        </Grid>

    </Grid>

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Case Reference Number"} label={"Case Reference Number"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Decision Reference Number"} label={"Decision Reference Number"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Date,Currency,Amount"} label={"Date,Currency,Amount"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Request Priority"} label={"Request Priority"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

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


{
    isGruMaker?

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield  placeholder={"Date,Currency,Amount"} label={"Date,Currency,Amount"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield placeholder={"IBAN Number"} label={"IBAN Number"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>

    : <Grid container style={RoutedpageStyle.gridContainerStyle}>
    <Grid item xs={12}  style={RoutedpageStyle.gridItemStyle}>
    <Box>
         <CustomTextfield isdisable={true} placeholder={"IBAN Number"} label={"IBAN Number"} isFullwidth={true}></CustomTextfield>
     </Box>
    </Grid>

 </Grid>
}

   



    <Grid container style={RoutedpageStyle.gridContainerStyle} sx={CommonStyle.MessageAndReplayMessageContainerStyle}>
     
     {
        isGruMaker? <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
        <Box>
             <CustomTextArea placeholder={"Message"} minRows={5} maxRows={6} ></CustomTextArea>
         </Box>
        </Grid>: <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextArea isdisable={true} placeholder={"Message"} minRows={5} maxRows={6} ></CustomTextArea>
        </Box>
       </Grid>
     }
     
      {
        isGruMaker?<Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
        <Box>
        <CustomTextArea  placeholder={"Reply Message"} minRows={5} maxRows={6} ></CustomTextArea>
         </Box>
         </Grid>:<Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
       <CustomTextArea isdisable={true} placeholder={"Reply Message"} minRows={5} maxRows={6} ></CustomTextArea>
        </Box>
        </Grid>
      }

       

    </Grid>

</Box>
  )
}
