import React from 'react'
import { Outlet } from 'react-router-dom'


function roleCheck(role){
    let backend=["user","admin"]
let data=false
if(backend?.includes(role)){
data=true
}
return data
}


export default function RoleRoute({role}) {


  return roleCheck(role)?<Outlet></Outlet>:<h1>un authorised</h1>
  
}
