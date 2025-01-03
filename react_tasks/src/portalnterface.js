import React, { useState, useEffect } from 'react';
import './App.css';
import { Container, Grid } from '@mui/material';
import { fetchportal } from './config/Services/portalInterfcae';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CallIcon from '@mui/icons-material/Call';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


function PortalInterface() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [data, setData] = useState({
    empId:'',
    empName:'',
    emailId:'',
    designation:'',
    dateOfJoining:'',
    about:'',
    contactNo:''
  });
  function fetchportals(){
    fetchportal().then((res)=>{

        console.log(res);
        if(res.status===200){
            setData(res.result)
        }

    }).catch((err)=>{})
}
   React.useEffect(()=>{
      fetchportals()
    },[])



  return (
    <div>
   
        <h3 style={{color:"#3498db", fontFamily:"sans-serif" , textAlign:"left"}}>EMPLOYEE INFORMATION</h3>
        <hr  style={{borderColor:"#3498db"}}></hr>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          
        <Grid item xs={8} md ={4} >
        <Item elevation={0} style={{color:"#3498db" , fontFamily:"sans-serif" , fontSize:"20px"}}>{data.empName}</Item>
        Software Engineer
        </Grid>
        <Grid item xs={8} md ={4} >
          Email
        <Item style={{color:'black'}} elevation={0}><strong>{data.emailId}</strong></Item><br></br>
        Designation
        <Item elevation={0}>{data.designation}</Item>
        </Grid>
        <Grid item xs={8} md ={4}>
          Employee Id
          <Item style={{color:"black"}} elevation={0}><strong>{data.empId}</strong></Item><br></br>
          Date Of Joining
          <Item elevation={0} style={{color:"black"}}><strong>{data.dateOfJoining}</strong></Item>

        </Grid>
        <Grid item xs={8} md={4}>
          <label style={{color:"#3498db", fontFamily:"sans-serif",fontSize:"20px" , textAlign:"left" ,margin:"10px"}}>About:</label>
        <Item elevation={0} style={{fontSize:"13px" ,textAlign:"justify"}}>{data.about}</Item>
        </Grid>

        </Grid>
        </Box>
        <hr  style={{borderColor:"#3498db"}}></hr>
        <Grid container spacing={-30}>
          <Grid item xs={6} md ={3}>
            
        <Card style={{backgroundColor:"rgb(190,215,261)"}} sx={{ width: 250 ,height:140 }}>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} style={{fontSize:"18px"}} gutterBottom>
          <CallIcon/>
          CONTACT:<br></br><strong>{data.contactNo}</strong>
        </Typography>
        </CardContent>
        </Card>  
        </Grid>
        <Grid item xs={6} md ={3}>
            
            <Card style={{backgroundColor:"rgb(190,215,261)"}} sx={{ width: 250 ,height:140 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }}  style={{fontSize:"17px"}}gutterBottom>
            <ManageAccountsIcon/>
              (Reporting Manager)
            </Typography>
            </CardContent>
            </Card>  
            </Grid>
            <Grid item xs={6} md ={3}>
            
            <Card style={{backgroundColor:"rgb(190,215,261)"}} sx={{ width: 250 ,height:140 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }}  style={{fontSize:"17px"}}gutterBottom>
              <AddLocationIcon/>
              Work Location
            </Typography>
            </CardContent>
            </Card>  
            </Grid>
            <Grid item xs={6} md ={3}>
            
            <Card style={{backgroundColor:"rgb(190,215,261)"}} sx={{ width: 250 ,height:140 }}>
            <CardContent>
            <Typography sx={{ fontSize: 14 }}  style={{fontSize:"17px"}} gutterBottom>
              <AddLocationIcon/>
              (Shift Timing)
            </Typography>
            </CardContent>
            </Card>  
            </Grid>
       
        
        </Grid>
    </div>
  );
}

export default PortalInterface;