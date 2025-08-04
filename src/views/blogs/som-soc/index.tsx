import React from 'react'
import SomSocHero from './SomSocHero'
import SomSocIntro from './SomSocIntro'
import SomSocDefine from './SomSocDefine'
import SomSocKey from './SomSocKey'
import SomSocProsCons from './SomSocProsCons'
import SomSocAnalysis from './SomSocAnalysis'
import SomSocUseCase from './SomSocUseCase'
import SomSocExamples from './SomSocExamples'
import SomSocFramework from './SomSocFramework'
import SomSocConclusion from './SomSocConclusion'
import Sidebar from '@/src/components/Sidebar'

const SomSoc = () => {
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6'>
                <SomSocHero />
                <SomSocIntro />
                <SomSocDefine />
                <SomSocKey />
                <SomSocProsCons />
                <SomSocAnalysis />
                <SomSocUseCase />
                <SomSocExamples />
                <SomSocFramework />
                <SomSocConclusion />
            </div>
        </div>
    )
}

export default SomSoc
