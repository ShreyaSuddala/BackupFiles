
import { Link, Route } from 'react-router-dom';
import './App.css';
import AppRoutes from './AppRoutes';
import RoleRoute from './components/RoleRoute';

function App() {  
  const styles={
    color:'black',
    
  }
    
  return (
    <div className="App">

{/* <Route path='/abc' element={<RoleRoute role={["user"]}/>}> 
<Route></Route>
</Route> */}


      <div style={{display:'flex' , gap:12 , padding:10, backgroundColor:'peachpuff'}} >
        <Link to={"/"} style={styles} >Home</Link>
        <Link to={"/user"} style={styles} >User</Link>
        <Link to={"/manager"} style={styles} >Manger</Link>
        <Link to={"/admin"} style={styles} >Admin</Link>
      </div>
      <AppRoutes/>
    </div>
  );
}

export default App;
