import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { Button, Card, FormControl, Grid, InputLabel, MenuItem, Popover, Select, TextField } from '@mui/material';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { downloadExcel, useDownloadExcel } from 'react-export-table-to-excel';
import EnhancedTableToolbar from './TableHelpers/CustomToolBar';
import EnhancedTableHead from './TableHelpers/TableHead';
import { filteredArray, getComparator, stableSort } from './TableHelpers/HelperFunctions';
import CustomPopover from '../CustomPopover/CustomPopover';
import { Operators } from './TableHelpers/FilteredItem';
import LockResetIcon from '@mui/icons-material/LockReset';
import CustomToolTip from '../CustomTooltip/CustomToolTips';
import CustomDropDown from '../CustomDropDown/CustomDropDown';
import CustomTextfield from '../CustomTextField/CustomTextfield';


export default function CustomTable({onRowClick,headCells,rows,isCheckBoxRequird,isSelectItemRequired,TableName,selectedItemRequired}) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const [columns ,setcolumns]=React.useState("")
    const [operators,setoperators]=React.useState("")
    const [textFieledValue,settextFieledValue]=React.useState("")
    
    const visibleRows = React.useMemo(() =>
        filteredArray(stableSort(rows, getComparator(order, orderBy)),columns,operators,textFieledValue).slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage,),
      [order, orderBy, page, rowsPerPage,operators,textFieledValue,columns],
    );
    

const [popoverOpen,setPopOverOpen]=React.useState(false)
const [popoveranchorEl,setpopoveranchorEl]=React.useState(null)
const handleFilterClick=(e)=>{
  setPopOverOpen(!popoverOpen)
  setpopoveranchorEl(e.currentTarget)

}

const doc = new jsPDF()
const pdfDownload=()=>{
  autoTable(doc, {
   headStyles:{fillColor:"green"},
  //  margin:{bottom:"10px",horizontal:"10px",left:"10px",right:"10px",top:"10px",vertical:"10px"},
    head: [headCells?.map((item)=>item?.id)],
    body: 
    rows?.map((row)=>{
      let arr=[]
      headCells?.map((myrow)=>arr?.push(row[myrow?.id]))
     return arr

     })
    ,
  })
  
  doc.save(`${TableName}.pdf`)
}

const Exceldownload=()=>{
  // const opt = 'downloadExcel Method'; 

  downloadExcel({
    fileName: `${TableName}`,
    sheet: "react-export-table-to-excel",
    tablePayload: {
      header: headCells?.map((item)=>item?.id),
      body: rows?.map((row)=>{
        let arr=[]
          headCells?.map((myrow)=>arr?.push(row[myrow?.id]))
       return arr
  
       }),


    }
  });
}






  return (
    <Box sx={{ width: '100%'}}>
      <Paper elevation={0} sx={{ width: '100%'}}>
        <EnhancedTableToolbar TableName={TableName} numSelected={selected.length} onFilterClick={handleFilterClick} pdfdownload={pdfDownload} Exceldownload={Exceldownload} />
        <TableContainer sx={{maxHeight:"370px",overflow:"auto",minHeight:"100px"}}>
          <Table stickyHeader
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
            headCells={headCells}
            isCheckBoxRequird={isCheckBoxRequird}
            isSelectItemRequired={isSelectItemRequired}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows?.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => {handleClick(event, row.id);onRowClick(row)}}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                   
                    sx={{
                      ".MuiTableCell-root":{
                        padding:1,
                        margin:0,
                      },
                      cursor: 'pointer'
                    }}
                  >


{
  isCheckBoxRequird? <TableCell  >
  <Checkbox
    color="primary"
    checked={isItemSelected}
    inputProps={{
      'aria-labelledby': labelId,
    }}
  />
</TableCell>:null
}

{
  isSelectItemRequired?
  <TableCell size='small' id={labelId}>
                    <Box >
        <FormControl variant="standard" sx={{width:"150px"}}>
        <InputLabel size='small' id="demo-simple-select-standard-label">Columns</InputLabel>
        <Select
         size='small'
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={columns}
          // onChange={(e)=>{setcolumns(e.target.value)}}
          label="Columns"
        >
        
         {
          headCells?.map((item,index)=>{

            return(
              <MenuItem value={item?.id} id={item?.id} >{item?.label}</MenuItem>
            )
          })
         }
        </Select>
      </FormControl>
         
        </Box>
                    </TableCell>:null
}

                   
                    
                    
                  {
                    headCells?.map((itemCol,index)=>{

                      return(
                      <TableCell
                      size='small'
                      // component="th"
                      id={labelId}
                      // scope="row"
                      // padding="none"
                    >
                      {row[itemCol.id]}
                    </TableCell>
                      )
                    })
                  }
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                >
                  <TableCell  colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 35,75,100,200,500]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

