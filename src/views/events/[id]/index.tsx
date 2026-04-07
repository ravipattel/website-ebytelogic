import React from 'react'
import ExhibitionBanner from './ExhibitionBanner'
import ExhibitionIntro from './ExhibitionIntro'
import ExhibitionDemoVsProduction from './ExhibitionDemoVsProduction'
import ExhibitionVideo from './ExhibitionVideo'
import WhyChooseeByteLogic from './ExhibitionWhyChoose'
import ExhibitionOffer from './ExhibitionOffer'
import ExecutionModeCTA from './ExhibitionCta'
import IsThisForYouVisible from './ExhibitionForYou'

const Exhibition = ({ data }: { data?: any }) => {
  return (
    <>
        <ExhibitionBanner data={data?.banner} />
        <ExhibitionIntro data={data?.intro} />
        <ExhibitionDemoVsProduction data={data?.demoVsProduction} />
        <ExhibitionVideo data={data?.video} />
        <WhyChooseeByteLogic data={data?.whyChoose} />
        <ExhibitionOffer data={data?.offer} />
        <IsThisForYouVisible data={data?.forYou} />
        <ExecutionModeCTA data={data?.cta} />
    </>
  )
}

export default Exhibition
