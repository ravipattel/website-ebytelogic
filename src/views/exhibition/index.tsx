import React from 'react'
import ExhibitionBanner from './ExhibitionBanner'
import ExhibitionIntro from './ExhibitionIntro'
import ExhibitionDemoVsProduction from './ExhibitionDemoVsProduction'
import ExhibitionVideo from './ExhibitionVideo'
import WhyChooseeByteLogic from './ExhibitionWhyChoose'
import ExhibitionOffer from './ExhibitionOffer'
import ExecutionModeCTA from './ExhibitionCta'
import IsThisForYouVisible from './ExhibitionForYou'

const Exhibition = () => {
  return (
    <>
        <ExhibitionBanner />
        <ExhibitionIntro />
        <ExhibitionDemoVsProduction />
        <ExhibitionVideo/>
        <WhyChooseeByteLogic/>
        <ExhibitionOffer/>
        <IsThisForYouVisible/>
        <ExecutionModeCTA/>
    </>
  )
}

export default Exhibition
