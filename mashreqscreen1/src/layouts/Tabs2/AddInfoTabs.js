import React from 'react'
import CustomTabs from '../../components/CustomTabs/CustomTabs'
import AllComments from './AllComments';
import mlogo from '../../assets/images/logo.jpg'
import { Typography } from '@mui/material';

const AddInfoTabs = () => {

    const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    const tabs2=[
        {
          label:"All Comments",
          Component:<AllComments/>
          
        },{
          label:"File Upload",
        },
        {
          label:"Case Audit"
        },
        {
          label:"Field Audit"
        }
      ]

  return (
    <div>
      <CustomTabs value={value}  TotalTab={tabs2} onChange={handleChange}/>
      <div  style={{display:'flex',flexDirection:"row",gap:1,marginTop:"30px",
      alignItems:"center",marginRight:'20px',marginLeft:'20px'}} >

      <img  style={{height:'40px'}} src={mlogo} alt='not-found'></img>
             <Typography
             style={{fontSize:"14px",textAlign:"left",fontFamily:"revert"}}
             >CopyRight123 &copy; 2024 Mashreq. All Rights Reserved</Typography>
             </div>
    </div>
  )
}

export default AddInfoTabs
