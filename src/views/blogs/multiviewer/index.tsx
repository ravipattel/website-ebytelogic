import React from 'react'

import Sidebar from '@/src/components/Sidebar'
import MultiViewerHero from './MultiViewerHero'
import MultiViewerIntro from './MultiViewerIntro'
import MultiviewerFilter from './MultiviewerFilter'
import MultiViewerGstreamer from './MultiViewerGstreamer'
import MultiViewerNdi from './MultiViewerNdi'
import MultiViewerFeature from './MultiViewerFeature'
import MultiViewerPerformance from './MultiViewerPerformance'
import MultiViewerConclusion from './MultiViewerConclusion'
import MultiViewerDecision from './MultiViewerDecision'

const MultiViewer = () => {
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6'>
                <MultiViewerHero />
                <MultiViewerIntro />
                <MultiviewerFilter />
                <MultiViewerGstreamer />
                <MultiViewerNdi />
                <MultiViewerFeature />
                <MultiViewerPerformance />
                <MultiViewerDecision />
                <MultiViewerConclusion />
            </div>
        </div>
    )
}

export default MultiViewer
