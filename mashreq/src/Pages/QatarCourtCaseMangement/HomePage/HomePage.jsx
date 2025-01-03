import {  Box, Typography } from '@mui/material'
import React from 'react'
import { RoutedpageStyle } from '../../../GlobalStyles/ParentComponentStyle/RoutedpageStyle';
import CustomTable from '../../../Components/CustomTable/CustomTable';
import Footer from '../../CommonPages/Footer';
import { useNavigate } from 'react-router-dom'
import CustomTabs from '../../../Components/CustomTabs/CustomTabs';


function createData(id,  maker,checker,cam,cpu) {
    return {
      id,
      maker,
      checker,
      cam,
      cpu,
    };
  }
  
  const rows = [
    createData(1, 'Click on me to go to Qatar Gru maker screen', "", "", ""),
    createData(2,"","Click on me to go to Qatar checker screen", "", ""),
    createData(3, '',"", "Click on me to go to Qatar Cam screen", ""),
    createData(4, '', "","","Click on me to go to Qatar Cpu screen"),
   
   
  ];
  
  export const headCells = [
   
    {
      id: 'id',
      numeric: false,
      disablePadding: true,
      label: 'Id',
    },
    {
      id: 'maker',
      numeric: false,
      disablePadding: true,
      label: 'Gru Maker',
    },
    {
      id: 'checker',
      numeric: true,
      disablePadding: false,
      label: 'Checker',
    },
    {
      id: 'cam',
      numeric: true,
      disablePadding: false,
      label: 'Qatar Cam',
    },
    {
      id: 'cpu',
      numeric: true,
      disablePadding: false,
      label: 'Qatar Cpu',
    },
   
  ];
  


export default function HomePage() {
  const navigate=useNavigate()

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  


const rowClickhandle=(row)=>{
  if(row?.id===1){
    navigate("/qccms-qatar-gru-maker")
  }
  else if(row?.id===3){
    navigate("/qccms-qatar-cam")
  }
  else if(row?.id===4){
    navigate("/qccms-qatar-cpu")
  }
  else if(row?.id===2){
    navigate("/qccms-qatar-checker")
  }
}

const tabs = [
  {
    label: "Group Task",
    Component:<CustomTable onRowClick={rowClickhandle} headCells={headCells} rows={rows} TableName={"Screen Table"}></CustomTable>

  },
  {
    label: "My Task",
    Component:<CustomTable headCells={headCells} rows={rows} TableName={"Diet Table"}></CustomTable>

  },
   
];


  return (
    <Box sx={RoutedpageStyle.fisrstBoxStyle}>
        <Box sx={RoutedpageStyle.secondboxStyle}>

<Box>
    <Typography variant='h6' color="primary" >Home Page</Typography>
</Box>
        
<CustomTabs TotalTab={tabs} value={value} onChange={handleChange} maxWidth={"45px"} Scrollbutton={"auto"} variant={"scrollable"} />
      <Footer/>
      </Box>
    </Box>
  )
}
