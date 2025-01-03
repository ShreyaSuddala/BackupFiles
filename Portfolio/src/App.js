import React , {useEffect}from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import Profile from './components/Profile';
import SkillSection from './components/Skill/SkillSection';
import Workexperience from './components/workexperience/Workexperience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(()=>{
       document.title ="Portfolio"
     },[])

  return (
    <>
      <Navbar  />
      <div className='container' >
        <div id="profile"><Profile /></div>
        <div id="skills"><SkillSection /></div>
        <div id="workexperience"><Workexperience /></div>
        <div id="contact"><Contact /></div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
