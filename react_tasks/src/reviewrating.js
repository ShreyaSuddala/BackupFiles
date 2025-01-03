import React,{useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { rev } from './config/Services/reviewservice';

function ReviewRating() {
    const[formdata,setFormdata]=useState({
      EmpId:'',
      Month:'',
      year:'',
      technicalRating:'',
      communicationRating:'',
      selectteam:'',
      remarks:'',
      reviewedby:''

    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)

        rev(formdata).then((res)=>{
          console.log(res);

         if(res.message="success"){
          // navigate("/datagrid")
          // localStorage.setItem("token",res.token)
         }
         
        }).catch((err)=>{
          console.log(err);
        })
    }
  return (
    <Box>
        <h3>REVIEW RATING</h3><br/>
        <FormControl  sx={{width:300,
    '@media (max-width: 500px)': {
      width: '100px',
    },
    '@media (max-width: 400px)': {
      width: '80px', 
    },
    '@media (max-width:900px)':{
       width:'250px',
    },
    '@media (max-width:1500px)':{
      width:'300px',
    }}}>
        <InputLabel id="demo-simple-select-label">Employee Id</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Employee Id"
          name='EmpId'
          value={formdata.EmpId}
          onChange={handleChange}
         
       
        >
          <MenuItem value={1006}>1006</MenuItem>
          <MenuItem value={1068}>1068</MenuItem>
          <MenuItem value={1069}>1069</MenuItem>
        </Select><br/>
        </FormControl><br/>
        <FormControl sx={{width:150,
    '@media (max-width: 250px)': {
      width: '50px',
    },
    '@media (max-width: 200px)': {
      width: '40px', 
    },
    '@media (max-width:450px)':{
       width:'125px',
    },
    '@media (max-width:750px)':{
      width:'150px',
    }}}>
        <InputLabel id="month-id-label">Month</InputLabel>
        <Select
          labelId="month-id-label"
          id="month-id"
          label="Month"
          name='Month'
          value={formdata.Month} 
          onChange={handleChange}
        
        >
          <MenuItem value='Jan'>Jan</MenuItem>
          <MenuItem value='Feb'>Feb</MenuItem>
          <MenuItem value='March'>March</MenuItem>
          <MenuItem value='Apr'>April</MenuItem>
          <MenuItem value='May'>May</MenuItem>
          <MenuItem value='June'>June</MenuItem>
          <MenuItem value='July'>July</MenuItem>
          <MenuItem value='Aug'>Aug</MenuItem>
          <MenuItem value='Sep'>Sep</MenuItem>
          <MenuItem value='Oct'>Oct</MenuItem>
          <MenuItem value='Nov'>Nov</MenuItem>
          <MenuItem value='Dec'>Dec</MenuItem>
       
        </Select>
       
        </FormControl><span><span> </span></span>
        <FormControl sx={{width:150,
    '@media (max-width: 250px)': {
      width: '50px',
    },
    '@media (max-width: 200px)': {
      width: '40px', 
    },
    '@media (max-width:450px)':{
       width:'125px',
    },
    '@media (max-width:750px)':{
      width:'150px',
    }}}>
        <TextField id="year-id" 
        label="Year *" 
        variant="outlined"
        name='year'
        value={formdata.year}
        onChange={handleChange}
      
        /><br/>
        </FormControl><br/>
       
       
        <FormControl sx={{width:150,
    '@media (max-width: 250px)': {
      width: '50px',
    },
    '@media (max-width: 200px)': {
      width: '40px', 
    },
    '@media (max-width:450px)':{
       width:'125px',
    },
    '@media (max-width:750px)':{
      width:'150px',
    }}}>
        <TextField id="tech-rating" 
        label="Technical Rating " 
        variant="outlined"
        name='technicalRating'
        value={formdata.technicalRating}
        onChange={handleChange}
       />
        </FormControl><span><span> </span></span>
        <FormControl sx={{width:150,
    '@media (max-width: 250px)': {
      width: '50px'
    },
    '@media (max-width: 200px)': {
      width: '40px', 
    },
    '@media (max-width:450px)':{
       width:'125px',
    },
    '@media (max-width:750px)':{
      width:'150px',
    }
      }}>
        <TextField id="comm-id" 
        label="communication Rating" 
        variant="outlined"
        name='communicationRating'
        value={formdata.communicationRating}
        onChange={handleChange}
      
        /><br/>
        </FormControl><br/>
        <FormControl sx={{width:300,
    '@media (max-width: 500px)': {
      width: '100px',
    },
    '@media (max-width: 400px)': {
      width: '80px', 
    },
    '@media (max-width:900px)':{
       width:'250px',
    },
    '@media (max-width:1500px)':{
      width:'300px',
    }}}>
        <InputLabel id="select-team">Select Team</InputLabel>
        <Select
          labelId="select-team"
          id="selectTeam"
          label="SelectTeam"
          name='selectteam'
          value={formdata.selectteam}
          onChange={handleChange}
        >
          <MenuItem value='weblogic'>weblogic</MenuItem>
          <MenuItem value='IIB'>IIB</MenuItem>
          <MenuItem value='API'>API</MenuItem>
        </Select><br/>
        <TextField id="remarks-id" 
        label="Remarks" 
        variant="outlined"
        multiline
        rows={2}
        name='remarks'
        value={formdata.remarks}
        onChange={handleChange}
      
        /><br/>
        </FormControl><br/>
        <FormControl sx={{width:300,
    '@media (max-width: 500px)': {
      width: '100px',
    },
    '@media (max-width: 400px)': {
      width: '80px', 
    },
    '@media (max-width:900px)':{
       width:'250px',
    },
    '@media (max-width:1500px)':{
      width:'300px',
    }}}>
        <InputLabel id="reviewedby">Reviewed By*</InputLabel>
        <Select
          labelId="reviewedby"
          id="reviewed-by"
          label="Reviewed By*"
          name='reviewedby'
          value={formdata.reviewedby}
          onChange={handleChange}
        >
          <MenuItem value='Imran'>Imran</MenuItem>
          <MenuItem value='PriyaBrath Panda'>PriyaBrath Panda</MenuItem>
         
        </Select><br/>
        </FormControl><br/>
        <Button type="submit" sx={{ minWidth: 50 }} variant="contained" onClick={handleSubmit}>Submit</Button>
        
    </Box>
  )
}

export default ReviewRating;
