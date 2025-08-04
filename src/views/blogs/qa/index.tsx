import React from 'react'

import Sidebar from '@/src/components/Sidebar'
import QaHero from './QaHero'
import QaIntro from './QaIntro'
import QaHardware from './QaHardware'
import QaLowLevel from './QaLowLevel'
import QaRisk from './QaRisk'
import QaTimings from './QaTimings'
import QaDebugging from './QaDebugging'
import QaConclusions from './QaConclusions'

const Qa = () => {
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6'>
                <QaHero />
                <QaIntro />
                <QaHardware />
                <QaLowLevel />
                <QaRisk />
                <QaTimings />
                <QaDebugging />
                <QaConclusions />
            </div>
        </div>
    )
}

export default Qa
