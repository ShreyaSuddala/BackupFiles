import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Case from './case.json'
import GetAppIcon from '@mui/icons-material/GetApp';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function BasicTable() {
  const fontcolor={
    color:'blue',
  }
  return (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Typography sx={{ textAlign: 'left', margin: '40px' }}>Cases</Typography>
    <div style={{display:'flex',justifyContent:'end'}} >
      <GetAppIcon  sx={{color:'green',margin:'40px',alignItems:'flex-end',marginRight:'-30px'}} />
  <Typography sx={{ textAlign: 'right', margin: '40px' }}>Export to Excel
  </Typography>
  <Typography sx={{color:'orange',margin:'40px',marginRight:'-30px'}} >View all
  </Typography>
  <ArrowRightAltIcon  sx={{ textAlign: 'right', margin: '40px',color:'orange' }}/>
    </div>
</div>

    <TableContainer component={Paper}  >
      <Table sx={{ minWidth: 650 ,marginTop:'1px' ,marginLeft:'40px'  }} aria-label="simple table">
        <TableHead>
          <TableRow  >
            <TableCell align="left" sx={fontcolor} >CASE ID</TableCell>
            <TableCell align="left" sx={fontcolor} >CIF ID</TableCell>
            <TableCell align="left" sx={fontcolor}>STATUS</TableCell>
            <TableCell align='left' sx={fontcolor}>ALERTED ENTITY NAME</TableCell>
            <TableCell align='left' sx={fontcolor}>PRIMARY ENTITY NAME</TableCell>
            <TableCell align='left' sx={fontcolor}>AGING</TableCell>
            <TableCell align='left' sx={fontcolor}>CREATED ON</TableCell>
            <TableCell align='left' sx={fontcolor}>CREATED USER ID</TableCell>
            <TableCell align='left' sx={fontcolor}>ASSIGNED TO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell component="th" scope="row" >{Case.caseid}</TableCell>
              <TableCell align="left">{Case.CIFid}</TableCell>
              <TableCell align="left">{Case.Status}</TableCell>
              <TableCell align="left">{Case.AlertedEntityName}</TableCell>
              <TableCell align="left">{Case.PrimaryEntityName}</TableCell>
              <TableCell align="left">{Case.Aging}</TableCell>
              <TableCell align="left">{Case.createdon}</TableCell>
              <TableCell align="left">{Case.createduserid}</TableCell>
              <TableCell align='left'>{Case.Assignedto}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
