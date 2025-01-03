import React from 'react'
import '../../assets/styles/Contact.css'
import Contactinfocard from './Contactinfocard'
import emailicon from '../../assets/images/email-icon.png'
import githubicon from '../../assets/images/github-icon.png'
import ContactForm from './ContactForm'
const Contact = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex:1}}>
                <Contactinfocard iconUrl={emailicon} text="shreyasuddala27@gmail.com"/>
                <Contactinfocard iconUrl={githubicon} text="https://github.com/ShreyaSuddala"/>
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default Contact
