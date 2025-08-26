import React from 'react'

import Sidebar from '@/src/components/Sidebar'
import MultiViewerHero from '../MultiViewerHero'
import MultiViewerIntro from '../MultiViewerIntro'
import MultiviewerFilter from '../MultiviewerFilter'
import MultiViewerGstreamer from '../MultiViewerGstreamer'
import MultiViewerNdi from '../MultiViewerNdi'
import MultiViewerFeature from '../MultiViewerFeature'
import MultiViewerPerformance from '../MultiViewerPerformance'
import MultiViewerConclusion from '../MultiViewerConclusion'
import MultiViewerDecision from '../MultiViewerDecision'
import { globalCards } from '../../Global'

const MultiViewer = ({ slug }) => {
    const filter = globalCards.find((item) => {
        if (slug === item.slug) {
            return item;
        }
    })
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[92px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6'>
                <MultiViewerHero data={filter} />
                <MultiViewerIntro data={filter} />
                <MultiviewerFilter data={filter} />
                <MultiViewerGstreamer data={filter} />
                <MultiViewerNdi data={filter} />
                <MultiViewerFeature data={filter} />
                <MultiViewerPerformance data={filter} />
                <MultiViewerDecision data={filter} />
                <MultiViewerConclusion data={filter} />
            </div>
        </div>
    )
}

export default MultiViewer
