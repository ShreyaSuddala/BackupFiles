// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import  { useState } from 'react';
// import { fetchreview } from './config/Services/reviewservice';
// import EditIcon from '@mui/icons-material/Edit';
// import { IconButton } from '@mui/material';

// const columns1 = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'empId',
//     headerName: 'Employee Id',
//     width: 100,
//     editable: true,
//   },
//   {
//     field: 'month',
//     headerName: 'Month',
//     width: 100,
//     editable: true,
//   },
//   {
//     field: 'year',
//     headerName: 'year',
//     width: 100,
//     editable: true,
//   },
//   {
//     field: 'technology',
//     headerName: 'Technology',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'technicalRating',
//     headerName: 'taechnical rating',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'communicationRating',
//     headerName: 'communication rating',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'remarks',
//     headerName: 'Remarks',
//     width: 100,
//     editable: true,
//   },
//   {
//     field: 'reviewedBy',
//     headerName: 'reviewedBy',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'modifiedBy',
//     headerName: 'modifiedby',
//     width: 110,
//     editable: true,
//   },
//   {
//     field:'actions',
//     headerName:'Action',
//     width:100,
//     renderCell : (params)=>{
//         <IconButton color='primary'>
//             <EditIcon/>
//         </IconButton>
//     }
     
// }
  
// ];

// export default function DataGridDemo() {
//   const [gridData, setGridData] = useState([]); 
// const updateGridData = (formData) => {
//     const newRow = {
//       id: gridData.length + 1, 
//       empId: formData.empId,
//       month: formData.month,
//       year: formData.year,
//       technology: formData.technology,
//       technicalRating: formData.technicalRating,
//       communicationRating: formData.communicationRating,
//       remarks: formData.remarks,
//       reviewedBy: formData.reviewedBy,
//       modifiedBy: formData.modifiedBy,
//     };

//     setGridData((prevGridData) => [...prevGridData, newRow]);
//   };

// function fetchdata(){
//     fetchreview("2023").then((res)=>{

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
//         getRowId={(row)=>row.empRatingId}
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