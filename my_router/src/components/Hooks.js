import React, { useState } from 'react'

function Hooks() {
    const Initialstate=0
    const[count ,setCount] = useState(Initialstate);
    const[msg , setMsg]=useState('helo');
    const[name,setName]=useState('');
    const Increment =()=>{

        setCount(count + 1)
    }
     
     const Decrement =()=>{
        setCount(count - 1)
     }
     const Reset =()=>{
        setCount(Initialstate)
     }
     const changeMsg=()=>{
        setMsg('Thankyou')
     }
     const changeName=(e)=>{
        setName(e.target.value)
     }
  return (
    <div>
        <h3>{msg}</h3>
        <button onClick={changeMsg}>Subscribe</button>
        <p>Count Value : {count}</p>
      <button onClick={Increment}>Click +</button>
      <button onClick={Decrement}>Click - </button>
      <button onClick={Reset}> Reset</button>
      <br></br>
      <br></br>
      <input type='text' value={name} onChange={changeName}/>
      <p>Entered Name : {name}</p>
    </div>
  )
}

export default Hooks
