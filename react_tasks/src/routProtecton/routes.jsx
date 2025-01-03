import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';


function isLoggedin(){
    let data=false
    if(localStorage.getItem("token")){
     data=true
    }

    return data;
}


export default function ProtectedRoutes() {
  return (
    isLoggedin()?<Outlet></Outlet>:<NavLink to="/login"> </NavLink>
  )
}
