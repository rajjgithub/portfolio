import React from 'react'
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md'
import {SiMessenger} from 'react-icons/si'
import {RiWhatsappFill} from 'react-icons/ri'
import{ useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_47kqmd1', 'template_fijj2sk', form.current, '6vI67wo7PuLUOPN2Z')
     
    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href='Mailto:vickrajj11@gmail.com' target='blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <SiMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <a href='https://facebook.com/vickrajj ke' target='blank'>inbox me</a>
          </article>

          <article className="contact__option">
            <RiWhatsappFill className='contact__option-icon'/>
            <h4>Whatsap</h4>
            <a href='https://web.whatsapp.com/send?phone=+254717599846' target='blank'>Let's Chat</a>
          </article>
        </div>
        {/*--End of contact--*/}
         <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
         </form>
      </div>
    </section>
  )
}

export default Contact