import React, { useState } from 'react'

function Hookcount2() {
    const initialcount=0
    const[count , setcount]= useState(0);
    const Increment5 =() =>{
        for(let i=0 ;i < 5 ;i++){
            setcount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
        Count : {count}
     <button onClick={()=>setcount(initialcount)}>Reset</button> 
     <button onClick={()=>setcount(count + 1)}>Increment</button>
     <button onClick={()=>setcount(count - 1)}>Decrement</button>
     <button onClick={Increment5}>Increment5</button>
     
    </div>
  )
}

export default Hookcount2;


let a ='5';
let b ='6';
let c =(a+b);
console.log(c)
