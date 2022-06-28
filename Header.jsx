import React from 'react';
import CTA from './CTA';
import './Header.css';
import HeaderSocials from './HeaderSocials';
import me from '../../Assets/me1111.png';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vick Rajj</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header