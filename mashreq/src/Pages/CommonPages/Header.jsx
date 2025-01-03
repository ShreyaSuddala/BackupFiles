import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import mashreqLogo from "../../Assets/mashreqLogo.png"
import { RoutedpageStyle } from '../../GlobalStyles/ParentComponentStyle/RoutedpageStyle'
import LogoutIcon from '@mui/icons-material/Logout';
import CustomToolTip from '../../Components/CustomTooltip/CustomToolTips';
import { useTheme } from '@emotion/react';

export default function Header() {

  // const themeColor=useTheme()
  // ,borderBottom:`2px solid ${themeColor?.palette?.primary?.main}

  return (
    
    <Card sx={{borderRadius:"0px",height:"9%",marginLeft:"3%",marginRight:"3%"}} elevation={0}>
        <Grid container style={RoutedpageStyle.gridContainerStyle}>
        <Grid item  xs={4} md={3.5} style={RoutedpageStyle.gridItemStyle}>
       
        <img src={mashreqLogo} style={{height:"100%",width:"100%",objectFit:"fill"}} alt='not found'></img>
      
        </Grid>
        <Grid item  xs={4} md={2.5} style={RoutedpageStyle.gridItemStyle}>
        <Box>
         <Typography color="primary" variant='h6'>
           Mashreq
         </Typography>
        </Box>
        </Grid>

      
        <Grid item  xs={4} md={3} style={RoutedpageStyle.gridItemStyle1}>
        <Box sx={{display:'flex'}}>
          <Box>
           <Box><Typography color="primary" variant='custom2'>User Name</Typography></Box>
            <Box><Typography  color="primary" variant='custom1'>P Panda</Typography></Box>
          </Box>
            <CustomToolTip title={"Logout"}>

            <Box  sx={{ml:1,mr:1,display:'flex',justifyContent:"center",alignItems:"center"}}><LogoutIcon color='primary'/></Box>

            </CustomToolTip>
        </Box>
        </Grid>

        </Grid>

    </Card>
   
  )
}
