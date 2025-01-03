import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Customtable1 = ({ cellitem, cellitem2 }) => {
  return (
    <div>
      <Table  style={{border:'2px solid #e0e0e0'}}>
        <TableHead  > 
          <TableRow>
            {cellitem.map((c, i) => (
              <TableCell 
              size='small'
              style={{border:'2px solid #e0e0e0',backgroundColor:'#f5f5f5',color:"#01579b"}}
             
              key={i}>{c}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {cellitem2.map((r, i) => (
            <TableRow key={i}>
              {cellitem.map((c1, i1) => (
                <TableCell
                size='small'
                style={{border:'2px solid #e0e0e0',textAlign:'center'}}
                 key={i1}>{r[c1]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default Customtable1
