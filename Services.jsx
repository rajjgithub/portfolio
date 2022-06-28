import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User flow charts,diagrams</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User stories</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design technology consulting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content strategy</p>
            </li>
          </ul>
        </article>
        {/*---END OF UI/UX---*/}

        <article className='service'>
          <div className="service__head">
            <h3>Web-Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ecommerce dev service</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customer Web dev for enterprise</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Custom web application</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Support and Maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Portfolio Showcase</p>
            </li>
          </ul>
        </article>
{/*---END OF WEB DEVELOPMENT---*/}

        <article className='service'>
          <div className="service__head">
            <h3>Content-Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Landing page optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Photography services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Graphic design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Forms development</p>
            </li>
          </ul>
        </article>   
      </div>
    </section>
  )
}

export default Services