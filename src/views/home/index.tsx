import React from 'react'

import HeroSection from './HeroSection'
import Services from './Services'
import Global from './Global'
import Testimonial from './Testimonial'
import Cta from './Cta'
import PlatformExpertise from './PlatformExpertise'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='overflow-hidden'>
        <Testimonial />
        <PlatformExpertise />
        <Services />
        <Global />
        <Cta />
      </div>
    </div>
  )
}

export default Home