<CustomPopover open={popoverOpen} anchorEl={popoveranchorEl} onClose={()=>{setPopOverOpen(!popoverOpen)}} id={"popover1"} 
Children={<Card elevation={0} sx={{width:"500px",borderRadius:0,margin:"5px"}}>
<Box sx={{justifyContent:"space-between",display:"flex",alignItems:"center"}}>
  <Typography variant='body1' color="primary">Filter Panel <span><Box sx={{width:"30px",height:"4px",backgroundColor:"red"}}></Box></span></Typography>
  <CustomToolTip title="Reset All Field">
  <LockResetIcon sx={{cursor:"pointer"}} onClick={()=>{settextFieledValue("");setcolumns("");setoperators("")}} fontSize='large' color='primary'/>
  </CustomToolTip>
</Box>
 
    <Grid container >
      <Grid item xs={12} md={4}>
        <Box sx={{m:1}}>

<CustomDropDown  minWidth={"90px"} isFullwidth={true} label={"Columns"} value={columns} onchange={(e)=>{setcolumns(e.target.value)}}
children={
  headCells?.map((item,index)=>{

    return(
      <MenuItem value={item?.id} id={item?.id} >{item?.label}</MenuItem>
    )
  })
 }
/>
        </Box>
      </Grid>


      <Grid item xs={12} md={4} >
        <Box sx={{m:1}}>

        <CustomDropDown  minWidth={"90px"} isFullwidth={true} label={"Operators"} value={operators} onchange={(e)=>{setoperators(e.target.value)}}
children={
  
    Operators?.map((item,index)=>{

      return(
        <MenuItem value={item?.input} id={item?.id} >{item?.value}</MenuItem>
      )
    })
   
 }
/>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box sx={{m:1}} >
        <CustomTextfield isFullwidth={true} minWidth={"90px"} label={"Filter value"} placeholder={"Filter value"} value={textFieledValue} onchange={(e)=>{settextFieledValue(e.target.value)}}></CustomTextfield>
         
        </Box>
      </Grid>

   
    </Grid>
  
    </Card>}
>

</CustomPopover>



    </Box>
  );
}




// function createData(id, name, calories, fat, carbs, protein,oil) {
//   return {
//     id,
//     name,
//     calories,
//     fat,
//     carbs,
//     protein,
//     oil
//   };
// }

// const rows = [
//   createData(1, 'Cupcake', 305, 3.7, 67, 4.3,10),
//   createData(2, 'Donut', 452, 25.0, 51, 4.9,10),
//   createData(3, 'Eclair', 262, 16.0, 24, 6.0,10),
//   createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0,10),
//   createData(5, 'Gingerbread', 356, 16.0, 49, 3.9,10),
//   createData(6, 'Honeycomb', 408, 3.2, 87, 6.5,10),
//   createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3,10),
//   createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0,10),
//   createData(9, 'KitKat', 518, 26.0, 65, 7.0,10),
//   createData(10, 'Lollipop', 392, 0.2, 98, 0.0,10),
//   createData(11, 'Marshmallow', 318, 0, 81, 2.0,10),
//   createData(12, 'Nougat', 360, 19.0, 9, 37.0,10),
//   createData(13, 'Oreo', 437, 18.0, 63, 4.0,10),
// ];






// export const headCells = [
 
//   {
//     id: 'id',
//     numeric: false,
//     disablePadding: true,
//     label: 'Id',
//   },
//   {
//     id: 'name',
//     numeric: false,
//     disablePadding: true,
//     label: 'Dessert (100g serving)',
//   },
//   {
//     id: 'calories',
//     numeric: true,
//     disablePadding: false,
//     label: 'Calories',
//   },
//   {
//     id: 'fat',
//     numeric: true,
//     disablePadding: false,
//     label: 'Fat (g)',
//   },
//   {
//     id: 'carbs',
//     numeric: true,
//     disablePadding: false,
//     label: 'Carbs (g)',
//   },
//   {
//     id: 'protein',
//     numeric: true,
//     disablePadding: false,
//     label: 'Protein (g)',
//   },
//   {
//     id: 'oil',
//     disablePadding: false,
//     label: 'Oil',
//   },
// ];




