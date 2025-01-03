import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, IconButton,  Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import WarningIcon from '@mui/icons-material/Warning';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import alerts from './alerts.json'

export default function SimplePaper() {
  const paperStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    // backgroundColor:'pink',
  
  };

  const iconButtonStyles = {
    marginLeft: '-5px',
    marginRight: '10px',
    marginBottom: '5px',
    marginTop: '5px',
    border:'1px solid',
    borderRadius:0,
    borderColor:'#f0f2f0',
    backgroundColor: '#f0f2f0',
    color:'#02369e'
  };

    const FontStyles={
      fontSize:'15px',
      fontFamily:"sans-serif",
      fontWeight:'bold',
      
    }
  return (
    <Grid container spacing={4} sx={{ margin: '30px' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: -14,
          '& > :not(style)': {
            m:1,
            width: 289,
            height: 50,
           
          },
        }}
      >
        <Paper sx={paperStyles}  >
          <IconButton sx={iconButtonStyles}>
            <AddCircleOutlineIcon />
          </IconButton>
          <Box display='flex' flexDirection='column' >

          <Typography variant='title' sx={FontStyles}>{alerts['manual alerts']}</Typography>
          <Typography  variant='subtitle' color='grey' fontSize='14px' >Manual Alerts</Typography>
          </Box>

          
        </Paper>
        <Paper sx={paperStyles}>
          <IconButton sx={iconButtonStyles}>
            <WarningIcon/>
          </IconButton>
          <Box display='flex' flexDirection='column' >

          <Typography variant='title' sx={FontStyles}>{alerts['SAS alerts']}</Typography>
          <Typography  variant='subtitle'  color='grey' fontSize='14px'  >SAS Alerts</Typography>
          </Box>
        </Paper>
        <Paper sx={paperStyles}>
          <IconButton sx={iconButtonStyles}>
            <CalendarMonthIcon/>
          </IconButton>
          <Box display='flex' flexDirection='column' >

          <Typography variant='title' sx={FontStyles}>{alerts['leave plans for the month']}</Typography>
          <Typography  variant='subtitle' color='grey' fontSize='14px'  >Leaves For Month</Typography>
          </Box>
        </Paper>
        <Paper sx={paperStyles}     >
          <IconButton sx={iconButtonStyles}>
            <PersonOutlineIcon/>
          </IconButton>
          <Box display='flex' flexDirection='column' >

          <Typography variant='title' sx={FontStyles}>{alerts.users}</Typography>
          <Typography  variant='subtitle' color='grey' fontSize='14px'  >Users</Typography>
          </Box>
        </Paper>
    
    
      </Box>
    </Grid>
  );
}
