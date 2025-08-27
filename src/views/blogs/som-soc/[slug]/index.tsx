'use client'
import React from 'react'
import SomSocHero from '../SomSocHero'
import SomSocIntro from '../SomSocIntro'
import SomSocDefine from '../SomSocDefine'
import SomSocKey from '../SomSocKey'
import SomSocProsCons from '../SomSocProsCons'
import SomSocAnalysis from '../SomSocAnalysis'
import SomSocUseCase from '../SomSocUseCase'
import SomSocExamples from '../SomSocExamples'
import SomSocFramework from '../SomSocFramework'
import SomSocConclusion from '../SomSocConclusion'
import Sidebar from '@/src/components/Sidebar'
import { globalCards } from '../../Global'
import BlogSuggestions from '@/src/components/Suggestion'

const SomSoc = ({ slug }) => {
    const filter = globalCards.find((item, idx) => {
        if (slug === item.slug) {
            // console.log('hello',slug,item);
            return item;
        }
        // console.log(item.slug)
    })
    // console.log('===',filter)

    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[70px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6'>
                <SomSocHero data={filter} />
                <SomSocIntro data={filter} />
                <SomSocDefine data={filter} />
                <SomSocKey data={filter} />
                <SomSocProsCons data={filter} />
                <SomSocAnalysis data={filter} />
                <SomSocUseCase data={filter} />
                <SomSocExamples data={filter} />
                <SomSocFramework data={filter} />
                <SomSocConclusion data={filter} />
                <BlogSuggestions currentSlug={slug} />
            </div>
        </div>
    )
}

export default SomSoc

export const runtime = 'edge';