import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count , setcount] = useState(0);
    const [text , setText] =useState('');

    useEffect(()=>{
        console.log('updating Doc')
        document.title =`you clicked ${count} times`
      
    },[count]) 

  return (
    <div>
      <input type='text' value={text} onChange={ e => setText(e.target.value)} />
      <button onClick={()=> setcount(count + 1)}>{count}</button>
    </div>
  )
}

export default UseEffect
