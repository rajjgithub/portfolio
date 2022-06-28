import React from 'react';
import './Footer.css';
import {BsFacebook} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href='' className='footer__logo'>VICTOR</a>

      <ul className='parmalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://facebook.com/'><BsFacebook/></a>
        <a href='https://instagram.com/'><RiInstagramFill/></a>
        <a href='https://twitter.com/'><ImTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>©copy;vickrajj11@gmail.com.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer