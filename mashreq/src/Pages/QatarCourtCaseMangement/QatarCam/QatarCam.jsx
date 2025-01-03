import { Box, Typography } from '@mui/material';
import React from 'react'
import { RoutedpageStyle } from '../../../GlobalStyles/ParentComponentStyle/RoutedpageStyle';
import Footer from '../../CommonPages/Footer';
import CustomTabs from '../../../Components/CustomTabs/CustomTabs';
import CamCpuChekerDetails from '../CommonComponents/CamCpuChekerDetails';
import DynamicHead from '../../../Components/DynamicHead/DynamicHead';


 const AccountsTable = [
 
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'Account Number',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Account Type',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: 'Customer Name',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'Account Currency',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Available Balance',
  },
  {
    id: 'protein',
    numeric: true,
    disablePadding: false,
    label: 'Account Branch 2',
  },
  {
    id: 'oil',
    disablePadding: false,
    label: 'Account Short Name',
  },
  {
    id: 'oil',
    disablePadding: false,
    label: 'Sequence Number',
  },
  {
    id: 'oil',
    disablePadding: false,
    label: 'Court Order Id',
  },
  {
    id: 'oil',
    disablePadding: false,
    label: 'Current Balance',
  },
  {
    id: 'oil',
    disablePadding: false,
    label: 'Status',
  },
];


const CommentsTable = [
 
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'Case Referance Number',
  },
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Comments By',
  },
  {
    id: 'calories',
    numeric: true,
    disablePadding: false,
    label: ' Comments Creation Date',
  },
  {
    id: 'fat',
    numeric: true,
    disablePadding: false,
    label: 'User Role',
  },
  {
    id: 'carbs',
    numeric: true,
    disablePadding: false,
    label: 'Comments',
  },
 
];



export default function QatarCam() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  const [expanded, setExpanded] = React.useState(false);

  const handleChangeAccordian = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const tabs = [
    {
      label: "Qatar Cam",
      Component:<CamCpuChekerDetails AccountsTable={AccountsTable} CommentsTable={CommentsTable} expanded={expanded} handleChangeAccordian={handleChangeAccordian}></CamCpuChekerDetails>
  
    },
   
  ];
  


  return (
    <Box sx={RoutedpageStyle.fisrstBoxStyle}>
    <Box sx={RoutedpageStyle.secondboxStyle}>

    <DynamicHead/>

<Box>
<Typography variant='h6' color="primary" >Qatar Cam</Typography>
</Box>
    
<CustomTabs TotalTab={tabs} value={value} onChange={handleChange} maxWidth={"45px"} />

  <Footer/>
  </Box>
</Box>
  )
}
