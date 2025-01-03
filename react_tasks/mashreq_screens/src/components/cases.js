import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CustomPieChart from './Charts';
import ApexChart from './caseResponsesCharts';
import BasicDateCalendar from './Calender';


const colors=["#5397e6","#008000","#b00020"]

function CasesGraphs() {

  return (
    <Grid container spacing={2}>
      <Grid item xs={4} lg={4}>
        <Card style={{  width: '450px', height:'250px',  marginLeft:'40px' }}>
          <CardContent>
            <Typography textAlign={'left'} >Cases</Typography>
            <CustomPieChart colors={colors} />
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} lg={4}>
        <Card style={{  width: '450px',height:'250px',marginLeft:'70px'  }}>
          <CardContent>
            <Typography textAlign={'left'}>Case Responses</Typography>
            <ApexChart/>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} lg={4}>
        <Card style={{  width: '310px',height:'250px',marginLeft:'100px'   }}>
          <CardContent>
            <Typography textAlign={'left'}>Calender</Typography>
            <BasicDateCalendar/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CasesGraphs;
