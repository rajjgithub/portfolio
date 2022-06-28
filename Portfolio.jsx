import React from 'react';
import './Portfolio.css';
import IMG1 from '../../Assets/portfolio1.jpg'
import IMG2 from '../../Assets/portfolio2.jpg'
import IMG3 from '../../Assets/portfolio3.jpg'
import IMG4 from '../../Assets/portfolio4.jpg'
import IMG5 from '../../Assets/portfolio5.png'
import IMG6 from '../../Assets/portfolio6.jpg'
{/*---generated data---*/}
 const data =[
  {
      id:1,
      image:IMG1,
      title:'Cryptocurrency dashboard',
      github:'https://github.com/rajjgithub',
      demo:'https://dribbble.com/signup/new'
  },
  {
    id:2,
    image:IMG2,
    title:'Charts template and infographics',
    github:'https://github.com/rajjgithub',
    demo:'https://dribbble.com/search/charts-template-and-infographics'
},
{
  id:3,
  image:IMG3,
  title:'Fig dashboard ui for data kit',
  github:'https://github.com/rajjgithub',
  demo:'https://dribbble.com/search/fig-dashboard-ui-for-data-kit'
}
,
{
  id:4,
  image:IMG4,
  title:'Maintaining task and tracking process',
  github:'https://github.com/rajjgithub',
  demo:'https://dribbble.com/search/maintaining-task-and-tracking-process'
}
,
{
  id:5,
  image:IMG5,
  title:'Charts template and infographics in figma',
  github:'https://github.com/rajjgithub',
  demo:'https://dribbble.com/search/charts-template-and-infographics-in-figma'
}
,
{
  id:6,
  image:IMG6,
  title:'Infographics in figma',
  github:'https://github.com/rajjgithub',
  demo:'https://dribbble.com/search/charts-template-and-infographics-in-figma'
}
 ]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
            <h3>{title}</h3>
           <div className="portfolio__item-cta">
           <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
           </div>
        </article>
            )
          })
        }


      </div>

    </section>
  )
}

export default Portfolio