import React from 'react'
import { useNavigate } from 'react-router-dom'

function Ordersummary() {
    const Navigate1=useNavigate()
  return (
    <div>
     <p>Order Confirmed</p>
    <button onClick={()=>Navigate1(-1)}>GoBack</button>
    </div>
  )

  }
  export default Ordersummary
