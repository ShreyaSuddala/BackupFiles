
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/registration' element={<RegistrationPage/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
