import React from 'react'
import '../../assets/styles/ContactForm.css'

const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className='name-container'>
                <input type='text' name='FirstName' placeholder='FirstName'></input>
                <input type='text' name='LastName' placeholder='LastName'></input>
            </div>
            <input type='text' name='email' placeholder='Email'></input>
            <textarea type='text' name='message' placeholder='Message' rows={3}></textarea>
            <button>SEND</button>
        </form>
      
    </div>
  )
}

export default ContactForm
