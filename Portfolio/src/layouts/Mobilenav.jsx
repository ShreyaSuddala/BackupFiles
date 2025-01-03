import React from 'react'
import '../assets/styles/MobileNav.css'
const Mobilenav = ({isOpen,toggleMenu}) => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
   
  return (
    <>
    <div className={`mobile-menu ${isOpen?"active":""}`}  
    onClick={toggleMenu}
    >
        <div className='mobile-menu-container' >
        <h4 className='h41'>Development Stretch</h4>
        <ul className='mobile-ul' >
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
        </div>

    </div>
    </>

  )
}

export default Mobilenav
