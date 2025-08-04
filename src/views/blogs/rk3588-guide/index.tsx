import Sidebar from '@/src/components/Sidebar'
import React from 'react'
import DevGuideHero from './DevGuideHero'
import DevGuideIntro from './DevGuideIntro'
import DevGuideArchitecture from './DevGuideArchitecture'
import DevGuideIsp from './DevGuideIsp'
import DevGuideAi from './DevGuideAi'
import DevGuideDevelopment from './DevGuideDevelopment'
import DevGuideTroubleShooting from './DevGuideTroubleShooting'
import DevGuideCamera from './DevGuideCamera'
import DevGuideMpp from './DevGuideMpp'

const DevelopmentGuide = () => {
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6 w-full'>
                <DevGuideHero />
                <DevGuideIntro />
                <DevGuideArchitecture />
                <DevGuideCamera />
                <DevGuideIsp />
                <DevGuideMpp />
                <DevGuideAi />
                <DevGuideDevelopment />
                <DevGuideTroubleShooting />
            </div>
        </div>
    )
}

export default DevelopmentGuide
