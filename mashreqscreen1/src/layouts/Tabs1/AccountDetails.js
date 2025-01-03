import React from 'react'
import Customtable1 from '../../components/CustomTable/Customtable1'
import { Card } from '@mui/material'
import '../../assets/styles/OverviewTabs.css'
const AccountDetails = () => {
    const columns=[
        "ACCOUNT NUMBER","ACCOUNT TYPE","CUSTOMER NAME","ACCOUNT CURRENCY","AVAILABLE BALANCE","ACCOUNT SHORT NAME",
        "COURT ORDER ID","STATUS"
    ]
    const rows=[
          {
           "ACCOUNT NUMBER":"364593034289",
           "ACCOUNT TYPE":"Corporate",
           "CUSTOMER NAME":"Imrain Shaik",
           "ACCOUNT CURRENCY":"USD",
           "AVAILABLE BALANCE":"5000",
           "ACCOUNT SHORT NAME":"PPanda",
           "COURT ORDER ID":"Qcc-4546-9807",
           "CURRENT BALANCE":"3000",
           "STATUS":"Active"

          },
          {
            "ACCOUNT NUMBER":"364593034289",
            "ACCOUNT TYPE":"Individual",
            "CUSTOMER NAME":"Pawan khari",
            "ACCOUNT CURRENCY":"USD",
            "AVAILABLE BALANCE":"5000",
            "ACCOUNT SHORT NAME":"PPanda",
            "COURT ORDER ID":"Qcc-4546-9807",
            "CURRENT BALANCE":"3000",
            "STATUS":"Active"
 
           },
           {
            "ACCOUNT NUMBER":"364593034289",
            "ACCOUNT TYPE":"Individual",
            "CUSTOMER NAME":"Pawan khari",
            "ACCOUNT CURRENCY":"USD",
            "AVAILABLE BALANCE":"5000",
            "ACCOUNT SHORT NAME":"PPanda",
            "COURT ORDER ID":"Qcc-4546-9807",
            "CURRENT BALANCE":"3000",
            "STATUS":"Active"
 
           },
           {
            "ACCOUNT NUMBER":"364593034289",
            "ACCOUNT TYPE":"Individual",
            "CUSTOMER NAME":"Pawan khari",
            "ACCOUNT CURRENCY":"USD",
            "AVAILABLE BALANCE":"5000",
            "ACCOUNT SHORT NAME":"PPanda",
            "COURT ORDER ID":"Qcc-4546-9807",
            "CURRENT BALANCE":"3000",
            "STATUS":"Active"
 
           },
           {
            "ACCOUNT NUMBER":"364593034289",
            "ACCOUNT TYPE":"Individual",
            "CUSTOMER NAME":"Pawan khari",
            "ACCOUNT CURRENCY":"USD",
            "AVAILABLE BALANCE":"5000",
            "ACCOUNT SHORT NAME":"PPanda",
            "COURT ORDER ID":"Qcc-4546-9807",
            "CURRENT BALANCE":"3000",
            "STATUS":"Active"
 
           },
           {
            "ACCOUNT NUMBER":"364593034289",
            "ACCOUNT TYPE":"Individual",
            "CUSTOMER NAME":"Pawan khari",
            "ACCOUNT CURRENCY":"USD",
            "AVAILABLE BALANCE":"5000",
            "ACCOUNT SHORT NAME":"PPanda",
            "COURT ORDER ID":"Qcc-4546-9807",
            "CURRENT BALANCE":"3000",
            "STATUS":"Active"
 
           },
           {
            "ACCOUNT NUMBER":"364593034289",
            "ACCOUNT TYPE":"Individual",
            "CUSTOMER NAME":"Pawan khari",
            "ACCOUNT CURRENCY":"USD",
            "AVAILABLE BALANCE":"5000",
            "ACCOUNT SHORT NAME":"PPanda",
            "COURT ORDER ID":"Qcc-4546-9807",
            "CURRENT BALANCE":"3000",
            "STATUS":"Active"
 
           },
           {
            "ACCOUNT NUMBER":"364593034289",
            "ACCOUNT TYPE":"Individual",
            "CUSTOMER NAME":"Prasanta Mashuki",
            "ACCOUNT CURRENCY":"INR",
            "AVAILABLE BALANCE":"5000",
            "ACCOUNT SHORT NAME":"PPanda",
            "COURT ORDER ID":"Qcc-4546-9807",
            "CURRENT BALANCE":"3000",
            "STATUS":"Active"
 
           },
         
]
  return (
    <div   >
        <Card style={{marginRight:'20px',marginLeft:"20px"}} >
          <div  className='customtable'>

      <Customtable1  cellitem={columns} cellitem2={rows} />
          </div>
        </Card>
    </div>
  )
}

export default AccountDetails
