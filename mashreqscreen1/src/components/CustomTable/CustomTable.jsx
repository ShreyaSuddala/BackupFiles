import React from 'react'

import { Table,  TableCell, TableHead, TableRow } from '@mui/material'
const CustomTable = ({tableColumn,marginLeft,marginRight}) => {
    const tableStyles={
        border:'1px solid #bdbdbd',
        textAlign:"left",
        backgroundColor:'#eeeeee', color:'#0d47a1',
        padding:"0px",fontSize:'10px',fontFamily:'sans-serif',
    
    }

   
  return (
    <div>
   
      <Table style={{marginRight,marginLeft,overflowX:"scroll"}} >
        <TableHead style={{border:'1px solid #bdbdbd' }}>
            <TableRow >
               {
                tableColumn.map((column)=>(
                 <TableCell  style={tableStyles} 
                 >{column}</TableCell>
                ))
               }
            </TableRow>
        </TableHead>
      </Table>



</div>
  )
}
     
export default CustomTable


