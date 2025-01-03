import React, { createContext,useContext } from 'react';


const MyContext = createContext();

function ParentComponent(){
  const sharedValue='helli'
  return(
    <div>
      <MyContext.Provider value={sharedValue}>
        <ChildComponent/>
      </MyContext.Provider>
    </div>
  )
}
export default ParentComponent;

function ChildComponent(){
  const tgy=useContext(MyContext)
  return(
    <div>
      {tgy}
    </div>
  )
}
  

