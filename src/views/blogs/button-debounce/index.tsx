import Sidebar from '@/src/components/Sidebar'
import React from 'react'
import DebounceHero from './DebounceHero'
import DebounceIntro from './DebounceIntro'
import DebounceComparison from './DebounceComparison'
import DebounceRcFilter from './DebounceRcFilter'
import DebounceSrLatch from './DebounceSrLatch'
import DebounceDedicated from './DebounceDedicated'
import DebounceSoftware from './DebounceSoftware'
import DebounceKey from './DebounceKey'
import DebounceConclusion from './DebounceConclusion'

const ButtonDebounce = () => {
    return (
        <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className='overflow-y-auto px-4 md:px-6'>
                <DebounceHero />
                <DebounceIntro />
                <DebounceComparison />
                <DebounceRcFilter />
                <DebounceSrLatch />
                <DebounceDedicated />
                <DebounceSoftware />
                <DebounceKey />
                <DebounceConclusion />
            </div>
        </div>
    )
}

export default ButtonDebounce
