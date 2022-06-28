import React from 'react'
import cv from '../../Assets/cv.pdf';
const CTA = () => {
  return (
   <div className="CTA">
       <a href={cv} download className='btn'>Download CV</a>
       <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
   </div>
  )
}

export default CTA