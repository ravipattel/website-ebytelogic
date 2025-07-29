import React from 'react'
import CaseStudySidebar from '../../../components/CaseStudySidebar'
import NextologiesHero from './NextologiesHero'
import NextologiesExecutive from './NextologiesExecutive'
import NextologiesIntro from './NextologiesIntro'
import NextologiesEncoder from './NextologiesEncoder'
import NextologiesDecoder from './NextologiesDecoder'
import NextologiesTechnical from './NextologiesTechnical'
import NextologiesConclusion from './NextologiesConclusion'

const Nextologies = () => {
    return (
        <div className='flex'>
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <CaseStudySidebar />
            </div>
            <div className='overflow-y-auto'>
                <NextologiesHero />
                <NextologiesExecutive />
                <NextologiesIntro />
                <NextologiesEncoder />
                <NextologiesDecoder />
                <NextologiesTechnical />
                <NextologiesConclusion />
            </div>
        </div>
    )
}

export default Nextologies


