import React from 'react'

import HeroSection from './HeroSection'
import Services from './Services'
import Global from './Global'
import Testimonial from './Testimonial'
import Cta from './Cta'
import PlatformExpertise from './PlatformExpertise'
import WhyeByteLogic from './WhyeBytelogic'
import FaqHome from './FaqHome'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='overflow-hidden'>
        <Testimonial />
        <PlatformExpertise />
        <Services />
        <Global />
        <WhyeByteLogic/>
        <Cta />
        <FaqHome/>
      </div>
    </div>
  )
}

export default Home
