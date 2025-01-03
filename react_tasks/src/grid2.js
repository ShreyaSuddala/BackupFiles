// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';

// import  { useState } from 'react';
// import { fetchwarningmail } from './config/Services/warningservice';


// const columns1 = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'emp_id',
//     headerName: 'Employee Id',
//     width: 100,
//     editable: true,
//   },
//   {
//     field: 'emp_NAME',
//     headerName: 'emp name',
//     width: 100,
//     editable: true,
//   },
//   {
//     field: 'total_warnings_received',
//     headerName: 'total warnings',
//     width: 100,
//     editable: true,
//   },
  
  
  
 
// ];



// export default function DataGridDemo2() {
//     const [gridData, setGridData] = useState([]);




    
// const updateGridData = (formData) => {
    
//     const newRow = {
//       id: gridData.length + 1, 
//       emp_id: formData.emp_id,
//       emp_NAME: formData.emp_NAME,
//       total_warnings_received : formData.total_warnings_received,
     
//     };

//     setGridData((prevGridData) => [...prevGridData, newRow]);
//   };

// function fetchdata(){
//     fetchwarningmail().then((res)=>{

//         console.log(res);
//         if(res.status===200){
//             setGridData(res.result)
//         }

//     }).catch((err)=>{})
// }


// React.useEffect(()=>{
//     fetchdata()
// },[])

//   return (
//     <div>
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={gridData}
//         columns={columns1}
//         getRowId={(row)=>row.emp_id}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
    
    
//     </div>
//   );
// }