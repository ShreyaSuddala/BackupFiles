import React,{useState} from 'react';
import '../assets/styles/Navbar.css';
import Mobilenav from './Mobilenav';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
       setOpenMenu(!openMenu);
      };

  return (
    <>
    <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='navbar-container'>
      <h4 className='nav-h4'>Development Stretch</h4>
      <ul className='navbar-ul'>
        <li>
          <a href='#profile' className='menu-item' onClick={() => scrollToSection('profile')}>Home</a>
        </li>
        <li>
          <a href='#skills' className='menu-item' onClick={() => scrollToSection('skills')}>Skills</a>
        </li>
        <li>
          <a href='#workexperience' className='menu-item' onClick={() => scrollToSection('workexperience')}>Work Experience</a>
        </li>
        <li>
          <a href='#contact' className='menu-item' onClick={() => scrollToSection('contact')}>Contact Me</a>
        </li>
        <li>
          <button className='nav-btn'>Hire Me</button>
        </li>
      </ul>
      <button className="menu-btn" onClick={toggleMenu}>
          <span className="material-icons-outlined" style={{ fontSize: "1.8rem" }}>
          {openMenu ? "close" : "menu"}
         </span>
      </button>
    </nav>
    </>
  );
};

export default Navbar;
