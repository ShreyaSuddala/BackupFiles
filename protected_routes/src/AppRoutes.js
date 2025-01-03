import React from 'react'
import Home from './components/Home';
import User from './components/User';
import Admin from './components/Admin';
import UserElement from './components/UserElement';
import AdminElement from './components/AdminElement';
import { Route,Routes } from 'react-router-dom';
import MangerElement from './components/ManagerElement';
import Manager from './components/Manager';


function AppRoutes() {
    const USER_TYPES={
    
        NORMAL_USER:'User',
        MANAGER_USER:'Manager',
        ADMIN_USER:'Admin'   
       }
       const CURRENT_USER_TYPE=USER_TYPES.MANAGER_USER
  return (
    <div>
      
       <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route path='/user' element={<UserElement usertypes={USER_TYPES} currentUserType={CURRENT_USER_TYPE} > <User/> </UserElement> } />
          <Route path='/manager'element={<MangerElement  usertypes={USER_TYPES} currentUserType={CURRENT_USER_TYPE} ><Manager/></MangerElement>} />
          <Route path='/admin' element={ <AdminElement  usertypes={USER_TYPES} currentUserType={CURRENT_USER_TYPE} > <Admin/></AdminElement> } />
          <Route path='*' element={<div><h1> Oops !! </h1><h3>Page Not Found</h3></div>} />
      </Routes>
      <br></br>
          <div style={{textAlign:'left',fontFamily:'initial' ,color:'green' }}>
            "You are logged in as :  {CURRENT_USER_TYPE}"
          </div>
    </div>
  )
}

export default AppRoutes




