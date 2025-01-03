import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import  { useState } from 'react';
import { fetchskill } from './config/Services/skillserv';


const columns1 = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'skillId',
    headerName: 'skill id',
    width: 100,
    editable: true,
  },
  {
    field: 'empId',
    headerName: 'Emp Id',
    width: 100,
    editable: true,
  },
  {
    field: 'empName',
    headerName: 'emp name',
    width: 100,
    editable: true,
  },
  {
    field: 'startDate',
    headerName: 'startdate',
    width: 150,
    editable: true,
  },
  {
    field: 'endDate',
    headerName: 'endDate',
    width: 150,
    editable: true,
  },
  {
    field: 'working',
    headerName: 'working',
    width: 150,
    editable: true,
  },
  {
    field: 'remarks',
    headerName: 'Remarks',
    width: 100,
    editable: true,
  },
  {
    field: 'skills',
    headerName: 'skills',
    width: 110,
    editable: true,
  },
  {
    field: 'dateOfJoining',
    headerName: 'D-O-J',
    width: 110,
    editable: true,
  },
  {
    field: 'team',
    headerName: 'team',
    width: 110,
    editable: true,
  },
  {
    field: 'modifiedOn',
    headerName: 'modifiedon',
    width: 110,
    editable: true,
  },
  {
    field: 'modifiedBy',
    headerName: 'modifiedby',
    width: 110,
    editable: true,
  },
  {
    field: 'modifiedByName',
    headerName: 'modifiedbyName',
    width: 110,
    editable: true,
  },
  
 
];



export default function DataGridDemo1() {
    const [gridData, setGridData] = useState([]);
    
const updateGridData = (formData) => {
    
    const newRow = {
      id: gridData.length + 1, 
      skillId: formData.skillId,
      empId: formData.empId,
      empName : formData.empName,
      startDate: formData.startDate,
      endDate: formData.endDate,
      working: formData.working,
      remarks: formData.remarks,
      dateOfJoining: formData.dateOfJoining,
      team:formData.team,
      modifiedOn:formData.modifiedOn,
      modifiedBy: formData.modifiedBy,
      modifiedByName:formData.modifiedByName
    };

    setGridData((prevGridData) => [...prevGridData, newRow]);
  };

function fetchdata(){
    fetchskill().then((res)=>{

        console.log(res);
        if(res.status===200){
            setGridData(res.result)
        }

    }).catch((err)=>{})
}


React.useEffect(()=>{
    fetchdata()
},[])

  return (
    <div>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={gridData}
        columns={columns1}
        getRowId={(row)=>row.skillId}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    
    
    </div>
  );
}