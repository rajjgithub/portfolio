import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithubSquare} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
import {FaWhatsappSquare} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaJira} from 'react-icons/fa';
const HeaderSocials = () => {
  return (
    <div className="Header__Socials">
        <a href='https://www.linkedin.com' target='_blank'><BsLinkedin/></a>
        <a href='https://www.github.com' target='_blank'><FaGithubSquare/></a>
        <a href='https://www.dribble.com' target='_blank'><FiDribbble/></a>
        <a href='https://web.whatsapp.com' target='_blank'><FaWhatsappSquare/></a>
        <a href='https://www.facebook.com/' target='_blank'><FaFacebook/></a>
        <a href='https://ajiradigital.go.ke' target='_blank'><FaJira/></a>
    </div>
  )
}

export default HeaderSocials