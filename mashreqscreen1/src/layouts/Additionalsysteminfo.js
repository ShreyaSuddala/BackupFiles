import { Paper,Box } from '@mui/material'
import React from 'react'

const Additionalsysteminfo = () => {
  return (
    <div>
      <Paper style={{marginRight:"20px",marginLeft:"20px",height:'8vh',border:"1px solid #e0e0e0"}} >
        <h2 style={{
        margin:"0px",
        textAlign:'left'
        }} >Additional System Info</h2>
         <Box  sx={{width:'40px',borderBottom:"4px solid #ff6f00"}} ></Box>
      </Paper>
    </div>
  )
}

export default Additionalsysteminfo
