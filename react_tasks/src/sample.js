import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { DialogTitle,Dialog,DialogContent, IconButton } from '@mui/material';
import { fetchreview } from './config/Services/reviewservice';

export default function DataGridDemo() {
  const columns = [
     { 
        field: 'id', 
         headerName: 'ID',
        width: 90 
    },

    { 
        field: 'empId', 
    headerName: 
    'Employee Id', 
    width: 150 
},
    { 
        field: 'month',
     headerName: 'Month',
      width: 120 
    },
    { 
        field: 'year',
     headerName: 'Year', 
     width: 120
    },
    { 
        field: 'technology', 
    headerName: 'Technology', 
    width: 150 
},
    { 
        field: 'technicalRating',
     headerName: 'Technical Rating', 
     width: 150 
    },
    { 
        field: 'communicationRating',
     headerName: 'Communication Rating', 
     width: 180 
    },
    { 
        field: 'remarks',
     headerName: 'Remarks', 
     width: 150 
    },
    { 
        field: 'reviewedBy', 
    headerName: 'Reviewed By', 
    width: 150
},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (

        <IconButton onClick={()=>{handleEdit(params.row.id)}} color='primary'>
            <EditIcon/>
        </IconButton>
      ),
    },
  ];

  const [gridData, setGridData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    fetchreview("2023")
      .then((res) => {
        if (res.status === 200) {
          setGridData(res.result);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleEdit = (rowId) => {
    const rowToEdit = gridData.find((row) => row.id === rowId);
    setSelectedRow(rowToEdit);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSaveChanges = () => {
    
    saveDataToServer(selectedRow)
      .then(() => {
        
        setGridData((prevData) => {
          const updatedData = prevData.map((row) =>
            row.id === selectedRow.id ? selectedRow : row
          );
          return updatedData;
        });
        setOpenDialog(false);
      })
      .catch((error) => {
        console.error('Error while saving data:', error);
      });
  };

  const saveDataToServer = (data) => {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        
        const success = true; 
        if (success) {
          resolve();
        } else {
          reject(new Error('Failed to save data'));
        }
      }, 1000);
    });
  };
  

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={gridData}
        columns={columns}
        getRowId={(row)=>row.empRatingId}
        components={{
          Toolbar: GridToolbar,
        }}
      />
      {selectedRow && (
        <div>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
            <DialogTitle>Edit Changes</DialogTitle>
            <DialogContent>
              <TextField
                label="Employee Id"
                value={selectedRow.empId}
                onChange={(e) => setSelectedRow({ ...selectedRow, empId: e.target.value })}
              /><br/><br/>
              <TextField
                label="Month"
                value={selectedRow.month}
                onChange={(e) => setSelectedRow({ ...selectedRow, month: e.target.value })}
              /><br/><br/>
              <TextField
                label="year"
                value={selectedRow.year}
                onChange={(e) => setSelectedRow({ ...selectedRow, year: e.target.value })}
              /><br/><br/>
              <TextField
                label="Technology"
                value={selectedRow.technology}
                onChange={(e) => setSelectedRow({ ...selectedRow, technology: e.target.value })}
              /><br/><br/>

              <TextField
                label="Technical Rating"
                value={selectedRow.technicalRating}
                onChange={(e) => setSelectedRow({ ...selectedRow, technicalRating: e.target.value })}
              /><br/><br/>
               <TextField
                label="Communication Rating"
                value={selectedRow.communicationRating}
                onChange={(e) => setSelectedRow({ ...selectedRow, communicationRating: e.target.value })}
              /><br/><br/>

                <TextField
                label="Remarks"
                value={selectedRow.remarks}
                onChange={(e) => setSelectedRow({ ...selectedRow, remarks: e.target.value })}
              /><br/><br/>

                <TextField
                label="Reviewed By"
                value={selectedRow.reviewedBy}
                onChange={(e) => setSelectedRow({ ...selectedRow, reviewedBy: e.target.value })}
              /><br/><br/>
             
              <Button variant="contained" color="primary" onClick={handleSaveChanges}>
                Save
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
