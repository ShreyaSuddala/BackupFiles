import React, { useState } from 'react'

function Sample(props) {
    const [count ,setCount]=useState(0)
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count + 1)}></button>
    </div>
  )
}

export default Sample
