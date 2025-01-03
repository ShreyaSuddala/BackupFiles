import React, { useReducer } from 'react'

const initialState={
  balance : 0,
  fullname:'',
  mobile:''
}

const reducer =(state,action)=>{
  switch(action.type){
    case 'deposit':
      return{...state,balance:state.balance + action.payload};
    case 'withdraw':
      return{...state , balance: state.balance - action.payload};
    case 'nameUpdate':
      return{...state, fullname : action.payload}
    case 'mobileUpdate':
      return{...state , mobile : action.payload}
  }

}

function Store() {
  const [bank , dispatch] =useReducer(reducer , initialState);
  <p></p>
  return (
    <div>
      
    </div>
  )
}

export default Store
