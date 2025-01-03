import { Card, CardContent, FormControl, Grid, Select, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import React from 'react'
import LineChart from './pendingCaseChart'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Activities from './Activities.json'
import MenuItem from '@mui/material/MenuItem';


function PendingCases() {
    const FontStyles={
        fontSize:'12px',
        fontFamily:'sans-serif',
        color:'#9da2ab',
        textAlign:'left',
        fontWeight:'bold'
        
    }
     const DateFontsyle={
        fontSize:'12px',
        color:'#9da2ab',
        textAlign:'left',
        fontFamily:'unset'
     }
      const typoFontstyle={
        variant:'h6' ,
        fontSize:'15px',
         fontWeight:'bold',
          textAlign:'left'
      }
  return (
    
        <Grid container spacing={2}>
            <Grid item xs={8} >
                <Card sx={{width:900, height:400, margin:'40px' }}>
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography  textAlign='left' variant='h6' fontFamily='initial'  >Team Perfomance - pending cases</Typography>
                        <FormControl sx={{width:'120px' }}>

                        <InputLabel id="demo-simple-select-label">1 Month</InputLabel>
                        <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         label="1 Month"
                        >
                             <MenuItem >1 Month</MenuItem>
          <MenuItem >2 Month</MenuItem>
          <MenuItem >3 Month</MenuItem>
                        </Select>
                        </FormControl>
                        </div>
                
                            <LineChart  />
                    </CardContent>
              </Card>
         </Grid>
         <Grid item xs={4}  >
            <Card   sx={{width:370, height:400 ,margin:'40px', overflowY:'auto' }} >
                <CardContent>
                    <Typography textAlign='left' variant='h6' fontFamily='initial' >Activities</Typography>
                    <Stack direction="column" spacing={2}>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                        <Avatar alt="Rajagopal Sampath" src="/static/images/avatar/1.jpg" sx={{backgroundColor:'orange'}} />
                    </Grid>
                    <Grid item>
                        <Typography sx={typoFontstyle} >{Activities.person1}</Typography>
                        <Typography variant='body1' sx={FontStyles} >{Activities.activity1}</Typography>
                        <Typography variant='body1' sx={DateFontsyle} >02/02/2022 : 10:30 am</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                    <Avatar alt="Nimal Siddhartha" src="/static/images/avatar/2.jpg"  sx={{backgroundColor:'orange'}} />
                    </Grid>
                    <Grid item>
                    <Typography sx={typoFontstyle}  >{Activities.person2}</Typography>
                        <Typography variant='body1' sx={FontStyles} >{Activities.activity2}</Typography>
                        <Typography variant='body1' sx={DateFontsyle} >02/02/2022 : 10:30 am</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                    <Avatar alt="Michelline" src="/static/images/avatar/3.jpg" sx={{backgroundColor:'orange'}}  />
                    </Grid>
                    <Grid item>
                    <Typography sx={typoFontstyle} >{Activities.person3}</Typography>
                        <Typography variant='body1' sx={FontStyles} >{Activities.activity3}</Typography>
                        <Typography variant='body1' sx={DateFontsyle} >02/02/2022 : 10:30 am</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                    <Avatar alt="Ibrahim" src="/static/images/avatar/1.jpg"  sx={{backgroundColor:'orange'}} />
                    </Grid>
                    <Grid item>
                    <Typography  sx={typoFontstyle}>{Activities.person4}</Typography>
                        <Typography variant='body1' sx={FontStyles} >{Activities.activity4}</Typography>
                        <Typography variant='body1' sx={DateFontsyle} >02/02/2022 : 10:30 am</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                    <Avatar alt="Indumathi" src="/static/images/avatar/2.jpg" sx={{backgroundColor:'orange'}}  />
                    </Grid>
                    <Grid item>
                    <Typography sx={typoFontstyle} >{Activities.person5}</Typography>
                        <Typography variant='body1' sx={FontStyles} >{Activities.activity5}</Typography>
                        <Typography variant='body1' sx={DateFontsyle} >02/02/2022 : 10:30 am</Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                    <Avatar alt="Tauseef" src="/static/images/avatar/3.jpg" sx={{backgroundColor:'orange'}}  />
                    </Grid>
                    <Grid item>
                    <Typography sx={typoFontstyle} >{Activities.person6}</Typography>
                        <Typography variant='body1' sx={FontStyles} >{Activities.activity6}</Typography>
                        <Typography variant='body1' sx={DateFontsyle} >02/02/2022 : 10:30 am</Typography>
                    </Grid>
                </Grid>
                   </Stack>
                </CardContent>
            </Card>

            </Grid>

        </Grid>
  )
}

export default PendingCases

