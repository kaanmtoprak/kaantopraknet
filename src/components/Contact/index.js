import React from 'react'
import './contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
        <form className='contact__form'>
            <input placeholder='Name'/>
            <input placeholder='Subject'/>
            <textarea name="message" cols="30" rows="10" placeholder='message'></textarea>
            <button>Send</button>
        </form>

    </div>
  )
}

export default Contact