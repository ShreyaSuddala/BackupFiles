import { Card, Grid } from '@mui/material'
import React from 'react'
import CustomTextField from '../../components/CustomTextField/CustomTextField'

const CustomerDetails = () => {
    const fields =[
        {
        id:"1",
        label:"CIF Number",
        placeholder:"123456789"
    },
    {
        id:"2",
        label:"Customer Name",
        placeholder:"Cname"
    },
    {
        id:"3",
        label:"Emirates Id",
        placeholder:"emirates"
    },
    {
        id:"4",
        label:"Passport Number",
        placeholder:"Pnumber"
    },
    {
        id:"5",
        label:"License Number",
        placeholder:"Lnumber"
    },
    {
        id:"6",
        label:"Mobile Number",
        placeholder:"Number"
    },
    {
        id:"7",
        label:"Date of Birth",
        placeholder:"27/12/2002"
    },
    {
        id:"8",
        label:"Nationality",
        placeholder:"Nation"
    }
]
  return (
    <div>
      <Card  style={{ border: "1px solid #e0e0e0", marginTop: "20px", marginLeft: "20px",
       marginRight:'20px', padding: "10px" }}>
        <Grid container spacing={4}  justify="center" alignItems="center"  >
                {
                    fields.map((f,i)=>(
                        <Grid  item key={i} xs={12} sm={6} md={4} lg={3} xl={3} >
                            <CustomTextField id={f.id} label={f.label} placeholder={f.placeholder} value={f.value} />
                            </Grid>
                    ))
                }
        </Grid>
      </Card>
    </div>
  )
}

export default CustomerDetails
