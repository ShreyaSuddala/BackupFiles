import { Box, Grid } from '@mui/material'
import React from 'react'
import { RoutedpageStyle } from '../../../GlobalStyles/ParentComponentStyle/RoutedpageStyle'
import CustomTextfield from '../../../Components/CustomTextField/CustomTextfield'
import CustomTextArea from '../../../Components/CustomTextArea/CustomTextArea'
import { CommonStyle } from './CommonStyle'

export default function Debit({isGruMaker}) {
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

{
    isGruMaker? <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
    <Box>
         <CustomTextfield  placeholder={"Qcb Debit  Message T20"} label={"Qcb Debit  Message T20"} isFullwidth={true}></CustomTextfield>
     </Box>
     </Grid>: <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Qcb Debit  Message T20"} label={"Qcb Debit  Message T20"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>
}
      

    </Grid>

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Beneficiary Bank BIC"} label={"Beneficiary Bank BIC"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Bank Block Reply"} label={"Bank Block Reply"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Beneficiary IBAN Number"} label={"Beneficiary IBAN Number"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Release Remaining Amount"} label={"Release Remaining Amount"} isFullwidth={true}></CustomTextfield>
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
    isGruMaker?<Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
    <Box>
         <CustomTextfield  placeholder={"Transfer Referance Number"} label={"Transfer Referance Number"} isFullwidth={true}></CustomTextfield>
     </Box>
     </Grid>:<Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Transfer Referance Number"} label={"Transfer Referance Number"} isFullwidth={true}></CustomTextfield>
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
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"IBAN Number"} label={"IBAN Number"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Actual Blocked Amount"} label={"Actual Blocked Amount"} isFullwidth={true}></CustomTextfield>
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
    isGruMaker? <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
    <Box>
    <CustomTextArea placeholder={"Reply Message"} minRows={5} maxRows={6} ></CustomTextArea>
     </Box>
     </Grid>: <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
       <CustomTextArea isdisable={true} placeholder={"Reply Message"} minRows={5} maxRows={6} ></CustomTextArea>
        </Box>
        </Grid>
}
      

    </Grid>

</Box>
  )
}
