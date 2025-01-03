import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


function BasicSelect1() {
  const [formdata, setFormdata] = React.useState({
    Empid: '',
    subject: '',
    warningDate:'',
    warninglevel:'',
    attachments:'',
    severitylevel:'',
    description: '',
  });


  console.log(formdata);
 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(formdata);
  };

  return (
    <Box>
      <h3>CREATE WARNING MAIL</h3>
      <br />

      <FormControl sx={{width:300,

'@media (max-width:1500px)':{
  width:'300px',
}}}>
        <InputLabel id="demo-simple-select-label">Employee Id</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Employee Id"
          name="Empid"
          value={formdata.Empid}
          onChange={handleChange}
        >
          <MenuItem value={1066}>1066</MenuItem>
          <MenuItem value={1068}>1068</MenuItem>
          <MenuItem value={1069}>1069</MenuItem>
        </Select>
        <br />
        <TextField
          id="Subject-level"
          label="Subject"
          value={formdata.subject}
          variant="outlined"
          name="subject"
          onChange={handleChange}
        />
        <br />
        <TextField id="warning-date" label="Warning Date" variant="outlined" type='date' value={formdata.warningDate} name='warningDate' onChange={handleChange}/>
        <br />
      </FormControl>
      <br />

      <FormControl sx={{width:300,

'@media (max-width:1500px)':{
  width:'300px',
},'@media(min-width:300px)':{
  width:'300px'
}}}>
        <InputLabel id="warning-level-label">Warning Level</InputLabel>
        <Select
          labelId="warning-level-label"
          id="Warning-level"
          label="Warning Level"
          value={formdata.warninglevel}
          onChange={handleChange}
          name='warninglevel'
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <br />
      </FormControl>
      <br />

      <FormControl sx={{width:300,

'@media (max-width:1500px)':{
  width:'300px',
},
'@media(min-width:300px)':{
  width:'300px'
}}}>
        <InputLabel id="severity-level-label">Severity Level</InputLabel>
        <Select
          labelId="severity-level-label"
          id="severity-level"
          label="Severity Level"
          value={formdata.severitylevel}
          onChange={handleChange}
          name='severitylevel'
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
        <br />
        <TextField id="attachment" label="Attachment" type="file"  multiple={true} variant="outlined" name='attachments' value={formdata.attachments} onChange={handleChange}   />
        <br />
        <TextField
          id="description"
          label="Description *"
          multiline
          rows={3}
          value={formdata.description}
          name="description"
          onChange={handleChange}
        /><br/>
      </FormControl>
      <br />
      <FormControl>
        <Button type="submit" onClick={handleSubmit} sx={{ minWidth: 50 }} variant="contained">
          Submit
        </Button>
      </FormControl>
    </Box>
  );

}

export default BasicSelect1
