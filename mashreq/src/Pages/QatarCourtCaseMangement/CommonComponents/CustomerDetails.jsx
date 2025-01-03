import { Box, Grid } from '@mui/material'
import React from 'react'
import { RoutedpageStyle } from '../../../GlobalStyles/ParentComponentStyle/RoutedpageStyle'
import CustomTextfield from '../../../Components/CustomTextField/CustomTextfield'

export default function CustomerDetails({isGruMaker}) {
  return (
<>
{
        isGruMaker? <Box>
        <Grid container style={RoutedpageStyle.gridContainerStyle}>
           <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
            <Box>
                <CustomTextfield value={"dcdvbscvdn"}  placeholder={"CIF Number"} label={"CIF Number"} isFullwidth={true}></CustomTextfield>
            </Box>
           </Grid>
    
           <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
           <Box>
                <CustomTextfield  placeholder={"Customer Name"} label={"Customer Name"} isFullwidth={true}></CustomTextfield>
            </Box>
            </Grid>
    
        </Grid>
    
    
        <Grid container style={RoutedpageStyle.gridContainerStyle}>
           <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
            <Box>
                <CustomTextfield  placeholder={"Emirates Id"} label={"Emirates Id"} isFullwidth={true}></CustomTextfield>
            </Box>
           </Grid>
    
           <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
           <Box>
                <CustomTextfield  placeholder={"Passport Number"} label={"Passport Number"} isFullwidth={true}></CustomTextfield>
            </Box>
            </Grid>
    
        </Grid>
    
        <Grid container style={RoutedpageStyle.gridContainerStyle}>
           <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
           <Box>
                <CustomTextfield placeholder={"License Number"} label={"License Number"} isFullwidth={true}></CustomTextfield>
            </Box>
           </Grid>
    
           <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
           <Box>
                <CustomTextfield  type={"number"} placeholder={"Mobile Number"} label={"Mobile Number"} isFullwidth={true}></CustomTextfield>
            </Box>
            </Grid>
    
        </Grid>
    
        <Grid container style={RoutedpageStyle.gridContainerStyle}>
           <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
           <Box>
                <CustomTextfield  placeholder={"Date of Birth"} label={"Date of Birth"} isFullwidth={true}></CustomTextfield>
            </Box>
           </Grid>
    
           <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
           <Box>
                <CustomTextfield  placeholder={"Nationality"} label={"Nationality"} isFullwidth={true}></CustomTextfield>
            </Box>
            </Grid>
    
        </Grid>
    
    
    
    </Box>: 
    
    
    <Box>
    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
        <Box>
            <CustomTextfield value={"dcdvbscvdn"} isdisable={true} placeholder={"CIF Number"} label={"CIF Number"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Customer Name"} label={"Customer Name"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>


    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
        <Box>
            <CustomTextfield isdisable={true} placeholder={"Emirates Id"} label={"Emirates Id"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Passport Number"} label={"Passport Number"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"License Number"} label={"License Number"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true}  placeholder={"Mobile Number"} label={"Mobile Number"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>

    <Grid container style={RoutedpageStyle.gridContainerStyle}>
       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Date of Birth"} label={"Date of Birth"} isFullwidth={true}></CustomTextfield>
        </Box>
       </Grid>

       <Grid item xs={12} sm={12} md={6}  style={RoutedpageStyle.gridItemStyle}>
       <Box>
            <CustomTextfield isdisable={true} placeholder={"Nationality"} label={"Nationality"} isFullwidth={true}></CustomTextfield>
        </Box>
        </Grid>

    </Grid>



</Box>
    }
   
</>
    
  )
}
