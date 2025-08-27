import React from 'react'

import Sidebar from '@/src/components/Sidebar'
import QaHero from '../QaHero'
import QaIntro from '../QaIntro'
import QaHardware from '../QaHardware'
import QaLowLevel from '../QaLowLevel'
import QaRisk from '../QaRisk'
import QaTimings from '../QaTimings'
import QaDebugging from '../QaDebugging'
import QaConclusions from '../QaConclusions'
import { globalCards } from '../../Global'
import BlogSuggestions from '@/src/components/Suggestion'

const Qa = ({ slug }) => {
    const filter = globalCards.find((item, idx) => {
        if (slug === item.slug) {
            return item;
        }
    })
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[70px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6'>
                <QaHero data={filter} />
                <QaIntro data={filter} />
                <QaHardware data={filter} />
                <QaLowLevel data={filter} />
                <QaRisk data={filter} />
                <QaTimings data={filter} />
                <QaDebugging data={filter} />
                <QaConclusions data={filter} />
                <BlogSuggestions currentSlug={slug} />
            </div>
        </div>
    )
}

export default Qa

export const runtime = 'edge';