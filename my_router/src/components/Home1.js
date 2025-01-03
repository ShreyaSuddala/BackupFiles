import React from 'react'
import { useNavigate } from 'react-router-dom'


function Home1() {
    const Navigate=useNavigate()
  return (
    <button onClick={()=>Navigate('order-summary')}> Place Order</button>
  )
}

export default Home1
