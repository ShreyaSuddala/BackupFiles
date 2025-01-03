import { Box, Button, Container, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { alpha } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';



export default function EnhancedTableToolbar({numSelected,onFilterClick,pdfdownload,Exceldownload,TableName,selectedItemRequired}) {

    return (
    
      <Box
        sx={{
          pl: { sm: 0.5 },

          pr: { xs: 1, sm: 1 },
          ...(numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center"
        }}
      >
        { selectedItemRequired?numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) :null: (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="body1"
            id="tableTitle"
            component="div"
            color="primary"
          >
            {TableName}<span><Box sx={{width:"30px",height:"4px",backgroundColor:"red"}}></Box></span>
          </Typography>
        )}
  
        {selectedItemRequired?numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ):null : (
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button onClick={pdfdownload}>PDF</Button>
            <Button onClick={Exceldownload}>EXCEL</Button>
  
  <Tooltip title="Filter list">
            <IconButton onClick={onFilterClick}>
              <FilterListIcon  color="primary" />
            </IconButton>
          </Tooltip>
          </Box>
         
        )}
      </Box>
    );
  }
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
  };