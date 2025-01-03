import { Box, Grid } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import GridViewIcon from '@mui/icons-material/GridView';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

function Dashboard() {
  return (
    <Grid container spacing={2} >
        <Grid item xs={8}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <GridViewIcon style={{ marginRight: '10px' ,margin:'40px' ,color:'blue' }} />
       <Typography color='black' variant="h6" component="div" sx={{ textAlign: 'left' }} marginLeft={-2}>
            Dashboard
       </Typography>
            </Box>
        </Grid>

        <Grid item xs={4} >
        <TextField sx={{textAlign:'right',justifyContent:'flex-end', 
        
        borderBlockColor:'black' ,marginTop:'20px',display:'end',
        width:'85%', height:'50%' ,paddingRight:'0px' }}
        id="outlined-basic" placeholder='Case Id/Alert Id/CIF No/Customer Name'
         variant="outlined" 
         InputProps={{
             startAdornment: (
      <SearchIcon style={{ marginRight: '8px', color: 'gray' }} />
            ),
        }}/>
        </Grid>
    </Grid>
    
  )
}

export default Dashboard











