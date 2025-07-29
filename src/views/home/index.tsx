import React from 'react'

import HeroSection from './HeroSection'
import Solutions from './Solutions'
import Services from './Services'
import Technology from './Technology'
import Projects from './Projects'
import RenderIt from './RenderIt'
import RequestForm from './RequestForm'
import Goals from './Goals'
import Development from './Development'
import Global from './Global'
import Testimonial from './Testimonial'
import Cta from './Cta'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <div className='overflow-hidden'>
        <Solutions />
        <Technology />
        <Services />
        <Projects />
        <RenderIt />
        <Goals />
        <RequestForm />
        <Development />
        <Global />
        <Cta />
        <Testimonial />
      </div>
    </div>
  )
}

export default Home
