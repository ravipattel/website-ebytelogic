'use client'
import React from 'react'
import Sidebar from '@/src/components/Sidebar'
import DebounceHero from '../DebounceHero'
import DebounceIntro from '../DebounceIntro'
import DebounceComparison from '../DebounceComparison'
import DebounceRcFilter from '../DebounceRcFilter'
import DebounceSrLatch from '../DebounceSrLatch'
import DebounceDedicated from '../DebounceDedicated'
import DebounceSoftware from '../DebounceSoftware'
import DebounceKey from '../DebounceKey'
import DebounceConclusion from '../DebounceConclusion'
import { globalCards } from '../../Global'
import BlogSuggestions from '@/src/components/Suggestion'

const ButtonDebounce = ({ slug }) => {
    const filter = globalCards.find((item) => {
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
                <DebounceHero data={filter} />
                <DebounceIntro data={filter} />
                <DebounceComparison data={filter} />
                <DebounceRcFilter data={filter} />
                <DebounceSrLatch data={filter} />
                <DebounceDedicated data={filter} />
                <DebounceSoftware data={filter} />
                <DebounceKey data={filter} />
                <DebounceConclusion data={filter} />
                <BlogSuggestions currentSlug={slug} />
            </div>
        </div>
    )
}

export default ButtonDebounce

export const runtime = 'edge';