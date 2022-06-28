import React from 'react';
import './Experience.css';
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiPhp} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiPython} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <SiHtml5 className='experience__details-icon'/>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <SiCss3 className='experience__details-icon'/>
               <div>
               <h4>CSS</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <SiPhp className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
               <FaBootstrap className='experience__details-icon'/>
               <div>
               <h4>BOOTSTRAP</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <SiTailwindcss className='experience__details-icon'/>
               <div>
               <h4>TAILWIND</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <FaReact className='experience__details-icon'/>
               <div>
               <h4>REACT</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>
          </div>
        </div>
{ /*------END OF FRONTED--------*/}

        <div className="experience__backend"> 
        <h3>Backend Developer</h3>
          <div className="experience__content">
            <article className='experience__details'>
               <SiJavascript className='experience__details-icon'/>
              <div>
              <h4>NODE.JS</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
               <SiMongodb className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
               <SiPhp className='experience__details-icon'/>
               <div>
               <h4>PHP</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <SiMysql className='experience__details-icon'/>
               <div>
               <h4>MYSQL</h4>
               <small className='text-light'>Experienced</small>
               </div>
            </article>

            <article className='experience__details'>
               <SiPython className='experience__details-icon'/>
               <div>
               <h4>PYTHORN</h4>
               <small className='text-light'>intermediate</small>
               </div>
            </article>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Experience