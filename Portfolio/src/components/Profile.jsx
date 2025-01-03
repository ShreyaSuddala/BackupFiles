import React from 'react'
import '../assets/styles/Profile.css'
import reacticon from '../assets/images/icons8-react-a-javascript-library-for-building-user-interfaces-24.png'
import htmlicon from '../assets/images/icons8-html-48.png'
import jsicon from '../assets/images/icons8-javascript-48.png'
import cssicon from '../assets/images/icons8-css-48.png'
import profimg from '../assets/images/Dhoni.jpg'

const Profile = () => {
  return (
    <section className='profile-container' >
      <div className='profile-content'>
        <h2>Establishing digital landscapes that evoke fascination and motivation</h2>
        <p>Passionate Frontend Developer | Converting ideas into fluid and visually impressive web solutions</p>
      </div>
      <div className='profile-img' >
        <div>
          <div className='tech-icon' >
            <img src={reacticon} alt='' ></img>
          </div>
          <img src={profimg} alt=''></img>
        </div>
        <div>
          <div className='tech-icon'>
            <img  src={htmlicon} alt=''></img>
          </div>
          <div className='tech-icon'>
            <img  src={cssicon} alt=''></img>
          </div>
          <div className='tech-icon'>
            <img  src={jsicon} alt=''></img>
          </div>
        </div>
      </div>
      

    </section>
   
  )
}

export default Profile
