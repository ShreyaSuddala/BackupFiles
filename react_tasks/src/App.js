import logo from './logo.svg';
import './App.css';
import BasicSelect1 from './warningmail';
import SkillSet from './Skill';
import ReviewRating from './reviewrating';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Loginpage';
import ProtectedRoutes from './routProtecton/routes';
import DataGridDemo from './grid';
import DataGridDemo1 from './grid1';
import DataGridDemo2 from './grid2';
import DataGridDemo27 from './sample';
import DataGridDemo11 from './hh';
import Interface from './portalnterface';
import PortalInterface from './portalnterface';


function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes> */
      <Route  path='/' element={<Login/>}></Route> 
      <Route path='/pinterface' element={<PortalInterface/>}></Route>
      {/* /* <Route   path='/skill' element={ <SkillSet/>}></Route> */}
 {/* <Route path='/datagrid' element={<DataGridDemo/>}></Route> 
<Route path='/dgrid' element={<DataGridDemo1/>}></Route>
<Route path='/dgrid1' element={<DataGridDemo2/>}></Route>  */}
{/* <Route path="/eidiko" Component={<ProtectedRoutes/>}>

</Route>  */}
{/* <Route path='/smgrid' element={<DataGridDemo11/>}></Route> */}
{/* <Route path='/samplegrid' element={<DataGridDemo27/>}></Route> */}
     
    </Routes>
    </BrowserRouter>  
   
    
   {/* <BasicSelect1/> */}
  
    {/* <ReviewRating/> */}

    

    
   </div>
  );
}

export default App;
