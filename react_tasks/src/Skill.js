import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { skillservice } from './config/Services/skillService';

function SkillSet() {
    const[formdata,setFormdata]=useState({
        working:'',
        companyname:'',
        skills:'',
        startdate:'',
        enddate:''

    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }

    const[data,setdta]=useState({
      
        "empId": "1006",
        "startDate": "2023-11-03",
        "endDate": "2023-11-30",
        "working": "Training",
        "skills": "java",
        "team": "micro"

    })


    const handleSubmit=(e)=>{
        e.preventDefault();
        skillservice.createskill(data).then((res)=>{
          alert(res.message)
        }).catch((err)=>{
          console.log(err);
        })

    }
  return (
    <Box>
        <h3>MAKE A SKILL REPORT</h3><br/>
        <FormControl sx={{width:300,
 
    '@media (max-width:1500px)':{
      width:'300px',
    }}}>
        <InputLabel id="working-id-label">Working</InputLabel>
        <Select
          labelId="working-id-label"
          id="working-id"
          label="Working"
          name='working'
          value={formdata.working}
          onChange={handleChange}
        
        >
          <MenuItem value='Training'>Training</MenuItem>
          <MenuItem value='Associate'>Associate</MenuItem>
          <MenuItem value='Seniorsoftware'>senior software</MenuItem>
        </Select><br/>
        <TextField id="company-name" 
        label="Company Name" 
        variant="outlined"
        name='companyname'
        value={formdata.companyname}
        onChange={handleChange}
        /><br/>
        </FormControl><br/>
        <FormControl sx={{width:300,

    '@media (max-width:1500px)':{
      width:'300px',
    }}}>
        <InputLabel id="skill-id-label">Skills*</InputLabel>
        <Select
          labelId="skill-id-label"
          id="skill-id"
          label="Skills *"
          name='skills'
          value={formdata.skills}
          onChange={handleChange}
        
        >
          <MenuItem value='HTML'>HTML</MenuItem>
          <MenuItem value='CSS'>CSS</MenuItem>
          <MenuItem value='JAVASCRIPT'>JAVASCRIPT</MenuItem>
        </Select><br/>
        <TextField id="start-date"
         label="Start Date"
          variant="outlined" 
          name='startdate'
          type='date'
          value={formdata.startdate}
          onChange={handleChange}
         /><br/>
        <TextField id="End-date" 
        label="End Date"
         variant="outlined"
         name='enddate'
         type='date'
         value={formdata.enddate}
         onChange={handleChange}
          /><br/>
        </FormControl><br/>
         <Button type="submit" sx={{ minWidth: 50 }} variant="contained" onClick={handleSubmit}>Submit</Button>
    </Box>
      
   
  )
}

export default SkillSet
