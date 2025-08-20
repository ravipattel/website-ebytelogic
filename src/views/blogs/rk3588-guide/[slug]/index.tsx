import Sidebar from '@/src/components/Sidebar'
import React from 'react'
import DevGuideHero from '../DevGuideHero'
import DevGuideIntro from '../DevGuideIntro'
import DevGuideArchitecture from '../DevGuideArchitecture'
import DevGuideIsp from '../DevGuideIsp'
import DevGuideAi from '../DevGuideAi'
import DevGuideDevelopment from '../DevGuideDevelopment'
import DevGuideTroubleShooting from '../DevGuideTroubleShooting'
import DevGuideCamera from '../DevGuideCamera'
import DevGuideMpp from '../DevGuideMpp'
import { globalCards } from '../../Global'

const DevelopmentGuide = ({ slug }) => {
    const filter = globalCards.find((item, idx) => {
        if (slug === item.slug) {
            return item;
        }
    })
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6 w-full'>
                <DevGuideHero data={filter}/>
                <DevGuideIntro data={filter}/>
                <DevGuideArchitecture data={filter} />
                <DevGuideCamera data={filter} />
                <DevGuideIsp data={filter}/>
                <DevGuideMpp data={filter}/>
                <DevGuideAi data={filter}/>
                <DevGuideDevelopment data={filter}/>
                <DevGuideTroubleShooting data={filter}/>
            </div>
        </div>
    )
}

export default DevelopmentGuide
