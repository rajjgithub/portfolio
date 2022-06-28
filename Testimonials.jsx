import React from 'react';
import './Testimonials.css';
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"

      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
     

        <SwiperSlide className='testimonial'>
          <div className="client__avator">
            <img src={AVTR1} alt='avatar one'/>
          </div>
          <h5 className='client__name'><b>Ernest Achiever</b></h5>
            <small className='client__review'>
            I am really impressed by the quality of services I received from Victor. 
            You were right on schedule, charged reasonable prices, 
            were professional and courteous in dealings, and delivered items well before time.
             I have got a good e-commerce site for my products.
              My revenue has increased because of Victor and I will definitely use your services again.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avator">
            <img src={AVTR2} alt='Avatar one'/>
          </div>
          <h5 className='client__name'> <b>Michael Rajj</b></h5>
            <small className='client__review'>
            After evaluating a few outsourcers I decided to work with Victor,
             because of His professional approach and ability to make changes to what we wanted.
             In the beginning, we had to make adjustments to the task every week.
             Victor was very responsive to these changes. 
             I am very satisfied with our engagement and would consider
              working together on future projects too
             I appreciate his promptness, quality of work, IT experte and would recommend his services.
            </small>
        </SwiperSlide>
        
        <SwiperSlide className='testimonial'>
          <div className="client__avator">
            <img src={AVTR3} alt='Avatar one'/>
          </div>
          <h5 className='client__name'><b> Shadrack Leley (HEAD of ICT GVT PRESS Nairobi)</b></h5>
            <small className='client__review'>
            Great to work with Victor, he was consistent, timeliness of response to issues and problems. 
            Resolved a major problem within a short time span,
             which minimized downtime significantly.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avator">
            <img src={AVTR4} alt='Avatar one'/>
          </div>
          <h5 className='client__name'><b>iTechArt Group - Custom Software Development Company</b></h5>
            <small className='client__review'>
            It has been a pleasure working with you and your staff, 
            and I can only rave over the high standards that you have maintained relative to our hardware and software
            </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials