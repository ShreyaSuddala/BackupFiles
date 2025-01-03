import { Grid, Paper,Box} from '@mui/material'
import React from 'react'
import CustomRadioButton from '../../components/CustomButton/CustomRadioButton'
import CustomTable from '../../components/CustomTable/CustomTable'

import '../../assets/styles/OverviewTabs.css'

const AllComments = () => {
  const [value, setValue] = React.useState('All');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const tcolumns=[
    "COMMENT ID","COMMENT BY ROLE","CATEGORY OF COMMENT","COMMENT DATE TIME","COMMENT DESC","COMMENT BY USER","ACTION"
  ]
    const radio =[
        {
            value:"All",
            label:"All",
      
        },
        {
            value:"Manual",
            label:"Manual"
        },
        {
            value:"Mail",
            label:"Mail"
        }
    ]
   
  return (
    <div>
      <Paper style={{marginRight:'20px',marginLeft:"20px"}} >
        <h2 
        style={{textAlign:'left',margin:"0px",
    }}
        >COMMENTS</h2>
         <Box  sx={{width:'40px',borderBottom:"4px solid #ff6f00"}} ></Box>
        <br></br>
       
            <Grid style={{display:'flex',justifyContent:'flex-start'}}>
                <CustomRadioButton  radio={radio} onChange={handleChange} />
            </Grid>
           <Grid>
            <div className='customtable'>
            <CustomTable   tableColumn={tcolumns}/>
            </div>
           </Grid>

       
      </Paper>
           <Grid style={{display:'flex',flexDirection:"row",gap:1,marginTop:"30px",alignItems:"center"}}>
             {/* <img  style={{height:'40px'}} src={mlogo} alt='not-found'></img>
             <Typography
             style={{fontSize:"14px",textAlign:"left",fontFamily:"revert"}}
             >CopyRight123 &copy; 2024 Mashreq. All Rights Reserved</Typography> */}
           </Grid>
    </div>
  )
}

export default AllComments
